/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {Signer, utils, Contract, ContractFactory, Overrides} from "ethers";
import type {Provider, TransactionRequest} from "@ethersproject/providers";
import type {PromiseOrValue} from "../../../../../common";
import type {
  BasePoolUserData,
  BasePoolUserDataInterface,
} from "../../../../../@balancer-labs/v2-interfaces/contracts/pool-utils/BasePoolUserData";

const _abi = [
  {
    inputs: [],
    name: "RECOVERY_MODE_EXIT_KIND",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608f610024600b82828239805160001a607314601757fe5b30600052607381538281f3fe730000000000000000000000000000000000000000301460806040526004361060335760003560e01c806309564cb1146038575b600080fd5b603e6054565b6040805160ff9092168252519081900360200190f35b60ff8156fea2646970667358221220378fd437b6a4bf4c57f3a732a65742cb1c7ed7247fc625b1d6cfd5911ee6c06064736f6c63430007010033";

type BasePoolUserDataConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BasePoolUserDataConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BasePoolUserData__factory extends ContractFactory {
  constructor(...args: BasePoolUserDataConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<BasePoolUserData> {
    return super.deploy(overrides || {}) as Promise<BasePoolUserData>;
  }
  override getDeployTransaction(
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BasePoolUserData {
    return super.attach(address) as BasePoolUserData;
  }
  override connect(signer: Signer): BasePoolUserData__factory {
    return super.connect(signer) as BasePoolUserData__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BasePoolUserDataInterface {
    return new utils.Interface(_abi) as BasePoolUserDataInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BasePoolUserData {
    return new Contract(address, _abi, signerOrProvider) as BasePoolUserData;
  }
}
