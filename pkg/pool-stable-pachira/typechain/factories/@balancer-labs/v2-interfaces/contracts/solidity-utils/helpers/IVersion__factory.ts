/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer, utils} from "ethers";
import type {Provider} from "@ethersproject/providers";
import type {
  IVersion,
  IVersionInterface,
} from "../../../../../../@balancer-labs/v2-interfaces/contracts/solidity-utils/helpers/IVersion";

const _abi = [
  {
    inputs: [],
    name: "version",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

export class IVersion__factory {
  static readonly abi = _abi;
  static createInterface(): IVersionInterface {
    return new utils.Interface(_abi) as IVersionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IVersion {
    return new Contract(address, _abi, signerOrProvider) as IVersion;
  }
}