import { expect } from 'chai';
import { ethers } from 'hardhat';
import { BigNumber, Contract } from 'ethers';
import { impersonateAccount, setBalance } from '@nomicfoundation/hardhat-network-helpers';

import { deploy, deployedAt, getArtifact } from '@balancer-labs/v2-helpers/src/contract';
import { sharedBeforeEach } from '@balancer-labs/v2-common/sharedBeforeEach';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import { SwapKind } from '@balancer-labs/balancer-js';

import { BigNumberish, bn, fp, FP_ONE, FP_ZERO} from '@balancer-labs/v2-helpers/src/numbers';
import { ZERO_ADDRESS } from '@balancer-labs/v2-helpers/src/constants';
import { RawStablePoolDeployment } from '@balancer-labs/v2-helpers/src/models/pools/stable/types';
import { currentTimestamp, advanceTime, MONTH, WEEK, DAY } from '@balancer-labs/v2-helpers/src/time';
import TokenList from '@balancer-labs/v2-helpers/src/models/tokens/TokenList';
import StablePool from '@balancer-labs/v2-helpers/src/models/pools/stable/StablePool';

import { Vault } from '../typechain/contracts/Vault';    
import { MockAuthorizerAdaptorEntrypoint } from '../typechain/contracts/test/MockAuthorizerAdaptorEntrypoint';  
import { MockAuthorizerAdaptorEntrypoint__factory } from '../typechain/factories/contracts/test/MockAuthorizerAdaptorEntrypoint__factory';     
import { TimelockAuthorizer__factory } from '../typechain/factories/contracts/authorizer/TimelockAuthorizer__factory'; 
import { Vault__factory } from '../typechain/factories/contracts/Vault__factory';    

const numTokens = 3;
let lp: SignerWithAddress;
let owner: SignerWithAddress;
let deployer: SignerWithAddress;
let recipient: SignerWithAddress;
let vaultSigner: SignerWithAddress;
let admin: SignerWithAddress;
let authorizer: Contract;
let initialBalances: BigNumberish[];
let bptIndex: number;
let pool: StablePool;
let tokens: TokenList;
let vault: Vault;
let entrypoint: MockAuthorizerAdaptorEntrypoint;

const TOKEN_SYMBOLS = ['USDC', 'DAI', 'USDT', 'BUSD'].slice(0, numTokens)

async function deployRawVault(): Promise<void>  {
  entrypoint = await new MockAuthorizerAdaptorEntrypoint__factory(deployer).deploy()
  authorizer = await new TimelockAuthorizer__factory(deployer).deploy(admin.address, ZERO_ADDRESS, entrypoint.address, MONTH)
  vault = await new Vault__factory(deployer).deploy(authorizer.address, ZERO_ADDRESS, 0, 0)
  await impersonateAccount(vault.address);
  await setBalance(vault.address, fp(100));
  vaultSigner = await SignerWithAddress.create(ethers.provider.getSigner(vault.address));
}

async function deployTokens(): Promise<void> {
    const tokenAmounts = fp(100);
    tokens = await TokenList.create(TOKEN_SYMBOLS, { sorted: true });
    await tokens.mint({ to: lp, amount: tokenAmounts });
    //await tokens.approve({ to: vault.address, from: lp, amount: tokenAmounts }); 
}  

async function deployPool(
  params: RawStablePoolDeployment = {},
  rates: BigNumberish[] = [],
  durations: number[] = []
): Promise<void> {
  
  const rateProviders: Contract[] = [];
  const tokenRateCacheDurations: number[] = [];
  const exemptFromYieldProtocolFeeFlags: boolean[] = [];

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

}

async function initPool(): Promise<void> {
  bptIndex = await pool.getBptIndex();
  initialBalances = Array.from({ length: numTokens + 1 }).map((_, i) => (i == bptIndex ? 0 : fp(1 - i / 10)));  
  const bptBalance = await pool.balanceOf(lp);

  await tokens.approve({ from: lp, to: pool.vault });
  await pool.instance.connect(lp).approve(pool.vault.address, bptBalance);
  await pool.init({ from: lp, recipient: lp.address, initialBalances, skipMint: true });
  console.log('balanceOf '+await pool.balanceOf(recipient));  
}  

async function swapPool(): Promise<void> {
  const amountIn = fp(0.1);
  await pool.swapGivenIn({ in: tokens.first, 
                            out: tokens.second, 
                            amount: amountIn,
                            from: lp, 
                            recipient: lp
                          });
}  


async function poolInfo(context: string): Promise<void> {
  const poolId = await pool.getPoolId();
  const poolTokens = await pool.getTokens()

  let message: string = "\n        Weighted pool info: " + context + "+\n";
  message = message + '        ------------------------\n'
  message = message + '        vault address: '+await vault.address+'\n'
  message = message + '        balances: '+ await poolTokens.balances +'\n'
  message = message + '        tkn addresses: '+ await poolTokens.tokens +'\n'
  message = message + '        ------------------------\n'
  console.log(message);  

}  

sharedBeforeEach('setup signers', async () => {
  [, lp, owner, recipient, admin, deployer] = await ethers.getSigners();
});

describe("StablePool", () => {

  context('Engage factory contract StablePool.sol', () => {
    const swapFeePercentage = fp(0.1);
    const tokenRates = Array.from({ length: numTokens }, (_, i) => fp(1 + (i + 1) / 10));
    
    it('swap given in', async () => {
      expect(true);
      await deployRawVault();
      await deployTokens()
      await deployPool();
      await initPool();
      await poolInfo('post init');
      await swapPool();
      await poolInfo('post swap');
    });   

  }); 

});    



