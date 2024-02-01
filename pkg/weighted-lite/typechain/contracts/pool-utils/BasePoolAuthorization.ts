/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {FunctionFragment, Result} from "@ethersproject/abi";
import type {Listener, Provider} from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../common";

export interface BasePoolAuthorizationInterface extends utils.Interface {
  functions: {
    "getActionId(bytes4)": FunctionFragment;
    "getAuthorizer()": FunctionFragment;
    "getOwner()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getActionId"
      | "getActionId(bytes4)"
      | "getAuthorizer"
      | "getAuthorizer()"
      | "getOwner"
      | "getOwner()"
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

  events: {};
}

export interface BasePoolAuthorization extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BasePoolAuthorizationInterface;

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

    getAuthorizer(overrides?: CallOverrides): Promise<[string]>;

    "getAuthorizer()"(overrides?: CallOverrides): Promise<[string]>;

    getOwner(overrides?: CallOverrides): Promise<[string]>;

    "getOwner()"(overrides?: CallOverrides): Promise<[string]>;
  };

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

  callStatic: {
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
  };

  filters: {};

  estimateGas: {
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

    getAuthorizer(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getAuthorizer()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getOwner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getOwner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}