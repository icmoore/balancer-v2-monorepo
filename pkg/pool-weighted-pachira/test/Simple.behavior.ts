import { ethers } from 'hardhat';
import { expect } from 'chai';
import { BigNumber } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';
import { PoolSpecialization, SwapKind } from '@balancer-labs/balancer-js';
import { BigNumberish, bn, fp, fpMul, pct } from '@balancer-labs/v2-helpers/src/numbers';

import TokenList from '@balancer-labs/v2-helpers/src/models/tokens/TokenList';
import WeightedPool from '@balancer-labs/v2-helpers/src/models/pools/weighted/WeightedPool';
import { RawWeightedPoolDeployment, WeightedPoolType } from '@balancer-labs/v2-helpers/src/models/pools/weighted/types';
import { ZERO_ADDRESS } from '@balancer-labs/v2-helpers/src/constants';
import { sharedBeforeEach } from '@balancer-labs/v2-common/sharedBeforeEach';
import { expectBalanceChange } from '@balancer-labs/v2-helpers/src/test/tokenBalance';
import Vault from '@balancer-labs/v2-helpers/src/models/vault/Vault';
import LiquidityBootstrappingPool from '@balancer-labs/v2-helpers/src/models/pools/weighted/LiquidityBootstrappingPool';
import BaseWeightedPool from '@balancer-labs/v2-helpers/src/models/pools/weighted/BaseWeightedPool';

export function allInOne(numberOfTokens: number, poolType: WeightedPoolType): void {

  const POOL_SWAP_FEE_PERCENTAGE = fp(0.01);
  const WEIGHTS = [fp(30), fp(70), fp(5), fp(5)];
  const INITIAL_BALANCES = [fp(0.9), fp(1.8), fp(2.7), fp(3.6)];
  const MINIMAL_SWAP_INFO_ONSWAP =
    'onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256,uint256)';

  let recipient: SignerWithAddress, other: SignerWithAddress, lp: SignerWithAddress;
  let vault: Vault;
  let pool: BaseWeightedPool, allTokens: TokenList, tokens: TokenList;

  const ZEROS = Array(numberOfTokens).fill(bn(0));
  const weights: BigNumberish[] = WEIGHTS.slice(0, numberOfTokens);
  const initialBalances = INITIAL_BALANCES.slice(0, numberOfTokens);

  async function deployVault(): Promise<void> {
    vault = await Vault.create();
  }    


  
  async function deployTokens(): Promise<void> {
    const tokenAmounts = fp(100);
    allTokens = await TokenList.create(['MKR', 'DAI', 'SNX', 'BAT', 'GRT'], { sorted: true });
    await allTokens.mint({ to: lp, amount: tokenAmounts });
    await allTokens.approve({ to: vault.address, from: lp, amount: tokenAmounts }); 
  }  

  async function defineTokens(numberOfTokens: number): Promise<void> {
    tokens = allTokens.subset(numberOfTokens);
  }  

  async function deployPool(params: RawWeightedPoolDeployment = {}): Promise<void> {
    if (poolType == WeightedPoolType.WEIGHTED_POOL) {
      pool = await WeightedPool.create({
        vault,
        tokens,
        weights,
        swapFeePercentage: POOL_SWAP_FEE_PERCENTAGE,
        ...params,
      });
    } else if (poolType == WeightedPoolType.LIQUIDITY_BOOTSTRAPPING_POOL) {
      pool = await LiquidityBootstrappingPool.create({
        vault,
        tokens,
        weights,
        swapFeePercentage: POOL_SWAP_FEE_PERCENTAGE,
        owner: lp.address, // needed for LBP tests (only owner can join)
        ...params,
      });
    }
  } 

  async function initJoin(): Promise<void> {
    const { amountsIn, dueProtocolFeeAmounts } = await pool.init({ recipient, initialBalances, from: lp });
  }  

  async function initPool(): Promise<void> {
    await pool.init({ initialBalances, from: lp });
  }

  // add liquidity via depositing 'token amount' for single asset deposit
  async function joinGivenIn(): Promise<void> {
    let expectedBptOut: BigNumberish;
    const amountsIn = ZEROS.map((n, i) => (i === 1 ? fp(0.1) : n));
    expectedBptOut = await pool.estimateBptOut(amountsIn, initialBalances);
    const minimumBptOut = pct(expectedBptOut, 0.99);
    const result = await pool.joinGivenIn({ amountsIn, minimumBptOut, recipient, from: lp });  
  }  

  // add liquidity via depositing 'shares amount' for single asset deposit
  async function joinGivenOut(): Promise<void> {
    const token = 0;
    const bptOut = fp(2);
    const previousBptBalance = await pool.balanceOf(recipient);
    const expectedAmountIn = await pool.estimateTokenIn(token, bptOut, initialBalances);
    const result = await pool.joinGivenOut({ recipient, bptOut, token, from: lp });
  }  

  // add liquidity via depositing 'shares amount' for all asset deposit
  async function joinAllGivenOut(): Promise<void> {
    const previousBptBalance = await pool.balanceOf(recipient);
    const bptOut = previousBptBalance.div(2);
    const expectedAmountsIn = initialBalances.map((balance) => balance.div(2));
    const result = await pool.joinAllGivenOut({ recipient, bptOut, from: lp });  
  }  

  // remove liquidity via withdrawing 'token amount' for a single asset 
  async function singleExitGivenIn(): Promise<void> {
    const token = 0;
    const previousBptBalance = await pool.balanceOf(lp);
    const bptIn = pct(previousBptBalance, 0.2);
    const expectedTokenOut = await pool.estimateTokenOut(token, bptIn);
    const result = await pool.singleExitGivenIn({ from: lp, bptIn, token }); 

    console.log('singleExitGivenIn: '+ bptIn); 
    console.log('singleExitGivenIn: '+ expectedTokenOut); 
    console.log('singleExitGivenIn: '+ result.amountsOut);

  }  

  // remove liquidity via withdrawing 'token amount' for multiple assets 
  async function multiExitGivenIn(): Promise<void> {
    const previousBptBalance = await pool.balanceOf(lp);
    const totalBPT = await pool.totalSupply();
    const expectedAmountsOut = initialBalances.map((balance) => balance.mul(previousBptBalance).div(totalBPT));
    const result = await pool.multiExitGivenIn({ from: lp, bptIn: previousBptBalance });
  }  

  // remove liquidity via withdrawing 'shares amount' for a single asset 
  async function exitGivenOut(): Promise<void> {
    const previousBptBalance = await pool.balanceOf(lp);
    const amountsOut = initialBalances.map((balance) => balance.div(2));
    const expectedBptIn = previousBptBalance.div(2);
    const maximumBptIn = pct(expectedBptIn, 1.01);
    const result = await pool.exitGivenOut({ from: lp, amountsOut, maximumBptIn });

    console.log('exitGivenOut: '+ maximumBptIn); 
    console.log('exitGivenOut: '+ amountsOut); 
    console.log('exitGivenOut: '+ result.amountsOut);
  } 

  // swap output token given input token
  async function swapGivenIn(): Promise<void> {
    const amount = fp(0.1);
    const amountWithFees = fpMul(amount, POOL_SWAP_FEE_PERCENTAGE.add(fp(1)));
    const expectedAmountOut = await pool.estimateGivenIn({ in: 1, out: 0, amount: amountWithFees });
    const result = await pool.swapGivenIn({ in: 1, out: 0, amount: amountWithFees, from: lp, recipient });
  }  

  // swap input token given output token 
  async function swapGivenOut(): Promise<void> {
    const amount = fp(0.1);
    const expectedAmountIn = await pool.estimateGivenOut({ in: 1, out: 0, amount });
    const result = await pool.swapGivenOut({ in: 1, out: 0, amount, from: lp, recipient }); 
  }  

  async function poolInfo(context: string): Promise<void> {
    const poolTokens = await pool.getTokens();
    const previousBptBalance = await pool.balanceOf(recipient);
    

    let message: string = "\n        Weighted pool info: " + context + "+\n";
    message = message + '        ------------------------\n'
    message = message + '        name: '+await pool.name()+'\n'
    message = message + '        symbol: '+await pool.symbol()+'\n'
    message = message + '        vault address: '+await pool.vault.address+'\n'
    message = message + '        tokens: '+ await poolTokens.tokens +'\n'
    message = message + '        balances: '+ await poolTokens.balances +'\n'
    message = message + '        decimal: '+ await pool.decimals() +'\n'
    message = message + '        supply: '+ await pool.totalSupply() +'\n'
    message = message + '        recipient balance: ' + previousBptBalance+'\n'
    message = message + '        swap fee: ' + await pool.getSwapFeePercentage()+'\n'
    message = message + '        ------------------------\n'
    console.log(message);  
  }  
  
  before('setup signers', async () => {
    [, lp, recipient, other] = await ethers.getSigners();
  });

  describe('allInOneGo', () => {

    context('Create pool', () => {

      it('deploy pool setup sequence', async () => {
        await deployVault();
        await deployTokens();
        await defineTokens(numberOfTokens);
        await deployPool({ fromFactory: true });
        await poolInfo('deploy pool');
      }); 

    }); 
    
    context('Join pool', () => {  
      
      it('join', async () => {
        await deployVault();
        await deployTokens();
        await defineTokens(numberOfTokens);
        await deployPool({ fromFactory: true });
        await initJoin();
        await poolInfo('join pool');
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
      
    }); 

    context('Exit pool', () => {

      it('deploy and init', async () => {
        expect(true);
        await deployVault();
        await deployTokens();
        await defineTokens(numberOfTokens);      
        await deployPool();
        await initPool();
        await poolInfo('deploy and init');
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
      
      it('exit given out', async () => {
        expect(true);
        await deployVault();
        await deployTokens();
        await defineTokens(numberOfTokens);      
        await deployPool();
        await initPool();    
        await poolInfo('exit given out'); 
        await exitGivenOut();
        await poolInfo('exit given out');
      });       
  
    });

    context('Swap', () => {

      it('swap given in', async () => {
        expect(true); 
        await deployVault();
        await deployTokens();
        await defineTokens(numberOfTokens);
        await deployPool({ fromFactory: true });
        await initPool();
        await swapGivenIn();
        await poolInfo('swap given in');
      }); 
  
      it('swap given out', async () => {
        expect(true); 
        await deployVault();
        await deployTokens();
        await defineTokens(numberOfTokens);
        await deployPool({ fromFactory: true });
        await initPool();
        await swapGivenOut();
        await poolInfo('swap given out');
      }); 
  
    });       

  });  
  
}
