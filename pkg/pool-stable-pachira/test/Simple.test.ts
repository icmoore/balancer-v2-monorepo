// scripts/deployAndInteract.ts
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { BigNumber, Contract } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { defaultAbiCoder } from '@ethersproject/abi';
import { impersonateAccount, setBalance } from '@nomicfoundation/hardhat-network-helpers';


import { Vault } from '../typechain/contracts/Vault';    
import { MockAuthorizerAdaptorEntrypoint } from '../typechain/contracts/test/MockAuthorizerAdaptorEntrypoint';       
import { MockAuthorizerAdaptorEntrypoint__factory } from '../typechain/factories/contracts/test/MockAuthorizerAdaptorEntrypoint__factory';     
import { TimelockAuthorizer__factory } from '../typechain/factories/contracts/authorizer/TimelockAuthorizer__factory';     
import { Vault__factory } from '../typechain/factories/contracts/Vault__factory';       

import { RawStablePoolDeployment } from '@balancer-labs/v2-helpers/src/models/pools/stable/types';
import { toNormalizedWeights } from '@balancer-labs/balancer-js';
import { MAX_UINT256, ZERO_ADDRESS } from '@balancer-labs/v2-helpers/src/constants';
import { BigNumberish, fp, fpMul, bn, FP_ONE} from '@balancer-labs/v2-helpers/src/numbers';
import { currentTimestamp, MONTH } from '@balancer-labs/v2-helpers/src/time';
import TokenList from '@balancer-labs/v2-helpers/src/models/tokens/TokenList';
import {SingleSwap, SwapKind, FundManagement, JoinPoolRequest, WeightedPoolEncoder} from '@balancer-labs/balancer-js';
import { deploy, getArtifact} from '@balancer-labs/v2-helpers/src/contract';
import StablePool from '@balancer-labs/v2-helpers/src/models/pools/stable/StablePool';


const NAME = 'Pachira Balancer Pool Token';
const SYMBOL = 'BPT';
const POOL_SWAP_FEE_PERCENTAGE = fp(0.01);

const numTokens = 3;
const WEIGHTS = toNormalizedWeights([fp(30), fp(70), fp(5), fp(5)].slice(0, numTokens));
const INITIAL_BALANCES = [fp(0.9), fp(1.8), fp(2.7), fp(3.6)];
const TOKEN_SYMBOLS = ['USDC', 'DAI', 'USDT', 'BUSD'].slice(0, numTokens)
const weights: BigNumberish[] = WEIGHTS.slice(0, numTokens);
const initialBalances = INITIAL_BALANCES.slice(0, numTokens);
const ZEROS = Array(3).fill(bn(0));
const MAX_AUM_VALUE = fp(0.2);
const MAX_YIELD_VALUE = fp(0.8);
const AMPLIFICATION_PARAMETER = bn(200);


const BASE_PAUSE_WINDOW_DURATION = MONTH * 3;
const BASE_BUFFER_PERIOD_DURATION = MONTH;


let tokens: TokenList;
let allTokens: TokenList;
let lp: SignerWithAddress;
let owner: SignerWithAddress;
let deployer: SignerWithAddress;
let recipient: SignerWithAddress;
let vaultSigner: SignerWithAddress;
let admin: SignerWithAddress;
let authorizer: Contract;
let vault: Vault;
let entrypoint: MockAuthorizerAdaptorEntrypoint;
let pool: StablePool;

async function deployRawVault(): Promise<void>  {
  //const entrypoint = await deploy('MockAuthorizerAdaptorEntrypoint');
  entrypoint = await new MockAuthorizerAdaptorEntrypoint__factory(deployer).deploy()
  authorizer = await new TimelockAuthorizer__factory(deployer).deploy(admin.address, ZERO_ADDRESS, entrypoint.address, MONTH)
  vault = await new Vault__factory(deployer).deploy(authorizer.address, ZERO_ADDRESS, 0, 0)
  await impersonateAccount(vault.address);
  await setBalance(vault.address, fp(100));
  vaultSigner = await SignerWithAddress.create(ethers.provider.getSigner(vault.address));
}

async function deployTokens(): Promise<void> {
    const tokenAmounts = fp(100);
    allTokens = await TokenList.create(TOKEN_SYMBOLS, { sorted: true });
    await allTokens.mint({ to: lp, amount: tokenAmounts });
    await allTokens.approve({ to: vault.address, from: lp, amount: tokenAmounts }); 
    tokens = allTokens.subset(numTokens);
}  


async function deployPool(
  params: RawStablePoolDeployment = {},
  rates: BigNumberish[] = [],
  durations: number[] = []
): Promise<void> {
  const rateProviders: Contract[] = [];
  const tokenRateCacheDurations: number[] = [];
  const exemptFromYieldProtocolFeeFlags: boolean[] = [];
  let bptIndex: number;
  let deployTimestamp: BigNumber;
  let initialBalances: BigNumberish[];

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

before('setup signers', async () => {
  [ ,admin, lp, owner, recipient, deployer] = await ethers.getSigners();
});  

describe("PachiraWeightedPool", () => {

  context('Engage factory contract PachiraWeightedPool.sol', () => {
    const swapFeePercentage = fp(0.1);
    const tokenRates = Array.from({ length: numTokens }, (_, i) => fp(1 + (i + 1) / 10));
    
    it('swap given in', async () => {
      expect(true);
      await deployRawVault()
      await deployTokens();
      await deployPool({ swapFeePercentage, amplificationParameter: AMPLIFICATION_PARAMETER }, tokenRates);
    });           
 
  }); 
});    