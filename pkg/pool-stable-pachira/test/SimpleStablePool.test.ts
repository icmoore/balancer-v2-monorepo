import { expect } from 'chai';
import { ethers } from 'hardhat';
import { BigNumber, Contract } from 'ethers';
import { random, range } from 'lodash';

import { deploy, deployedAt, getArtifact } from '@balancer-labs/v2-helpers/src/contract';
import { sharedBeforeEach } from '@balancer-labs/v2-common/sharedBeforeEach';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import { PoolSpecialization, SwapKind } from '@balancer-labs/balancer-js';

import {
  BigNumberish,
  bn,
  fp,
  pct,
  arrayAdd,
  arrayFpMul,
  bnSum,
  fpDiv,
  fpMul,
  FP_ONE,
  FP_ZERO,
  FP_100_PCT,
} from '@balancer-labs/v2-helpers/src/numbers';
import { MAX_UINT112, ZERO_ADDRESS } from '@balancer-labs/v2-helpers/src/constants';
import { RawStablePoolDeployment } from '@balancer-labs/v2-helpers/src/models/pools/stable/types';
import { currentTimestamp, advanceTime, MONTH, WEEK, DAY } from '@balancer-labs/v2-helpers/src/time';
import Token from '@balancer-labs/v2-helpers/src/models/tokens/Token';
import TokenList from '@balancer-labs/v2-helpers/src/models/tokens/TokenList';
import StablePool from '@balancer-labs/v2-helpers/src/models/pools/stable/StablePool';
import { calculateInvariant } from '@balancer-labs/v2-helpers/src/models/pools/stable/math';
import { actionId } from '@balancer-labs/v2-helpers/src/models/misc/actions';
import { ProtocolFee } from '@balancer-labs/v2-helpers/src/models/vault/types';
import * as expectEvent from '@balancer-labs/v2-helpers/src/test/expectEvent';

let allTokens: TokenList;
let lp: SignerWithAddress;
let owner: SignerWithAddress;
let deployer: SignerWithAddress;
let recipient: SignerWithAddress;
let vaultSigner: SignerWithAddress;
let admin: SignerWithAddress;
let authorizer: Contract;
let initialBalances: BigNumberish[];
const numTokens = 3;
let bptIndex: number;
let pool: StablePool;
let tokens: TokenList;


async function deployPool(
  params: RawStablePoolDeployment = {},
  rates: BigNumberish[] = [],
  durations: number[] = []
): Promise<void> {
  
  let deployTimestamp: BigNumber, initialBalances: BigNumberish[];

  const rateProviders: Contract[] = [];
  const tokenRateCacheDurations: number[] = [];
  const exemptFromYieldProtocolFeeFlags: boolean[] = [];

  const ZEROS = Array(numTokens + 1).fill(bn(0));  
  tokens = params.tokens || (await TokenList.create(numTokens, { sorted: true }));

  for (let i = 0; i < numTokens; i++) {
    rateProviders[i] = await deploy('v2-pool-utils/MockRateProvider');
    await rateProviders[i].mockRate(rates[i] || FP_ONE);
    tokenRateCacheDurations[i] = MONTH + i;
    exemptFromYieldProtocolFeeFlags[i] = i % 2 == 0; // set true for even tokens
  }

  pool = await StablePool.create({
    tokens,
    rateProviders,
    tokenRateCacheDurations: durations.length > 0 ? durations : tokenRateCacheDurations,
    exemptFromYieldProtocolFeeFlags,
    owner,
    admin,
    ...params,
  });

  bptIndex = await pool.getBptIndex();
  deployTimestamp = await currentTimestamp();
  initialBalances = Array.from({ length: numTokens + 1 }).map((_, i) => (i == bptIndex ? 0 : fp(1 - i / 10)));
}

sharedBeforeEach('setup signers', async () => {
  [, lp, owner, recipient, admin] = await ethers.getSigners();
});

describe("PachiraWeightedPool", () => {

  context('Engage factory contract PachiraWeightedPool.sol', () => {
    const swapFeePercentage = fp(0.1);
    const tokenRates = Array.from({ length: numTokens }, (_, i) => fp(1 + (i + 1) / 10));
    
    it('swap given in', async () => {
      expect(true);
      await deployPool();
      bptIndex = await pool.getBptIndex();
      initialBalances = Array.from({ length: numTokens + 1 }).map((_, i) => (i == bptIndex ? 0 : fp(1 - i / 10)));
      //console.log('initialBalances ', initialBalances)      
      await pool.init({ initialBalances, recipient: lp });
    });   
 
  }); 
});   

describe('ComposableStablePool', () => {
  let lp: SignerWithAddress,
    owner: SignerWithAddress,
    recipient: SignerWithAddress,
    admin: SignerWithAddress,
    other: SignerWithAddress;

  const AMPLIFICATION_PARAMETER = bn(200);
  const PREMINTED_BPT = MAX_UINT112.div(2);
  const AMP_PRECISION = 1e3;

  sharedBeforeEach('setup signers', async () => {
    [, lp, owner, recipient, admin, other] = await ethers.getSigners();
  });


  context('for a 3 token pool', () => {
    itBehavesAsComposableStablePool(3);
  });


  function itBehavesAsComposableStablePool(numberOfTokens: number): void {

    let deployTimestamp: BigNumber, bptIndex: number, initialBalances: BigNumberish[];

    const rateProviders: Contract[] = [];
    const tokenRateCacheDurations: number[] = [];
    const exemptFromYieldProtocolFeeFlags: boolean[] = [];

    const ZEROS = Array(numberOfTokens + 1).fill(bn(0));

    async function deployPool(
      params: RawStablePoolDeployment = {},
      rates: BigNumberish[] = [],
      durations: number[] = []
    ): Promise<void> {
      tokens = params.tokens || (await TokenList.create(numberOfTokens, { sorted: true }));

      for (let i = 0; i < numberOfTokens; i++) {
        rateProviders[i] = await deploy('v2-pool-utils/MockRateProvider');
        await rateProviders[i].mockRate(rates[i] || FP_ONE);
        tokenRateCacheDurations[i] = MONTH + i;
        exemptFromYieldProtocolFeeFlags[i] = i % 2 == 0; // set true for even tokens
      }

      pool = await StablePool.create({
        tokens,
        rateProviders,
        tokenRateCacheDurations: durations.length > 0 ? durations : tokenRateCacheDurations,
        exemptFromYieldProtocolFeeFlags,
        owner,
        admin,
        ...params,
      });

      bptIndex = await pool.getBptIndex();
      deployTimestamp = await currentTimestamp();
      initialBalances = Array.from({ length: numberOfTokens + 1 }).map((_, i) => (i == bptIndex ? 0 : fp(1 - i / 10)));
    }

    describe('quicktest', () => {
      it('init', async () => {
        expect(true);
        await deployPool();
        //console.log('initialBalances ', initialBalances)
        await pool.init({ initialBalances, recipient: lp });
      });   
      
    });

  }
});
