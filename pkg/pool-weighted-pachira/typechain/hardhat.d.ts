/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {ethers} from "ethers";
import {
  FactoryOptions,
  HardhatEthersHelpers as HardhatEthersHelpersBase,
} from "@nomiclabs/hardhat-ethers/types";

import * as Contracts from ".";

declare module "hardhat/types/runtime" {
  interface HardhatEthersHelpers extends HardhatEthersHelpersBase {
    getContractFactory(
      name: "BasePoolUserData",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasePoolUserData__factory>;
    getContractFactory(
      name: "IBasePoolFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBasePoolFactory__factory>;
    getContractFactory(
      name: "IControlledPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IControlledPool__factory>;
    getContractFactory(
      name: "IFactoryCreatedPoolVersion",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFactoryCreatedPoolVersion__factory>;
    getContractFactory(
      name: "IManagedPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IManagedPool__factory>;
    getContractFactory(
      name: "IProtocolFeeCache",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProtocolFeeCache__factory>;
    getContractFactory(
      name: "IRateProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRateProvider__factory>;
    getContractFactory(
      name: "IRateProviderPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRateProviderPool__factory>;
    getContractFactory(
      name: "IRecoveryMode",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRecoveryMode__factory>;
    getContractFactory(
      name: "IRecoveryModeHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IRecoveryModeHelper__factory>;
    getContractFactory(
      name: "IExternalWeightedMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IExternalWeightedMath__factory>;
    getContractFactory(
      name: "IAuthentication",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAuthentication__factory>;
    getContractFactory(
      name: "ISignaturesValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ISignaturesValidator__factory>;
    getContractFactory(
      name: "ITemporarilyPausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ITemporarilyPausable__factory>;
    getContractFactory(
      name: "IVersion",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVersion__factory>;
    getContractFactory(
      name: "IWETH",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IWETH__factory>;
    getContractFactory(
      name: "IERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20__factory>;
    getContractFactory(
      name: "IERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IERC20Permit__factory>;
    getContractFactory(
      name: "IProtocolFeePercentagesProvider",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProtocolFeePercentagesProvider__factory>;
    getContractFactory(
      name: "IAuthorizer",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IAuthorizer__factory>;
    getContractFactory(
      name: "IBasePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IBasePool__factory>;
    getContractFactory(
      name: "IFlashLoanRecipient",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IFlashLoanRecipient__factory>;
    getContractFactory(
      name: "IGeneralPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IGeneralPool__factory>;
    getContractFactory(
      name: "IMinimalSwapInfoPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IMinimalSwapInfoPool__factory>;
    getContractFactory(
      name: "IProtocolFeesCollector",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IProtocolFeesCollector__factory>;
    getContractFactory(
      name: "IVault",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.IVault__factory>;
    getContractFactory(
      name: "BalancerPoolToken",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BalancerPoolToken__factory>;
    getContractFactory(
      name: "BaseMinimalSwapInfoPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseMinimalSwapInfoPool__factory>;
    getContractFactory(
      name: "BasePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasePool__factory>;
    getContractFactory(
      name: "BasePoolAuthorization",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasePoolAuthorization__factory>;
    getContractFactory(
      name: "ProtocolFeeCache",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ProtocolFeeCache__factory>;
    getContractFactory(
      name: "BasePoolFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BasePoolFactory__factory>;
    getContractFactory(
      name: "FactoryWidePauseWindow",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.FactoryWidePauseWindow__factory>;
    getContractFactory(
      name: "NewBasePool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.NewBasePool__factory>;
    getContractFactory(
      name: "RecoveryMode",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RecoveryMode__factory>;
    getContractFactory(
      name: "RecoveryModeHelper",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.RecoveryModeHelper__factory>;
    getContractFactory(
      name: "Authentication",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Authentication__factory>;
    getContractFactory(
      name: "BaseSplitCodeFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseSplitCodeFactory__factory>;
    getContractFactory(
      name: "EOASignaturesValidator",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.EOASignaturesValidator__factory>;
    getContractFactory(
      name: "SingletonAuthentication",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SingletonAuthentication__factory>;
    getContractFactory(
      name: "PausableConstants",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PausableConstants__factory>;
    getContractFactory(
      name: "TemporarilyPausable",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.TemporarilyPausable__factory>;
    getContractFactory(
      name: "Version",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.Version__factory>;
    getContractFactory(
      name: "ERC20",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20__factory>;
    getContractFactory(
      name: "ERC20Permit",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ERC20Permit__factory>;
    getContractFactory(
      name: "BaseWeightedPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.BaseWeightedPool__factory>;
    getContractFactory(
      name: "ExternalWeightedMath",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ExternalWeightedMath__factory>;
    getContractFactory(
      name: "HelloWorld",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.HelloWorld__factory>;
    getContractFactory(
      name: "LiquidityBootstrappingPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LiquidityBootstrappingPool__factory>;
    getContractFactory(
      name: "LiquidityBootstrappingPoolFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LiquidityBootstrappingPoolFactory__factory>;
    getContractFactory(
      name: "LiquidityBootstrappingPoolSettings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.LiquidityBootstrappingPoolSettings__factory>;
    getContractFactory(
      name: "CircuitBreakerLib",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.CircuitBreakerLib__factory>;
    getContractFactory(
      name: "ManagedPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ManagedPool__factory>;
    getContractFactory(
      name: "ManagedPoolAmmLib",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ManagedPoolAmmLib__factory>;
    getContractFactory(
      name: "ManagedPoolFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ManagedPoolFactory__factory>;
    getContractFactory(
      name: "ManagedPoolSettings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.ManagedPoolSettings__factory>;
    getContractFactory(
      name: "PachiraWeightedPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.PachiraWeightedPool__factory>;
    getContractFactory(
      name: "SimpleBalancerInteraction",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.SimpleBalancerInteraction__factory>;
    getContractFactory(
      name: "MockCircuitBreakerLib",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockCircuitBreakerLib__factory>;
    getContractFactory(
      name: "MockGradualValueChange",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockGradualValueChange__factory>;
    getContractFactory(
      name: "MockLiquidityBootstrappingPoolStorageLib",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockLiquidityBootstrappingPoolStorageLib__factory>;
    getContractFactory(
      name: "MockManagedPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockManagedPool__factory>;
    getContractFactory(
      name: "MockManagedPoolSettings",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockManagedPoolSettings__factory>;
    getContractFactory(
      name: "MockManagedPoolTokenStorageLib",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockManagedPoolTokenStorageLib__factory>;
    getContractFactory(
      name: "MockValueCompression",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockValueCompression__factory>;
    getContractFactory(
      name: "MockWeightedPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockWeightedPool__factory>;
    getContractFactory(
      name: "MockWeightedPoolProtocolFees",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockWeightedPoolProtocolFees__factory>;
    getContractFactory(
      name: "MockWithdrawDepositAssetManager",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.MockWithdrawDepositAssetManager__factory>;
    getContractFactory(
      name: "WeightedPool",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WeightedPool__factory>;
    getContractFactory(
      name: "WeightedPoolFactory",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WeightedPoolFactory__factory>;
    getContractFactory(
      name: "WeightedPoolProtocolFees",
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<Contracts.WeightedPoolProtocolFees__factory>;

    getContractAt(
      name: "BasePoolUserData",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasePoolUserData>;
    getContractAt(
      name: "IBasePoolFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBasePoolFactory>;
    getContractAt(
      name: "IControlledPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IControlledPool>;
    getContractAt(
      name: "IFactoryCreatedPoolVersion",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFactoryCreatedPoolVersion>;
    getContractAt(
      name: "IManagedPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IManagedPool>;
    getContractAt(
      name: "IProtocolFeeCache",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProtocolFeeCache>;
    getContractAt(
      name: "IRateProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRateProvider>;
    getContractAt(
      name: "IRateProviderPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRateProviderPool>;
    getContractAt(
      name: "IRecoveryMode",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRecoveryMode>;
    getContractAt(
      name: "IRecoveryModeHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IRecoveryModeHelper>;
    getContractAt(
      name: "IExternalWeightedMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IExternalWeightedMath>;
    getContractAt(
      name: "IAuthentication",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAuthentication>;
    getContractAt(
      name: "ISignaturesValidator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ISignaturesValidator>;
    getContractAt(
      name: "ITemporarilyPausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ITemporarilyPausable>;
    getContractAt(
      name: "IVersion",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVersion>;
    getContractAt(
      name: "IWETH",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IWETH>;
    getContractAt(
      name: "IERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20>;
    getContractAt(
      name: "IERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IERC20Permit>;
    getContractAt(
      name: "IProtocolFeePercentagesProvider",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProtocolFeePercentagesProvider>;
    getContractAt(
      name: "IAuthorizer",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IAuthorizer>;
    getContractAt(
      name: "IBasePool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IBasePool>;
    getContractAt(
      name: "IFlashLoanRecipient",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IFlashLoanRecipient>;
    getContractAt(
      name: "IGeneralPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IGeneralPool>;
    getContractAt(
      name: "IMinimalSwapInfoPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IMinimalSwapInfoPool>;
    getContractAt(
      name: "IProtocolFeesCollector",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IProtocolFeesCollector>;
    getContractAt(
      name: "IVault",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.IVault>;
    getContractAt(
      name: "BalancerPoolToken",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BalancerPoolToken>;
    getContractAt(
      name: "BaseMinimalSwapInfoPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseMinimalSwapInfoPool>;
    getContractAt(
      name: "BasePool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasePool>;
    getContractAt(
      name: "BasePoolAuthorization",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasePoolAuthorization>;
    getContractAt(
      name: "ProtocolFeeCache",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ProtocolFeeCache>;
    getContractAt(
      name: "BasePoolFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BasePoolFactory>;
    getContractAt(
      name: "FactoryWidePauseWindow",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.FactoryWidePauseWindow>;
    getContractAt(
      name: "NewBasePool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.NewBasePool>;
    getContractAt(
      name: "RecoveryMode",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RecoveryMode>;
    getContractAt(
      name: "RecoveryModeHelper",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.RecoveryModeHelper>;
    getContractAt(
      name: "Authentication",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Authentication>;
    getContractAt(
      name: "BaseSplitCodeFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseSplitCodeFactory>;
    getContractAt(
      name: "EOASignaturesValidator",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.EOASignaturesValidator>;
    getContractAt(
      name: "SingletonAuthentication",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SingletonAuthentication>;
    getContractAt(
      name: "PausableConstants",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PausableConstants>;
    getContractAt(
      name: "TemporarilyPausable",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.TemporarilyPausable>;
    getContractAt(
      name: "Version",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.Version>;
    getContractAt(
      name: "ERC20",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20>;
    getContractAt(
      name: "ERC20Permit",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ERC20Permit>;
    getContractAt(
      name: "BaseWeightedPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.BaseWeightedPool>;
    getContractAt(
      name: "ExternalWeightedMath",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ExternalWeightedMath>;
    getContractAt(
      name: "HelloWorld",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.HelloWorld>;
    getContractAt(
      name: "LiquidityBootstrappingPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LiquidityBootstrappingPool>;
    getContractAt(
      name: "LiquidityBootstrappingPoolFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LiquidityBootstrappingPoolFactory>;
    getContractAt(
      name: "LiquidityBootstrappingPoolSettings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.LiquidityBootstrappingPoolSettings>;
    getContractAt(
      name: "CircuitBreakerLib",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.CircuitBreakerLib>;
    getContractAt(
      name: "ManagedPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ManagedPool>;
    getContractAt(
      name: "ManagedPoolAmmLib",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ManagedPoolAmmLib>;
    getContractAt(
      name: "ManagedPoolFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ManagedPoolFactory>;
    getContractAt(
      name: "ManagedPoolSettings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.ManagedPoolSettings>;
    getContractAt(
      name: "PachiraWeightedPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.PachiraWeightedPool>;
    getContractAt(
      name: "SimpleBalancerInteraction",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.SimpleBalancerInteraction>;
    getContractAt(
      name: "MockCircuitBreakerLib",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockCircuitBreakerLib>;
    getContractAt(
      name: "MockGradualValueChange",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockGradualValueChange>;
    getContractAt(
      name: "MockLiquidityBootstrappingPoolStorageLib",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockLiquidityBootstrappingPoolStorageLib>;
    getContractAt(
      name: "MockManagedPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockManagedPool>;
    getContractAt(
      name: "MockManagedPoolSettings",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockManagedPoolSettings>;
    getContractAt(
      name: "MockManagedPoolTokenStorageLib",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockManagedPoolTokenStorageLib>;
    getContractAt(
      name: "MockValueCompression",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockValueCompression>;
    getContractAt(
      name: "MockWeightedPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockWeightedPool>;
    getContractAt(
      name: "MockWeightedPoolProtocolFees",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockWeightedPoolProtocolFees>;
    getContractAt(
      name: "MockWithdrawDepositAssetManager",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.MockWithdrawDepositAssetManager>;
    getContractAt(
      name: "WeightedPool",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WeightedPool>;
    getContractAt(
      name: "WeightedPoolFactory",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WeightedPoolFactory>;
    getContractAt(
      name: "WeightedPoolProtocolFees",
      address: string,
      signer?: ethers.Signer
    ): Promise<Contracts.WeightedPoolProtocolFees>;

    // default types
    getContractFactory(
      name: string,
      signerOrOptions?: ethers.Signer | FactoryOptions
    ): Promise<ethers.ContractFactory>;
    getContractFactory(
      abi: any[],
      bytecode: ethers.utils.BytesLike,
      signer?: ethers.Signer
    ): Promise<ethers.ContractFactory>;
    getContractAt(
      nameOrAbi: string | any[],
      address: string,
      signer?: ethers.Signer
    ): Promise<ethers.Contract>;
  }
}
