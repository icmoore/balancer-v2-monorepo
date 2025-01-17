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
} from "../../../../common";

export interface IRateProviderInterface extends utils.Interface {
  functions: {
    "getRate()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "getRate" | "getRate()"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "getRate", values?: undefined): string;
  encodeFunctionData(functionFragment: "getRate()", values?: undefined): string;

  decodeFunctionResult(functionFragment: "getRate", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getRate()", data: BytesLike): Result;

  events: {};
}

export interface IRateProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRateProviderInterface;

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
    getRate(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getRate()"(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  getRate(overrides?: CallOverrides): Promise<BigNumber>;

  "getRate()"(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    getRate(overrides?: CallOverrides): Promise<BigNumber>;

    "getRate()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    getRate(overrides?: CallOverrides): Promise<BigNumber>;

    "getRate()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    getRate(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getRate()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
