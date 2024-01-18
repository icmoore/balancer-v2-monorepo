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
} from "../../../common";

export interface IAuthorizerInterface extends utils.Interface {
  functions: {
    "canPerform(bytes32,address,address)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "canPerform" | "canPerform(bytes32,address,address)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "canPerform",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "canPerform(bytes32,address,address)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "canPerform", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "canPerform(bytes32,address,address)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IAuthorizer extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IAuthorizerInterface;

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
    canPerform(
      actionId: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      where: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    "canPerform(bytes32,address,address)"(
      actionId: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      where: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  canPerform(
    actionId: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    where: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  "canPerform(bytes32,address,address)"(
    actionId: PromiseOrValue<BytesLike>,
    account: PromiseOrValue<string>,
    where: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    canPerform(
      actionId: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      where: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;

    "canPerform(bytes32,address,address)"(
      actionId: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      where: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    canPerform(
      actionId: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      where: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "canPerform(bytes32,address,address)"(
      actionId: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      where: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    canPerform(
      actionId: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      where: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "canPerform(bytes32,address,address)"(
      actionId: PromiseOrValue<BytesLike>,
      account: PromiseOrValue<string>,
      where: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
