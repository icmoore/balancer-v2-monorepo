/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {Signer, utils, Contract, ContractFactory, Overrides} from "ethers";
import type {Provider, TransactionRequest} from "@ethersproject/providers";
import type {PromiseOrValue} from "../../../common";
import type {
  CircuitBreakerLib,
  CircuitBreakerLibInterface,
} from "../../../contracts/lib/CircuitBreakerLib";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "bound",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "weight",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "isLowerBound",
        type: "bool",
      },
    ],
    name: "calcAdjustedBound",
    outputs: [
      {
        internalType: "uint256",
        name: "boundRatio",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
] as const;

const _bytecode =
  "0x610e4f610026600b82828239805160001a60731461001957fe5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100355760003560e01c8063f4d8cb7c1461003a575b600080fd5b6100656004803603606081101561005057600080fd5b50803590602081013590604001351515610077565b60408051918252519081900360200190f35b600061009f84610086856100a7565b84610093576100b9610097565b6101735b63ffffffff16565b949350505050565b670de0b6b3a764000081810391100290565b6000670de0b6b3a76400008214156100d257508161016d565b671bc16d674ec800008214156100f3576100ec83846101f9565b905061016d565b673782dace9d90000082141561012357600061010f84856101f9565b905061011b81826101f9565b91505061016d565b600061012f848461022f565b905060006101496101428361271061034f565b6001610387565b90508082101561015e5760009250505061016d565b61016882826103a0565b925050505b92915050565b6000670de0b6b3a764000082141561018c57508161016d565b671bc16d674ec800008214156101a6576100ec838461034f565b673782dace9d9000008214156101ce5760006101c2848561034f565b905061011b818261034f565b60006101da848461022f565b905060006101ed6101428361271061034f565b90506101688282610387565b600082820261021d84158061021657508385838161021357fe5b04145b60036103b6565b670de0b6b3a764000090049392505050565b6000816102455750670de0b6b3a764000061016d565b826102525750600061016d565b61026260ff84901c1560066103b6565b82610288770bce5086492111aea88f4bb1ca6bcf584181ea8059f76532841060076103b6565b826000670c7d713b49da0000831380156102a95750670f43fc2c04ee000083125b156102e05760006102b9846103c8565b9050670de0b6b3a764000080820784020583670de0b6b3a7640000830502019150506102ee565b816102ea84610501565b0290505b670de0b6b3a7640000900561033c7ffffffffffffffffffffffffffffffffffffffffffffffffdc702bd3a30fc00008212801590610335575068070c1cc73b00c800008213155b60086103b6565b610345816108a1565b9695505050505050565b600082820261036984158061021657508385838161021357fe5b6001670de0b6b3a76400006001830304018115150291505092915050565b600082820161039984821015836103b6565b9392505050565b60006103b08383111560016103b6565b50900390565b816103c4576103c481610d71565b5050565b670de0b6b3a7640000026000806ec097ce7bc90715b34b9f1000000000808401907fffffffffffffffffffffffffffffffffff3f68318436f8ea4cb460f0000000008501028161041457fe5b05905060006ec097ce7bc90715b34b9f100000000082800205905081806ec097ce7bc90715b34b9f100000000081840205915060038205016ec097ce7bc90715b34b9f100000000082840205915060058205016ec097ce7bc90715b34b9f100000000082840205915060078205016ec097ce7bc90715b34b9f100000000082840205915060098205016ec097ce7bc90715b34b9f1000000000828402059150600b8205016ec097ce7bc90715b34b9f1000000000828402059150600d8205016ec097ce7bc90715b34b9f1000000000828402059150600f820581019050806002029450505050505b919050565b6000670de0b6b3a764000082121561053e57610534826ec097ce7bc90715b34b9f10000000008161052e57fe5b05610501565b60000390506104fc565b60007e1600ef3172e58d2e933ec884fde10064c63b5372d805e203c0000000000000831261058f57770195e54c5dd42177f53a27172fa9ec630262827000000000830592506806f05b59d3b2000000015b73011798004d755d3c8bc8e03204cf44619e00000083126105c7576b1425982cf597cd205cef7380830592506803782dace9d9000000015b606492830292026e01855144814a7ff805980ff0084000831261060f576e01855144814a7ff805980ff008400068056bc75e2d63100000840205925068ad78ebc5ac62000000015b6b02df0ab5a80a22c61ab5a700831261064a576b02df0ab5a80a22c61ab5a70068056bc75e2d6310000084020592506856bc75e2d631000000015b693f1fce3da636ea5cf850831261068157693f1fce3da636ea5cf85068056bc75e2d631000008402059250682b5e3af16b18800000015b690127fa27722cc06cc5e283126106b857690127fa27722cc06cc5e268056bc75e2d6310000084020592506815af1d78b58c400000015b68280e60114edb805d0383126106ed5768280e60114edb805d0368056bc75e2d631000008402059250680ad78ebc5ac6200000015b680ebc5fb41746121110831261071857680ebc5fb4174612111068056bc75e2d631000009384020592015b6808f00f760a4b2db55d831261074d576808f00f760a4b2db55d68056bc75e2d6310000084020592506802b5e3af16b1880000015b6806f5f17757889379378312610782576806f5f177578893793768056bc75e2d63100000840205925068015af1d78b58c40000015b6806248f33704b28660383126107b6576806248f33704b28660368056bc75e2d63100000840205925067ad78ebc5ac620000015b6805c548670b9510e7ac83126107ea576805c548670b9510e7ac68056bc75e2d6310000084020592506756bc75e2d6310000015b600068056bc75e2d63100000840168056bc75e2d63100000808603028161080d57fe5b059050600068056bc75e2d63100000828002059050818068056bc75e2d63100000818402059150600382050168056bc75e2d63100000828402059150600582050168056bc75e2d63100000828402059150600782050168056bc75e2d63100000828402059150600982050168056bc75e2d63100000828402059150600b820501600202606485820105979650505050505050565b60006108e67ffffffffffffffffffffffffffffffffffffffffffffffffdc702bd3a30fc000083121580156108df575068070c1cc73b00c800008313155b60096103b6565b600082121561091a576108fb826000036108a1565b6ec097ce7bc90715b34b9f10000000008161091257fe5b0590506104fc565b60006806f05b59d3b2000000831261097057507ffffffffffffffffffffffffffffffffffffffffffffffff90fa4a62c4e00000090910190770195e54c5dd42177f53a27172fa9ec6302628270000000006109bc565b6803782dace9d900000083126109b857507ffffffffffffffffffffffffffffffffffffffffffffffffc87d2531627000000909101906b1425982cf597cd205cef73806109bc565b5060015b6064929092029168056bc75e2d6310000068ad78ebc5ac620000008412610a22577fffffffffffffffffffffffffffffffffffffffffffffff5287143a539e0000009093019268056bc75e2d631000006e01855144814a7ff805980ff008400082020590505b6856bc75e2d6310000008412610a74577fffffffffffffffffffffffffffffffffffffffffffffffa9438a1d29cf0000009093019268056bc75e2d631000006b02df0ab5a80a22c61ab5a70082020590505b682b5e3af16b188000008412610ac4577fffffffffffffffffffffffffffffffffffffffffffffffd4a1c50e94e78000009093019268056bc75e2d63100000693f1fce3da636ea5cf85082020590505b6815af1d78b58c4000008412610b14577fffffffffffffffffffffffffffffffffffffffffffffffea50e2874a73c000009093019268056bc75e2d63100000690127fa27722cc06cc5e282020590505b680ad78ebc5ac62000008412610b63577ffffffffffffffffffffffffffffffffffffffffffffffff5287143a539e000009093019268056bc75e2d6310000068280e60114edb805d0382020590505b68056bc75e2d631000008412610bb2577ffffffffffffffffffffffffffffffffffffffffffffffffa9438a1d29cf000009093019268056bc75e2d63100000680ebc5fb4174612111082020590505b6802b5e3af16b18800008412610c01577ffffffffffffffffffffffffffffffffffffffffffffffffd4a1c50e94e7800009093019268056bc75e2d631000006808f00f760a4b2db55d82020590505b68015af1d78b58c400008412610c50577ffffffffffffffffffffffffffffffffffffffffffffffffea50e2874a73c00009093019268056bc75e2d631000006806f5f177578893793782020590505b68056bc75e2d631000008481019085906002908280020505918201919050600368056bc75e2d631000008783020505918201919050600468056bc75e2d631000008783020505918201919050600568056bc75e2d631000008783020505918201919050600668056bc75e2d631000008783020505918201919050600768056bc75e2d631000008783020505918201919050600868056bc75e2d631000008783020505918201919050600968056bc75e2d631000008783020505918201919050600a68056bc75e2d631000008783020505918201919050600b68056bc75e2d631000008783020505918201919050600c68056bc75e2d631000008783020505918201919050606468056bc75e2d63100000848402058502059695505050505050565b610d9b817f42414c0000000000000000000000000000000000000000000000000000000000610d9e565b50565b7f08c379a000000000000000000000000000000000000000000000000000000000600090815260206004526007602452600a808404818106603090810160081b958390069590950190829004918206850160101b01602363ffffff0060e086901c160160181b0190930160c81b60445260e882901c90606490fdfea2646970667358221220c911ef2ac8f6dfd2ab18ef3c50ca23774f070b5b2a6c3a837145e39e1ba50b1264736f6c63430007010033";

type CircuitBreakerLibConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CircuitBreakerLibConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CircuitBreakerLib__factory extends ContractFactory {
  constructor(...args: CircuitBreakerLibConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): Promise<CircuitBreakerLib> {
    return super.deploy(overrides || {}) as Promise<CircuitBreakerLib>;
  }
  override getDeployTransaction(
    overrides?: Overrides & {from?: PromiseOrValue<string>}
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): CircuitBreakerLib {
    return super.attach(address) as CircuitBreakerLib;
  }
  override connect(signer: Signer): CircuitBreakerLib__factory {
    return super.connect(signer) as CircuitBreakerLib__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CircuitBreakerLibInterface {
    return new utils.Interface(_abi) as CircuitBreakerLibInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CircuitBreakerLib {
    return new Contract(address, _abi, signerOrProvider) as CircuitBreakerLib;
  }
}
