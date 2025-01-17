/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Contract, Signer, utils} from "ethers";
import type {Provider} from "@ethersproject/providers";
import type {
  ProtocolFeeCache,
  ProtocolFeeCacheInterface,
} from "../../../../contracts/pool-utils/external-fees/ProtocolFeeCache";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bytes32",
        name: "feeCache",
        type: "bytes32",
      },
    ],
    name: "ProtocolFeePercentageCacheUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "bool",
        name: "enabled",
        type: "bool",
      },
    ],
    name: "RecoveryModeStateChanged",
    type: "event",
  },
  {
    inputs: [],
    name: "disableRecoveryMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "enableRecoveryMode",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "selector",
        type: "bytes4",
      },
    ],
    name: "getActionId",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
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
    inputs: [],
    name: "getOwner",
    outputs: [
      {
        internalType: "address",
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
        internalType: "uint256",
        name: "feeType",
        type: "uint256",
      },
    ],
    name: "getProtocolFeePercentageCache",
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
        name: "feeType",
        type: "uint256",
      },
    ],
    name: "getProviderFeeId",
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
    name: "inRecoveryMode",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "updateProtocolFeePercentageCache",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class ProtocolFeeCache__factory {
  static readonly abi = _abi;
  static createInterface(): ProtocolFeeCacheInterface {
    return new utils.Interface(_abi) as ProtocolFeeCacheInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProtocolFeeCache {
    return new Contract(address, _abi, signerOrProvider) as ProtocolFeeCache;
  }
}
