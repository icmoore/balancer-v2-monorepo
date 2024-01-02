/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
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

export interface RecoveryModeInterface extends utils.Interface {
  functions: {
    "disableRecoveryMode()": FunctionFragment;
    "enableRecoveryMode()": FunctionFragment;
    "getActionId(bytes4)": FunctionFragment;
    "getAuthorizer()": FunctionFragment;
    "getOwner()": FunctionFragment;
    "inRecoveryMode()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "disableRecoveryMode"
      | "disableRecoveryMode()"
      | "enableRecoveryMode"
      | "enableRecoveryMode()"
      | "getActionId"
      | "getActionId(bytes4)"
      | "getAuthorizer"
      | "getAuthorizer()"
      | "getOwner"
      | "getOwner()"
      | "inRecoveryMode"
      | "inRecoveryMode()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "disableRecoveryMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "disableRecoveryMode()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enableRecoveryMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "enableRecoveryMode()",
    values?: undefined
  ): string;
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
  encodeFunctionData(functionFragment: "getOwner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getOwner()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "inRecoveryMode",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "inRecoveryMode()",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "disableRecoveryMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "disableRecoveryMode()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableRecoveryMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "enableRecoveryMode()",
    data: BytesLike
  ): Result;
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
  decodeFunctionResult(functionFragment: "getOwner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getOwner()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "inRecoveryMode",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "inRecoveryMode()",
    data: BytesLike
  ): Result;

  events: {
    "RecoveryModeStateChanged(bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "RecoveryModeStateChanged"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "RecoveryModeStateChanged(bool)"
  ): EventFragment;
}

export interface RecoveryModeStateChangedEventObject {
  enabled: boolean;
}
export type RecoveryModeStateChangedEvent = TypedEvent<
  [boolean],
  RecoveryModeStateChangedEventObject
>;

export type RecoveryModeStateChangedEventFilter =
  TypedEventFilter<RecoveryModeStateChangedEvent>;

export interface RecoveryMode extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RecoveryModeInterface;

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
    disableRecoveryMode(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    "disableRecoveryMode()"(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    enableRecoveryMode(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    "enableRecoveryMode()"(
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

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    "getOwner()"(overrides?: CallOverrides): Promise<[string]>;

    inRecoveryMode(overrides?: CallOverrides): Promise<[boolean]>;

    "inRecoveryMode()"(overrides?: CallOverrides): Promise<[boolean]>;
  };

  disableRecoveryMode(
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  "disableRecoveryMode()"(
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  enableRecoveryMode(
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  "enableRecoveryMode()"(
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

  getOwner(overrides?: CallOverrides): Promise<string>;

  "getOwner()"(overrides?: CallOverrides): Promise<string>;

  inRecoveryMode(overrides?: CallOverrides): Promise<boolean>;

  "inRecoveryMode()"(overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    disableRecoveryMode(overrides?: CallOverrides): Promise<void>;

    "disableRecoveryMode()"(overrides?: CallOverrides): Promise<void>;

    enableRecoveryMode(overrides?: CallOverrides): Promise<void>;

    "enableRecoveryMode()"(overrides?: CallOverrides): Promise<void>;

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

    getOwner(overrides?: CallOverrides): Promise<string>;

    "getOwner()"(overrides?: CallOverrides): Promise<string>;

    inRecoveryMode(overrides?: CallOverrides): Promise<boolean>;

    "inRecoveryMode()"(overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {
    "RecoveryModeStateChanged(bool)"(
      enabled?: null
    ): RecoveryModeStateChangedEventFilter;
    RecoveryModeStateChanged(
      enabled?: null
    ): RecoveryModeStateChangedEventFilter;
  };

  estimateGas: {
    disableRecoveryMode(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    "disableRecoveryMode()"(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    enableRecoveryMode(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    "enableRecoveryMode()"(
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

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "getOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    inRecoveryMode(overrides?: CallOverrides): Promise<BigNumber>;

    "inRecoveryMode()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    disableRecoveryMode(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    "disableRecoveryMode()"(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    enableRecoveryMode(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    "enableRecoveryMode()"(
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

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    inRecoveryMode(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "inRecoveryMode()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
