/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {Signer, utils, Contract, ContractFactory, Overrides} from "ethers";
import type {Provider, TransactionRequest} from "@ethersproject/providers";
import type {PromiseOrValue} from "../../common";
import type {
  ProtocolFeesCollector,
  ProtocolFeesCollectorInterface,
} from "../../contracts/ProtocolFeesCollector";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IVault",
        name: "_vault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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

const _bytecode =
  "0x60c060405234801561001057600080fd5b50604051610cb1380380610cb183398101604081905261002f9161004d565b30608052600160005560601b6001600160601b03191660a05261007b565b60006020828403121561005e578081fd5b81516001600160a01b0381168114610074578182fd5b9392505050565b60805160a05160601c610c0b6100a66000398061042d52806105815250806102b45250610c0b6000f3fe608060405234801561001057600080fd5b50600436106100a35760003560e01c8063851c1bb311610076578063d877845c1161005b578063d877845c14610129578063e42abf3514610131578063fbfa77cf14610151576100a3565b8063851c1bb314610101578063aaabadc514610114576100a3565b806338e9922e146100a857806355c67628146100bd5780636b6b9f69146100db5780636daefab6146100ee575b600080fd5b6100bb6100b6366004610a33565b610159565b005b6100c56101b8565b6040516100d29190610b57565b60405180910390f35b6100bb6100e9366004610a33565b6101be565b6100bb6100fc366004610868565b610211565b6100c561010f3660046109bb565b6102b0565b61011c610302565b6040516100d29190610acc565b6100c5610311565b61014461013f3660046108e9565b610317565b6040516100d29190610b13565b61011c61042b565b61016161044f565b6101786706f05b59d3b20000821115610258610498565b60018190556040517fa9ba3ffe0b6c366b81232caab38605a0699ad5398d6cce76f91ee809e322dafc906101ad908390610b57565b60405180910390a150565b60015490565b6101c661044f565b6101dc662386f26fc10000821115610259610498565b60028190556040517f5a0b7386237e7f07fa741efc64e59c9387d2cccafec760efed4d53387f20e19a906101ad908390610b57565b6102196104aa565b61022161044f565b61022b84836104c3565b60005b848110156102a057600086868381811061024457fe5b90506020020160208101906102599190610a17565b9050600085858481811061026957fe5b60200291909101359150610296905073ffffffffffffffffffffffffffffffffffffffff831685836104d0565b505060010161022e565b506102a9610576565b5050505050565b60007f0000000000000000000000000000000000000000000000000000000000000000826040516020016102e5929190610a63565b604051602081830303815290604052805190602001209050919050565b600061030c61057d565b905090565b60025490565b6060815167ffffffffffffffff8111801561033157600080fd5b5060405190808252806020026020018201604052801561035b578160200160208202803683370190505b50905060005b82518110156104255782818151811061037657fe5b602002602001015173ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b81526004016103b69190610acc565b60206040518083038186803b1580156103ce57600080fd5b505afa1580156103e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104069190610a4b565b82828151811061041257fe5b6020908102919091010152600101610361565b50919050565b7f000000000000000000000000000000000000000000000000000000000000000081565b600061047e6000357fffffffff00000000000000000000000000000000000000000000000000000000166102b0565b905061049561048d823361061d565b610191610498565b50565b816104a6576104a6816106bc565b5050565b6104bc60026000541415610190610498565b6002600055565b6104a68183146067610498565b6105718363a9059cbb60e01b84846040516024016104ef929190610aed565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff00000000000000000000000000000000000000000000000000000000909316929092179091526106e6565b505050565b6001600055565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663aaabadc56040518163ffffffff1660e01b815260040160206040518083038186803b1580156105e557600080fd5b505afa1580156105f9573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061030c91906109fb565b600061062761057d565b73ffffffffffffffffffffffffffffffffffffffff16639be2a8848484306040518463ffffffff1660e01b815260040161066393929190610b60565b60206040518083038186803b15801561067b57600080fd5b505afa15801561068f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106b39190610994565b90505b92915050565b610495817f42414c0000000000000000000000000000000000000000000000000000000000610799565b600060608373ffffffffffffffffffffffffffffffffffffffff168360405161070f9190610a93565b6000604051808303816000865af19150503d806000811461074c576040519150601f19603f3d011682016040523d82523d6000602084013e610751565b606091505b50915091506000821415610769573d6000803e3d6000fd5b61079381516000148061078b57508180602001905181019061078b9190610994565b6101a2610498565b50505050565b7f08c379a000000000000000000000000000000000000000000000000000000000600090815260206004526007602452600a808404818106603090810160081b958390069590950190829004918206850160101b01602363ffffff0060e086901c160160181b0190930160c81b60445260e882901c90606490fd5b60008083601f840112610825578182fd5b50813567ffffffffffffffff81111561083c578182fd5b602083019150836020808302850101111561085657600080fd5b9250929050565b80356106b681610bb3565b60008060008060006060868803121561087f578081fd5b853567ffffffffffffffff80821115610896578283fd5b6108a289838a01610814565b909750955060208801359150808211156108ba578283fd5b506108c788828901610814565b90945092505060408601356108db81610bb3565b809150509295509295909350565b600060208083850312156108fb578182fd5b823567ffffffffffffffff80821115610912578384fd5b818501915085601f830112610925578384fd5b813581811115610933578485fd5b8381029150610943848301610b8c565b8181528481019084860184860187018a101561095d578788fd5b8795505b83861015610987576109738a8261085d565b835260019590950194918601918601610961565b5098975050505050505050565b6000602082840312156109a5578081fd5b815180151581146109b4578182fd5b9392505050565b6000602082840312156109cc578081fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146109b4578182fd5b600060208284031215610a0c578081fd5b81516109b481610bb3565b600060208284031215610a28578081fd5b81356109b481610bb3565b600060208284031215610a44578081fd5b5035919050565b600060208284031215610a5c578081fd5b5051919050565b9182527fffffffff0000000000000000000000000000000000000000000000000000000016602082015260240190565b60008251815b81811015610ab35760208186018101518583015201610a99565b81811115610ac15782828501525b509190910192915050565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b6020808252825182820181905260009190848201906040850190845b81811015610b4b57835183529284019291840191600101610b2f565b50909695505050505050565b90815260200190565b92835273ffffffffffffffffffffffffffffffffffffffff918216602084015216604082015260600190565b60405181810167ffffffffffffffff81118282101715610bab57600080fd5b604052919050565b73ffffffffffffffffffffffffffffffffffffffff8116811461049557600080fdfea264697066735822122077db3afc770826574d1ffdd2a0039ad43403ce915b8a29c0a25cc23b79ce513864736f6c63430007010033";

type ProtocolFeesCollectorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ProtocolFeesCollectorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ProtocolFeesCollector__factory extends ContractFactory {
  constructor(...args: ProtocolFeesCollectorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _vault: PromiseOrValue<string>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<ProtocolFeesCollector> {
    return super.deploy(
      _vault,
      overrides || {}
    ) as Promise<ProtocolFeesCollector>;
  }
  override getDeployTransaction(
    _vault: PromiseOrValue<string>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): TransactionRequest {
    return super.getDeployTransaction(_vault, overrides || {});
  }
  override attach(address: string): ProtocolFeesCollector {
    return super.attach(address) as ProtocolFeesCollector;
  }
  override connect(signer: Signer): ProtocolFeesCollector__factory {
    return super.connect(signer) as ProtocolFeesCollector__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ProtocolFeesCollectorInterface {
    return new utils.Interface(_abi) as ProtocolFeesCollectorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ProtocolFeesCollector {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ProtocolFeesCollector;
  }
}