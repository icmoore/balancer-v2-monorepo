import { expect } from 'chai';
import { ethers } from 'hardhat';
import { BigNumber, Contract } from 'ethers';
import { impersonateAccount, setBalance } from '@nomicfoundation/hardhat-network-helpers';
import { defaultAbiCoder } from '@ethersproject/abi';

import { deploy, deployedAt, getArtifact } from '@balancer-labs/v2-helpers/src/contract';
import { sharedBeforeEach } from '@balancer-labs/v2-common/sharedBeforeEach';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import { SingleSwap, FundManagement, SwapKind, JoinPoolRequest, WeightedPoolEncoder} from '@balancer-labs/balancer-js';

import { BigNumberish, fpMul, fp, FP_ONE, FP_ZERO} from '@balancer-labs/v2-helpers/src/numbers';
import { MAX_UINT256, ZERO_ADDRESS } from '@balancer-labs/v2-helpers/src/constants';
import { RawStablePoolDeployment } from '@balancer-labs/v2-helpers/src/models/pools/stable/types';
import { currentTimestamp, advanceTime, MONTH, WEEK, DAY } from '@balancer-labs/v2-helpers/src/time';
import TokenList from '@balancer-labs/v2-helpers/src/models/tokens/TokenList';
import StablePool from '@balancer-labs/v2-helpers/src/models/pools/stable/StablePool';
import TypesConverter from '@balancer-labs/v2-helpers/src/models/types/TypesConverter';
import { ComposableStablePool } from '../typechain';
import { Vault } from '../typechain/contracts/Vault';    
import { MockAuthorizerAdaptorEntrypoint } from '../typechain/contracts/test/MockAuthorizerAdaptorEntrypoint';  
import { ProtocolFeePercentagesProvider } from '../typechain/contracts/ProtocolFeePercentagesProvider';
import { MockAuthorizerAdaptorEntrypoint__factory } from '../typechain/factories/contracts/test/MockAuthorizerAdaptorEntrypoint__factory';     
import { TimelockAuthorizer__factory } from '../typechain/factories/contracts/authorizer/TimelockAuthorizer__factory'; 
import { Vault__factory } from '../typechain/factories/contracts/Vault__factory';    
import { ComposableStablePool__factory } from '../typechain/factories/contracts/ComposableStablePool__factory';
import { ProtocolFeePercentagesProvider__factory } from '../typechain/factories/contracts/ProtocolFeePercentagesProvider__factory';    

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
let feesProvider: ProtocolFeePercentagesProvider;
let entrypoint: MockAuthorizerAdaptorEntrypoint;
let composableStableFactory: ComposableStablePool;

const NAME = 'Balancer Pool Token';
const SYMBOL = 'BPT';
const VERSION = 'test';
const POOL_SWAP_FEE_PERCENTAGE = fp(0.01);
const TOKEN_SYMBOLS = ['USDC', 'DAI', 'USDT', 'BUSD'].slice(0, numTokens)
const BASE_PAUSE_WINDOW_DURATION = MONTH * 3;
const BASE_BUFFER_PERIOD_DURATION = MONTH;
const MAX_AUM_VALUE = fp(0.2);
const MAX_YIELD_VALUE = fp(0.8);

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
    await tokens.approve({ to: vault.address, from: lp, amount: tokenAmounts }); 

   //console.log('deployTokens '+tokens.addresses); 

} 

async function protocolFeeProvider(): Promise<void> {
  //const artifact = getArtifact('ProtocolFeePercentagesProvider');
  //const factory = new ethers.ContractFactory(artifact.abi, artifact.bytecode, (await ethers.getSigners())[0]);
  //feesProvider = await factory.deploy(vault.address, MAX_YIELD_VALUE, MAX_AUM_VALUE);
  feesProvider = await new ProtocolFeePercentagesProvider__factory(deployer).deploy(vault.address, 
                                                                                      MAX_YIELD_VALUE, 
                                                                                      MAX_AUM_VALUE);
} 

async function deployRawPoolContract(): Promise<void>  {
  console.log('     Deploying Raw Pool Contract ...');  
  let null_addr_arr:string[] = [ZERO_ADDRESS,ZERO_ADDRESS,ZERO_ADDRESS]

  const rates: BigNumberish[] = [];
  const rateProviders: Contract[] = [];
  const tokenRateCacheDurations: number[] = [];
  const exemptFromYieldProtocolFeeFlags: boolean[] = [];

  for (let i = 0; i < numTokens; i++) {
    rateProviders[i] = await deploy('v2-pool-utils/MockRateProvider');
    await rateProviders[i].mockRate(rates[i] || FP_ONE);
    tokenRateCacheDurations[i] = MONTH + i;
    exemptFromYieldProtocolFeeFlags[i] = i % 2 == 0; // set true for even tokens
  }  

    //console.log('vault: '+vault.address)
    //console.log('protocolFeeProvider: '+feesProvider.address)
    //console.log('name: '+NAME)
    //console.log('symbol: '+SYMBOL)
    //console.log('tokens: '+tokens.addresses)
    //console.log('rateProviders: '+TypesConverter.toAddresses(rateProviders))
    //console.log('tokenRateCacheDurations: '+tokenRateCacheDurations)
    //console.log('exemptFromYieldProtocolFeeFlags: '+exemptFromYieldProtocolFeeFlags)
    //console.log('amplificationParameter: '+200)
    //console.log('swapFeePercentage: '+POOL_SWAP_FEE_PERCENTAGE)
    //console.log('pauseWindowDuration: '+BASE_PAUSE_WINDOW_DURATION)
    //console.log('bufferPeriodDuration: '+BASE_BUFFER_PERIOD_DURATION)
    //console.log('owner: '+recipient.address)
    //console.log('version: '+VERSION)  

  const pool_params =  {
    vault: vault.address,
    protocolFeeProvider: feesProvider.address,
    name: NAME,
    symbol: SYMBOL,
    tokens: tokens.addresses,
    rateProviders: TypesConverter.toAddresses(rateProviders),
    tokenRateCacheDurations: tokenRateCacheDurations,
    exemptFromYieldProtocolFeeFlags: exemptFromYieldProtocolFeeFlags,
    amplificationParameter: 200,    
    swapFeePercentage: POOL_SWAP_FEE_PERCENTAGE,        
    pauseWindowDuration: BASE_PAUSE_WINDOW_DURATION,         
    bufferPeriodDuration: BASE_BUFFER_PERIOD_DURATION,   
    owner: recipient.address,
    version: VERSION,         
  };

  composableStableFactory = await new ComposableStablePool__factory(deployer).deploy(pool_params)
                                                                                                                                         
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

  console.log('pooltokens '+await pool.getTokens())


}

async function initPool(): Promise<void> {
  bptIndex = await pool.getBptIndex();
  initialBalances = Array.from({ length: numTokens + 1}).map((_, i) => (i == bptIndex ? 0 : fp(1 - i / 10)));  
  const bptBalance = await pool.balanceOf(lp);

  await tokens.approve({ from: lp, to: pool.vault });
  //await pool.instance.connect(lp).approve(pool.vault.address, bptBalance);
  console.log('tokens.addresses '+tokens.addresses);  
  await pool.init({ from: lp, recipient: lp.address, initialBalances, skipMint: true });
  console.log('balanceOf '+initialBalances);  

}  

async function initRawJoin(): Promise<void> {
  bptIndex = 0
  initialBalances = Array.from({ length: numTokens + 1 }).map((_, i) => (i == bptIndex ? fp(2596148429267412): fp(1 - i / 10)));  
  const joinKind = 0;
  const abi = ['uint256', 'uint256[]'];
  const data = [joinKind, initialBalances];
  const userData = defaultAbiCoder.encode(abi,data); 
  const poolId = await composableStableFactory.getPoolId();
  const poolTokens = await vault.getPoolTokens(poolId)

  const request: JoinPoolRequest = {
    assets: poolTokens.tokens,
    maxAmountsIn: initialBalances,
    userData: userData,
    fromInternalBalance: false
  };  

  const tx = await vault.connect(lp).joinPool(poolId, lp.address, recipient.address, request);
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

async function rawSwapVault(): Promise<void> {

  const poolId = await composableStableFactory.getPoolId();
  const amount = fp(0.1);
  const amountWithFees = fpMul(amount, POOL_SWAP_FEE_PERCENTAGE.add(fp(1)));

  const singleSwap: SingleSwap = {
    poolId: poolId,
    kind: SwapKind.GivenIn,
    assetIn: tokens.get(1).instance.address,
    assetOut: tokens.get(0).instance.address,
    amount: amountWithFees, // Needs to be > 0
    userData: '0x',
  };

  const funds: FundManagement = {
    sender: lp.address,
    recipient: recipient.address,
    fromInternalBalance: false,
    toInternalBalance: false,
  };

  const tx = await vault.connect(lp).swap(singleSwap, funds, 0, MAX_UINT256)
}


async function rawPoolInfo(context: string): Promise<void> {
  const poolId = await composableStableFactory.getPoolId();
  const poolTokens = await vault.getPoolTokens(poolId)

  let message: string = "\n        Weighted pool info: " + context + "+\n";
  message = message + '        ------------------------\n'
  message = message + '        vault address: '+await vault.address+'\n'
  message = message + '        balances: '+ await poolTokens.balances +'\n'
  message = message + '        tkn addresses: '+ await poolTokens.tokens +'\n'
  message = message + '        ------------------------\n'
  console.log(message);  

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

    it('typescript code', async () => {
      expect(true);
      //await deployRawVault();
      //await deployTokens();
      //await deployPool();
      //await initPool();
      //await poolInfo('post init');
      //await swapPool();
      //await poolInfo('post swap');
    });      
    
    it('contract code', async () => {
      expect(true);
      await deployRawVault();
      await deployTokens();
      await protocolFeeProvider();
      await deployRawPoolContract();
      await initRawJoin();
      await rawPoolInfo('post join');
      await rawSwapVault();
      await rawPoolInfo('post swap');

      //await initPool();
      //await poolInfo('post init');
      //await swapPool();
      //await poolInfo('post swap');
    });   

  }); 

});    



