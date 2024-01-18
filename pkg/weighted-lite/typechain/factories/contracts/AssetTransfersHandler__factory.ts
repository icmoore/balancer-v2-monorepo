/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer, utils} from "ethers";
import type {Provider} from "@ethersproject/providers";
import type {
  AssetTransfersHandler,
  AssetTransfersHandlerInterface,
} from "../../contracts/AssetTransfersHandler";

const _abi = [
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

export class AssetTransfersHandler__factory {
  static readonly abi = _abi;
  static createInterface(): AssetTransfersHandlerInterface {
    return new utils.Interface(_abi) as AssetTransfersHandlerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): AssetTransfersHandler {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as AssetTransfersHandler;
  }
}
