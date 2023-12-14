// scripts/deployAndInteract.ts
import { ethers } from 'hardhat';
import { Contract } from 'ethers';
import { HelloWorld } from '../typechain';
import { SimpleBalancerInteraction } from '../typechain';
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

const BASE_PAUSE_WINDOW_DURATION = MONTH * 3;
const BASE_BUFFER_PERIOD_DURATION = MONTH;

async function deployVault(): Promise<void> {
  vault = await Vault.create();
}    

async function deployTokens(): Promise<void> {
  const tokenAmounts = fp(100);
  allTokens = await TokenList.create(['MKR', 'DAI', 'SNX', 'BAT', 'GRT'], { sorted: true });
  await allTokens.mint({ to: lp, amount: tokenAmounts });
  await allTokens.approve({ to: vault.address, from: lp, amount: tokenAmounts }); 
}  

async function main() {
  const [, owner] = await ethers.getSigners();

  await deployVault();
  await deployTokens();

  // Interacting with SimpleBalancerInteraction.sol
  console.log('Deploying SimpleBalancerInteraction ...\n');
  const SimpleBalancerInteraction = await ethers.getContractFactory('SimpleBalancerInteraction');
  const balancerInteraction = await SimpleBalancerInteraction.deploy(
    allTokens.addresses[0],
    allTokens.addresses[1],
    allTokens.addresses[2]
  );  

  await balancerInteraction.deployed();
  console.log('SimpleBalancerInteraction deployed to:', balancerInteraction.address);  
  const name = await balancerInteraction.getContractName();
  console.log('Contract name:', name);
  console.log('');

  // Interacting with WeightedPoolFactory.sol
  console.log('Deploying WeightedPoolFactory ...\n');  
  const WeightedPoolFactory = await ethers.getContractFactory('WeightedPoolFactory');
  factory = await WeightedPoolFactory.deploy(vault.address, 
    vault.getFeesProvider().address,
    BASE_PAUSE_WINDOW_DURATION, 
    BASE_BUFFER_PERIOD_DURATION
    );

    tokens = await TokenList.create(['MKR', 'DAI', 'SNX', 'BAT'], { sorted: true });
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

  const event = expectEvent.inReceipt(receipt, 'PoolCreated');    
  pool = await deployedAt('WeightedPool', event.args.pool)
  console.log('WeightedPool: ' + await event.args.pool);         
  console.log('     - name: ' + await pool.name());  
  console.log('     - symbol: ' + await pool.symbol());  
  console.log('     - swap fees: ' + await pool.getSwapFeePercentage());   
  console.log('     - owner: ' + await pool.getOwner());  
  console.log('     - decimals: ' + await pool.decimals());  
                             
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });