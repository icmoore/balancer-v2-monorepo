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
  MockStablePoolAmplification,
  MockStablePoolAmplificationInterface,
} from "../../../contracts/test/MockStablePoolAmplification";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IVault",
        name: "vault",
        type: "address",
      },
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amplificationParameter",
        type: "uint256",
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
        name: "startValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endValue",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "startTime",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "AmpUpdateStarted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "currentValue",
        type: "uint256",
      },
    ],
    name: "AmpUpdateStopped",
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
    name: "getAmplificationParameter",
    outputs: [
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isUpdating",
        type: "bool",
      },
      {
        internalType: "uint256",
        name: "precision",
        type: "uint256",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rawEndValue",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
    ],
    name: "startAmplificationParameterUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stopAmplificationParameterUpdate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60e06040523480156200001157600080fd5b5060405162000d9c38038062000d9c8339810160408190526200003491620002aa565b306080526001600160601b0319606083901b1660a052806200005d600182101561012c620000b2565b6200007061138882111561012d620000b2565b60006200008b826103e8620000c760201b620002db1760201c565b90506200009881620000f6565b5050505060601b6001600160601b03191660c05262000310565b81620000c357620000c38162000140565b5050565b6000828202620000ef841580620000e7575083858381620000e457fe5b04145b6003620000b2565b9392505050565b620001048180428062000155565b7fa0d01593e47e69d07e0ccd87bece09411e07dd1ed40ca8f2e7af2976542a023381604051620001359190620002f1565b60405180910390a150565b62000152816210905360ea1b620001c8565b50565b6200016f8160c060406200022960201b620003081760201c565b6200018983608060406200022960201b620003081760201c565b620001a2856040806200022960201b620003081760201c565b620001bc87600060406200022960201b620003081760201c565b17171760005550505050565b62461bcd60e51b600090815260206004526007602452600a808404818106603090810160081b958390069590950190829004918206850160101b01602363ffffff0060e086901c160160181b0190930160c81b60445260e882901c90606490fd5b6000620002388484846200023e565b50501b90565b6200024f61010083106064620000b2565b62000288600182101580156200028057506200027c60ff84610100036200029e60201b6200031b1760201c565b8211155b6064620000b2565b6200029983821c156101b4620000b2565b505050565b80820390821102900390565b600080600060608486031215620002bf578283fd5b8351620002cc81620002fa565b6020850151909350620002df81620002fa565b80925050604084015190509250925092565b90815260200190565b6001600160a01b03811681146200015257600080fd5b60805160a05160601c60c05160601c610a59620003436000398061027a5250806102565250806102065250610a596000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c8063893d20e81161005b578063893d20e8146100d75780638d928af8146100ec578063aaabadc5146100f4578063eb0f24d6146100fc5761007d565b80632f1a0bc9146100825780636daccffa14610097578063851c1bb3146100b7575b600080fd5b61009561009036600461094b565b610104565b005b61009f6101e7565b6040516100ae939291906109f2565b60405180910390f35b6100ca6100c53660046108d7565b610202565b6040516100ae91906109bd565b6100df610254565b6040516100ae919061099c565b6100df610278565b6100df61029c565b6100956102ab565b61010c610327565b61011c600183101561012c610370565b61012d61138883111561012d610370565b6000610139824261037e565b905061014d6201518082101561013d610370565b600080610158610394565b91509150610169811561013e610370565b6000610177866103e86102db565b905060008382116101a6576101a161019262015180866102db565b61019c84886102db565b610408565b6101c0565b6101c06101b662015180846102db565b61019c86886102db565b90506101d2600282111561013f610370565b6101de84834289610447565b50505050505050565b60008060006101f4610394565b90949093506103e892509050565b60007f00000000000000000000000000000000000000000000000000000000000000008260405160200161023792919061096c565b604051602081830303815290604052805190602001209050919050565b7f000000000000000000000000000000000000000000000000000000000000000090565b7f000000000000000000000000000000000000000000000000000000000000000090565b60006102a6610496565b905090565b6102b3610327565b6000806102be610394565b915091506102ce81610140610370565b6102d78261051d565b5050565b60008282026102ff8415806102f85750838583816102f557fe5b04145b6003610370565b90505b92915050565b6000610315848484610563565b50501b90565b80820390821102900390565b60006103566000357fffffffff0000000000000000000000000000000000000000000000000000000016610202565b905061036d61036582336105af565b610191610370565b50565b816102d7576102d7816106d3565b600061038e838311156001610370565b50900390565b6000806000806000806103a56106fd565b9350935093509350804210156103f85760019450838311156103dc5781810382420385850302816103d257fe5b04840195506103f3565b81810382420384860302816103ed57fe5b04840395505b610400565b600094508295505b505050509091565b60006104178215156004610370565b508115157fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff909201046001010290565b6104538484848461075c565b7f1835882ee7a34ac194f717a35e09bb1d24c82a3b9d854ab6c9749525b714cdf2848484846040516104889493929190610a08565b60405180910390a150505050565b60006104a0610278565b73ffffffffffffffffffffffffffffffffffffffff1663aaabadc56040518163ffffffff1660e01b815260040160206040518083038186803b1580156104e557600080fd5b505afa1580156104f9573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102a69190610917565b6105298182424261075c565b7fa0d01593e47e69d07e0ccd87bece09411e07dd1ed40ca8f2e7af2976542a02338160405161055891906109bd565b60405180910390a150565b61057261010083106064610370565b61059b60018210158015610594575061059060ff846101000361031b565b8211155b6064610370565b6105aa83821c156101b4610370565b505050565b600073ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1ba1b6105ce610254565b73ffffffffffffffffffffffffffffffffffffffff16141580156105f657506105f68361079b565b1561063857610603610254565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16149050610302565b610640610496565b73ffffffffffffffffffffffffffffffffffffffff16639be2a8848484306040518463ffffffff1660e01b815260040161067c939291906109c6565b60206040518083038186803b15801561069457600080fd5b505afa1580156106a8573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106cc91906108b7565b9050610302565b61036d817f42414c0000000000000000000000000000000000000000000000000000000000610809565b60008060008061071c600060406000546108849092919063ffffffff16565b60005490945061072e90604080610884565b6000549093506107419060806040610884565b6000549092506107549060c06040610884565b905090919293565b6107698160c06040610308565b6107768360806040610308565b61078285604080610308565b61078f8760006040610308565b17171760005550505050565b60006107c67f2f1a0bc900000000000000000000000000000000000000000000000000000000610202565b8214806107fa57506107f77feb0f24d600000000000000000000000000000000000000000000000000000000610202565b82145b806103025750610302826108b1565b7f08c379a000000000000000000000000000000000000000000000000000000000600090815260206004526007602452600a808404818106603090810160081b958390069590950190829004918206850160101b01602363ffffff0060e086901c160160181b0190930160c81b60445260e882901c90606490fd5b6001901b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0191901c1690565b50600090565b6000602082840312156108c8578081fd5b815180151581146102ff578182fd5b6000602082840312156108e8578081fd5b81357fffffffff00000000000000000000000000000000000000000000000000000000811681146102ff578182fd5b600060208284031215610928578081fd5b815173ffffffffffffffffffffffffffffffffffffffff811681146102ff578182fd5b6000806040838503121561095d578081fd5b50508035926020909101359150565b9182527fffffffff0000000000000000000000000000000000000000000000000000000016602082015260240190565b73ffffffffffffffffffffffffffffffffffffffff91909116815260200190565b90815260200190565b92835273ffffffffffffffffffffffffffffffffffffffff918216602084015216604082015260600190565b9283529015156020830152604082015260600190565b9384526020840192909252604083015260608201526080019056fea2646970667358221220eb7467389fbdda19567843f180f46069c6ad5f6e6cafefef508e1ec88fe18eff64736f6c63430007010033";

type MockStablePoolAmplificationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockStablePoolAmplificationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockStablePoolAmplification__factory extends ContractFactory {
  constructor(...args: MockStablePoolAmplificationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    vault: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    amplificationParameter: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<MockStablePoolAmplification> {
    return super.deploy(
      vault,
      owner,
      amplificationParameter,
      overrides || {}
    ) as Promise<MockStablePoolAmplification>;
  }
  override getDeployTransaction(
    vault: PromiseOrValue<string>,
    owner: PromiseOrValue<string>,
    amplificationParameter: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): TransactionRequest {
    return super.getDeployTransaction(
      vault,
      owner,
      amplificationParameter,
      overrides || {}
    );
  }
  override attach(address: string): MockStablePoolAmplification {
    return super.attach(address) as MockStablePoolAmplification;
  }
  override connect(signer: Signer): MockStablePoolAmplification__factory {
    return super.connect(signer) as MockStablePoolAmplification__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockStablePoolAmplificationInterface {
    return new utils.Interface(_abi) as MockStablePoolAmplificationInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockStablePoolAmplification {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as MockStablePoolAmplification;
  }
}