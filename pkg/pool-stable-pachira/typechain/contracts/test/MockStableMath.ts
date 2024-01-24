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
} from "../../common";

export interface MockStableMathInterface extends utils.Interface {
  functions: {
    "bptInForExactTokensOut(uint256,uint256[],uint256[],uint256,uint256,uint256)": FunctionFragment;
    "calculateInvariant(uint256,uint256[])": FunctionFragment;
    "exactBPTInForTokenOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
    "exactTokensInForBPTOut(uint256,uint256[],uint256[],uint256,uint256,uint256)": FunctionFragment;
    "getTokenBalanceGivenInvariantAndAllOtherBalances(uint256,uint256[],uint256,uint256)": FunctionFragment;
    "inGivenOut(uint256,uint256[],uint256,uint256,uint256)": FunctionFragment;
    "outGivenIn(uint256,uint256[],uint256,uint256,uint256)": FunctionFragment;
    "tokenInForExactBPTOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "bptInForExactTokensOut"
      | "bptInForExactTokensOut(uint256,uint256[],uint256[],uint256,uint256,uint256)"
      | "calculateInvariant"
      | "calculateInvariant(uint256,uint256[])"
      | "exactBPTInForTokenOut"
      | "exactBPTInForTokenOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)"
      | "exactTokensInForBPTOut"
      | "exactTokensInForBPTOut(uint256,uint256[],uint256[],uint256,uint256,uint256)"
      | "getTokenBalanceGivenInvariantAndAllOtherBalances"
      | "getTokenBalanceGivenInvariantAndAllOtherBalances(uint256,uint256[],uint256,uint256)"
      | "inGivenOut"
      | "inGivenOut(uint256,uint256[],uint256,uint256,uint256)"
      | "outGivenIn"
      | "outGivenIn(uint256,uint256[],uint256,uint256,uint256)"
      | "tokenInForExactBPTOut"
      | "tokenInForExactBPTOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "bptInForExactTokensOut",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "bptInForExactTokensOut(uint256,uint256[],uint256[],uint256,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateInvariant",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "calculateInvariant(uint256,uint256[])",
    values: [PromiseOrValue<BigNumberish>, PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "exactBPTInForTokenOut",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exactBPTInForTokenOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exactTokensInForBPTOut",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "exactTokensInForBPTOut(uint256,uint256[],uint256[],uint256,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalanceGivenInvariantAndAllOtherBalances",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenBalanceGivenInvariantAndAllOtherBalances(uint256,uint256[],uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "inGivenOut",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "inGivenOut(uint256,uint256[],uint256,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "outGivenIn",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "outGivenIn(uint256,uint256[],uint256,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenInForExactBPTOut",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "tokenInForExactBPTOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>[],
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;

  decodeFunctionResult(
    functionFragment: "bptInForExactTokensOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "bptInForExactTokensOut(uint256,uint256[],uint256[],uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateInvariant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "calculateInvariant(uint256,uint256[])",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactBPTInForTokenOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactBPTInForTokenOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactTokensInForBPTOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "exactTokensInForBPTOut(uint256,uint256[],uint256[],uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalanceGivenInvariantAndAllOtherBalances",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenBalanceGivenInvariantAndAllOtherBalances(uint256,uint256[],uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "inGivenOut", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "inGivenOut(uint256,uint256[],uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "outGivenIn", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "outGivenIn(uint256,uint256[],uint256,uint256,uint256)",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenInForExactBPTOut",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenInForExactBPTOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)",
    data: BytesLike
  ): Result;

  events: {};
}

export interface MockStableMath extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: MockStableMathInterface;

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
    bptInForExactTokensOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsOut: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "bptInForExactTokensOut(uint256,uint256[],uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsOut: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    calculateInvariant(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "calculateInvariant(uint256,uint256[])"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    exactBPTInForTokenOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountIn: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "exactBPTInForTokenOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountIn: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    exactTokensInForBPTOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsIn: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "exactTokensInForBPTOut(uint256,uint256[],uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsIn: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getTokenBalanceGivenInvariantAndAllOtherBalances(
      amplificationParameter: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      currentInvariant: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getTokenBalanceGivenInvariantAndAllOtherBalances(uint256,uint256[],uint256,uint256)"(
      amplificationParameter: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      currentInvariant: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    inGivenOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "inGivenOut(uint256,uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    outGivenIn(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "outGivenIn(uint256,uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokenInForExactBPTOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountOut: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "tokenInForExactBPTOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountOut: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  bptInForExactTokensOut(
    amp: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    amountsOut: PromiseOrValue<BigNumberish>[],
    bptTotalSupply: PromiseOrValue<BigNumberish>,
    currentInvariant: PromiseOrValue<BigNumberish>,
    swapFee: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "bptInForExactTokensOut(uint256,uint256[],uint256[],uint256,uint256,uint256)"(
    amp: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    amountsOut: PromiseOrValue<BigNumberish>[],
    bptTotalSupply: PromiseOrValue<BigNumberish>,
    currentInvariant: PromiseOrValue<BigNumberish>,
    swapFee: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  calculateInvariant(
    amp: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "calculateInvariant(uint256,uint256[])"(
    amp: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  exactBPTInForTokenOut(
    amp: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    tokenIndex: PromiseOrValue<BigNumberish>,
    bptAmountIn: PromiseOrValue<BigNumberish>,
    bptTotalSupply: PromiseOrValue<BigNumberish>,
    currentInvariant: PromiseOrValue<BigNumberish>,
    swapFee: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "exactBPTInForTokenOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)"(
    amp: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    tokenIndex: PromiseOrValue<BigNumberish>,
    bptAmountIn: PromiseOrValue<BigNumberish>,
    bptTotalSupply: PromiseOrValue<BigNumberish>,
    currentInvariant: PromiseOrValue<BigNumberish>,
    swapFee: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  exactTokensInForBPTOut(
    amp: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    amountsIn: PromiseOrValue<BigNumberish>[],
    bptTotalSupply: PromiseOrValue<BigNumberish>,
    currentInvariant: PromiseOrValue<BigNumberish>,
    swapFee: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "exactTokensInForBPTOut(uint256,uint256[],uint256[],uint256,uint256,uint256)"(
    amp: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    amountsIn: PromiseOrValue<BigNumberish>[],
    bptTotalSupply: PromiseOrValue<BigNumberish>,
    currentInvariant: PromiseOrValue<BigNumberish>,
    swapFee: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getTokenBalanceGivenInvariantAndAllOtherBalances(
    amplificationParameter: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    currentInvariant: PromiseOrValue<BigNumberish>,
    tokenIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getTokenBalanceGivenInvariantAndAllOtherBalances(uint256,uint256[],uint256,uint256)"(
    amplificationParameter: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    currentInvariant: PromiseOrValue<BigNumberish>,
    tokenIndex: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  inGivenOut(
    amp: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    tokenIndexIn: PromiseOrValue<BigNumberish>,
    tokenIndexOut: PromiseOrValue<BigNumberish>,
    tokenAmountOut: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "inGivenOut(uint256,uint256[],uint256,uint256,uint256)"(
    amp: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    tokenIndexIn: PromiseOrValue<BigNumberish>,
    tokenIndexOut: PromiseOrValue<BigNumberish>,
    tokenAmountOut: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  outGivenIn(
    amp: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    tokenIndexIn: PromiseOrValue<BigNumberish>,
    tokenIndexOut: PromiseOrValue<BigNumberish>,
    tokenAmountIn: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "outGivenIn(uint256,uint256[],uint256,uint256,uint256)"(
    amp: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    tokenIndexIn: PromiseOrValue<BigNumberish>,
    tokenIndexOut: PromiseOrValue<BigNumberish>,
    tokenAmountIn: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokenInForExactBPTOut(
    amp: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    tokenIndex: PromiseOrValue<BigNumberish>,
    bptAmountOut: PromiseOrValue<BigNumberish>,
    bptTotalSupply: PromiseOrValue<BigNumberish>,
    currentInvariant: PromiseOrValue<BigNumberish>,
    swapFee: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "tokenInForExactBPTOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)"(
    amp: PromiseOrValue<BigNumberish>,
    balances: PromiseOrValue<BigNumberish>[],
    tokenIndex: PromiseOrValue<BigNumberish>,
    bptAmountOut: PromiseOrValue<BigNumberish>,
    bptTotalSupply: PromiseOrValue<BigNumberish>,
    currentInvariant: PromiseOrValue<BigNumberish>,
    swapFee: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    bptInForExactTokensOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsOut: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "bptInForExactTokensOut(uint256,uint256[],uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsOut: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateInvariant(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateInvariant(uint256,uint256[])"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactBPTInForTokenOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountIn: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exactBPTInForTokenOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountIn: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactTokensInForBPTOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsIn: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exactTokensInForBPTOut(uint256,uint256[],uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsIn: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenBalanceGivenInvariantAndAllOtherBalances(
      amplificationParameter: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      currentInvariant: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTokenBalanceGivenInvariantAndAllOtherBalances(uint256,uint256[],uint256,uint256)"(
      amplificationParameter: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      currentInvariant: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    inGivenOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "inGivenOut(uint256,uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    outGivenIn(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "outGivenIn(uint256,uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenInForExactBPTOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountOut: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenInForExactBPTOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountOut: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    bptInForExactTokensOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsOut: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "bptInForExactTokensOut(uint256,uint256[],uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsOut: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    calculateInvariant(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "calculateInvariant(uint256,uint256[])"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactBPTInForTokenOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountIn: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exactBPTInForTokenOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountIn: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    exactTokensInForBPTOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsIn: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "exactTokensInForBPTOut(uint256,uint256[],uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsIn: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getTokenBalanceGivenInvariantAndAllOtherBalances(
      amplificationParameter: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      currentInvariant: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getTokenBalanceGivenInvariantAndAllOtherBalances(uint256,uint256[],uint256,uint256)"(
      amplificationParameter: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      currentInvariant: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    inGivenOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "inGivenOut(uint256,uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    outGivenIn(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "outGivenIn(uint256,uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokenInForExactBPTOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountOut: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "tokenInForExactBPTOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountOut: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    bptInForExactTokensOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsOut: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "bptInForExactTokensOut(uint256,uint256[],uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsOut: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    calculateInvariant(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "calculateInvariant(uint256,uint256[])"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exactBPTInForTokenOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountIn: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "exactBPTInForTokenOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountIn: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    exactTokensInForBPTOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsIn: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "exactTokensInForBPTOut(uint256,uint256[],uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      amountsIn: PromiseOrValue<BigNumberish>[],
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokenBalanceGivenInvariantAndAllOtherBalances(
      amplificationParameter: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      currentInvariant: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getTokenBalanceGivenInvariantAndAllOtherBalances(uint256,uint256[],uint256,uint256)"(
      amplificationParameter: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      currentInvariant: PromiseOrValue<BigNumberish>,
      tokenIndex: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    inGivenOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "inGivenOut(uint256,uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountOut: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    outGivenIn(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "outGivenIn(uint256,uint256[],uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndexIn: PromiseOrValue<BigNumberish>,
      tokenIndexOut: PromiseOrValue<BigNumberish>,
      tokenAmountIn: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokenInForExactBPTOut(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountOut: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "tokenInForExactBPTOut(uint256,uint256[],uint256,uint256,uint256,uint256,uint256)"(
      amp: PromiseOrValue<BigNumberish>,
      balances: PromiseOrValue<BigNumberish>[],
      tokenIndex: PromiseOrValue<BigNumberish>,
      bptAmountOut: PromiseOrValue<BigNumberish>,
      bptTotalSupply: PromiseOrValue<BigNumberish>,
      currentInvariant: PromiseOrValue<BigNumberish>,
      swapFee: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
