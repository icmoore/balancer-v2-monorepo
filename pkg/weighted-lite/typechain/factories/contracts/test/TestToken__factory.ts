/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type {Provider, TransactionRequest} from "@ethersproject/providers";
import type {PromiseOrValue} from "../../../common";
import type {
  TestToken,
  TestTokenInterface,
} from "../../../contracts/test/TestToken";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
      },
      {
        internalType: "uint8",
        name: "decimals",
        type: "uint8",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "burnWithoutAllowance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeparator",
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
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "getNextNonce",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "nonces",
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
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "deadline",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "v",
        type: "uint8",
      },
      {
        internalType: "bytes32",
        name: "r",
        type: "bytes32",
      },
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
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
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b506040516200140e3803806200140e833981810160405260608110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b9083019060208201858111156200006e57600080fd5b82516401000000008111828201881017156200008957600080fd5b82525081516020918201929091019080838360005b83811015620000b85781810151838201526020016200009e565b50505050905090810190601f168015620000e65780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010a57600080fd5b9083019060208201858111156200012057600080fd5b82516401000000008111828201881017156200013b57600080fd5b82525081516020918201929091019080838360005b838110156200016a57818101518382015260200162000150565b50505050905090810190601f168015620001985780820380516001836020036101000a031916815260200191505b50604081815260209283015182820190915260018252603160f81b838301528651909450869350839283918791620001d6916003918501906200025e565b508051620001ec9060049060208401906200025e565b50506005805460ff19166012179055508151602092830120608052805191012060a052507f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f60c0526200023f8162000248565b505050620002fa565b6005805460ff191660ff92909216919091179055565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620002a157805160ff1916838001178555620002d1565b82800160010185558215620002d1579182015b82811115620002d1578251825591602001919060010190620002b4565b50620002df929150620002e3565b5090565b5b80821115620002df5760008155600101620002e4565b60805160a05160c0516110e76200032760003980610dbd525080610dff525080610dde52506110e76000f3fe608060405234801561001057600080fd5b506004361061016c5760003560e01c806379cc6790116100cd578063a457c2d711610081578063d505accf11610066578063d505accf146104d4578063dd62ed3e14610532578063ed24911d1461056d5761016c565b8063a457c2d714610462578063a9059cbb1461049b5761016c565b80637ecebe00116100b25780637ecebe00146103f457806390193b7c1461042757806395d89b411461045a5761016c565b806379cc6790146103825780637c602bc2146103bb5761016c565b80633644e5151161012457806340c10f191161010957806340c10f19146102f757806342966c681461033257806370a082311461034f5761016c565b80633644e515146102b657806339509351146102be5761016c565b806318160ddd1161015557806318160ddd1461023b57806323b872dd14610255578063313ce567146102985761016c565b806306fdde0314610171578063095ea7b3146101ee575b600080fd5b610179610575565b6040805160208082528351818301528351919283929083019185019080838360005b838110156101b357818101518382015260200161019b565b50505050905090810190601f1680156101e05780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102276004803603604081101561020457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610629565b604080519115158252519081900360200190f35b61024361063f565b60408051918252519081900360200190f35b6102276004803603606081101561026b57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060400135610645565b6102a06106a6565b6040805160ff9092168252519081900360200190f35b6102436106af565b610227600480360360408110156102d457600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81351690602001356106be565b6103306004803603604081101561030d57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610701565b005b6103306004803603602081101561034857600080fd5b503561070f565b6102436004803603602081101561036557600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661071c565b6103306004803603604081101561039857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610744565b610330600480360360408110156103d157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561077a565b6102436004803603602081101561040a57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610784565b6102436004803603602081101561043d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610795565b6101796107bd565b6102276004803603604081101561047857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813516906020013561083c565b610227600480360360408110156104b157600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169060200135610882565b610330600480360360e08110156104ea57600080fd5b5073ffffffffffffffffffffffffffffffffffffffff813581169160208101359091169060408101359060608101359060ff6080820135169060a08101359060c0013561088f565b6102436004803603604081101561054857600080fd5b5073ffffffffffffffffffffffffffffffffffffffff81358116916020013516610964565b61024361099c565b60038054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561061f5780601f106105f45761010080835404028352916020019161061f565b820191906000526020600020905b81548152906001019060200180831161060257829003601f168201915b5050505050905090565b60006106363384846109a6565b50600192915050565b60025490565b6000610652848484610a15565b73ffffffffffffffffffffffffffffffffffffffff841660009081526001602090815260408083203380855292529091205461069c918691610697908661019e610b3e565b6109a6565b5060019392505050565b60055460ff1690565b60006106b961099c565b905090565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490916106369185906106979086610b54565b61070b8282610b6d565b5050565b6107193382610c26565b50565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b600061075e826101a16107578633610964565b9190610b3e565b905061076b8333836109a6565b6107758383610c26565b505050565b61070b8282610c26565b600061078f82610795565b92915050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526006602052604090205490565b60048054604080516020601f60027fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff61010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561061f5780601f106105f45761010080835404028352916020019161061f565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091610636918590610697908661019f610b3e565b6000610636338484610a15565b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886108be8c610795565b89604051602001808781526020018673ffffffffffffffffffffffffffffffffffffffff1681526020018573ffffffffffffffffffffffffffffffffffffffff168152602001848152602001838152602001828152602001965050505050505060405160208183030381529060405280519060200120905061094f8882610946878787610d16565b886101f8610d55565b61095a8888886109a6565b5050505050505050565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60006106b9610db9565b73ffffffffffffffffffffffffffffffffffffffff808416600081815260016020908152604080832094871680845294825291829020859055815185815291517f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9259281900390910190a3505050565b610a3973ffffffffffffffffffffffffffffffffffffffff84161515610198610e84565b610a5d73ffffffffffffffffffffffffffffffffffffffff83161515610199610e84565b610a68838383610775565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902054610a9b90826101a0610b3e565b73ffffffffffffffffffffffffffffffffffffffff8085166000908152602081905260408082209390935590841681522054610ad79082610b54565b73ffffffffffffffffffffffffffffffffffffffff8084166000818152602081815260409182902094909455805185815290519193928716927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a3505050565b6000610b4d8484111583610e84565b5050900390565b6000828201610b668482101583610e84565b9392505050565b610b7960008383610775565b610b93610b8e82610b8861063f565b90610b54565b610e92565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054610bc39082610b54565b73ffffffffffffffffffffffffffffffffffffffff83166000818152602081815260408083209490945583518581529351929391927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9281900390910190a35050565b610c4a73ffffffffffffffffffffffffffffffffffffffff8316151561019b610e84565b610c5682600083610775565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040902054610c8990826101b2610b3e565b73ffffffffffffffffffffffffffffffffffffffff8316600090815260208190526040902055610cc4610b8e82610cbe61063f565b90610e97565b60408051828152905160009173ffffffffffffffffffffffffffffffffffffffff8516917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9181900360200190a35050565b60408051604180825260808201909252606091829190602082018180368337019050509050836020820152826040820152846060820153949350505050565b6000610d6085610ea5565b9050610d76610d70878387610f0c565b83610e84565b610d85428410156101b8610e84565b50505073ffffffffffffffffffffffffffffffffffffffff9092166000908152600660205260409020805460010190555050565b60007f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000610e2661101e565b30604051602001808681526020018581526020018481526020018381526020018273ffffffffffffffffffffffffffffffffffffffff1681526020019550505050505060405160208183030381529060405280519060200120905090565b8161070b5761070b81611022565b600255565b6000610b6683836001610b3e565b6000610eaf610db9565b8260405160200180807f190100000000000000000000000000000000000000000000000000000000000081525060020183815260200182815260200192505050604051602081830303815290604052805190602001209050919050565b6000610f1e82516041146101b9610e84565b60008060006020850151925060408501519150606085015160001a9050600060018783868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015610f97573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81161580159061101257508773ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b98975050505050505050565b4690565b7f08c379a000000000000000000000000000000000000000000000000000000000600090815260206004526007602452600a808304818106603090810160081b83860601918390049283060160101b016642414c230000300160c81b604452610719917f42414c0000000000000000000000000000000000000000000000000000000000906242414c90606490fdfea2646970667358221220c8148a7fe5bfb10bf08dfc3d82f851fe54089a7d4bf91f319b4426d5d3b46b6e64736f6c63430007010033";

type TestTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: TestTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class TestToken__factory extends ContractFactory {
  constructor(...args: TestTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<TestToken> {
    return super.deploy(
      name,
      symbol,
      decimals,
      overrides || {}
    ) as Promise<TestToken>;
  }
  override getDeployTransaction(
    name: PromiseOrValue<string>,
    symbol: PromiseOrValue<string>,
    decimals: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): TransactionRequest {
    return super.getDeployTransaction(name, symbol, decimals, overrides || {});
  }
  override attach(address: string): TestToken {
    return super.attach(address) as TestToken;
  }
  override connect(signer: Signer): TestToken__factory {
    return super.connect(signer) as TestToken__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TestTokenInterface {
    return new utils.Interface(_abi) as TestTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TestToken {
    return new Contract(address, _abi, signerOrProvider) as TestToken;
  }
}