/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  PayableOverrides,
  BytesLike,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../common";
import type {
  ERC1967Proxy,
  ERC1967ProxyInterface,
} from "../../../../../@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_logic",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    stateMutability: "payable",
    type: "fallback",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405260405162000c6638038062000c6683398181016040528101906200002991906200058b565b6200003d828260006200004560201b60201c565b5050620007e2565b62000056836200008860201b60201c565b600082511180620000645750805b156200008357620000818383620000df60201b620000371760201c565b505b505050565b62000099816200011560201b60201c565b8073ffffffffffffffffffffffffffffffffffffffff167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b60405160405180910390a250565b60606200010d838360405180606001604052806027815260200162000c3f60279139620001eb60201b60201c565b905092915050565b6200012b816200027d60201b620000641760201c565b6200016d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620001649062000678565b60405180910390fd5b80620001a77f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b620002a060201b620000871760201c565b60000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60606000808573ffffffffffffffffffffffffffffffffffffffff1685604051620002179190620006e7565b600060405180830381855af49150503d806000811462000254576040519150601f19603f3d011682016040523d82523d6000602084013e62000259565b606091505b50915091506200027286838387620002aa60201b60201c565b925050509392505050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000819050919050565b606083156200031b576000835114156200031257620002cf856200027d60201b60201c565b62000311576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003089062000750565b60405180910390fd5b5b8290506200032e565b6200032d83836200033660201b60201c565b5b949350505050565b6000825111156200034a5781518083602001fd5b806040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003809190620007be565b60405180910390fd5b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003ca826200039d565b9050919050565b620003dc81620003bd565b8114620003e857600080fd5b50565b600081519050620003fc81620003d1565b92915050565b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000457826200040c565b810181811067ffffffffffffffff821117156200047957620004786200041d565b5b80604052505050565b60006200048e62000389565b90506200049c82826200044c565b919050565b600067ffffffffffffffff821115620004bf57620004be6200041d565b5b620004ca826200040c565b9050602081019050919050565b60005b83811015620004f7578082015181840152602081019050620004da565b8381111562000507576000848401525b50505050565b6000620005246200051e84620004a1565b62000482565b90508281526020810184848401111562000543576200054262000407565b5b62000550848285620004d7565b509392505050565b600082601f83011262000570576200056f62000402565b5b8151620005828482602086016200050d565b91505092915050565b60008060408385031215620005a557620005a462000393565b5b6000620005b585828601620003eb565b925050602083015167ffffffffffffffff811115620005d957620005d862000398565b5b620005e78582860162000558565b9150509250929050565b600082825260208201905092915050565b7f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60008201527f6f74206120636f6e747261637400000000000000000000000000000000000000602082015250565b600062000660602d83620005f1565b91506200066d8262000602565b604082019050919050565b60006020820190508181036000830152620006938162000651565b9050919050565b600081519050919050565b600081905092915050565b6000620006bd826200069a565b620006c98185620006a5565b9350620006db818560208601620004d7565b80840191505092915050565b6000620006f58284620006b0565b915081905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b600062000738601d83620005f1565b9150620007458262000700565b602082019050919050565b600060208201905081810360008301526200076b8162000729565b9050919050565b600081519050919050565b60006200078a8262000772565b620007968185620005f1565b9350620007a8818560208601620004d7565b620007b3816200040c565b840191505092915050565b60006020820190508181036000830152620007da81846200077d565b905092915050565b61044d80620007f26000396000f3fe6080604052366100135761001161001d565b005b61001b61001d565b005b610025610091565b610035610030610093565b6100a2565b565b606061005c83836040518060600160405280602781526020016103f1602791396100c8565b905092915050565b6000808273ffffffffffffffffffffffffffffffffffffffff163b119050919050565b6000819050919050565b565b600061009d61014e565b905090565b3660008037600080366000845af43d6000803e80600081146100c3573d6000f35b3d6000fd5b60606000808573ffffffffffffffffffffffffffffffffffffffff16856040516100f291906102e5565b600060405180830381855af49150503d806000811461012d576040519150601f19603f3d011682016040523d82523d6000602084013e610132565b606091505b5091509150610143868383876101a5565b925050509392505050565b600061017c7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc60001b610087565b60000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6060831561020857600083511415610200576101c085610064565b6101ff576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016101f690610359565b60405180910390fd5b5b829050610213565b610212838361021b565b5b949350505050565b60008251111561022e5781518083602001fd5b806040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161026291906103ce565b60405180910390fd5b600081519050919050565b600081905092915050565b60005b8381101561029f578082015181840152602081019050610284565b838111156102ae576000848401525b50505050565b60006102bf8261026b565b6102c98185610276565b93506102d9818560208601610281565b80840191505092915050565b60006102f182846102b4565b915081905092915050565b600082825260208201905092915050565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b6000610343601d836102fc565b915061034e8261030d565b602082019050919050565b6000602082019050818103600083015261037281610336565b9050919050565b600081519050919050565b6000601f19601f8301169050919050565b60006103a082610379565b6103aa81856102fc565b93506103ba818560208601610281565b6103c381610384565b840191505092915050565b600060208201905081810360008301526103e88184610395565b90509291505056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a2646970667358221220212497a92c006ce41f95a03fd2317be7b99240bb86e076ac010ef5f4df71d3f064736f6c634300080c0033416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564";

type ERC1967ProxyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC1967ProxyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC1967Proxy__factory extends ContractFactory {
  constructor(...args: ERC1967ProxyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _logic: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ERC1967Proxy> {
    return super.deploy(
      _logic,
      _data,
      overrides || {}
    ) as Promise<ERC1967Proxy>;
  }
  override getDeployTransaction(
    _logic: PromiseOrValue<string>,
    _data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_logic, _data, overrides || {});
  }
  override attach(address: string): ERC1967Proxy {
    return super.attach(address) as ERC1967Proxy;
  }
  override connect(signer: Signer): ERC1967Proxy__factory {
    return super.connect(signer) as ERC1967Proxy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC1967ProxyInterface {
    return new utils.Interface(_abi) as ERC1967ProxyInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1967Proxy {
    return new Contract(address, _abi, signerOrProvider) as ERC1967Proxy;
  }
}
