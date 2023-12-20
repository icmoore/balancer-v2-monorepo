/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
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

export interface IRecoveryModeHelperInterface extends utils.Interface {
  functions: {
    "calcComposableRecoveryAmountsOut(bytes32,bytes,uint256)": FunctionFragment;
    "getVault()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "calcComposableRecoveryAmountsOut"
      | "calcComposableRecoveryAmountsOut(bytes32,bytes,uint256)"
      | "getVault"
      | "getVault()"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "calcComposableRecoveryAmountsOut",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calcComposableRecoveryAmountsOut(bytes32,bytes,uint256)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BytesLike>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(functionFragment: "getVault", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getVault()",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "calcComposableRecoveryAmountsOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calcComposableRecoveryAmountsOut(bytes32,bytes,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVault", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getVault()", data: BytesLike): Result;

  events: {};
}

export interface IRecoveryModeHelper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IRecoveryModeHelperInterface;

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
    calcComposableRecoveryAmountsOut(
      poolId: PromiseOrValue<BytesLike>,
      userData: PromiseOrValue<BytesLike>,
      totalSupply: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & {
        bptAmountIn: BigNumber;
        amountsOut: BigNumber[];
      }
    >;

    "calcComposableRecoveryAmountsOut(bytes32,bytes,uint256)"(
      poolId: PromiseOrValue<BytesLike>,
      userData: PromiseOrValue<BytesLike>,
      totalSupply: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & {
        bptAmountIn: BigNumber;
        amountsOut: BigNumber[];
      }
    >;

    getVault(overrides?: CallOverrides): Promise<[string]>;

    "getVault()"(overrides?: CallOverrides): Promise<[string]>;
  };

  calcComposableRecoveryAmountsOut(
    poolId: PromiseOrValue<BytesLike>,
    userData: PromiseOrValue<BytesLike>,
    totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber[]] & {bptAmountIn: BigNumber; amountsOut: BigNumber[]}
  >;

  "calcComposableRecoveryAmountsOut(bytes32,bytes,uint256)"(
    poolId: PromiseOrValue<BytesLike>,
    userData: PromiseOrValue<BytesLike>,
    totalSupply: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber[]] & {bptAmountIn: BigNumber; amountsOut: BigNumber[]}
  >;

  getVault(overrides?: CallOverrides): Promise<string>;

  "getVault()"(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    calcComposableRecoveryAmountsOut(
      poolId: PromiseOrValue<BytesLike>,
      userData: PromiseOrValue<BytesLike>,
      totalSupply: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & {
        bptAmountIn: BigNumber;
        amountsOut: BigNumber[];
      }
    >;

    "calcComposableRecoveryAmountsOut(bytes32,bytes,uint256)"(
      poolId: PromiseOrValue<BytesLike>,
      userData: PromiseOrValue<BytesLike>,
      totalSupply: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & {
        bptAmountIn: BigNumber;
        amountsOut: BigNumber[];
      }
    >;

    getVault(overrides?: CallOverrides): Promise<string>;

    "getVault()"(overrides?: CallOverrides): Promise<string>;
  };

  filters: {};

  estimateGas: {
    calcComposableRecoveryAmountsOut(
      poolId: PromiseOrValue<BytesLike>,
      userData: PromiseOrValue<BytesLike>,
      totalSupply: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calcComposableRecoveryAmountsOut(bytes32,bytes,uint256)"(
      poolId: PromiseOrValue<BytesLike>,
      userData: PromiseOrValue<BytesLike>,
      totalSupply: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVault(overrides?: CallOverrides): Promise<BigNumber>;

    "getVault()"(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    calcComposableRecoveryAmountsOut(
      poolId: PromiseOrValue<BytesLike>,
      userData: PromiseOrValue<BytesLike>,
      totalSupply: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calcComposableRecoveryAmountsOut(bytes32,bytes,uint256)"(
      poolId: PromiseOrValue<BytesLike>,
      userData: PromiseOrValue<BytesLike>,
      totalSupply: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVault(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getVault()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}