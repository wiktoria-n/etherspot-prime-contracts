/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  VerifyingPaymaster,
  VerifyingPaymasterInterface,
} from "../../src/VerifyingPaymaster";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
      {
        internalType: "address",
        name: "_verifyingSigner",
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
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "unstakeDelaySec",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "deposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
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
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
    ],
    name: "getHash",
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
  {
    inputs: [],
    name: "owner",
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
        internalType: "enum IPaymaster.PostOpMode",
        name: "mode",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "actualGasCost",
        type: "uint256",
      },
    ],
    name: "postOp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IEntryPoint",
        name: "_entryPoint",
        type: "address",
      },
    ],
    name: "setEntryPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "unlockStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "requiredPreFund",
        type: "uint256",
      },
    ],
    name: "validatePaymasterUserOp",
    outputs: [
      {
        internalType: "bytes",
        name: "context",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "sigTimeRange",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifyingSigner",
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
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
    ],
    name: "withdrawStake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60a06040523480156200001157600080fd5b50604051620021283803806200212883398181016040528101906200003791906200032f565b81620000586200004c620000a660201b60201c565b620000ae60201b60201c565b62000069816200017260201b60201c565b508073ffffffffffffffffffffffffffffffffffffffff1660808173ffffffffffffffffffffffffffffffffffffffff16815250505050620003f9565b600033905090565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b62000182620001c660201b60201c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b620001d6620000a660201b60201c565b73ffffffffffffffffffffffffffffffffffffffff16620001fc6200025760201b60201c565b73ffffffffffffffffffffffffffffffffffffffff161462000255576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200024c90620003d7565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620002b28262000285565b9050919050565b6000620002c682620002a5565b9050919050565b620002d881620002b9565b8114620002e457600080fd5b50565b600081519050620002f881620002cd565b92915050565b6200030981620002a5565b81146200031557600080fd5b50565b6000815190506200032981620002fe565b92915050565b6000806040838503121562000349576200034862000280565b5b60006200035985828601620002e7565b92505060206200036c8582860162000318565b9150509250929050565b600082825260208201905092915050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b6000620003bf60208362000376565b9150620003cc8262000387565b602082019050919050565b60006020820190508181036000830152620003f281620003b0565b9050919050565b608051611d0c6200041c6000396000818161046b01526109ee0152611d0c6000f3fe6080604052600436106100e85760003560e01c8063b0d691fe1161008a578063c399ec8811610059578063c399ec8814610299578063d0e30db0146102c4578063f2fde38b146102ce578063f465c77e146102f7576100e8565b8063b0d691fe146101f1578063bb9fe6bf1461021c578063c23a5cea14610233578063c266f2921461025c576100e8565b8063584465f2116100c6578063584465f21461015d578063715018a6146101865780638da5cb5b1461019d578063a9a23409146101c8576100e8565b80630396cb60146100ed578063205c28781461010957806323d9ac9b14610132575b600080fd5b61010760048036038101906101029190610f9d565b610335565b005b34801561011557600080fd5b50610130600480360381019061012b919061105e565b6103ce565b005b34801561013e57600080fd5b50610147610469565b60405161015491906110bf565b60405180910390f35b34801561016957600080fd5b50610184600480360381019061017f9190611118565b61048d565b005b34801561019257600080fd5b5061019b6104d9565b005b3480156101a957600080fd5b506101b26104ed565b6040516101bf91906110bf565b60405180910390f35b3480156101d457600080fd5b506101ef60048036038101906101ea91906111cf565b610516565b005b3480156101fd57600080fd5b50610206610530565b60405161021391906112a2565b60405180910390f35b34801561022857600080fd5b50610231610556565b005b34801561023f57600080fd5b5061025a600480360381019061025591906112bd565b6105e2565b005b34801561026857600080fd5b50610283600480360381019061027e919061130f565b61067a565b6040516102909190611371565b60405180910390f35b3480156102a557600080fd5b506102ae610725565b6040516102bb919061139b565b60405180910390f35b6102cc6107c8565b005b3480156102da57600080fd5b506102f560048036038101906102f091906113e2565b610858565b005b34801561030357600080fd5b5061031e6004803603810190610319919061143b565b6108dc565b60405161032c929190611543565b60405180910390f35b61033d610a6c565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16630396cb6034836040518363ffffffff1660e01b81526004016103999190611582565b6000604051808303818588803b1580156103b257600080fd5b505af11580156103c6573d6000803e3d6000fd5b505050505050565b6103d6610a6c565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663205c287883836040518363ffffffff1660e01b81526004016104339291906115ac565b600060405180830381600087803b15801561044d57600080fd5b505af1158015610461573d6000803e3d6000fd5b505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610495610a6c565b80600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6104e1610a6c565b6104eb6000610aea565b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b61051e610bae565b61052a84848484610c0a565b50505050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b61055e610a6c565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663bb9fe6bf6040518163ffffffff1660e01b8152600401600060405180830381600087803b1580156105c857600080fd5b505af11580156105dc573d6000803e3d6000fd5b50505050565b6105ea610a6c565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663c23a5cea826040518263ffffffff1660e01b815260040161064591906115d5565b600060405180830381600087803b15801561065f57600080fd5b505af1158015610673573d6000803e3d6000fd5b5050505050565b600061068582610c45565b826020013583806040019061069a91906115ff565b6040516106a89291906116a1565b60405180910390208480606001906106c091906115ff565b6040516106ce9291906116a1565b604051809103902085608001358660a001358760c001358860e00135896101000135604051602001610708999897969594939291906116ba565b604051602081830303815290604052805190602001209050919050565b6000600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b815260040161078291906110bf565b602060405180830381865afa15801561079f573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107c3919061175c565b905090565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663b760faf934306040518363ffffffff1660e01b815260040161082491906110bf565b6000604051808303818588803b15801561083d57600080fd5b505af1158015610851573d6000803e3d6000fd5b5050505050565b610860610a6c565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614156108d0576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016108c79061180c565b60405180910390fd5b6108d981610aea565b50565b60606000806108ea8661067a565b90503660008780610120019061090091906115ff565b915091506000601483839050610916919061185b565b905060408114806109275750604181145b610966576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161095d90611901565b60405180910390fd5b6109d68383601490809261097c9392919061192b565b8080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050506109c886610c55565b610c8590919063ffffffff16565b73ffffffffffffffffffffffffffffffffffffffff167f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1614610a4857600160405180602001604052806000815250909550955050505050610a64565b6000604051806020016040528060008152509095509550505050505b935093915050565b610a74610cac565b73ffffffffffffffffffffffffffffffffffffffff16610a926104ed565b73ffffffffffffffffffffffffffffffffffffffff1614610ae8576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610adf906119b2565b60405180910390fd5b565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050816000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508173ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35050565b600160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610c0857600080fd5b565b6040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610c3c90611a1e565b60405180910390fd5b6000808235905080915050919050565b600081604051602001610c689190611ab6565b604051602081830303815290604052805190602001209050919050565b6000806000610c948585610cb4565b91509150610ca181610d06565b819250505092915050565b600033905090565b600080604183511415610cf65760008060006020860151925060408601519150606086015160001a9050610cea87828585610e74565b94509450505050610cff565b60006002915091505b9250929050565b60006004811115610d1a57610d19611adc565b5b816004811115610d2d57610d2c611adc565b5b1415610d3857610e71565b60016004811115610d4c57610d4b611adc565b5b816004811115610d5f57610d5e611adc565b5b1415610da0576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d9790611b57565b60405180910390fd5b60026004811115610db457610db3611adc565b5b816004811115610dc757610dc6611adc565b5b1415610e08576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610dff90611bc3565b60405180910390fd5b60036004811115610e1c57610e1b611adc565b5b816004811115610e2f57610e2e611adc565b5b1415610e70576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610e6790611c55565b60405180910390fd5b5b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c1115610eaf576000600391509150610f4e565b600060018787878760405160008152602001604052604051610ed49493929190611c91565b6020604051602081039080840390855afa158015610ef6573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f4557600060019250925050610f4e565b80600092509250505b94509492505050565b600080fd5b600080fd5b600063ffffffff82169050919050565b610f7a81610f61565b8114610f8557600080fd5b50565b600081359050610f9781610f71565b92915050565b600060208284031215610fb357610fb2610f57565b5b6000610fc184828501610f88565b91505092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000610ff582610fca565b9050919050565b61100581610fea565b811461101057600080fd5b50565b60008135905061102281610ffc565b92915050565b6000819050919050565b61103b81611028565b811461104657600080fd5b50565b60008135905061105881611032565b92915050565b6000806040838503121561107557611074610f57565b5b600061108385828601611013565b925050602061109485828601611049565b9150509250929050565b60006110a982610fca565b9050919050565b6110b98161109e565b82525050565b60006020820190506110d460008301846110b0565b92915050565b60006110e58261109e565b9050919050565b6110f5816110da565b811461110057600080fd5b50565b600081359050611112816110ec565b92915050565b60006020828403121561112e5761112d610f57565b5b600061113c84828501611103565b91505092915050565b6003811061115257600080fd5b50565b60008135905061116481611145565b92915050565b600080fd5b600080fd5b600080fd5b60008083601f84011261118f5761118e61116a565b5b8235905067ffffffffffffffff8111156111ac576111ab61116f565b5b6020830191508360018202830111156111c8576111c7611174565b5b9250929050565b600080600080606085870312156111e9576111e8610f57565b5b60006111f787828801611155565b945050602085013567ffffffffffffffff81111561121857611217610f5c565b5b61122487828801611179565b9350935050604061123787828801611049565b91505092959194509250565b6000819050919050565b600061126861126361125e84610fca565b611243565b610fca565b9050919050565b600061127a8261124d565b9050919050565b600061128c8261126f565b9050919050565b61129c81611281565b82525050565b60006020820190506112b76000830184611293565b92915050565b6000602082840312156112d3576112d2610f57565b5b60006112e184828501611013565b91505092915050565b600080fd5b60006101608284031215611306576113056112ea565b5b81905092915050565b60006020828403121561132557611324610f57565b5b600082013567ffffffffffffffff81111561134357611342610f5c565b5b61134f848285016112ef565b91505092915050565b6000819050919050565b61136b81611358565b82525050565b60006020820190506113866000830184611362565b92915050565b61139581611028565b82525050565b60006020820190506113b0600083018461138c565b92915050565b6113bf8161109e565b81146113ca57600080fd5b50565b6000813590506113dc816113b6565b92915050565b6000602082840312156113f8576113f7610f57565b5b6000611406848285016113cd565b91505092915050565b61141881611358565b811461142357600080fd5b50565b6000813590506114358161140f565b92915050565b60008060006060848603121561145457611453610f57565b5b600084013567ffffffffffffffff81111561147257611471610f5c565b5b61147e868287016112ef565b935050602061148f86828701611426565b92505060406114a086828701611049565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b60005b838110156114e45780820151818401526020810190506114c9565b838111156114f3576000848401525b50505050565b6000601f19601f8301169050919050565b6000611515826114aa565b61151f81856114b5565b935061152f8185602086016114c6565b611538816114f9565b840191505092915050565b6000604082019050818103600083015261155d818561150a565b905061156c602083018461138c565b9392505050565b61157c81610f61565b82525050565b60006020820190506115976000830184611573565b92915050565b6115a681610fea565b82525050565b60006040820190506115c1600083018561159d565b6115ce602083018461138c565b9392505050565b60006020820190506115ea600083018461159d565b92915050565b600080fd5b600080fd5b600080fd5b6000808335600160200384360303811261161c5761161b6115f0565b5b80840192508235915067ffffffffffffffff82111561163e5761163d6115f5565b5b60208301925060018202360383131561165a576116596115fa565b5b509250929050565b600081905092915050565b82818337600083830152505050565b60006116888385611662565b935061169583858461166d565b82840190509392505050565b60006116ae82848661167c565b91508190509392505050565b6000610120820190506116d0600083018c6110b0565b6116dd602083018b61138c565b6116ea604083018a611362565b6116f76060830189611362565b611704608083018861138c565b61171160a083018761138c565b61171e60c083018661138c565b61172b60e083018561138c565b61173961010083018461138c565b9a9950505050505050505050565b60008151905061175681611032565b92915050565b60006020828403121561177257611771610f57565b5b600061178084828501611747565b91505092915050565b600082825260208201905092915050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b60006117f6602683611789565b91506118018261179a565b604082019050919050565b60006020820190508181036000830152611825816117e9565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061186682611028565b915061187183611028565b9250828210156118845761188361182c565b5b828203905092915050565b7f566572696679696e675061796d61737465723a20696e76616c6964207369676e60008201527f6174757265206c656e67746820696e207061796d6173746572416e6444617461602082015250565b60006118eb604083611789565b91506118f68261188f565b604082019050919050565b6000602082019050818103600083015261191a816118de565b9050919050565b600080fd5b600080fd5b6000808585111561193f5761193e611921565b5b838611156119505761194f611926565b5b6001850283019150848603905094509492505050565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b600061199c602083611789565b91506119a782611966565b602082019050919050565b600060208201905081810360008301526119cb8161198f565b9050919050565b7f6d757374206f7665727269646500000000000000000000000000000000000000600082015250565b6000611a08600d83611789565b9150611a13826119d2565b602082019050919050565b60006020820190508181036000830152611a37816119fb565b9050919050565b600081905092915050565b7f19457468657265756d205369676e6564204d6573736167653a0a333200000000600082015250565b6000611a7f601c83611a3e565b9150611a8a82611a49565b601c82019050919050565b6000819050919050565b611ab0611aab82611358565b611a95565b82525050565b6000611ac182611a72565b9150611acd8284611a9f565b60208201915081905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000611b41601883611789565b9150611b4c82611b0b565b602082019050919050565b60006020820190508181036000830152611b7081611b34565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000611bad601f83611789565b9150611bb882611b77565b602082019050919050565b60006020820190508181036000830152611bdc81611ba0565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000611c3f602283611789565b9150611c4a82611be3565b604082019050919050565b60006020820190508181036000830152611c6e81611c32565b9050919050565b600060ff82169050919050565b611c8b81611c75565b82525050565b6000608082019050611ca66000830187611362565b611cb36020830186611c82565b611cc06040830185611362565b611ccd6060830184611362565b9594505050505056fea264697066735822122052e1cc4047ef0c1935f3b6628a63b93ec1b4a2c1ed966682100da6190047cc4c64736f6c634300080c0033";

type VerifyingPaymasterConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VerifyingPaymasterConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VerifyingPaymaster__factory extends ContractFactory {
  constructor(...args: VerifyingPaymasterConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    _entryPoint: PromiseOrValue<string>,
    _verifyingSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VerifyingPaymaster> {
    return super.deploy(
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    ) as Promise<VerifyingPaymaster>;
  }
  override getDeployTransaction(
    _entryPoint: PromiseOrValue<string>,
    _verifyingSigner: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _entryPoint,
      _verifyingSigner,
      overrides || {}
    );
  }
  override attach(address: string): VerifyingPaymaster {
    return super.attach(address) as VerifyingPaymaster;
  }
  override connect(signer: Signer): VerifyingPaymaster__factory {
    return super.connect(signer) as VerifyingPaymaster__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VerifyingPaymasterInterface {
    return new utils.Interface(_abi) as VerifyingPaymasterInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VerifyingPaymaster {
    return new Contract(address, _abi, signerOrProvider) as VerifyingPaymaster;
  }
}
