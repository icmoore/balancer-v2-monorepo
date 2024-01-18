/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {Signer, utils, Contract, ContractFactory, Overrides} from "ethers";
import type {Provider, TransactionRequest} from "@ethersproject/providers";
import type {PromiseOrValue} from "../../../../common";
import type {
  RecoveryModeHelper,
  RecoveryModeHelperInterface,
} from "../../../../@balancer-labs/v2-pool-utils/contracts/RecoveryModeHelper";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IVault",
        name: "vault",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516109fb3803806109fb83398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c61096c61008f60003980610296525061096c6000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80632787a2871461003b5780638d928af814610065575b600080fd5b61004e610049366004610705565b61007a565b60405161005c929190610880565b60405180910390f35b61006d610294565b60405161005c919061085f565b600060606000610088610294565b905060608173ffffffffffffffffffffffffffffffffffffffff1663f94d4668886040518263ffffffff1660e01b81526004016100c59190610832565b60006040518083038186803b1580156100dd57600080fd5b505afa1580156100f1573d6000803e3d6000fd5b505050506040513d6000823e601f3d9081017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe01682016040526101379190810190610639565b505090506060815167ffffffffffffffff8111801561015557600080fd5b5060405190808252806020026020018201604052801561017f578160200160208202803683370190505b50905060005b82518110156102545760008473ffffffffffffffffffffffffffffffffffffffff1663b05f8e488b8685815181106101b957fe5b60200260200101516040518363ffffffff1660e01b81526004016101de92919061083b565b60806040518083038186803b1580156101f657600080fd5b505afa15801561020a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061022e91906107c0565b50505090508083838151811061024057fe5b602090810291909101015250600101610185565b50600061026187836102b8565b9250905061026e88610317565b955061027b828288610334565b9450610286856103e3565b945050505050935093915050565b7f000000000000000000000000000000000000000000000000000000000000000090565b600060606102e3836000815181106102cc57fe5b60200260200101518561047590919063ffffffff16565b83517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff016020909401938452949293505050565b60008180602001905181019061032d9190610800565b9392505050565b60606000610342838561048b565b9050845167ffffffffffffffff8111801561035c57600080fd5b50604051908082528060200260200182016040528015610386578160200160208202803683370190505b50915060005b85518110156103da576103bb828783815181106103a557fe5b60200260200101516104de90919063ffffffff16565b8382815181106103c757fe5b602090810291909101015260010161038c565b50509392505050565b6060815160010167ffffffffffffffff8111801561040057600080fd5b5060405190808252806020026020018201604052801561042a578160200160208202803683370190505b50905060005b825181101561046f5782818151811061044557fe5b602002602001015182826001018151811061045c57fe5b6020908102919091010152600101610430565b50919050565b6000610485838311156001610511565b50900390565b600061049a8215156004610511565b670de0b6b3a764000083026104cc8415806104c55750670de0b6b3a76400008583816104c257fe5b04145b6005610511565b8281816104d557fe5b04949350505050565b60008282026105028415806104fb5750838583816104f857fe5b04145b6003610511565b670de0b6b3a7640000816104d5565b8161051f5761051f81610523565b5050565b61054d817f42414c0000000000000000000000000000000000000000000000000000000000610550565b50565b7f08c379a000000000000000000000000000000000000000000000000000000000600090815260206004526007602452600a808404818106603090810160081b958390069590950190829004918206850160101b01602363ffffff0060e086901c160160181b0190930160c81b60445260e882901c90606490fd5b600082601f8301126105db578081fd5b81516105ee6105e9826108f4565b6108cd565b81815291506020808301908481018184028601820187101561060f57600080fd5b60005b8481101561062e57815184529282019290820190600101610612565b505050505092915050565b60008060006060848603121561064d578283fd5b835167ffffffffffffffff80821115610664578485fd5b818601915086601f830112610677578485fd5b81516106856105e9826108f4565b80828252602080830192508086018b8283870289010111156106a557898afd5b8996505b848710156106d05780516106bc81610914565b8452600196909601959281019281016106a9565b5089015190975093505050808211156106e7578384fd5b506106f4868287016105cb565b925050604084015190509250925092565b600080600060608486031215610719578283fd5b8335925060208085013567ffffffffffffffff80821115610738578485fd5b818701915087601f83011261074b578485fd5b813581811115610759578586fd5b610789847fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016108cd565b9150808252888482850101111561079e578586fd5b8084840185840137810190920193909352929592945050506040919091013590565b600080600080608085870312156107d5578081fd5b84519350602085015192506040850151915060608501516107f581610914565b939692955090935050565b60008060408385031215610812578182fd5b825160ff81168114610822578283fd5b6020939093015192949293505050565b90815260200190565b91825273ffffffffffffffffffffffffffffffffffffffff16602082015260400190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b60006040820184835260206040818501528185518084526060860191508287019350845b818110156108c0578451835293830193918301916001016108a4565b5090979650505050505050565b60405181810167ffffffffffffffff811182821017156108ec57600080fd5b604052919050565b600067ffffffffffffffff82111561090a578081fd5b5060209081020190565b73ffffffffffffffffffffffffffffffffffffffff8116811461054d57600080fdfea26469706673582212203178300f2e6f328036dc2925140c0f093fc3dc2a3727487f5983e760d8caa32264736f6c63430007010033";

type RecoveryModeHelperConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RecoveryModeHelperConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RecoveryModeHelper__factory extends ContractFactory {
  constructor(...args: RecoveryModeHelperConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    vault: PromiseOrValue<string>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<RecoveryModeHelper> {
    return super.deploy(vault, overrides || {}) as Promise<RecoveryModeHelper>;
  }
  override getDeployTransaction(
    vault: PromiseOrValue<string>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): TransactionRequest {
    return super.getDeployTransaction(vault, overrides || {});
  }
  override attach(address: string): RecoveryModeHelper {
    return super.attach(address) as RecoveryModeHelper;
  }
  override connect(signer: Signer): RecoveryModeHelper__factory {
    return super.connect(signer) as RecoveryModeHelper__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RecoveryModeHelperInterface {
    return new utils.Interface(_abi) as RecoveryModeHelperInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RecoveryModeHelper {
    return new Contract(address, _abi, signerOrProvider) as RecoveryModeHelper;
  }
}
