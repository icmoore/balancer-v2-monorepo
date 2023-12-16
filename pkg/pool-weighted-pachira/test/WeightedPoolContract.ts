// scripts/deployAndInteract.ts
import { ethers } from 'hardhat';
import { Contract } from 'ethers';
import { expect } from 'chai';
import { WeightedPoolFactory } from '../typechain';
import { MONTH } from '@balancer-labs/v2-helpers/src/time';
import Vault from '@balancer-labs/v2-helpers/src/models/vault/Vault';
import { toNormalizedWeights } from '@balancer-labs/balancer-js';
import TokenList from '@balancer-labs/v2-helpers/src/models/tokens/TokenList';
import * as expectEvent from '@balancer-labs/v2-helpers/src/test/expectEvent';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { fp } from '@balancer-labs/v2-helpers/src/numbers';
import { deploy, deployedAt} from '@balancer-labs/v2-helpers/src/contract';
import { randomBytes } from 'ethers/lib/utils';

let vault: Vault;
let tokens: TokenList;
let allTokens: TokenList;
let lp: SignerWithAddress;
let factory: Contract;
let pool: Contract;
let rateProviders: string[];
let owner: SignerWithAddress;

const NAME = 'Balancer Pool Token';
const SYMBOL = 'BPT';
const POOL_SWAP_FEE_PERCENTAGE = fp(0.01);
const WEIGHTS = toNormalizedWeights([fp(30), fp(70), fp(5), fp(5)]);
const INITIAL_BALANCES = [fp(0.9), fp(1.8), fp(2.7), fp(3.6)];

const BASE_PAUSE_WINDOW_DURATION = MONTH * 3;
const BASE_BUFFER_PERIOD_DURATION = MONTH;

async function deployVault(): Promise<void> {
  vault = await Vault.create();
}    

async function deployTokens(): Promise<void> {
    tokens = await TokenList.create(['MKR', 'DAI', 'SNX', 'BAT'], { sorted: true });
    //await allTokens.mint({ to: lp, amount: tokenAmounts });
    //await allTokens.approve({ to: vault.address, from: lp, amount: tokenAmounts }); 
  }  

async function initPool(): Promise<void> {
    const initialBalances = INITIAL_BALANCES.slice(0, tokens.length);
}

async function deployFactoryContract(): Promise<void>  {
  // Interacting with WeightedPoolFactory.sol
  console.log('     Deploying WeightedPoolFactory ...');  
  const WeightedPoolFactory = await ethers.getContractFactory('WeightedPoolFactory');
  factory = await WeightedPoolFactory.deploy(vault.address, 
                                                vault.getFeesProvider().address,
                                                BASE_PAUSE_WINDOW_DURATION, 
                                                BASE_BUFFER_PERIOD_DURATION
                                            );    
}    

async function createPool(): Promise<void>  {                       
  rateProviders = await tokens.asyncMap(async () => (await deploy('v2-pool-utils/MockRateProvider')).address);  
  const receipt = await (
    await factory.create(
      NAME,
      SYMBOL,
      tokens.addresses,
      WEIGHTS,
      rateProviders,
      POOL_SWAP_FEE_PERCENTAGE,
      owner.address,
      randomBytes(32)
    )
  ).wait();

  const pool_create_event = expectEvent.inReceipt(receipt, 'PoolCreated');    
  pool = await deployedAt('WeightedPool', pool_create_event.args.pool);
  console.log('     WeightedPool: ' + await pool_create_event.args.pool);         
  console.log('         - name: ' + await pool.name());  
  console.log('         - symbol: ' + await pool.symbol());  
  console.log('         - swap fees: ' + await pool.getSwapFeePercentage());   
  console.log('         - owner: ' + await pool.getOwner());  
  console.log('         - decimals: ' + await pool.decimals());  
                             
}

before('setup signers', async () => {
    [, owner] = await ethers.getSigners();
});  

beforeEach('deploy vault', () => {
     deployVault();
});

beforeEach('deploy and define tokens', () => {
    deployTokens();
});

describe("SimpleRefactor", () => {

    context('Engage contract', () => {

        it('deploy factory contract ', async () => {
            await deployFactoryContract();
            expect(true);
          });        

        it('deploy pool', async () => {
          await createPool();
          expect(true);
        }); 

        it('init pool', async () => {
            //await initPool();
            const initialBalances = INITIAL_BALANCES.slice(0, tokens.length);
            //const res = await factory.init({ initialBalances, from: lp })
            expect(true);
        }); 

        it('simple test function', async () => {
            const result = await factory.getTestMessage() 
            console.log('         '+result)
            expect(true);
        });    
  
      }); 

});      