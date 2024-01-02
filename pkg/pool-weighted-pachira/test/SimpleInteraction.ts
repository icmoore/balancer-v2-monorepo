// scripts/deployAndInteract.ts
import { ethers } from 'hardhat';
import { Contract } from 'ethers';
import { expect } from 'chai';
import { PachiraWeightedPool, 
          WeightedPoolFactory } from '../typechain';
import { PachiraWeightedPool__factory } from '../typechain/factories/contracts/PachiraWeightedPool__factory';          
import TypesConverter from  '@balancer-labs/v2-helpers/src/models/types/TypesConverter';
import { RawWeightedPoolDeployment, WeightedPoolDeployment } from '@balancer-labs/v2-helpers/src/models/pools/weighted/types';
import { MONTH } from '@balancer-labs/v2-helpers/src/time';
import Vault from '@balancer-labs/v2-helpers/src/models/vault/Vault';
import { toNormalizedWeights } from '@balancer-labs/balancer-js';
import { defaultAbiCoder } from '@ethersproject/abi';
import TokenList from '@balancer-labs/v2-helpers/src/models/tokens/TokenList';
import * as expectEvent from '@balancer-labs/v2-helpers/src/test/expectEvent';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { BigNumberish, fp, pct, bn} from '@balancer-labs/v2-helpers/src/numbers';
import { deploy, deployedAt} from '@balancer-labs/v2-helpers/src/contract';
import { randomBytes } from 'ethers/lib/utils';
import WeightedPool from '@balancer-labs/v2-helpers/src/models/pools/weighted/WeightedPool';
import BaseWeightedPool from '@balancer-labs/v2-helpers/src/models/pools/weighted/BaseWeightedPool';

import { WeightedPoolType } from '@balancer-labs/v2-helpers/src/models/pools/weighted/types';

const NAME = 'Pachira Balancer Pool Token';
const SYMBOL = 'BPT';
const POOL_SWAP_FEE_PERCENTAGE = fp(0.01);
const WEIGHTS = toNormalizedWeights([fp(30), fp(70), fp(5), fp(5)]);
const INITIAL_BALANCES = [fp(0.9), fp(1.8), fp(2.7), fp(3.6)];
const weights: BigNumberish[] = WEIGHTS.slice(0, 4);
const initialBalances = INITIAL_BALANCES.slice(0, 4);
const ZEROS = Array(4).fill(bn(0));


const BASE_PAUSE_WINDOW_DURATION = MONTH * 3;
const BASE_BUFFER_PERIOD_DURATION = MONTH;

let vault: Vault;
let tokens: TokenList;
let allTokens: TokenList;
let lp: SignerWithAddress;
let factory: Contract;
let weighted_pool: Contract;
let rateProviders: string[];
let assetManagers: string[];
let currentBalances: BigNumberish[];
let owner: SignerWithAddress;
let sender: SignerWithAddress;
let deployer: SignerWithAddress;
let recipient: SignerWithAddress;
let pool_addr: SignerWithAddress;
let weightedPoolFactory: WeightedPoolFactory;
let pachiraWeightedPool: PachiraWeightedPool;
let pachiraWeightedPool2: PachiraWeightedPool;
let pachiraFactory: PachiraWeightedPool;
let pachiraPool: BaseWeightedPool;
let pool: BaseWeightedPool;
let poolType: WeightedPoolType;

async function deployVault(): Promise<void> {
  vault = await Vault.create();
}    

async function deployTokens(): Promise<void> {
    const tokenAmounts = fp(100);
    allTokens = await TokenList.create(['MKR', 'DAI', 'SNX', 'BAT'], { sorted: true });
    await allTokens.mint({ to: lp, amount: tokenAmounts });
    await allTokens.approve({ to: vault.address, from: lp, amount: tokenAmounts }); 
    tokens = allTokens.subset(4);
  }  

async function deployPool(params: RawWeightedPoolDeployment = {}): Promise<void> {
  pachiraPool = await WeightedPool.create({
        vault,
        tokens,
        weights,
        swapFeePercentage: POOL_SWAP_FEE_PERCENTAGE,
        ...params,
      });
  
  console.log('poolid: ' + await pachiraPool.getPoolId())    
}

async function initJoin(): Promise<void> {
  const { amountsIn, dueProtocolFeeAmounts } = await pachiraPool.init({ recipient, initialBalances, from: lp });
}  

async function deployWeightedPoolContract(): Promise<void>  {
  console.log('     Deploying PachiraWeightedPool ...');  

  const params: RawWeightedPoolDeployment = {}

  let null_addr_arr:string[] = ['0x0000000000000000000000000000000000000000',
                              '0x0000000000000000000000000000000000000000',
                              '0x0000000000000000000000000000000000000000',
                              '0x0000000000000000000000000000000000000000']

  const deployment = TypesConverter.toWeightedPoolDeployment(params);

  const pool_params =  {
    name: NAME,
    symbol: SYMBOL,
    tokens: tokens.addresses,
    normalizedWeights: weights,
    rateProviders: null_addr_arr,
    assetManagers: null_addr_arr,
    swapFeePercentage: POOL_SWAP_FEE_PERCENTAGE,
  };
                                      
  pachiraFactory = await new PachiraWeightedPool__factory(deployer).deploy(pool_params,
                                              vault.address, 
                                              vault.getFeesProvider().address,
                                              BASE_PAUSE_WINDOW_DURATION, 
                                              BASE_BUFFER_PERIOD_DURATION,
                                              recipient.address); 

  //pachiraFactory.getVault()                                            
  /*                                                                                                                                                                
  console.log('     PachiraWeightedPool:');        
  console.log('         - pachiraFactory.address: ' + await pachiraFactory.address);  
  console.log('         - pachiraFactory.address: ' + await deployer.address); 
  console.log('         - name: ' + await pachiraFactory.name());  
  console.log('         - symbol: ' + await pachiraFactory.symbol());  
  console.log('         - swap fees: ' + await pachiraFactory.getSwapFeePercentage());   
  console.log('         - recipient: ' + await pachiraFactory.getOwner());  
  console.log('         - decimals: ' + await pachiraFactory.decimals());  
  console.log('         - pool id: ' + await pachiraFactory.getPoolId());  
  console.log('         - pool id: ' + await pachiraFactory.getTestMessage()); 
  */
                                                                                                                                                                                                                                   
}  
  
  async function initContractPool(): Promise<void> {

    const poolId = await pachiraFactory.getPoolId();

    pachiraPool = new BaseWeightedPool(
      pachiraFactory,
      poolId,
      vault,
      tokens,
      weights,
      0,
      recipient
    )
  
    /*

    let null_addr_arr:string[] = ['0x0000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000',
    '0x0000000000000000000000000000000000000000'] 

      pachiraPool = new WeightedPool(
        pachiraFactory,
        poolId,
        vault,
        tokens,
        weights,
        null_addr_arr,
        null_addr_arr,
        0,
        recipient
      )
      /*
      
      /* 
      
      console.log('\n\npachira.address: '+pachiraFactory.address)
      console.log('pachira.poolId: '+poolId)
      console.log('pachira.recipient: '+recipient.address)
      console.log('pachira.currentBalances: '+initialBalances)
      console.log('pachira.tokens: '+tokens.addresses)
      console.log('pachira.lastChangeBlock: '+0)
      console.log('pachira.protocolFeePercentage: '+0)
      console.log('pachira.from: '+pachiraFactory.address)

      const tx = await vault.joinPool({
        poolAddress: pachiraFactory.address,
        poolId: poolId,
        tokens: tokens.addresses,
        recipient: recipient.address,
        currentBalances: initialBalances,
        lastChangeBlock: 0,
        protocolFeePercentage: 0,
        data: userData
      });

      export type JoinPool = {
        poolId: string;
        tokens: string[];
        poolAddress?: string;
        recipient?: string;
        currentBalances?: BigNumberish[];
        lastChangeBlock?: BigNumberish;
        protocolFeePercentage?: BigNumberish;
        data?: string;
        maxAmountsIn?: BigNumberish[];
        fromInternalBalance?: boolean;
        from?: SignerWithAddress;
      };
       */
      
  
    }  
    
    // add liquidity via depositing 'token amount' for single asset deposit
  async function joinGivenIn(): Promise<void> {
      let expectedBptOut: BigNumberish;
      const amountsIn = ZEROS.map((n, i) => (i === 1 ? fp(0.1) : n));
      expectedBptOut = await pachiraPool.estimateBptOut(amountsIn, initialBalances);
      const minimumBptOut = pct(expectedBptOut, 0.99);
      const result = await pachiraPool.joinGivenIn({ amountsIn, minimumBptOut, recipient, from: lp });  
  }  
  
  async function poolInfo(context: string): Promise<void> {
    const poolTokens = await pachiraPool.getTokens();
    const previousBptBalance = await pachiraPool.balanceOf(recipient);

    const poolId = await pachiraPool.getPoolId()
    

    let message: string = "\n        Weighted pool info: " + context + "+\n";
    message = message + '        ------------------------\n'
    message = message + '        name: '+await pachiraPool.name()+'\n'
    message = message + '        symbol: '+await pachiraPool.symbol()+'\n'
    message = message + '        vault address: '+await pachiraPool.vault.address+'\n'
    message = message + '        tokens: '+ await poolTokens.tokens +'\n'
    message = message + '        balances: '+ await poolTokens.balances +'\n'
    message = message + '        decimal: '+ await pachiraPool.decimals() +'\n'
    message = message + '        supply: '+ await pachiraPool.totalSupply() +'\n'
    message = message + '        recipient balance: ' + previousBptBalance+'\n'
    message = message + '        swap fee: ' + await pachiraPool.getSwapFeePercentage()+'\n'
    message = message + '        ------------------------\n'
    console.log(message);  
  }    

before('setup signers', async () => {
    [,lp, recipient, deployer] = await ethers.getSigners();
});  

describe("PachiraWeightedPool", () => {

    context('Engage contract', () => {

      it('deploy vault and tokens', async () => {
        await deployVault();
        await deployTokens();

        await deployWeightedPoolContract();
        await initContractPool()

        //await deployPool({ fromFactory: true });

        await initJoin();
        await joinGivenIn();
        await poolInfo('test') 
        expect(true);
    });        

       /*    
      it('deploy vault and tokens ', async () => {
        await deployVault();
        await deployTokens();
        await deployPool({ fromFactory: true });
        await initJoin();
        await joinGivenIn2();  
        await poolInfo('test')     
        expect(true);
      });  
        it('simple test function', async () => {
          //const result = await pachiraFactory.getTestMessage() 
          //console.log('         '+result)
          expect(true);
        }); 
        */         
   
      }); 

});      



       // it('deploy factory contract ', async () => {
       //       await deployFactoryContract();
       //       expect(true);
       // });   
       
        //it('deploy pool', async () => {
       //     await createPool();
       //     expect(true);
       // });           

       // it('init pool', async () => {
        //    await initPool();
       //     expect(true);
       // });    

/*

async function deployFactoryContract(): Promise<void>  {
    // Interacting with WeightedPoolFactory.sol
    console.log('     Deploying WeightedPoolFactory ...');  

    const weightedPoolFactory = await ethers.getContractFactory("WeightedPoolFactory");
    factory = await weightedPoolFactory.deploy(vault.address, 
                                                  vault.getFeesProvider().address,
                                                  BASE_PAUSE_WINDOW_DURATION, 
                                                  BASE_BUFFER_PERIOD_DURATION
                                              );                                          
}   

async function initPool(): Promise<void> {
  const joinKind = 0;
  const initBalances = INITIAL_BALANCES.slice(0, tokens.length);
  const abi = ['uint256', 'uint256[]'];
  const data = [joinKind, initBalances];
  const poolId = await pachiraFactory.getPoolId();
  const scalingFactors = await pachiraFactory.getScalingFactors();
  const userData = defaultAbiCoder.encode(abi,data); 
  const tx = await pachiraFactory.init(poolId, sender.address, recipient.address, scalingFactors, userData);
  const receipt = await tx.wait();
  console.log(receipt); 
}

async function createPool(): Promise<void>  {                       
    rateProviders = await tokens.asyncMap(async () => (await deploy('v2-pool-utils/MockRateProvider')).address);  

    const tx = await factory.create(
        NAME,
        SYMBOL,
        tokens.addresses,
        WEIGHTS,
        rateProviders,
        POOL_SWAP_FEE_PERCENTAGE,
        recipient.address,
        randomBytes(32)
    );
    const receipt = await tx.wait();
    const pool_create_event = expectEvent.inReceipt(receipt, 'PoolCreated');     
    pool = await deployedAt('WeightedPool', pool_create_event.args.pool);

    pool_addr = pool_create_event.args.pool

    console.log('     WeightedPool: ' + await pool_create_event.args.pool);         
    console.log('         - name: ' + await pool.name());  
    console.log('         - symbol: ' + await pool.symbol());  
    console.log('         - swap fees: ' + await pool.getSwapFeePercentage());   
    console.log('         - recipient: ' + await pool.getOwner());  
    console.log('         - decimals: ' + await pool.decimals());  
    console.log('         - pool id: ' + await pool.getPoolId());  

                               
}  

async function deployWeightedPoolContract(): Promise<void>  {
  // Interacting with PachiraWeightedPool.sol
  console.log('     Deploying PachiraWeightedPool ...');  
  const pachiraWeightedPool = await ethers.getContractFactory('PachiraWeightedPool');

  const params: RawWeightedPoolDeployment = {}

  let null_addr_arr:string[] = ['0x0000000000000000000000000000000000000000',
                              '0x0000000000000000000000000000000000000000',
                              '0x0000000000000000000000000000000000000000',
                              '0x0000000000000000000000000000000000000000']

  const deployment = TypesConverter.toWeightedPoolDeployment(params);

  const pool_params =  {
    name: NAME,
    symbol: SYMBOL,
    tokens: tokens.addresses,
    normalizedWeights: WEIGHTS,
    rateProviders: null_addr_arr,
    assetManagers: null_addr_arr,
    swapFeePercentage: POOL_SWAP_FEE_PERCENTAGE,
  }

  weighted_pool = await pachiraWeightedPool.deploy(pool_params,
                                                vault.address, 
                                                vault.getFeesProvider().address,
                                                BASE_PAUSE_WINDOW_DURATION, 
                                                BASE_BUFFER_PERIOD_DURATION,
                                                recipient.address
                                            );  
                                            
                                                                                     
                                                                                  
                                                                                        
}   
*/ 