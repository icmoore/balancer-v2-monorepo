/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer, utils} from "ethers";
import type {Provider} from "@ethersproject/providers";
import type {
  IProtocolFeesCollector,
  IProtocolFeesCollectorInterface,
} from "../../../../../@balancer-labs/v2-interfaces/contracts/vault/IProtocolFeesCollector";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newFlashLoanFeePercentage",
        type: "uint256",
      },
    ],
    name: "FlashLoanFeePercentageChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "newSwapFeePercentage",
        type: "uint256",
      },
    ],
    name: "SwapFeePercentageChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "getAuthorizer",
    outputs: [
      {
        internalType: "contract IAuthorizer",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
    ],
    name: "getCollectedFeeAmounts",
    outputs: [
      {
        internalType: "uint256[]",
        name: "feeAmounts",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getFlashLoanFeePercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSwapFeePercentage",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newFlashLoanFeePercentage",
        type: "uint256",
      },
    ],
    name: "setFlashLoanFeePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newSwapFeePercentage",
        type: "uint256",
      },
    ],
    name: "setSwapFeePercentage",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vault",
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
  {
    inputs: [
      {
        internalType: "contract IERC20[]",
        name: "tokens",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
    ],
    name: "withdrawCollectedFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IProtocolFeesCollector__factory {
  static readonly abi = _abi;
  static createInterface(): IProtocolFeesCollectorInterface {
    return new utils.Interface(_abi) as IProtocolFeesCollectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IProtocolFeesCollector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as IProtocolFeesCollector;
  }
}