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
import type {FunctionFragment, Result} from "@ethersproject/abi";
import type {Listener, Provider} from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../../../common";

export declare namespace IPoolSwapStructs {
  export type SwapRequestStruct = {
    kind: PromiseOrValue<BigNumberish>;
    tokenIn: PromiseOrValue<string>;
    tokenOut: PromiseOrValue<string>;
    amount: PromiseOrValue<BigNumberish>;
    poolId: PromiseOrValue<BytesLike>;
    lastChangeBlock: PromiseOrValue<BigNumberish>;
    from: PromiseOrValue<string>;
    to: PromiseOrValue<string>;
    userData: PromiseOrValue<BytesLike>;
  };

  export type SwapRequestStructOutput = [
    number,
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    string,
    string,
    string
  ] & {
    kind: number;
    tokenIn: string;
    tokenOut: string;
    amount: BigNumber;
    poolId: string;
    lastChangeBlock: BigNumber;
    from: string;
    to: string;
    userData: string;
  };
}

export interface IGeneralPoolInterface extends utils.Interface {
  functions: {
    "getPoolId()": FunctionFragment;
    "getScalingFactors()": FunctionFragment;
    "getSwapFeePercentage()": FunctionFragment;
    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)": FunctionFragment;
    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)": FunctionFragment;
    "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256[],uint256,uint256)": FunctionFragment;
    "queryExit(bytes32,address,address,uint256[],uint256,uint256,bytes)": FunctionFragment;
    "queryJoin(bytes32,address,address,uint256[],uint256,uint256,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "getPoolId"
      | "getPoolId()"
      | "getScalingFactors"
      | "getScalingFactors()"
      | "getSwapFeePercentage"
      | "getSwapFeePercentage()"
      | "onExitPool"
      | "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"
      | "onJoinPool"
      | "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"
      | "onSwap"
      | "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256[],uint256,uint256)"
      | "queryExit"
      | "queryExit(bytes32,address,address,uint256[],uint256,uint256,bytes)"
      | "queryJoin"
      | "queryJoin(bytes32,address,address,uint256[],uint256,uint256,bytes)"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "getPoolId", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPoolId()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getScalingFactors",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getScalingFactors()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapFeePercentage",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSwapFeePercentage()",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "onExitPool",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onJoinPool",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onSwap",
    values: [
      IPoolSwapStructs.SwapRequestStruct,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256[],uint256,uint256)",
    values: [
      IPoolSwapStructs.SwapRequestStruct,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "queryExit",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "queryExit(bytes32,address,address,uint256[],uint256,uint256,bytes)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "queryJoin",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "queryJoin(bytes32,address,address,uint256[],uint256,uint256,bytes)",
    values: [
      PromiseOrValue<BytesLike>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BytesLike>
    ]
  ): string;

  decodeFunctionResult(functionFragment: "getPoolId", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPoolId()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getScalingFactors",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getScalingFactors()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSwapFeePercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSwapFeePercentage()",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "onExitPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "onJoinPool", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "onSwap", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256[],uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "queryExit", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queryExit(bytes32,address,address,uint256[],uint256,uint256,bytes)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "queryJoin", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "queryJoin(bytes32,address,address,uint256[],uint256,uint256,bytes)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface IGeneralPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IGeneralPoolInterface;

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
    getPoolId(overrides?: CallOverrides): Promise<[string]>;

    "getPoolId()"(overrides?: CallOverrides): Promise<[string]>;

    getScalingFactors(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    "getScalingFactors()"(overrides?: CallOverrides): Promise<[BigNumber[]]>;

    getSwapFeePercentage(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getSwapFeePercentage()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    onExitPool(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    onJoinPool(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    onSwap(
      swapRequest: IPoolSwapStructs.SwapRequestStruct,
      balances: PromiseOrValue<BigNumberish>[],
      indexIn: PromiseOrValue<BigNumberish>,
      indexOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256[],uint256,uint256)"(
      swapRequest: IPoolSwapStructs.SwapRequestStruct,
      balances: PromiseOrValue<BigNumberish>[],
      indexIn: PromiseOrValue<BigNumberish>,
      indexOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    queryExit(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    "queryExit(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    queryJoin(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;

    "queryJoin(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<ContractTransaction>;
  };

  getPoolId(overrides?: CallOverrides): Promise<string>;

  "getPoolId()"(overrides?: CallOverrides): Promise<string>;

  getScalingFactors(overrides?: CallOverrides): Promise<BigNumber[]>;

  "getScalingFactors()"(overrides?: CallOverrides): Promise<BigNumber[]>;

  getSwapFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

  "getSwapFeePercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

  onExitPool(
    poolId: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    balances: PromiseOrValue<BigNumberish>[],
    lastChangeBlock: PromiseOrValue<BigNumberish>,
    protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
    userData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
    poolId: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    balances: PromiseOrValue<BigNumberish>[],
    lastChangeBlock: PromiseOrValue<BigNumberish>,
    protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
    userData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  onJoinPool(
    poolId: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    balances: PromiseOrValue<BigNumberish>[],
    lastChangeBlock: PromiseOrValue<BigNumberish>,
    protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
    userData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
    poolId: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    balances: PromiseOrValue<BigNumberish>[],
    lastChangeBlock: PromiseOrValue<BigNumberish>,
    protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
    userData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  onSwap(
    swapRequest: IPoolSwapStructs.SwapRequestStruct,
    balances: PromiseOrValue<BigNumberish>[],
    indexIn: PromiseOrValue<BigNumberish>,
    indexOut: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256[],uint256,uint256)"(
    swapRequest: IPoolSwapStructs.SwapRequestStruct,
    balances: PromiseOrValue<BigNumberish>[],
    indexIn: PromiseOrValue<BigNumberish>,
    indexOut: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  queryExit(
    poolId: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    balances: PromiseOrValue<BigNumberish>[],
    lastChangeBlock: PromiseOrValue<BigNumberish>,
    protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
    userData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  "queryExit(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
    poolId: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    balances: PromiseOrValue<BigNumberish>[],
    lastChangeBlock: PromiseOrValue<BigNumberish>,
    protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
    userData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  queryJoin(
    poolId: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    balances: PromiseOrValue<BigNumberish>[],
    lastChangeBlock: PromiseOrValue<BigNumberish>,
    protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
    userData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  "queryJoin(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
    poolId: PromiseOrValue<BytesLike>,
    sender: PromiseOrValue<string>,
    recipient: PromiseOrValue<string>,
    balances: PromiseOrValue<BigNumberish>[],
    lastChangeBlock: PromiseOrValue<BigNumberish>,
    protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
    userData: PromiseOrValue<BytesLike>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ContractTransaction>;

  callStatic: {
    getPoolId(overrides?: CallOverrides): Promise<string>;

    "getPoolId()"(overrides?: CallOverrides): Promise<string>;

    getScalingFactors(overrides?: CallOverrides): Promise<BigNumber[]>;

    "getScalingFactors()"(overrides?: CallOverrides): Promise<BigNumber[]>;

    getSwapFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "getSwapFeePercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

    onExitPool(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        amountsOut: BigNumber[];
        dueProtocolFeeAmounts: BigNumber[];
      }
    >;

    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        amountsOut: BigNumber[];
        dueProtocolFeeAmounts: BigNumber[];
      }
    >;

    onJoinPool(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        amountsIn: BigNumber[];
        dueProtocolFeeAmounts: BigNumber[];
      }
    >;

    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber[], BigNumber[]] & {
        amountsIn: BigNumber[];
        dueProtocolFeeAmounts: BigNumber[];
      }
    >;

    onSwap(
      swapRequest: IPoolSwapStructs.SwapRequestStruct,
      balances: PromiseOrValue<BigNumberish>[],
      indexIn: PromiseOrValue<BigNumberish>,
      indexOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256[],uint256,uint256)"(
      swapRequest: IPoolSwapStructs.SwapRequestStruct,
      balances: PromiseOrValue<BigNumberish>[],
      indexIn: PromiseOrValue<BigNumberish>,
      indexOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    queryExit(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & {bptIn: BigNumber; amountsOut: BigNumber[]}
    >;

    "queryExit(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & {bptIn: BigNumber; amountsOut: BigNumber[]}
    >;

    queryJoin(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & {bptOut: BigNumber; amountsIn: BigNumber[]}
    >;

    "queryJoin(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber[]] & {bptOut: BigNumber; amountsIn: BigNumber[]}
    >;
  };

  filters: {};

  estimateGas: {
    getPoolId(overrides?: CallOverrides): Promise<BigNumber>;

    "getPoolId()"(overrides?: CallOverrides): Promise<BigNumber>;

    getScalingFactors(overrides?: CallOverrides): Promise<BigNumber>;

    "getScalingFactors()"(overrides?: CallOverrides): Promise<BigNumber>;

    getSwapFeePercentage(overrides?: CallOverrides): Promise<BigNumber>;

    "getSwapFeePercentage()"(overrides?: CallOverrides): Promise<BigNumber>;

    onExitPool(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    onJoinPool(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    onSwap(
      swapRequest: IPoolSwapStructs.SwapRequestStruct,
      balances: PromiseOrValue<BigNumberish>[],
      indexIn: PromiseOrValue<BigNumberish>,
      indexOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256[],uint256,uint256)"(
      swapRequest: IPoolSwapStructs.SwapRequestStruct,
      balances: PromiseOrValue<BigNumberish>[],
      indexIn: PromiseOrValue<BigNumberish>,
      indexOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    queryExit(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    "queryExit(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    queryJoin(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;

    "queryJoin(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getPoolId(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getPoolId()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getScalingFactors(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getScalingFactors()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getSwapFeePercentage(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getSwapFeePercentage()"(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    onExitPool(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    "onExitPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    onJoinPool(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    "onJoinPool(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    onSwap(
      swapRequest: IPoolSwapStructs.SwapRequestStruct,
      balances: PromiseOrValue<BigNumberish>[],
      indexIn: PromiseOrValue<BigNumberish>,
      indexOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    "onSwap((uint8,address,address,uint256,bytes32,uint256,address,address,bytes),uint256[],uint256,uint256)"(
      swapRequest: IPoolSwapStructs.SwapRequestStruct,
      balances: PromiseOrValue<BigNumberish>[],
      indexIn: PromiseOrValue<BigNumberish>,
      indexOut: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    queryExit(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    "queryExit(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    queryJoin(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;

    "queryJoin(bytes32,address,address,uint256[],uint256,uint256,bytes)"(
      poolId: PromiseOrValue<BytesLike>,
      sender: PromiseOrValue<string>,
      recipient: PromiseOrValue<string>,
      balances: PromiseOrValue<BigNumberish>[],
      lastChangeBlock: PromiseOrValue<BigNumberish>,
      protocolSwapFeePercentage: PromiseOrValue<BigNumberish>,
      userData: PromiseOrValue<BytesLike>,
      overrides?: Overrides & {from?: PromiseOrValue<string>}
    ): Promise<PopulatedTransaction>;
  };
}
