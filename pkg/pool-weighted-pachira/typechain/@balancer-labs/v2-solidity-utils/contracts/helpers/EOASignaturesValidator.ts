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
} from "../../../../common";

export interface EOASignaturesValidatorInterface extends utils.Interface {
  functions: {
    "getDomainSeparator()": FunctionFragment;
    "getNextNonce(address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getDomainSeparator"
      | "getDomainSeparator()"
      | "getNextNonce"
      | "getNextNonce(address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "getDomainSeparator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getDomainSeparator()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getNextNonce",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "getNextNonce(address)",
    values: [PromiseOrValue<string>]
  ): string;

  decodeFunctionResult(
    functionFragment: "getDomainSeparator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getDomainSeparator()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextNonce",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getNextNonce(address)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface EOASignaturesValidator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: EOASignaturesValidatorInterface;

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
    getDomainSeparator(overrides?: CallOverrides): Promise<[string]>;

    "getDomainSeparator()"(overrides?: CallOverrides): Promise<[string]>;

    getNextNonce(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getNextNonce(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  getDomainSeparator(overrides?: CallOverrides): Promise<string>;

  "getDomainSeparator()"(overrides?: CallOverrides): Promise<string>;

  getNextNonce(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getNextNonce(address)"(
    account: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    getDomainSeparator(overrides?: CallOverrides): Promise<string>;

    "getDomainSeparator()"(overrides?: CallOverrides): Promise<string>;

    getNextNonce(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getNextNonce(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getDomainSeparator(overrides?: CallOverrides): Promise<BigNumber>;

    "getDomainSeparator()"(overrides?: CallOverrides): Promise<BigNumber>;

    getNextNonce(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getNextNonce(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getDomainSeparator(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getDomainSeparator()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getNextNonce(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getNextNonce(address)"(
      account: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
