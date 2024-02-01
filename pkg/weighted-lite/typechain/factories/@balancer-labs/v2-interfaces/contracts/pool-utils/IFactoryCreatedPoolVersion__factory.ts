/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer, utils} from "ethers";
import type {Provider} from "@ethersproject/providers";
import type {
  IFactoryCreatedPoolVersion,
  IFactoryCreatedPoolVersionInterface,
} from "../../../../../@balancer-labs/v2-interfaces/contracts/pool-utils/IFactoryCreatedPoolVersion";

const _abi = [
  {
    inputs: [],
    name: "getPoolVersion",
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

export class IFactoryCreatedPoolVersion__factory {
  static readonly abi = _abi;
  static createInterface(): IFactoryCreatedPoolVersionInterface {
    return new utils.Interface(_abi) as IFactoryCreatedPoolVersionInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IFactoryCreatedPoolVersion {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IFactoryCreatedPoolVersion;
  }
}