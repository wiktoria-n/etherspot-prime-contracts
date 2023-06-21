/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  UniversalSigValidator,
  UniversalSigValidatorInterface,
} from "../../../../src/helpers/UniversalSignatureValidator.sol/UniversalSigValidator";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "error",
        type: "bytes",
      },
    ],
    name: "ERC1271Revert",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "error",
        type: "bytes",
      },
    ],
    name: "ERC6492DeployFailed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_signer",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "isValidSig",
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
        name: "_signer",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
      {
        internalType: "bool",
        name: "allowSideEffects",
        type: "bool",
      },
    ],
    name: "isValidSigImpl",
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
        name: "_signer",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_hash",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "isValidSigWithSideEffects",
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
  "0x608060405234801561001057600080fd5b50610a7a806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806316d43401146100465780638f0684301461006d57806398ef1ed814610080575b600080fd5b61005961005436600461069e565b610093565b604051901515815260200160405180910390f35b61005961007b366004610712565b6104cc565b61005961008e366004610712565b610549565b60006001600160a01b0386163b6060827f649264926492649264926492649264926492649264926492649264926492649287876100d160208261076e565b6100dd928a9290610795565b6100e6916107bf565b14905080156101c0576000606088828961010160208261076e565b9261010e93929190610795565b81019061011b9190610880565b9550909250905060008590036101b957600080836001600160a01b031683604051610146919061091a565b6000604051808303816000865af19150503d8060008114610183576040519150601f19603f3d011682016040523d82523d6000602084013e610188565b606091505b5091509150816101b65780604051639d0d6e2d60e01b81526004016101ad9190610962565b60405180910390fd5b50505b50506101fa565b86868080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509294505050505b80806102065750600083115b1561030557604051630b135d3f60e11b81526001600160a01b038a1690631626ba7e90610239908b90869060040161097c565b602060405180830381865afa925050508015610272575060408051601f3d908101601f1916820190925261026f91810190610995565b60015b6102c1573d8080156102a0576040519150601f19603f3d011682016040523d82523d6000602084013e6102a5565b606091505b5080604051636f2a959960e01b81526004016101ad9190610962565b6001600160e01b03198116630b135d3f60e11b14841580156102e05750825b80156102ea575086155b156102f957806000526001601ffd5b94506104c39350505050565b6041861461037b5760405162461bcd60e51b815260206004820152603a60248201527f5369676e617475726556616c696461746f72237265636f7665725369676e657260448201527f3a20696e76616c6964207369676e6174757265206c656e67746800000000000060648201526084016101ad565b600061038a602082898b610795565b610393916107bf565b905060006103a5604060208a8c610795565b6103ae916107bf565b90506000898960408181106103c5576103c56109bf565b919091013560f81c915050601b81148015906103e557508060ff16601c14155b156104485760405162461bcd60e51b815260206004820152602d60248201527f5369676e617475726556616c696461746f723a20696e76616c6964207369676e60448201526c617475726520762076616c756560981b60648201526084016101ad565b6040805160008152602081018083528d905260ff83169181019190915260608101849052608081018390526001600160a01b038d169060019060a0016020604051602081039080840390855afa1580156104a6573d6000803e3d6000fd5b505050602060405103516001600160a01b03161496505050505050505b95945050505050565b6040516316d4340160e01b815260009030906316d43401906104fb9088908890889088906001906004016109d5565b6020604051808303816000875af115801561051a573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061053e9190610a27565b90505b949350505050565b6040516316d4340160e01b815260009030906316d434019061057790889088908890889088906004016109d5565b6020604051808303816000875af19250505080156105b2575060408051601f3d908101601f191682019092526105af91810190610a27565b60015b610628573d8080156105e0576040519150601f19603f3d011682016040523d82523d6000602084013e6105e5565b606091505b50805160018190036106245781600081518110610604576106046109bf565b6020910101516001600160f81b031916600160f81b149250610541915050565b8082fd5b9050610541565b6001600160a01b038116811461064457600080fd5b50565b60008083601f84011261065957600080fd5b50813567ffffffffffffffff81111561067157600080fd5b60208301915083602082850101111561068957600080fd5b9250929050565b801515811461064457600080fd5b6000806000806000608086880312156106b657600080fd5b85356106c18161062f565b945060208601359350604086013567ffffffffffffffff8111156106e457600080fd5b6106f088828901610647565b909450925050606086013561070481610690565b809150509295509295909350565b6000806000806060858703121561072857600080fd5b84356107338161062f565b935060208501359250604085013567ffffffffffffffff81111561075657600080fd5b61076287828801610647565b95989497509550505050565b8181038181111561078f57634e487b7160e01b600052601160045260246000fd5b92915050565b600080858511156107a557600080fd5b838611156107b257600080fd5b5050820193919092039150565b8035602083101561078f57600019602084900360031b1b1692915050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261080457600080fd5b813567ffffffffffffffff8082111561081f5761081f6107dd565b604051601f8301601f19908116603f01168101908282118183101715610847576108476107dd565b8160405283815286602085880101111561086057600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060006060848603121561089557600080fd5b83356108a08161062f565b9250602084013567ffffffffffffffff808211156108bd57600080fd5b6108c9878388016107f3565b935060408601359150808211156108df57600080fd5b506108ec868287016107f3565b9150509250925092565b60005b838110156109115781810151838201526020016108f9565b50506000910152565b6000825161092c8184602087016108f6565b9190910192915050565b6000815180845261094e8160208601602086016108f6565b601f01601f19169290920160200192915050565b6020815260006109756020830184610936565b9392505050565b8281526040602082015260006105416040830184610936565b6000602082840312156109a757600080fd5b81516001600160e01b03198116811461097557600080fd5b634e487b7160e01b600052603260045260246000fd5b6001600160a01b0386168152602081018590526080604082018190528101839052828460a0830137600081840160a0908101919091529115156060820152601f909201601f1916909101019392505050565b600060208284031215610a3957600080fd5b81516109758161069056fea264697066735822122092ef6067869f6b787fefd50fdf293c3abd3ad5eec73560fe66d54c0e82a595a664736f6c63430008110033";

type UniversalSigValidatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: UniversalSigValidatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class UniversalSigValidator__factory extends ContractFactory {
  constructor(...args: UniversalSigValidatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<UniversalSigValidator> {
    return super.deploy(overrides || {}) as Promise<UniversalSigValidator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): UniversalSigValidator {
    return super.attach(address) as UniversalSigValidator;
  }
  override connect(signer: Signer): UniversalSigValidator__factory {
    return super.connect(signer) as UniversalSigValidator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UniversalSigValidatorInterface {
    return new utils.Interface(_abi) as UniversalSigValidatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniversalSigValidator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UniversalSigValidator;
  }
}
