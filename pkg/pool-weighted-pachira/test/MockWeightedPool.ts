import { ethers } from 'hardhat';
import { expect } from 'chai';
import { BigNumber, Contract, ContractReceipt } from 'ethers';
import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/dist/src/signer-with-address';

import { MockNewBasePool__factory } from '../typechain/factories/contracts/test/MockNewBasePool__factory'; 
import { MockNewBasePool} from '../typechain/contracts/test/MockNewBasePool'; 
import * as expectEvent from '@balancer-labs/v2-helpers/src/test/expectEvent';
import { expectTransferEvent } from '@balancer-labs/v2-helpers/src/test/expectTransfer';
import TokenList from '@balancer-labs/v2-helpers/src/models/tokens/TokenList';
import { advanceTime, MONTH } from '@balancer-labs/v2-helpers/src/time';
import { actionId } from '@balancer-labs/v2-helpers/src/models/misc/actions';
import { deploy, deployedAt } from '@balancer-labs/v2-helpers/src/contract';
import {
  JoinPoolRequest,
  ExitPoolRequest,
  SwapRequest,
  PoolSpecialization,
  WeightedPoolEncoder,
  SingleSwap,
  SwapKind,
  FundManagement,
} from '@balancer-labs/balancer-js';
import { BigNumberish, bn, fp } from '@balancer-labs/v2-helpers/src/numbers';
import { ANY_ADDRESS, DELEGATE_OWNER, MAX_UINT256, ZERO_ADDRESS } from '@balancer-labs/v2-helpers/src/constants';
import { Account } from '@balancer-labs/v2-helpers/src/models/types/types';
import TypesConverter from '@balancer-labs/v2-helpers/src/models/types/TypesConverter';
import { random } from 'lodash';
import { defaultAbiCoder } from 'ethers/lib/utils';
import { sharedBeforeEach } from '@balancer-labs/v2-common/sharedBeforeEach';
import Vault from '@balancer-labs/v2-helpers/src/models/vault/Vault';
import { impersonateAccount, setBalance } from '@nomicfoundation/hardhat-network-helpers';

let singleSwap: SingleSwap;
let swapRequest: SwapRequest;
const RECOVERY_MODE_EXIT_KIND = 255;
let pool: Contract, minimalPool: Contract;
let poolId: string, minimalPoolId: string;
let initialBalances: BigNumber[];
let newPoolFactory: MockNewBasePool;

let sender: SignerWithAddress, recipient: SignerWithAddress;

const PROTOCOL_SWAP_FEE_PERCENTAGE = fp(0.3);
const OTHER_EXIT_KIND = 1;
const OTHER_JOIN_KIND = 1;

describe('NewBasePool', function () {
  let admin: SignerWithAddress,
    poolOwner: SignerWithAddress,
    deployer: SignerWithAddress,
    other: SignerWithAddress,
    vaultSigner: SignerWithAddress;

  let authorizer: Contract, vault: Contract;
  let tokens: TokenList;

  const MIN_SWAP_FEE_PERCENTAGE = fp(0.000001);

  const PAUSE_WINDOW_DURATION = MONTH * 3;
  const BUFFER_PERIOD_DURATION = MONTH;

  before(async () => {
    [, admin, poolOwner, deployer, other] = await ethers.getSigners();
  });

  sharedBeforeEach(async () => {
    ({ instance: vault, authorizer } = await Vault.create({ admin }));

    // We want to call Pools manually from the Vault address for some tests, so we impersonate the Vault and send it
    // some ETH in order to be able to have it send transactions.
    await impersonateAccount(vault.address);
    await setBalance(vault.address, fp(100));
    vaultSigner = await SignerWithAddress.create(ethers.provider.getSigner(vault.address));

    tokens = await TokenList.create(['DAI', 'MKR', 'SNX'], { sorted: true });

    


   
  });

  function deployBasePool(
    params: {
      specialization?: PoolSpecialization;
      tokens?: TokenList | string[];
      assetManagers?: string[];
      swapFeePercentage?: BigNumberish;
      pauseWindowDuration?: number;
      bufferPeriodDuration?: number;
      owner?: Account;
      from?: SignerWithAddress;
    } = {}
  ): Promise<Contract> {
    let {
      specialization,
      tokens: poolTokens,
      assetManagers,
      swapFeePercentage,
      pauseWindowDuration,
      bufferPeriodDuration,
      owner,
      from,
    } = params;
    if (!specialization) specialization = PoolSpecialization.GeneralPool;
    if (!poolTokens) poolTokens = tokens;
    if (!assetManagers) assetManagers = Array(poolTokens.length).fill(ZERO_ADDRESS);
    if (!swapFeePercentage) swapFeePercentage = MIN_SWAP_FEE_PERCENTAGE;
    if (!pauseWindowDuration) pauseWindowDuration = 0;
    if (!bufferPeriodDuration) bufferPeriodDuration = 0;
    if (!owner) owner = ZERO_ADDRESS;
    if (!from) from = deployer;
    

    return deploy('MockNewBasePool', {
      from,
      args: [
        vault.address,
        specialization,
        'Balancer Pool Token',
        'BPT',
        Array.isArray(poolTokens) ? poolTokens : poolTokens.addresses,
        assetManagers,
        pauseWindowDuration,
        bufferPeriodDuration,
        TypesConverter.toAddress(owner),
      ],
    });
  }

  async function deployPool(): Promise<void> {

    sender = poolOwner;
    recipient = poolOwner;
    const initialBalancePerToken = 1000;

    initialBalances = Array(tokens.length).fill(fp(initialBalancePerToken));
    pool = await deployBasePool({ pauseWindowDuration: MONTH });
    poolId = await pool.getPoolId();

    minimalPool = await deployBasePool({
      pauseWindowDuration: MONTH,
      specialization: PoolSpecialization.MinimalSwapInfoPool,
    });
    minimalPoolId = await minimalPool.getPoolId();

    const request: JoinPoolRequest = {
      assets: tokens.addresses,
      maxAmountsIn: initialBalances,
      userData: WeightedPoolEncoder.joinInit(initialBalances),
      fromInternalBalance: false,
    };

    // We mint twice the initial pool balance to fund two pools.
    await tokens.mint({ to: sender, amount: fp(2 * initialBalancePerToken + random(1000)) });
    await tokens.approve({ from: sender, to: vault });

    await vault.connect(sender).joinPool(poolId, sender.address, recipient.address, request);
    await vault.connect(sender).joinPool(minimalPoolId, sender.address, recipient.address, request);    

  };
  

  async function deployMockPoolContract(): Promise<void>  {
    console.log('     Deploying MockNewBasePool ...');  
    [, admin, poolOwner, deployer, other] = await ethers.getSigners();
                                        
    newPoolFactory = await new MockNewBasePool__factory(deployer).deploy(vault.address,
                                                                      PoolSpecialization.GeneralPool,
                                                                      'Balancer Pool Token',
                                                                      'BPT',
                                                                      Array.isArray(tokens) ? tokens : tokens.addresses,
                                                                      Array(tokens.length).fill(ZERO_ADDRESS),
                                                                      0,
                                                                      0,
                                                                      TypesConverter.toAddress(ZERO_ADDRESS));   
                                                                                      
  } 

  async function swapPoolFactory(): Promise<void> {

    const poolId2 = await newPoolFactory.getPoolId();
    const lastChangeBlock = (await vault.getPoolTokens(poolId2)).lastChangeBlock;
    swapRequest = {
      kind: SwapKind.GivenIn,
      tokenIn: tokens.get(0).instance.address,
      tokenOut: tokens.get(1).instance.address,
      amount: 1,
      poolId: poolId2,
      lastChangeBlock: lastChangeBlock,
      from: poolOwner.address,
      to: poolOwner.address,
      userData: '0xdeadbeef',
    };

    const onSwap =
    'onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256,uint256)';
    //const tx = await newPoolFactory.connect(vaultSigner).callStatic[onSwap](swapRequest, 0, 0); 
    
    const poolTokensBefore = await vault.getPoolTokens(poolId2)
    const tx2 = await newPoolFactory.connect(vaultSigner)[onSwap](swapRequest, 0, 0);
    const poolTokensAfter = await vault.getPoolTokens(poolId2)
    console.log(poolTokensBefore.balances) 
    console.log(poolTokensAfter.balances) 
  }  

  async function swapPool(): Promise<void> {

    let normalSwap: (singleSwap: SingleSwap) => Promise<ContractReceipt>;

    singleSwap = {
      poolId: minimalPoolId,
      kind: SwapKind.GivenIn,
      assetIn: tokens.get(0).instance.address,
      assetOut: tokens.get(1).instance.address,
      amount: 1, // Needs to be > 0
      userData: '0xdeadbeef',
    };

    const lastChangeBlock = (await vault.getPoolTokens(minimalPoolId)).lastChangeBlock;
    swapRequest = {
      kind: singleSwap.kind,
      tokenIn: singleSwap.assetIn,
      tokenOut: singleSwap.assetOut,
      amount: singleSwap.amount,
      poolId: singleSwap.poolId,
      lastChangeBlock: lastChangeBlock,
      from: sender.address,
      to: recipient.address,
      userData: singleSwap.userData,
    };

    const funds: FundManagement = {
      sender: poolOwner.address,
      recipient: poolOwner.address,
      fromInternalBalance: false,
      toInternalBalance: false,
    };

    const onSwap =
    'onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256,uint256)';
    const tx = await minimalPool.connect(vaultSigner).callStatic[onSwap](swapRequest, 0, 0);
    expect(tx).to.be.eq(await minimalPool.ON_SWAP_MINIMAL_RETURN());
    //console.log(tx)  
    const tx2 = await minimalPool.connect(vaultSigner)[onSwap](swapRequest, 0, 0);

  }  

  async function joinPool(): Promise<void> {

    let normalJoin: () => Promise<ContractReceipt>;

    const joinRequest: JoinPoolRequest = {
      assets: tokens.addresses,
      maxAmountsIn: Array(tokens.length).fill(fp(1)),
      userData: defaultAbiCoder.encode(['uint256'], [OTHER_JOIN_KIND]),
      fromInternalBalance: false,
    };    

    normalJoin = async () =>
    (await vault.connect(sender).joinPool(poolId, sender.address, recipient.address, joinRequest)).wait();

    const receipt = await normalJoin();
    expectEvent.inIndirectReceipt(receipt, pool.interface, 'InnerOnJoinPoolCalled', {
      sender: sender.address,
      balances: initialBalances,
      userData: defaultAbiCoder.encode(['uint256'], [OTHER_JOIN_KIND]),
    });

  }  

  async function exitPool(): Promise<void> {

    let normalExit: () => Promise<ContractReceipt>;

    const exitRequest: ExitPoolRequest = {
      assets: tokens.addresses,
      minAmountsOut: Array(tokens.length).fill(0),
      userData: defaultAbiCoder.encode(['uint256'], [OTHER_EXIT_KIND]),
      toInternalBalance: false,
    };    

    normalExit = async () =>
    (await vault.connect(sender).exitPool(poolId, sender.address, recipient.address, exitRequest)).wait();

    const receipt = await normalExit();
    expectEvent.inIndirectReceipt(receipt, pool.interface, 'InnerOnExitPoolCalled', {
      sender: sender.address,
      balances: initialBalances,
      userData: defaultAbiCoder.encode(['uint256'], [OTHER_EXIT_KIND]),
    });

    const onExitReturn = await pool
    .connect(vaultSigner)
    .callStatic.onExitPool(poolId, sender.address, recipient.address, initialBalances, 0, 0, '0x');
    expect(onExitReturn).to.be.deep.eq([
      Array(tokens.length).fill(await pool.ON_EXIT_RETURN()),
      Array(tokens.length).fill(bn(0)),
    ]);    

  }  



  describe("MockPool", () => {

      context('Engage factory contract MockPoolPool.sol', () => {
        
        it('test mock and swap pool', async () => {
          expect(true);
          await deployMockPoolContract();
          await swapPoolFactory();
        });    

        it('test swap pool factory', async () => {
          expect(true);
          await deployPool();
          await swapPool();
        });          
        
        it('test join pool', async () => {
          expect(true);
          await deployPool();
          await joinPool();
        });  
        
        it('test exit pool', async () => {
          expect(true);
          await deployPool();
          await exitPool();
        });               
    
      }); 
  });    



});