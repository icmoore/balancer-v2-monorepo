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
} from "../../common";

export interface MockStablePoolAmplificationInterface extends utils.Interface {
  functions: {
    "getActionId(bytes4)": FunctionFragment;
    "getAmplificationParameter()": FunctionFragment;
    "getAuthorizer()": FunctionFragment;
    "getOwner()": FunctionFragment;
    "getVault()": FunctionFragment;
    "startAmplificationParameterUpdate(uint256,uint256)": FunctionFragment;
    "stopAmplificationParameterUpdate()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getActionId"
      | "getActionId(bytes4)"
      | "getAmplificationParameter"
      | "getAmplificationParameter()"
      | "getAuthorizer"
      | "getAuthorizer()"
      | "getOwner"
      | "getOwner()"
      | "getVault"
      | "getVault()"
      | "startAmplificationParameterUpdate"
      | "startAmplificationParameterUpdate(uint256,uint256)"
      | "stopAmplificationParameterUpdate"
      | "stopAmplificationParameterUpdate()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getActionId",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getActionId(bytes4)",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "getAmplificationParameter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getAmplificationParameter()",
    values?: undefined
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
  encodeFunctionData(functionFragment: "getVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getVault()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "startAmplificationParameterUpdate",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "startAmplificationParameterUpdate(uint256,uint256)",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "stopAmplificationParameterUpdate",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stopAmplificationParameterUpdate()",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "getActionId",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getActionId(bytes4)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmplificationParameter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getAmplificationParameter()",
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
  decodeFunctionResult(functionFragment: "getVault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVault()", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "startAmplificationParameterUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "startAmplificationParameterUpdate(uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stopAmplificationParameterUpdate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stopAmplificationParameterUpdate()",
    data: BytesLike
  ): Result;

  events: {
    "AmpUpdateStarted(uint256,uint256,uint256,uint256)": EventFragment;
    "AmpUpdateStopped(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AmpUpdateStarted"): EventFragment;
  getEvent(
    nameOrSignatureOrTopic: "AmpUpdateStarted(uint256,uint256,uint256,uint256)"
  ): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AmpUpdateStopped"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "AmpUpdateStopped(uint256)"): EventFragment;
}

export interface AmpUpdateStartedEventObject {
  startValue: BigNumber;
  endValue: BigNumber;
  startTime: BigNumber;
  endTime: BigNumber;
}
export type AmpUpdateStartedEvent = TypedEvent<
  [BigNumber, BigNumber, BigNumber, BigNumber],
  AmpUpdateStartedEventObject
>;

export type AmpUpdateStartedEventFilter =
  TypedEventFilter<AmpUpdateStartedEvent>;

export interface AmpUpdateStoppedEventObject {
  currentValue: BigNumber;
}
export type AmpUpdateStoppedEvent = TypedEvent<
  [BigNumber],
  AmpUpdateStoppedEventObject
>;

export type AmpUpdateStoppedEventFilter =
  TypedEventFilter<AmpUpdateStoppedEvent>;

export interface MockStablePoolAmplification extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockStablePoolAmplificationInterface;

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
    getActionId(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "getActionId(bytes4)"(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<[string]>;

    getAmplificationParameter(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, BigNumber] & {
        value: BigNumber;
        isUpdating: boolean;
        precision: BigNumber;
      }
    >;

    "getAmplificationParameter()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, BigNumber] & {
        value: BigNumber;
        isUpdating: boolean;
        precision: BigNumber;
      }
    >;

    getAuthorizer(overrides?: CallOverrides): Promise<[string]>;

    "getAuthorizer()"(overrides?: CallOverrides): Promise<[string]>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    "getOwner()"(overrides?: CallOverrides): Promise<[string]>;

    getVault(overrides?: CallOverrides): Promise<[string]>;

    "getVault()"(overrides?: CallOverrides): Promise<[string]>;

    startAmplificationParameterUpdate(
      rawEndValue: PromiseOrValue<BigNumberish>,
      endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    "startAmplificationParameterUpdate(uint256,uint256)"(
      rawEndValue: PromiseOrValue<BigNumberish>,
      endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    stopAmplificationParameterUpdate(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    "stopAmplificationParameterUpdate()"(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;
  };

  getActionId(
    selector: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  "getActionId(bytes4)"(
    selector: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<string>;

  getAmplificationParameter(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, boolean, BigNumber] & {
      value: BigNumber;
      isUpdating: boolean;
      precision: BigNumber;
    }
  >;

  "getAmplificationParameter()"(
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, boolean, BigNumber] & {
      value: BigNumber;
      isUpdating: boolean;
      precision: BigNumber;
    }
  >;

  getAuthorizer(overrides?: CallOverrides): Promise<string>;

  "getAuthorizer()"(overrides?: CallOverrides): Promise<string>;

  getOwner(overrides?: CallOverrides): Promise<string>;

  "getOwner()"(overrides?: CallOverrides): Promise<string>;

  getVault(overrides?: CallOverrides): Promise<string>;

  "getVault()"(overrides?: CallOverrides): Promise<string>;

  startAmplificationParameterUpdate(
    rawEndValue: PromiseOrValue<BigNumberish>,
    endTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  "startAmplificationParameterUpdate(uint256,uint256)"(
    rawEndValue: PromiseOrValue<BigNumberish>,
    endTime: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  stopAmplificationParameterUpdate(
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  "stopAmplificationParameterUpdate()"(
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  callStatic: {
    getActionId(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    "getActionId(bytes4)"(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<string>;

    getAmplificationParameter(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, BigNumber] & {
        value: BigNumber;
        isUpdating: boolean;
        precision: BigNumber;
      }
    >;

    "getAmplificationParameter()"(
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, boolean, BigNumber] & {
        value: BigNumber;
        isUpdating: boolean;
        precision: BigNumber;
      }
    >;

    getAuthorizer(overrides?: CallOverrides): Promise<string>;

    "getAuthorizer()"(overrides?: CallOverrides): Promise<string>;

    getOwner(overrides?: CallOverrides): Promise<string>;

    "getOwner()"(overrides?: CallOverrides): Promise<string>;

    getVault(overrides?: CallOverrides): Promise<string>;

    "getVault()"(overrides?: CallOverrides): Promise<string>;

    startAmplificationParameterUpdate(
      rawEndValue: PromiseOrValue<BigNumberish>,
      endTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    "startAmplificationParameterUpdate(uint256,uint256)"(
      rawEndValue: PromiseOrValue<BigNumberish>,
      endTime: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    stopAmplificationParameterUpdate(overrides?: CallOverrides): Promise<void>;

    "stopAmplificationParameterUpdate()"(
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AmpUpdateStarted(uint256,uint256,uint256,uint256)"(
      startValue?: null,
      endValue?: null,
      startTime?: null,
      endTime?: null
    ): AmpUpdateStartedEventFilter;
    AmpUpdateStarted(
      startValue?: null,
      endValue?: null,
      startTime?: null,
      endTime?: null
    ): AmpUpdateStartedEventFilter;

    "AmpUpdateStopped(uint256)"(
      currentValue?: null
    ): AmpUpdateStoppedEventFilter;
    AmpUpdateStopped(currentValue?: null): AmpUpdateStoppedEventFilter;
  };

  estimateGas: {
    getActionId(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getActionId(bytes4)"(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAmplificationParameter(overrides?: CallOverrides): Promise<BigNumber>;

    "getAmplificationParameter()"(
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAuthorizer(overrides?: CallOverrides): Promise<BigNumber>;

    "getAuthorizer()"(overrides?: CallOverrides): Promise<BigNumber>;

    getOwner(overrides?: CallOverrides): Promise<BigNumber>;

    "getOwner()"(overrides?: CallOverrides): Promise<BigNumber>;

    getVault(overrides?: CallOverrides): Promise<BigNumber>;

    "getVault()"(overrides?: CallOverrides): Promise<BigNumber>;

    startAmplificationParameterUpdate(
      rawEndValue: PromiseOrValue<BigNumberish>,
      endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    "startAmplificationParameterUpdate(uint256,uint256)"(
      rawEndValue: PromiseOrValue<BigNumberish>,
      endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    stopAmplificationParameterUpdate(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    "stopAmplificationParameterUpdate()"(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getActionId(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getActionId(bytes4)"(
      selector: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAmplificationParameter(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getAmplificationParameter()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAuthorizer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getAuthorizer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getVault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    startAmplificationParameterUpdate(
      rawEndValue: PromiseOrValue<BigNumberish>,
      endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    "startAmplificationParameterUpdate(uint256,uint256)"(
      rawEndValue: PromiseOrValue<BigNumberish>,
      endTime: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    stopAmplificationParameterUpdate(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    "stopAmplificationParameterUpdate()"(
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;
  };
}
