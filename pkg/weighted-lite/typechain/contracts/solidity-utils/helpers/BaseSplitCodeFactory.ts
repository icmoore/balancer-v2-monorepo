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
} from "../../../common";

export interface BaseSplitCodeFactoryInterface extends utils.Interface {
  functions: {
    "getCreationCode()": FunctionFragment;
    "getCreationCodeContracts()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getCreationCode"
      | "getCreationCode()"
      | "getCreationCodeContracts"
      | "getCreationCodeContracts()"
  ): FunctionFragment;

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

  events: {};
}

export interface BaseSplitCodeFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: BaseSplitCodeFactoryInterface;

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
    getCreationCode(overrides?: CallOverrides): Promise<[string]>;

    "getCreationCode()"(overrides?: CallOverrides): Promise<[string]>;

    getCreationCodeContracts(
      overrides?: CallOverrides
    ): Promise<[string, string] & {contractA: string; contractB: string}>;

    "getCreationCodeContracts()"(
      overrides?: CallOverrides
    ): Promise<[string, string] & {contractA: string; contractB: string}>;
  };

  getCreationCode(overrides?: CallOverrides): Promise<string>;

  "getCreationCode()"(overrides?: CallOverrides): Promise<string>;

  getCreationCodeContracts(
    overrides?: CallOverrides
  ): Promise<[string, string] & {contractA: string; contractB: string}>;

  "getCreationCodeContracts()"(
    overrides?: CallOverrides
  ): Promise<[string, string] & {contractA: string; contractB: string}>;

  callStatic: {
    getCreationCode(overrides?: CallOverrides): Promise<string>;

    "getCreationCode()"(overrides?: CallOverrides): Promise<string>;

    getCreationCodeContracts(
      overrides?: CallOverrides
    ): Promise<[string, string] & {contractA: string; contractB: string}>;

    "getCreationCodeContracts()"(
      overrides?: CallOverrides
    ): Promise<[string, string] & {contractA: string; contractB: string}>;
  };

  filters: {};

  estimateGas: {
    getCreationCode(overrides?: CallOverrides): Promise<BigNumber>;

    "getCreationCode()"(overrides?: CallOverrides): Promise<BigNumber>;

    getCreationCodeContracts(overrides?: CallOverrides): Promise<BigNumber>;

    "getCreationCodeContracts()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
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
  };
}
