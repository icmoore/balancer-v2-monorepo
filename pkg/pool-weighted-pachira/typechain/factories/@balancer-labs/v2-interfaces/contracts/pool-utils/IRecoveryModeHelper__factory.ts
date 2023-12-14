/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer, utils} from "ethers";
import type {Provider} from "@ethersproject/providers";
import type {
  IRecoveryModeHelper,
  IRecoveryModeHelperInterface,
} from "../../../../../@balancer-labs/v2-interfaces/contracts/pool-utils/IRecoveryModeHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "userData",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "totalSupply",
        type: "uint256",
      },
    ],
    name: "calcComposableRecoveryAmountsOut",
    outputs: [
      {
        internalType: "uint256",
        name: "bptAmountIn",
        type: "uint256",
      },
      {
        internalType: "uint256[]",
        name: "amountsOut",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getVault",
    outputs: [
      {
        internalType: "contract IVault",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IRecoveryModeHelper__factory {
  static readonly abi = _abi;
  static createInterface(): IRecoveryModeHelperInterface {
    return new utils.Interface(_abi) as IRecoveryModeHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IRecoveryModeHelper {
    return new Contract(address, _abi, signerOrProvider) as IRecoveryModeHelper;
  }
}
