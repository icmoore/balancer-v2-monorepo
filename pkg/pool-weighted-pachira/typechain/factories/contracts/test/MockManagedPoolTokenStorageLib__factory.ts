/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {Signer, utils, Contract, ContractFactory, Overrides} from "ethers";
import type {Provider, TransactionRequest} from "@ethersproject/providers";
import type {PromiseOrValue} from "../../../common";
import type {
  MockManagedPoolTokenStorageLib,
  MockManagedPoolTokenStorageLibInterface,
} from "../../../contracts/test/MockManagedPoolTokenStorageLib";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tokenState",
        type: "bytes32",
      },
    ],
    name: "getTokenScalingFactor",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tokenState",
        type: "bytes32",
      },
    ],
    name: "getTokenStartAndEndWeights",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "tokenState",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "pctProgress",
        type: "uint256",
      },
    ],
    name: "getTokenWeight",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "normalizedWeight",
        type: "uint256",
      },
    ],
    name: "initializeTokenState",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "tokenState",
        type: "bytes32",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "setTokenScalingFactor",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "tokenState",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "normalizedStartWeight",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "normalizedEndWeight",
        type: "uint256",
      },
    ],
    name: "setTokenWeight",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610630806100206000396000f3fe608060405234801561001057600080fd5b50600436106100725760003560e01c80639e14a09c116100505780639e14a09c146100d4578063a508d8c7146100e7578063f265be6c146100fa57610072565b806305c1d3ed1461007757806322deeb57146100a05780632b00a81f146100b3575b600080fd5b61008a610085366004610598565b61010d565b60405161009791906105e3565b60405180910390f35b61008a6100ae36600461054c565b610122565b6100c66100c1366004610508565b61012e565b6040516100979291906105ec565b61008a6100e236600461056d565b610143565b61008a6100f5366004610520565b61015a565b61008a610108366004610508565b610166565b60006101198383610171565b90505b92915050565b6000610119838361018a565b60008061013a836101ad565b91509150915091565b60006101508484846101d1565b90505b9392505050565b600061011983836101ee565b600061011c8261028a565b600061017d81846101ee565b90506101198183846101d1565b600061011961019b848360406102ae565b6101a7856040806102ae565b846102db565b6000806101bc838260406102ae565b91506101ca836040806102ae565b9050915091565b6000610150826040806101e688888784610345565b929190610345565b600061011961027f8373ffffffffffffffffffffffffffffffffffffffff1663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b15801561023c57600080fd5b505afa158015610250573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061027491906105c2565b60129060ff16610386565b849060806005610345565b60008061029a83608060056102ae565b600a0a670de0b6b3a7640000029392505050565b6001901b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0191901c1690565b6000670de0b6b3a7640000821015806102f357508284145b156102ff575081610153565b8161030b575082610153565b8284111561032c5760006103218385870361039c565b850391506101539050565b600061033a8386860361039c565b850191506101539050565b60006103528484846103d2565b506001901b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff01811b1992909216911b1790565b600061039683831115600161041e565b50900390565b60008282026103c08415806103b95750838583816103b657fe5b04145b600361041e565b670de0b6b3a764000090049392505050565b6103e16101008310606461041e565b61040a6001821015801561040357506103ff60ff8461010003610430565b8211155b606461041e565b61041983821c156101b461041e565b505050565b8161042c5761042c8161043c565b5050565b80820390821102900390565b610466817f42414c0000000000000000000000000000000000000000000000000000000000610469565b50565b7f08c379a000000000000000000000000000000000000000000000000000000000600090815260206004526007602452600a808404818106603090810160081b958390069590950190829004918206850160101b01602363ffffff0060e086901c160160181b0190930160c81b60445260e882901c90606490fd5b803573ffffffffffffffffffffffffffffffffffffffff8116811461011c57600080fd5b600060208284031215610519578081fd5b5035919050565b60008060408385031215610532578081fd5b8235915061054384602085016104e4565b90509250929050565b6000806040838503121561055e578182fd5b50508035926020909101359150565b600080600060608486031215610581578081fd5b505081359360208301359350604090920135919050565b600080604083850312156105aa578182fd5b6105b484846104e4565b946020939093013593505050565b6000602082840312156105d3578081fd5b815160ff81168114610153578182fd5b90815260200190565b91825260208201526040019056fea264697066735822122053a86f53c31536f4cc8f0d1bd8793d93ae7e673b90e022e2f4fa7004c0b1dae964736f6c63430007010033";

type MockManagedPoolTokenStorageLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockManagedPoolTokenStorageLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockManagedPoolTokenStorageLib__factory extends ContractFactory {
  constructor(...args: MockManagedPoolTokenStorageLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<MockManagedPoolTokenStorageLib> {
    return super.deploy(
      overrides || {}
    ) as Promise<MockManagedPoolTokenStorageLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockManagedPoolTokenStorageLib {
    return super.attach(address) as MockManagedPoolTokenStorageLib;
  }
  override connect(signer: Signer): MockManagedPoolTokenStorageLib__factory {
    return super.connect(signer) as MockManagedPoolTokenStorageLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockManagedPoolTokenStorageLibInterface {
    return new utils.Interface(_abi) as MockManagedPoolTokenStorageLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockManagedPoolTokenStorageLib {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockManagedPoolTokenStorageLib;
  }
}
