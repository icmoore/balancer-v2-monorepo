// scripts/deployAndInteract.ts
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { PachiraWeightedPool } from '../typechain';
import { PachiraWeightedPool__factory } from '../typechain/factories/contracts/PachiraWeightedPool__factory';          
import { getPoolAddress, toNormalizedWeights } from '@balancer-labs/balancer-js';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { defaultAbiCoder } from '@ethersproject/abi';

import { ANY_ADDRESS, MAX_GAS_LIMIT, MAX_UINT256, ZERO_ADDRESS } from '@balancer-labs/v2-helpers/src/constants';
import { encodeJoin } from '@balancer-labs/v2-helpers/src/models/pools/mockPool';
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
let sender: SignerWithAddress;
let deployer: SignerWithAddress;
let recipient: SignerWithAddress;
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
    const joinKind = 0;
    const abi = ['uint256', 'uint256[]'];
    const data = [joinKind, initialBalances];
    const poolId = await pachiraFactory.getPoolId();
    const scalingFactors = await pachiraFactory.getScalingFactors();
    const userData = defaultAbiCoder.encode(abi,data);                                         
    const tx = await pachiraFactory.init(poolId, sender.address, recipient.address, scalingFactors, userData) 
    console.log(tx);                                   
}    

async function initJoin(): Promise<void> {
    const poolId = await pachiraFactory.getPoolId();
    const poolTokens = await vault.getPoolTokens(poolId)
    const lastChangeBlock = (await poolTokens).lastChangeBlock
    const swapFeePercentage = await pachiraFactory.getSwapFeePercentage()

    const joinKind = 0;
    const abi = ['uint256', 'uint256[]'];
    const data = [joinKind, initialBalances];
    const userData = defaultAbiCoder.encode(abi,data); 
    
    console.log('vault: '+ vault.address);
    console.log('poolId: '+ poolId);
    console.log('poolId: '+ getPoolAddress(poolId));
    console.log('lp.address: '+ lp.address);
    console.log('sender.address: '+ sender.address);

    const tx = await pachiraFactory.onJoinPool(poolId, 
                                pachiraFactory.address, 
                                recipient.address, 
                                initialBalances, 
                                lastChangeBlock, 
                                swapFeePercentage, 
                                userData)

    console.log(tx);                   
}  
    
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
    [,lp, recipient, sender, deployer] = await ethers.getSigners();
});  

describe("PachiraWeightedPool", () => {

    context('Engage contract', () => {

      it('deploy vault and tokens', async () => {
        await deployVault();
        await deployTokens();
        await deployWeightedPoolContract();
        await initContractPool()
        await initJoin();
        //await poolInfo('test') 
        expect(true);
      });   
            
    }); 
});      



