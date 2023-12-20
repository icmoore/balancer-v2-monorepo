// scripts/deployAndInteract.ts
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { PachiraWeightedPool } from '../typechain';
import { PachiraWeightedPool__factory } from '../typechain/factories/contracts/PachiraWeightedPool__factory';          
import { toNormalizedWeights } from '@balancer-labs/balancer-js';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { defaultAbiCoder } from '@ethersproject/abi';

import { BigNumberish, fp, fpMul, pct, bn} from '@balancer-labs/v2-helpers/src/numbers';
import { RawWeightedPoolDeployment} from '@balancer-labs/v2-helpers/src/models/pools/weighted/types';
import { MONTH } from '@balancer-labs/v2-helpers/src/time';
import Vault from '@balancer-labs/v2-helpers/src/models/vault/Vault';
import TokenList from '@balancer-labs/v2-helpers/src/models/tokens/TokenList';
import BaseWeightedPool from '@balancer-labs/v2-helpers/src/models/pools/weighted/BaseWeightedPool';

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
let deployer: SignerWithAddress;
let recipient: SignerWithAddress;
let other: SignerWithAddress;
let pachiraFactory: PachiraWeightedPool;
let pachiraPool: BaseWeightedPool;

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

async function deployWeightedPoolContract(): Promise<void>  {
  console.log('     Deploying PachiraWeightedPool ...');  
  const params: RawWeightedPoolDeployment = {}
  let null_addr_arr:string[] = ['0x0000000000000000000000000000000000000000',
                              '0x0000000000000000000000000000000000000000',
                              '0x0000000000000000000000000000000000000000',
                              '0x0000000000000000000000000000000000000000']

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
} 
  
async function initContractPool(): Promise<void> {
    const poolId = await pachiraFactory.getPoolId();
    pachiraPool = new BaseWeightedPool(pachiraFactory,
                                        poolId,
                                        vault,
                                        tokens,
                                        weights,
                                        0,
                                        recipient);

}    

async function initJoin(): Promise<void> {
  const { amountsIn, dueProtocolFeeAmounts } = await pachiraPool.init({ recipient, initialBalances, from: lp });
}  

async function initRawJoin(): Promise<void> {
  const joinKind = 0;
  const abi = ['uint256', 'uint256[]'];
  const data = [joinKind, initialBalances];
  const userData = defaultAbiCoder.encode(abi,data); 
  const poolId = await pachiraFactory.getPoolId();
  const poolTokens = await vault.getPoolTokens(poolId)

    const tx = await vault.joinPool({
                              poolId: poolId,
                              tokens: tokens.addresses,
                              poolAddress: pachiraFactory.address,
                              recipient: recipient.address,
                              currentBalances: initialBalances,
                              lastChangeBlock: 0,
                              protocolFeePercentage: 0,
                              data: userData,
                              from: lp
                            }); 
}
    
async function joinGivenIn(): Promise<void> {
      let expectedBptOut: BigNumberish;
      const amountsIn = ZEROS.map((n, i) => (i === 1 ? fp(0.1) : n));
      expectedBptOut = await pachiraPool.estimateBptOut(amountsIn, initialBalances);
      const minimumBptOut = pct(expectedBptOut, 0.99);
      const result = await pachiraPool.joinGivenIn({ amountsIn, minimumBptOut, recipient, from: lp });  
}  

// add liquidity via depositing 'shares amount' for single asset deposit
async function joinGivenOut(): Promise<void> {
    const token = 0;
    const bptOut = fp(2);
    const previousBptBalance = await pachiraPool.balanceOf(recipient);
    const expectedAmountIn = await pachiraPool.estimateTokenIn(token, bptOut, initialBalances);
    const result = await pachiraPool.joinGivenOut({ recipient, bptOut, token, from: lp });
}

// add liquidity via depositing 'shares amount' for all asset deposit
async function joinAllGivenOut(): Promise<void> {
    const previousBptBalance = await pachiraPool.balanceOf(recipient);
    const bptOut = previousBptBalance.div(2);
    const expectedAmountsIn = initialBalances.map((balance) => balance.div(2));
    const result = await pachiraPool.joinAllGivenOut({ recipient, bptOut, from: lp });  
}  

// remove liquidity via withdrawing 'token amount' for a single asset 
async function singleExitGivenIn(): Promise<void> {
    const token = 0;
    const previousBptBalance = await pachiraPool.balanceOf(lp);
    const bptIn = pct(previousBptBalance, 0.2);
    const expectedTokenOut = await pachiraPool.estimateTokenOut(token, bptIn);
    const result = await pachiraPool.singleExitGivenIn({ from: lp, bptIn, token }); 

    console.log('singleExitGivenIn: '+ bptIn); 
    console.log('singleExitGivenIn: '+ expectedTokenOut); 
    console.log('singleExitGivenIn: '+ result.amountsOut);

}  

  // remove liquidity via withdrawing 'token amount' for multiple assets 
async function multiExitGivenIn(): Promise<void> {
    const previousBptBalance = await pachiraPool.balanceOf(lp);
    const totalBPT = await pachiraPool.totalSupply();
    const expectedAmountsOut = initialBalances.map((balance) => balance.mul(previousBptBalance).div(totalBPT));
    const result = await pachiraPool.multiExitGivenIn({ from: lp, bptIn: previousBptBalance });
}  

  // remove liquidity via withdrawing 'shares amount' for a single asset 
async function exitGivenOut(): Promise<void> {
    const previousBptBalance = await pachiraPool.balanceOf(lp);
    const amountsOut = initialBalances.map((balance) => balance.div(2));
    const expectedBptIn = previousBptBalance.div(2);
    const maximumBptIn = pct(expectedBptIn, 1.01);
    const result = await pachiraPool.exitGivenOut({ from: lp, amountsOut, maximumBptIn });

    console.log('exitGivenOut: '+ maximumBptIn); 
    console.log('exitGivenOut: '+ amountsOut); 
    console.log('exitGivenOut: '+ result.amountsOut);
} 

// swap output token given input token
async function swapGivenIn(): Promise<void> {
    const amount = fp(0.1);
    const amountWithFees = fpMul(amount, POOL_SWAP_FEE_PERCENTAGE.add(fp(1)));
    const expectedAmountOut = await pachiraPool.estimateGivenIn({ in: 1, out: 0, amount: amountWithFees });
    const result = await pachiraPool.swapGivenIn({ in: 1, out: 0, amount: amountWithFees, from: lp, recipient });
}  

// swap input token given output token 
async function swapGivenOut(): Promise<void> {
    const amount = fp(0.1);
    const expectedAmountIn = await pachiraPool.estimateGivenOut({ in: 1, out: 0, amount });
    const result = await pachiraPool.swapGivenOut({ in: 1, out: 0, amount, from: lp, recipient }); 
} 

  
async function poolInfo(context: string): Promise<void> {
    const poolTokens = await pachiraPool.getTokens();
    const previousBptBalance = await pachiraPool.balanceOf(recipient);

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
    [,lp, recipient, deployer, other] = await ethers.getSigners();
});  

describe("PachiraWeightedPool", () => {

    context('Engage contract', () => {

      /*
      it('test', async () => {

        await deployVault();
        await deployTokens();

        await deployWeightedPoolContract();
        await initContractPool()

        const joinKind = 0;
        const abi = ['uint256', 'uint256[]'];
        const data = [joinKind, initialBalances];
        const userData = defaultAbiCoder.encode(abi,data); 
        const poolId = await pachiraFactory.getPoolId();
        const poolTokens = await vault.getPoolTokens(poolId)

        await pachiraPool.instance.connect(lp).onJoinPool(poolId, 
          pachiraFactory.address, 
          recipient.address, initialBalances, 0, 0, userData);
      });  
      */

      it('deploy vault and tokens', async () => {
        await deployVault();
        await deployTokens();

        await deployWeightedPoolContract();
        await initContractPool()

        //await initJoin();
        await initRawJoin()
        await poolInfo('test') 
        expect(true);
      });   
      
      it('join given in', async () => {
        expect(true);                                       
        await joinGivenIn()
        await poolInfo('join given in');
      });        
       
      it('join given out', async () => {
        expect(true);
        await joinGivenOut()
        await poolInfo('join given out');
      });     

      it('join all given out', async () => {
        expect(true);
        await joinAllGivenOut()
        await poolInfo('join all given out');
      });     
      
      it('single exit given in', async () => {
        expect(true);
        await singleExitGivenIn();
        await poolInfo('single exit given in');
      });   
      
      it('mulit-exit given in', async () => {
        expect(true);
        await multiExitGivenIn();
        await poolInfo('mulit-exit given in');
      });   
      
      it('swap given in', async () => {
        expect(true);
        await deployVault();
        await deployTokens();
        await deployWeightedPoolContract();
        await initContractPool()
        await initJoin();
        await joinGivenIn();
        await swapGivenIn();

        //console.log('contract.address: '+pachiraFactory.address)
        //console.log('recipient.address: '+recipient.address)
        //console.log('lp.address: '+lp.address)
      });           
 
      it('swap given out', async () => {
        expect(true); 
        await swapGivenOut();
        await poolInfo('swap given out');
      }); 

      it('simple test function', async () => {
          const result = await pachiraFactory.getTestMessage() 
          console.log('         '+result)
          expect(true);
      }); 

   
    }); 
});      



