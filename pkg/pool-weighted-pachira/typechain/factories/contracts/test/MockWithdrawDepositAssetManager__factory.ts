/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {Signer, utils, Contract, ContractFactory, Overrides} from "ethers";
import type {Provider, TransactionRequest} from "@ethersproject/providers";
import type {PromiseOrValue} from "../../../common";
import type {
  MockWithdrawDepositAssetManager,
  MockWithdrawDepositAssetManagerInterface,
} from "../../../contracts/test/MockWithdrawDepositAssetManager";

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
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "depositToPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "poolId",
        type: "bytes32",
      },
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawFromPool",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a060405234801561001057600080fd5b50604051610a72380380610a7283398101604081905261002f91610044565b60601b6001600160601b031916608052610072565b600060208284031215610055578081fd5b81516001600160a01b038116811461006b578182fd5b9392505050565b60805160601c6109d9610099600039806102265280610439528061049b52506109d96000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c80630bab2ebe1461003b578063d1d745df14610050575b600080fd5b61004e610049366004610809565b610063565b005b61004e61005e366004610809565b610295565b6040805160028082526060828101909352816020015b6100816107b9565b8152602001906001900390816100795790505090506000816000815181106100a557fe5b60200260200101516000019060028111156100bc57fe5b908160028111156100c957fe5b8152505083816000815181106100db57fe5b6020026020010151602001818152505081816000815181106100f957fe5b60200260200101516060018181525050828160008151811061011757fe5b60200260200101516040019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060028160018151811061016457fe5b602002602001015160000190600281111561017b57fe5b9081600281111561018857fe5b81525050838160018151811061019a57fe5b602002602001015160200181815250506000816001815181106101b957fe5b6020026020010151606001818152505082816001815181106101d757fe5b602090810291909101015173ffffffffffffffffffffffffffffffffffffffff918216604091820152517fe6c460920000000000000000000000000000000000000000000000000000000081527f00000000000000000000000000000000000000000000000000000000000000009091169063e6c460929061025d90849060040161091f565b600060405180830381600087803b15801561027757600080fd5b505af115801561028b573d6000803e3d6000fd5b5050505050505050565b6040805160028082526060828101909352816020015b6102b36107b9565b8152602001906001900390816102ab5790505090506002816000815181106102d757fe5b60200260200101516000019060028111156102ee57fe5b908160028111156102fb57fe5b81525050838160008151811061030d57fe5b60200260200101516020018181525050818160008151811061032b57fe5b60200260200101516060018181525050828160008151811061034957fe5b60200260200101516040019073ffffffffffffffffffffffffffffffffffffffff16908173ffffffffffffffffffffffffffffffffffffffff168152505060018160018151811061039657fe5b60200260200101516000019060028111156103ad57fe5b908160028111156103ba57fe5b8152505083816001815181106103cc57fe5b6020026020010151602001818152505081816001815181106103ea57fe5b60200260200101516060018181525050828160018151811061040857fe5b602090810291909101015173ffffffffffffffffffffffffffffffffffffffff91821660409091015261045e9084167f0000000000000000000000000000000000000000000000000000000000000000846104d0565b6040517fe6c4609200000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000169063e6c460929061025d90849060040161091f565b801580159061058157506040517fdd62ed3e00000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff84169063dd62ed3e9061052e90309086906004016108a9565b60206040518083038186803b15801561054657600080fd5b505afa15801561055a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061057e9190610858565b15155b15610628576106288363095ea7b360e01b8460006040516024016105a69291906108d0565b604080517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08184030181529190526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fffffffff000000000000000000000000000000000000000000000000000000009093169290921790915261064c565b6106478363095ea7b360e01b84846040516024016105a69291906108f9565b505050565b600060608373ffffffffffffffffffffffffffffffffffffffff16836040516106759190610870565b6000604051808303816000865af19150503d80600081146106b2576040519150601f19603f3d011682016040523d82523d6000602084013e6106b7565b606091505b509150915060008214156106cf573d6000803e3d6000fd5b6106f98151600014806106f15750818060200190518101906106f191906107e2565b6101a26106ff565b50505050565b8161070d5761070d81610711565b5050565b61073b817f42414c000000000000000000000000000000000000000000000000000000000061073e565b50565b7f08c379a000000000000000000000000000000000000000000000000000000000600090815260206004526007602452600a808404818106603090810160081b958390069590950190829004918206850160101b01602363ffffff0060e086901c160160181b0190930160c81b60445260e882901c90606490fd5b604080516080810190915280600081526000602082018190526040820181905260609091015290565b6000602082840312156107f3578081fd5b81518015158114610802578182fd5b9392505050565b60008060006060848603121561081d578182fd5b83359250602084013573ffffffffffffffffffffffffffffffffffffffff81168114610847578283fd5b929592945050506040919091013590565b600060208284031215610869578081fd5b5051919050565b60008251815b818110156108905760208186018101518583015201610876565b8181111561089e5782828501525b509190910192915050565b73ffffffffffffffffffffffffffffffffffffffff92831681529116602082015260400190565b73ffffffffffffffffffffffffffffffffffffffff92909216825260ff16602082015260400190565b73ffffffffffffffffffffffffffffffffffffffff929092168252602082015260400190565b602080825282518282018190526000919060409081850190868401855b8281101561099657815180516003811061095257fe5b855280870151878601528581015173ffffffffffffffffffffffffffffffffffffffff1686860152606090810151908501526080909301929085019060010161093c565b509197965050505050505056fea264697066735822122026a86d46720201b9b67e701b08d0e58b2f24781e3a59e6786cfab4e4ee5043bd64736f6c63430007010033";

type MockWithdrawDepositAssetManagerConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockWithdrawDepositAssetManagerConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockWithdrawDepositAssetManager__factory extends ContractFactory {
  constructor(...args: MockWithdrawDepositAssetManagerConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    vault: PromiseOrValue<string>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<MockWithdrawDepositAssetManager> {
    return super.deploy(
      vault,
      overrides || {}
    ) as Promise<MockWithdrawDepositAssetManager>;
  }
  override getDeployTransaction(
    vault: PromiseOrValue<string>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): TransactionRequest {
    return super.getDeployTransaction(vault, overrides || {});
  }
  override attach(address: string): MockWithdrawDepositAssetManager {
    return super.attach(address) as MockWithdrawDepositAssetManager;
  }
  override connect(signer: Signer): MockWithdrawDepositAssetManager__factory {
    return super.connect(signer) as MockWithdrawDepositAssetManager__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockWithdrawDepositAssetManagerInterface {
    return new utils.Interface(
      _abi
    ) as MockWithdrawDepositAssetManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockWithdrawDepositAssetManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockWithdrawDepositAssetManager;
  }
}