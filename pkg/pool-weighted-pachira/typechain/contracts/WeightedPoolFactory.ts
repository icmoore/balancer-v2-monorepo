/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {FunctionFragment, Result, EventFragment} from "@ethersproject/abi";
import type {Listener, Provider} from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export interface WeightedPoolFactoryInterface extends utils.Interface {
  functions: {
    "create(string,string,address[],uint256[],address[],uint256,address,bytes32)": FunctionFragment;
    "disable()": FunctionFragment;
    "getActionId(bytes4)": FunctionFragment;
    "getAuthorizer()": FunctionFragment;
    "getCreationCode()": FunctionFragment;
    "getCreationCodeContracts()": FunctionFragment;
    "getPauseConfiguration()": FunctionFragment;
    "getProtocolFeePercentagesProvider()": FunctionFragment;
    "getVault()": FunctionFragment;
    "isDisabled()": FunctionFragment;
    "isPoolFromFactory(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "create"
      | "create(string,string,address[],uint256[],address[],uint256,address,bytes32)"
      | "disable"
      | "disable()"
      | "getActionId"
      | "getActionId(bytes4)"
      | "getAuthorizer"
      | "getAuthorizer()"
      | "getCreationCode"
      | "getCreationCode()"
      | "getCreationCodeContracts"
      | "getCreationCodeContracts()"
      | "getPauseConfiguration"
      | "getPauseConfiguration()"
      | "getProtocolFeePercentagesProvider"
      | "getProtocolFeePercentagesProvider()"
      | "getVault"
      | "getVault()"
      | "isDisabled"
      | "isDisabled()"
      | "isPoolFromFactory"
      | "isPoolFromFactory(address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "create",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "create(string,string,address[],uint256[],address[],uint256,address,bytes32)",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<string>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(functionFragment: "disable", values?: undefined): string;
  encodeFunctionData(functionFragment: "disable()", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getActionId",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getActionId(bytes4)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAuthorizer",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAuthorizer()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCreationCode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCreationCode()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCreationCodeContracts",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCreationCodeContracts()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPauseConfiguration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPauseConfiguration()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProtocolFeePercentagesProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getProtocolFeePercentagesProvider()",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getVault()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isDisabled",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isDisabled()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "isPoolFromFactory",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "isPoolFromFactory(address)",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "create(string,string,address[],uint256[],address[],uint256,address,bytes32)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "disable", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "disable()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getActionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActionId(bytes4)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorizer",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAuthorizer()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreationCode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreationCode()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreationCodeContracts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreationCodeContracts()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPauseConfiguration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getPauseConfiguration()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProtocolFeePercentagesProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProtocolFeePercentagesProvider()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVault()", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isDisabled", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "isDisabled()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPoolFromFactory",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "isPoolFromFactory(address)",
    data: BytesLike
  ): Result;

  events: {
    "FactoryDisabled()": EventFragment;
    "PoolCreated(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FactoryDisabled"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "FactoryDisabled()"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PoolCreated(address)"): EventFragment;
}

export interface FactoryDisabledEventObject {}
export type FactoryDisabledEvent = TypedEvent<[], FactoryDisabledEventObject>;

export type FactoryDisabledEventFilter = TypedEventFilter<FactoryDisabledEvent>;

export interface PoolCreatedEventObject {
  pool: string;
}
export type PoolCreatedEvent = TypedEvent<[string], PoolCreatedEventObject>;

export type PoolCreatedEventFilter = TypedEventFilter<PoolCreatedEvent>;

export interface WeightedPoolFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WeightedPoolFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    create(
      name: PromiseOrValue<string>,
      symbol: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      normalizedWeights: PromiseOrValue<BigNumberish>[],
      rateProviders: PromiseOrValue<string>[],
      swapFeePercentage: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    "create(string,string,address[],uint256[],address[],uint256,address,bytes32)"(
      name: PromiseOrValue<string>,
      symbol: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      normalizedWeights: PromiseOrValue<BigNumberish>[],
      rateProviders: PromiseOrValue<string>[],
      swapFeePercentage: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    disable(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    "disable()"(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    getActionId(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getActionId(bytes4)"(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAuthorizer(overrides?: CallOverrides): Promise<[string]>;

    "getAuthorizer()"(overrides?: CallOverrides): Promise<[string]>;

    getCreationCode(overrides?: CallOverrides): Promise<[string]>;

    "getCreationCode()"(overrides?: CallOverrides): Promise<[string]>;

    getCreationCodeContracts(
      overrides?: CallOverrides
    ): Promise<[string, string] & {contractA: string; contractB: string}>;

    "getCreationCodeContracts()"(
      overrides?: CallOverrides
    ): Promise<[string, string] & {contractA: string; contractB: string}>;

    getPauseConfiguration(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pauseWindowDuration: BigNumber;
        bufferPeriodDuration: BigNumber;
      }
    >;

    "getPauseConfiguration()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pauseWindowDuration: BigNumber;
        bufferPeriodDuration: BigNumber;
      }
    >;

    getProtocolFeePercentagesProvider(
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getProtocolFeePercentagesProvider()"(
      overrides?: CallOverrides
    ): Promise<[string]>;

    getVault(overrides?: CallOverrides): Promise<[string]>;

    "getVault()"(overrides?: CallOverrides): Promise<[string]>;

    isDisabled(overrides?: CallOverrides): Promise<[boolean]>;

    "isDisabled()"(overrides?: CallOverrides): Promise<[boolean]>;

    isPoolFromFactory(
      pool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "isPoolFromFactory(address)"(
      pool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  create(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    tokens: PromiseOrValue<string>[],
    normalizedWeights: PromiseOrValue<BigNumberish>[],
    rateProviders: PromiseOrValue<string>[],
    swapFeePercentage: PromiseOrValue<BigNumberish>,
    owner: PromiseOrValue<string>,
    salt: PromiseOrValue<BytesLike>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  "create(string,string,address[],uint256[],address[],uint256,address,bytes32)"(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    tokens: PromiseOrValue<string>[],
    normalizedWeights: PromiseOrValue<BigNumberish>[],
    rateProviders: PromiseOrValue<string>[],
    swapFeePercentage: PromiseOrValue<BigNumberish>,
    owner: PromiseOrValue<string>,
    salt: PromiseOrValue<BytesLike>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  disable(
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  "disable()"(
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  getActionId(
    selector: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "getActionId(bytes4)"(
    selector: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getAuthorizer(overrides?: CallOverrides): Promise<string>;

  "getAuthorizer()"(overrides?: CallOverrides): Promise<string>;

  getCreationCode(overrides?: CallOverrides): Promise<string>;

  "getCreationCode()"(overrides?: CallOverrides): Promise<string>;

  getCreationCodeContracts(
    overrides?: CallOverrides
  ): Promise<[string, string] & {contractA: string; contractB: string}>;

  "getCreationCodeContracts()"(
    overrides?: CallOverrides
  ): Promise<[string, string] & {contractA: string; contractB: string}>;

  getPauseConfiguration(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      pauseWindowDuration: BigNumber;
      bufferPeriodDuration: BigNumber;
    }
  >;

  "getPauseConfiguration()"(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber] & {
      pauseWindowDuration: BigNumber;
      bufferPeriodDuration: BigNumber;
    }
  >;

  getProtocolFeePercentagesProvider(overrides?: CallOverrides): Promise<string>;

  "getProtocolFeePercentagesProvider()"(
    overrides?: CallOverrides
  ): Promise<string>;

  getVault(overrides?: CallOverrides): Promise<string>;

  "getVault()"(overrides?: CallOverrides): Promise<string>;

  isDisabled(overrides?: CallOverrides): Promise<boolean>;

  "isDisabled()"(overrides?: CallOverrides): Promise<boolean>;

  isPoolFromFactory(
    pool: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "isPoolFromFactory(address)"(
    pool: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    create(
      name: PromiseOrValue<string>,
      symbol: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      normalizedWeights: PromiseOrValue<BigNumberish>[],
      rateProviders: PromiseOrValue<string>[],
      swapFeePercentage: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "create(string,string,address[],uint256[],address[],uint256,address,bytes32)"(
      name: PromiseOrValue<string>,
      symbol: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      normalizedWeights: PromiseOrValue<BigNumberish>[],
      rateProviders: PromiseOrValue<string>[],
      swapFeePercentage: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    disable(overrides?: CallOverrides): Promise<void>;

    "disable()"(overrides?: CallOverrides): Promise<void>;

    getActionId(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "getActionId(bytes4)"(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getAuthorizer(overrides?: CallOverrides): Promise<string>;

    "getAuthorizer()"(overrides?: CallOverrides): Promise<string>;

    getCreationCode(overrides?: CallOverrides): Promise<string>;

    "getCreationCode()"(overrides?: CallOverrides): Promise<string>;

    getCreationCodeContracts(
      overrides?: CallOverrides
    ): Promise<[string, string] & {contractA: string; contractB: string}>;

    "getCreationCodeContracts()"(
      overrides?: CallOverrides
    ): Promise<[string, string] & {contractA: string; contractB: string}>;

    getPauseConfiguration(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pauseWindowDuration: BigNumber;
        bufferPeriodDuration: BigNumber;
      }
    >;

    "getPauseConfiguration()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & {
        pauseWindowDuration: BigNumber;
        bufferPeriodDuration: BigNumber;
      }
    >;

    getProtocolFeePercentagesProvider(
      overrides?: CallOverrides
    ): Promise<string>;

    "getProtocolFeePercentagesProvider()"(
      overrides?: CallOverrides
    ): Promise<string>;

    getVault(overrides?: CallOverrides): Promise<string>;

    "getVault()"(overrides?: CallOverrides): Promise<string>;

    isDisabled(overrides?: CallOverrides): Promise<boolean>;

    "isDisabled()"(overrides?: CallOverrides): Promise<boolean>;

    isPoolFromFactory(
      pool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "isPoolFromFactory(address)"(
      pool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {
    "FactoryDisabled()"(): FactoryDisabledEventFilter;
    FactoryDisabled(): FactoryDisabledEventFilter;

    "PoolCreated(address)"(
      pool?: PromiseOrValue<string> | null
    ): PoolCreatedEventFilter;
    PoolCreated(pool?: PromiseOrValue<string> | null): PoolCreatedEventFilter;
  };

  estimateGas: {
    create(
      name: PromiseOrValue<string>,
      symbol: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      normalizedWeights: PromiseOrValue<BigNumberish>[],
      rateProviders: PromiseOrValue<string>[],
      swapFeePercentage: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    "create(string,string,address[],uint256[],address[],uint256,address,bytes32)"(
      name: PromiseOrValue<string>,
      symbol: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      normalizedWeights: PromiseOrValue<BigNumberish>[],
      rateProviders: PromiseOrValue<string>[],
      swapFeePercentage: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    disable(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    "disable()"(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    getActionId(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getActionId(bytes4)"(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAuthorizer(overrides?: CallOverrides): Promise<BigNumber>;

    "getAuthorizer()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCreationCode(overrides?: CallOverrides): Promise<BigNumber>;

    "getCreationCode()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCreationCodeContracts(overrides?: CallOverrides): Promise<BigNumber>;

    "getCreationCodeContracts()"(overrides?: CallOverrides): Promise<BigNumber>;

    getPauseConfiguration(overrides?: CallOverrides): Promise<BigNumber>;

    "getPauseConfiguration()"(overrides?: CallOverrides): Promise<BigNumber>;

    getProtocolFeePercentagesProvider(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProtocolFeePercentagesProvider()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVault(overrides?: CallOverrides): Promise<BigNumber>;

    "getVault()"(overrides?: CallOverrides): Promise<BigNumber>;

    isDisabled(overrides?: CallOverrides): Promise<BigNumber>;

    "isDisabled()"(overrides?: CallOverrides): Promise<BigNumber>;

    isPoolFromFactory(
      pool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "isPoolFromFactory(address)"(
      pool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    create(
      name: PromiseOrValue<string>,
      symbol: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      normalizedWeights: PromiseOrValue<BigNumberish>[],
      rateProviders: PromiseOrValue<string>[],
      swapFeePercentage: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    "create(string,string,address[],uint256[],address[],uint256,address,bytes32)"(
      name: PromiseOrValue<string>,
      symbol: PromiseOrValue<string>,
      tokens: PromiseOrValue<string>[],
      normalizedWeights: PromiseOrValue<BigNumberish>[],
      rateProviders: PromiseOrValue<string>[],
      swapFeePercentage: PromiseOrValue<BigNumberish>,
      owner: PromiseOrValue<string>,
      salt: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    disable(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    "disable()"(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    getActionId(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getActionId(bytes4)"(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuthorizer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getAuthorizer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getCreationCode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getCreationCode()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getCreationCodeContracts(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getCreationCodeContracts()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPauseConfiguration(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getPauseConfiguration()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProtocolFeePercentagesProvider(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProtocolFeePercentagesProvider()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getVault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isDisabled(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "isDisabled()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isPoolFromFactory(
      pool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "isPoolFromFactory(address)"(
      pool: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
