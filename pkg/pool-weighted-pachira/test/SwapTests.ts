// scripts/deployAndInteract.ts
import { ethers } from 'hardhat';
import { expect } from 'chai';
import { Contract } from 'ethers';
import { PachiraWeightedPool } from '../typechain';
//import { Mock } from '../typechain/contracts/test/';
import { PachiraWeightedPool__factory } from '../typechain/factories/contracts/PachiraWeightedPool__factory';      
import { TimelockAuthorizer__factory } from '../typechain/factories/contracts/authorizer/TimelockAuthorizer__factory';     
//import { Vault } from '../typechain/contracts/Vault';        
import { Vault__factory } from '../typechain/factories/contracts/Vault__factory';       
import { toNormalizedWeights } from '@balancer-labs/balancer-js';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { defaultAbiCoder } from '@ethersproject/abi';

import { MAX_UINT256, ZERO_ADDRESS } from '@balancer-labs/v2-helpers/src/constants';
import { BigNumber, BigNumberish, fp, fpMul, pct, bn} from '@balancer-labs/v2-helpers/src/numbers';
import { RawWeightedPoolDeployment} from '@balancer-labs/v2-helpers/src/models/pools/weighted/types';
import { MONTH } from '@balancer-labs/v2-helpers/src/time';
import Vault from '@balancer-labs/v2-helpers/src/models/vault/Vault';
import TokenList from '@balancer-labs/v2-helpers/src/models/tokens/TokenList';
import BaseWeightedPool from '@balancer-labs/v2-helpers/src/models/pools/weighted/BaseWeightedPool';
import {SwapRequest, SwapKind, FundManagement, JoinPoolRequest, WeightedPoolEncoder} from '@balancer-labs/balancer-js';
import { deploy, deployedAt, getArtifact} from '@balancer-labs/v2-helpers/src/contract';
import { impersonateAccount, setBalance } from '@nomicfoundation/hardhat-network-helpers';

const NAME = 'Pachira Balancer Pool Token';
const SYMBOL = 'BPT';
const POOL_SWAP_FEE_PERCENTAGE = fp(0.01);

const numTokens = 3;
const WEIGHTS = toNormalizedWeights([fp(30), fp(70), fp(5), fp(5)].slice(0, numTokens));
const INITIAL_BALANCES = [fp(0.9), fp(1.8), fp(2.7), fp(3.6)];
const TOKEN_SYMBOLS = ['MKR', 'DAI', 'SNX', 'BAT'].slice(0, numTokens)
const weights: BigNumberish[] = WEIGHTS.slice(0, numTokens);
const initialBalances = INITIAL_BALANCES.slice(0, numTokens);
const ZEROS = Array(3).fill(bn(0));


const BASE_PAUSE_WINDOW_DURATION = MONTH * 3;
const BASE_BUFFER_PERIOD_DURATION = MONTH;

let vault: Vault;
let tokens: TokenList;
let allTokens: TokenList;
let lp: SignerWithAddress;
let deployer: SignerWithAddress;
let recipient: SignerWithAddress;
let other: SignerWithAddress;
let poolOwner: SignerWithAddress;
let vaultSigner: SignerWithAddress;
let admin: SignerWithAddress;
let pachiraFactory: PachiraWeightedPool;
let pachiraPool: BaseWeightedPool;
let authorizer: Contract;
//let authorizer: Contract, vault: Contract;


async function deployVault2(): Promise<void>  {
  const entrypoint = await deploy('MockAuthorizerAdaptorEntrypoint');
  authorizer = await new TimelockAuthorizer__factory(deployer).deploy(admin.address, ZERO_ADDRESS, entrypoint.address, MONTH)
  //authorizer = await deploy('TimelockAuthorizer', { args: [admin.address, ZERO_ADDRESS, entrypoint.address, MONTH] });  
  //await deploy('Vault', { args: [authorizer, ZERO_ADDRESS, 0, 0] });
}


async function deployVault(): Promise<void> {

  (vault = await Vault.create({ admin }));
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

async function deployWeightedPoolContract(): Promise<void>  {
  console.log('     Deploying WeightedPool ...');  
  const params: RawWeightedPoolDeployment = {}
  let null_addr_arr:string[] = ['0x0000000000000000000000000000000000000000',
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

  //const feesProviderAddress = vault.connect(recipient).getFeesProvider().address
  const feesProviderAddress = vault.getFeesProvider().address

  pachiraFactory = await new PachiraWeightedPool__factory(deployer).deploy(pool_params,
                                              vault.address, 
                                              feesProviderAddress,
                                              BASE_PAUSE_WINDOW_DURATION, 
                                              BASE_BUFFER_PERIOD_DURATION,
                                              recipient.address); 
                                                                                       
                                                                                    
} 

async function swapPool(): Promise<void> {

    const amount = fp(0.1);
    const amountWithFees = fpMul(amount, POOL_SWAP_FEE_PERCENTAGE.add(fp(1)));
    const poolId = await pachiraFactory.getPoolId();
    const poolTokens = await vault.getPoolTokens(poolId)
    

    const abi = ['uint256', 'uint256[]'];
    const data = [SwapKind.GivenIn, poolTokens.balances];
    const userData = defaultAbiCoder.encode(abi,data); 
    let swapRequest: SwapRequest;

    swapRequest = {
      kind: SwapKind.GivenIn,
      tokenIn: tokens.get(1).instance.address,
      tokenOut: tokens.get(0).instance.address,
      amount: amountWithFees,
      poolId: poolId,
      lastChangeBlock: poolTokens.lastChangeBlock,
      from : lp.address,
      to: recipient.address,
      userData: '0x',
    };    

    const balTknIn = poolTokens.balances[1]
    const balTknOut = poolTokens.balances[0]

    const userBalanceBefore = await ethers.provider.getBalance(recipient.address);
    const poolTokensBefore = await vault.getPoolTokens(poolId)
    const tx2 = await pachiraFactory.connect(vaultSigner).onSwap(swapRequest,balTknIn,balTknOut); 
    const userBalanceAfter = await ethers.provider.getBalance(recipient.address);


    const poolTokensAfter = await vault.getPoolTokens(poolId)

    const receipt = await tx2.wait();    

    if (tx2.data) {
      const contract = new ethers.Contract(tx2.to!, [], pachiraFactory.provider);
    }

    console.log(receipt) 

}  
  
async function initBasePool(): Promise<void> {
    const poolId = await pachiraFactory.getPoolId();
    pachiraPool = new BaseWeightedPool(pachiraFactory,
                                        poolId,
                                        vault,
                                        tokens,
                                        weights,
                                        0,
                                        recipient);


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
  
                            
  //console.log(tx)                         
}
    
async function joinGivenIn(): Promise<void> {
      let expectedBptOut: BigNumberish;
      const amountsIn = ZEROS.map((n, i) => (i === 1 ? fp(0.1) : n));
      expectedBptOut = await pachiraPool.estimateBptOut(amountsIn, initialBalances);
      const minimumBptOut = pct(expectedBptOut, 0.99);
      const result = await pachiraPool.joinGivenIn({ amountsIn, minimumBptOut, recipient, from: lp });  
}  

// swap output token given input token
async function swapGivenIn(): Promise<void> {
    const amount = fp(0.1);
    const amountWithFees = fpMul(amount, POOL_SWAP_FEE_PERCENTAGE.add(fp(1)));
    const expectedAmountOut = await pachiraPool.estimateGivenIn({ in: 1, out: 0, amount: amountWithFees });

    console.log(expectedAmountOut);  

    const result = await pachiraPool.swapGivenIn({ in: 1, out: 0, amount: amountWithFees, from: lp, recipient });
}  

// swap input token given output token 
async function swapGivenOut(): Promise<void> {
    const amount = fp(0.1);
    const expectedAmountIn = await pachiraPool.estimateGivenOut({ in: 1, out: 0, amount });
    const result = await pachiraPool.swapGivenOut({ in: 1, out: 0, amount, from: lp, recipient }); 
} 

async function poolInfo2(context: string): Promise<void> {
  const poolId = await pachiraFactory.getPoolId();
  const poolTokens = await vault.getPoolTokens(poolId)

  let message: string = "\n        Weighted pool info: " + context + "+\n";
  message = message + '        ------------------------\n'
  message = message + '        vault address: '+await vault.address+'\n'
  message = message + '        tokens: '+ await TOKEN_SYMBOLS +'\n'
  message = message + '        balances: '+ await poolTokens.balances +'\n'
  message = message + '        tkn addresses: '+ await poolTokens.tokens +'\n'
  message = message + '        ------------------------\n'
  console.log(message);  

}  

async function poolInfo(context: string): Promise<void> {
    const poolTokens = await pachiraPool.getTokens();
    const previousBptBalance = await pachiraPool.balanceOf(recipient);
    

    let message: string = "\n        Weighted pool info: " + context + "+\n";
    message = message + '        ------------------------\n'
    message = message + '        name: '+await pachiraPool.name()+'\n'
    message = message + '        symbol: '+await pachiraPool.symbol()+'\n'
    message = message + '        vault address: '+await pachiraPool.vault.address+'\n'
    message = message + '        tokens: '+ await TOKEN_SYMBOLS +'\n'
    message = message + '        balances: '+ await poolTokens.balances +'\n'
    message = message + '        tkn addresses: '+ await poolTokens.tokens +'\n'
    message = message + '        decimal: '+ await pachiraPool.decimals() +'\n'
    message = message + '        supply: '+ await pachiraPool.totalSupply() +'\n'
    message = message + '        recipient balance: ' + previousBptBalance+'\n'
    message = message + '        swap fee: ' + await pachiraPool.getSwapFeePercentage()+'\n'
    message = message + '        ------------------------\n'
    console.log(message);  
}    

before('setup signers', async () => {
    [ ,admin, lp, poolOwner, recipient, deployer, other] = await ethers.getSigners();
});  


describe("PachiraWeightedPool", () => {

    context('Engage factory contract PachiraWeightedPool.sol', () => {
      
      it('swap given in', async () => {
        expect(true);
        await deployVault2()
        await deployVault();
        await deployTokens();
        await deployWeightedPoolContract();
        await initRawJoin()
        await swapPool();
      });           
   
    }); 
});      



