/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../common";
import type {
  BLSSignatureAggregator,
  BLSSignatureAggregatorInterface,
} from "../../../../src/aa-4337/bls/BLSSignatureAggregator";

const _abi = [
  {
    inputs: [],
    name: "BLS_DOMAIN",
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
    name: "N",
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
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "delay",
        type: "uint32",
      },
    ],
    name: "addStake",
    outputs: [],
    stateMutability: "payable",
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
        internalType: "struct UserOperation[]",
        name: "userOps",
        type: "tuple[]",
      },
    ],
    name: "aggregateSignatures",
    outputs: [
      {
        internalType: "bytes",
        name: "aggregatedSignature",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "getTrailingPublicKey",
    outputs: [
      {
        internalType: "uint256[4]",
        name: "publicKey",
        type: "uint256[4]",
      },
    ],
    stateMutability: "pure",
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
    name: "getUserOpHash",
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
    name: "getUserOpPublicKey",
    outputs: [
      {
        internalType: "uint256[4]",
        name: "publicKey",
        type: "uint256[4]",
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
    name: "userOpToMessage",
    outputs: [
      {
        internalType: "uint256[2]",
        name: "",
        type: "uint256[2]",
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
        internalType: "struct UserOperation[]",
        name: "userOps",
        type: "tuple[]",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
    ],
    name: "validateSignatures",
    outputs: [],
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
    name: "validateUserOpSignature",
    outputs: [
      {
        internalType: "bytes",
        name: "sigForUserOp",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50612bdb806100206000396000f3fe6080604052600436106100905760003560e01c806364c530cd1161005957806364c530cd14610193578063a6193531146101d0578063b7620eb41461020d578063c9e525df1461024a578063e3563a4f1461027557610090565b80629d925014610095578063275e2d79146100c057806340864431146100fd578063451711591461013a57806357f09b7214610156575b600080fd5b3480156100a157600080fd5b506100aa61029e565b6040516100b79190611525565b60405180910390f35b3480156100cc57600080fd5b506100e760048036038101906100e291906115b9565b6102c2565b6040516100f49190611696565b60405180910390f35b34801561010957600080fd5b50610124600480360381019061011f9190611a02565b61041f565b6040516101319190611af6565b60405180910390f35b610154600480360381019061014f9190611b8b565b61044e565b005b34801561016257600080fd5b5061017d60048036038101906101789190611a02565b6104be565b60405161018a9190611c4f565b60405180910390f35b34801561019f57600080fd5b506101ba60048036038101906101b59190611c8f565b61056f565b6040516101c79190611696565b60405180910390f35b3480156101dc57600080fd5b506101f760048036038101906101f29190611a02565b61069d565b6040516102049190611525565b60405180910390f35b34801561021957600080fd5b50610234600480360381019061022f9190611cd8565b6106c5565b6040516102419190611c4f565b60405180910390f35b34801561025657600080fd5b5061025f610745565b60405161026c9190611d30565b60405180910390f35b34801561028157600080fd5b5061029c60048036038101906102979190611da1565b610769565b005b7fd84c4373167c517e9ccd66803f86d8a4f49e7e1315a7a73b516affea7428f82b81565b606060008383905067ffffffffffffffff8111156102e3576102e26116bd565b5b60405190808252806020026020018201604052801561031c57816020015b6103096114ae565b8152602001906001900390816103015790505b50905060005b81518110156103bc5760008086868481811061034157610340611e22565b5b90506020028101906103539190611e60565b8061014001906103639190611e89565b8101906103709190611eec565b9150915060405180604001604052808381526020018281525084848151811061039c5761039b611e22565b5b6020026020010181905250505080806103b490611f5b565b915050610322565b5060006103e9827f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd47610a02565b905080600001518160200151604051602001610406929190611fa3565b6040516020818303038152906040529250505092915050565b6104276114c8565b600061043a610435846104be565b610b05565b90506104468382610b35565b915050919050565b8173ffffffffffffffffffffffffffffffffffffffff16630396cb6034836040518363ffffffff1660e01b81526004016104889190611fdb565b6000604051808303818588803b1580156104a157600080fd5b505af11580156104b5573d6000803e3d6000fd5b50505050505050565b6104c66114ea565b6000826040015190506000815111156104e9576104e2816106c5565b9150610568565b826000015173ffffffffffffffffffffffffffffffffffffffff1663e02afbae61c3506040518263ffffffff1660e01b81526004016080604051808303818786fa15801561053b573d6000803e3d6000fd5b50505050506040513d601f19601f8201168201806040525081019061056091906120bc565b91505061056a565b505b919050565b60606000828061014001906105849190611e89565b810190610591919061219a565b905060006105a7846105a2906121c7565b6104be565b905060006105c6856105b8906121c7565b6105c184610b05565b610b35565b905073__$b78e61b50eae8ff14018a753b33166207a$__63ebbdac918484846040518463ffffffff1660e01b8152600401610603939291906122c5565b602060405180830381865af4158015610620573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906106449190612335565b610683576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161067a906123bf565b60405180910390fd5b604051806020016040528060008152509350505050919050565b6000806106b16106ac846104be565b610b05565b90506106bd8382610c0c565b915050919050565b6106cd6114ea565b60008251905060808111610716576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161070d9061242b565b60405180910390fd5b606081840103805183526020810151602084015260408101516040840152606081015160608401525050919050565b7f30644e72e131a029b85045b68181585d97816a916871ca8d3c208c16d87cfd4781565b604082829050146107af576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016107a690612497565b60405180910390fd5b600082828101906107c0919061219a565b9050600085859050905060008167ffffffffffffffff8111156107e6576107e56116bd565b5b60405190808252806020026020018201604052801561081f57816020015b61080c6114ea565b8152602001906001900390816108045790505b50905060008267ffffffffffffffff81111561083e5761083d6116bd565b5b60405190808252806020026020018201604052801561087757816020015b6108646114c8565b81526020019060019003908161085c5790505b50905060005b8381101561093c57600089898381811061089a57610899611e22565b5b90506020028101906108ac9190611e60565b6108b5906121c7565b90506108c0816104be565b8483815181106108d3576108d2611e22565b5b602002602001018190525061090a816109058685815181106108f8576108f7611e22565b5b6020026020010151610b05565b610b35565b83838151811061091d5761091c611e22565b5b602002602001018190525050808061093490611f5b565b91505061087d565b5073__$b78e61b50eae8ff14018a753b33166207a$__63914137638584846040518463ffffffff1660e01b8152600401610978939291906126d9565b602060405180830381865af4158015610995573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109b99190612335565b6109f8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ef9061276a565b60405180910390fd5b5050505050505050565b610a0a6114ae565b600083600081518110610a2057610a1f611e22565b5b6020026020010151600001519050600084600081518110610a4457610a43611e22565b5b60200260200101516020015190506000600190506000600190505b8651811015610ad357610ab48484848a8581518110610a8157610a80611e22565b5b6020026020010151600001518b8681518110610aa057610a9f611e22565b5b60200260200101516020015160018c610c4b565b8094508195508296505050508080610acb90611f5b565b915050610a5f565b50610ae0838383886112ca565b8093508194505050828460000181815250508184602001818152505050505092915050565b600081604051602001610b189190611c4f565b604051602081830303815290604052805190602001209050919050565b610b3d6114c8565b6000610b498484610c0c565b905073__$b78e61b50eae8ff14018a753b33166207a$__63a850a9097fd84c4373167c517e9ccd66803f86d8a4f49e7e1315a7a73b516affea7428f82b83604051602001610b9791906127ab565b6040516020818303038152906040526040518363ffffffff1660e01b8152600401610bc392919061281f565b6040805180830381865af4158015610bdf573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610c0391906128da565b91505092915050565b6000610c1783611341565b823046604051602001610c2d9493929190612916565b60405160208183030381529060405280519060200120905092915050565b6000806000808a148015610c5f5750600089145b15610c72578686869250925092506112bd565b600087148015610c825750600086145b15610c95578989899250925092506112bd565b610c9d6114ea565b8480610cac57610cab61295b565b5b898a0981600060048110610cc357610cc2611e22565b5b6020020181815250508480610cdb57610cda61295b565b5b81600060048110610cef57610cee611e22565b5b60200201518a0981600160048110610d0a57610d09611e22565b5b6020020181815250508480610d2257610d2161295b565b5b86870981600260048110610d3957610d38611e22565b5b6020020181815250508480610d5157610d5061295b565b5b81600260048110610d6557610d64611e22565b5b6020020151870981600360048110610d8057610d7f611e22565b5b60200201818152505060405180608001604052808680610da357610da261295b565b5b83600260048110610db757610db6611e22565b5b60200201518e0981526020018680610dd257610dd161295b565b5b83600360048110610de657610de5611e22565b5b60200201518d0981526020018680610e0157610e0061295b565b5b83600060048110610e1557610e14611e22565b5b60200201518b0981526020018680610e3057610e2f61295b565b5b83600160048110610e4457610e43611e22565b5b60200201518a09815250905080600260048110610e6457610e63611e22565b5b602002015181600060048110610e7d57610e7c611e22565b5b6020020151141580610ebf575080600360048110610e9e57610e9d611e22565b5b602002015181600160048110610eb757610eb6611e22565b5b602002015114155b610efe576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ef5906129d6565b60405180910390fd5b610f066114ea565b8580610f1557610f1461295b565b5b82600060048110610f2957610f28611e22565b5b602002015187610f3991906129f6565b83600260048110610f4d57610f4c611e22565b5b60200201510881600060048110610f6757610f66611e22565b5b6020020181815250508580610f7f57610f7e61295b565b5b82600160048110610f9357610f92611e22565b5b602002015187610fa391906129f6565b83600360048110610fb757610fb6611e22565b5b60200201510881600160048110610fd157610fd0611e22565b5b6020020181815250508580610fe957610fe861295b565b5b81600060048110610ffd57610ffc611e22565b5b60200201518260006004811061101657611015611e22565b5b602002015109816002600481106110305761102f611e22565b5b60200201818152505085806110485761104761295b565b5b8160006004811061105c5761105b611e22565b5b60200201518260026004811061107557611074611e22565b5b6020020151098160036004811061108f5761108e611e22565b5b602002018181525050600086806110a9576110a861295b565b5b826003600481106110bd576110bc611e22565b5b6020020151886110cd91906129f6565b88806110dc576110db61295b565b5b846001600481106110f0576110ef611e22565b5b60200201518560016004811061110957611108611e22565b5b60200201510908905086806111215761112061295b565b5b87806111305761112f61295b565b5b888061113f5761113e61295b565b5b8460026004811061115357611152611e22565b5b60200201518660006004811061116c5761116b611e22565b5b6020020151096002098861118091906129f6565b82089050600087806111955761119461295b565b5b88806111a4576111a361295b565b5b838a6111b091906129f6565b8a806111bf576111be61295b565b5b866002600481106111d3576111d2611e22565b5b6020020151886000600481106111ec576111eb611e22565b5b602002015109088460016004811061120757611206611e22565b5b6020020151099050878061121e5761121d61295b565b5b888061122d5761122c61295b565b5b8460036004811061124157611240611e22565b5b60200201518660016004811061125a57611259611e22565b5b6020020151098961126b91906129f6565b82089050600088806112805761127f61295b565b5b898061128f5761128e61295b565b5b8b8f09856000600481106112a6576112a5611e22565b5b602002015109905082828297509750975050505050505b9750975097945050505050565b60008060006112d985856113c2565b9050600084806112ec576112eb61295b565b5b8283099050600085806113025761130161295b565b5b828a099050600086806113185761131761295b565b5b87806113275761132661295b565b5b8486098a0990508181955095505050505094509492505050565b60008160000151826020015183604001518051906020012084606001518051906020012085608001518660a001518760c001518860e001518961010001518a6101200151805190602001206040516020016113a59a99989796959493929190612a2a565b604051602081830303815290604052805190602001209050919050565b60008083141580156113d45750818314155b80156113e1575060008214155b611420576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161141790612b12565b60405180910390fd5b60008060019050600084905060005b600087146114a15786826114439190612b32565b90508286806114555761145461295b565b5b87806114645761146361295b565b5b8584098861147291906129f6565b860880945081955050508687826114899190612b63565b8361149491906129f6565b809850819350505061142f565b8394505050505092915050565b604051806040016040528060008152602001600081525090565b6040518060400160405280600290602082028036833780820191505090505090565b6040518060800160405280600490602082028036833780820191505090505090565b6000819050919050565b61151f8161150c565b82525050565b600060208201905061153a6000830184611516565b92915050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b600080fd5b60008083601f84011261157957611578611554565b5b8235905067ffffffffffffffff81111561159657611595611559565b5b6020830191508360208202830111156115b2576115b161155e565b5b9250929050565b600080602083850312156115d0576115cf61154a565b5b600083013567ffffffffffffffff8111156115ee576115ed61154f565b5b6115fa85828601611563565b92509250509250929050565b600081519050919050565b600082825260208201905092915050565b60005b83811015611640578082015181840152602081019050611625565b60008484015250505050565b6000601f19601f8301169050919050565b600061166882611606565b6116728185611611565b9350611682818560208601611622565b61168b8161164c565b840191505092915050565b600060208201905081810360008301526116b0818461165d565b905092915050565b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6116f58261164c565b810181811067ffffffffffffffff82111715611714576117136116bd565b5b80604052505050565b6000611727611540565b905061173382826116ec565b919050565b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006117688261173d565b9050919050565b6117788161175d565b811461178357600080fd5b50565b6000813590506117958161176f565b92915050565b6000819050919050565b6117ae8161179b565b81146117b957600080fd5b50565b6000813590506117cb816117a5565b92915050565b600080fd5b600067ffffffffffffffff8211156117f1576117f06116bd565b5b6117fa8261164c565b9050602081019050919050565b82818337600083830152505050565b6000611829611824846117d6565b61171d565b905082815260208101848484011115611845576118446117d1565b5b611850848285611807565b509392505050565b600082601f83011261186d5761186c611554565b5b813561187d848260208601611816565b91505092915050565b6000610160828403121561189d5761189c6116b8565b5b6118a861016061171d565b905060006118b884828501611786565b60008301525060206118cc848285016117bc565b602083015250604082013567ffffffffffffffff8111156118f0576118ef611738565b5b6118fc84828501611858565b604083015250606082013567ffffffffffffffff8111156119205761191f611738565b5b61192c84828501611858565b6060830152506080611940848285016117bc565b60808301525060a0611954848285016117bc565b60a08301525060c0611968848285016117bc565b60c08301525060e061197c848285016117bc565b60e083015250610100611991848285016117bc565b6101008301525061012082013567ffffffffffffffff8111156119b7576119b6611738565b5b6119c384828501611858565b6101208301525061014082013567ffffffffffffffff8111156119e9576119e8611738565b5b6119f584828501611858565b6101408301525092915050565b600060208284031215611a1857611a1761154a565b5b600082013567ffffffffffffffff811115611a3657611a3561154f565b5b611a4284828501611886565b91505092915050565b600060029050919050565b600081905092915050565b6000819050919050565b611a748161179b565b82525050565b6000611a868383611a6b565b60208301905092915050565b6000602082019050919050565b611aa881611a4b565b611ab28184611a56565b9250611abd82611a61565b8060005b83811015611aee578151611ad58782611a7a565b9650611ae083611a92565b925050600181019050611ac1565b505050505050565b6000604082019050611b0b6000830184611a9f565b92915050565b6000611b1c8261175d565b9050919050565b611b2c81611b11565b8114611b3757600080fd5b50565b600081359050611b4981611b23565b92915050565b600063ffffffff82169050919050565b611b6881611b4f565b8114611b7357600080fd5b50565b600081359050611b8581611b5f565b92915050565b60008060408385031215611ba257611ba161154a565b5b6000611bb085828601611b3a565b9250506020611bc185828601611b76565b9150509250929050565b600060049050919050565b600081905092915050565b6000819050919050565b6000602082019050919050565b611c0181611bcb565b611c0b8184611bd6565b9250611c1682611be1565b8060005b83811015611c47578151611c2e8782611a7a565b9650611c3983611beb565b925050600181019050611c1a565b505050505050565b6000608082019050611c646000830184611bf8565b92915050565b600080fd5b60006101608284031215611c8657611c85611c6a565b5b81905092915050565b600060208284031215611ca557611ca461154a565b5b600082013567ffffffffffffffff811115611cc357611cc261154f565b5b611ccf84828501611c6f565b91505092915050565b600060208284031215611cee57611ced61154a565b5b600082013567ffffffffffffffff811115611d0c57611d0b61154f565b5b611d1884828501611858565b91505092915050565b611d2a8161179b565b82525050565b6000602082019050611d456000830184611d21565b92915050565b60008083601f840112611d6157611d60611554565b5b8235905067ffffffffffffffff811115611d7e57611d7d611559565b5b602083019150836001820283011115611d9a57611d9961155e565b5b9250929050565b60008060008060408587031215611dbb57611dba61154a565b5b600085013567ffffffffffffffff811115611dd957611dd861154f565b5b611de587828801611563565b9450945050602085013567ffffffffffffffff811115611e0857611e0761154f565b5b611e1487828801611d4b565b925092505092959194509250565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b600080fd5b600080fd5b600080fd5b60008235600161016003833603038112611e7d57611e7c611e51565b5b80830191505092915050565b60008083356001602003843603038112611ea657611ea5611e51565b5b80840192508235915067ffffffffffffffff821115611ec857611ec7611e56565b5b602083019250600182023603831315611ee457611ee3611e5b565b5b509250929050565b60008060408385031215611f0357611f0261154a565b5b6000611f11858286016117bc565b9250506020611f22858286016117bc565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000611f668261179b565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203611f9857611f97611f2c565b5b600182019050919050565b6000604082019050611fb86000830185611d21565b611fc56020830184611d21565b9392505050565b611fd581611b4f565b82525050565b6000602082019050611ff06000830184611fcc565b92915050565b600067ffffffffffffffff821115612011576120106116bd565b5b602082029050919050565b60008151905061202b816117a5565b92915050565b600061204461203f84611ff6565b61171d565b9050806020840283018581111561205e5761205d61155e565b5b835b818110156120875780612073888261201c565b845260208401935050602081019050612060565b5050509392505050565b600082601f8301126120a6576120a5611554565b5b60046120b3848285612031565b91505092915050565b6000608082840312156120d2576120d161154a565b5b60006120e084828501612091565b91505092915050565b600067ffffffffffffffff821115612104576121036116bd565b5b602082029050919050565b600061212261211d846120e9565b61171d565b9050806020840283018581111561213c5761213b61155e565b5b835b81811015612165578061215188826117bc565b84526020840193505060208101905061213e565b5050509392505050565b600082601f83011261218457612183611554565b5b600261219184828561210f565b91505092915050565b6000604082840312156121b0576121af61154a565b5b60006121be8482850161216f565b91505092915050565b60006121d33683611886565b9050919050565b600081905092915050565b6121ee8161179b565b82525050565b600061220083836121e5565b60208301905092915050565b61221581611a4b565b61221f81846121da565b925061222a82611a61565b8060005b8381101561225b57815161224287826121f4565b965061224d83611a92565b92505060018101905061222e565b505050505050565b600081905092915050565b61227781611bcb565b6122818184612263565b925061228c82611be1565b8060005b838110156122bd5781516122a487826121f4565b96506122af83611beb565b925050600181019050612290565b505050505050565b6000610100820190506122db600083018661220c565b6122e8604083018561226e565b6122f560c083018461220c565b949350505050565b60008115159050919050565b612312816122fd565b811461231d57600080fd5b50565b60008151905061232f81612309565b92915050565b60006020828403121561234b5761234a61154a565b5b600061235984828501612320565b91505092915050565b600082825260208201905092915050565b7f424c533a2077726f6e6720736967000000000000000000000000000000000000600082015250565b60006123a9600e83612362565b91506123b482612373565b602082019050919050565b600060208201905081810360008301526123d88161239c565b9050919050565b7f6461746120746f6f2073686f727420666f722073696700000000000000000000600082015250565b6000612415601683612362565b9150612420826123df565b602082019050919050565b6000602082019050818103600083015261244481612408565b9050919050565b7f424c533a20696e76616c6964207369676e617475726500000000000000000000600082015250565b6000612481601683612362565b915061248c8261244b565b602082019050919050565b600060208201905081810360008301526124b081612474565b9050919050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081905092915050565b6124f781611bcb565b61250181846124e3565b925061250c82611be1565b8060005b8381101561253d57815161252487826121f4565b965061252f83611beb565b925050600181019050612510565b505050505050565b600061255183836124ee565b60808301905092915050565b6000602082019050919050565b6000612575826124b7565b61257f81856124c2565b935061258a836124d3565b8060005b838110156125bb5781516125a28882612545565b97506125ad8361255d565b92505060018101905061258e565b5085935050505092915050565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b600081905092915050565b61260881611a4b565b61261281846125f4565b925061261d82611a61565b8060005b8381101561264e57815161263587826121f4565b965061264083611a92565b925050600181019050612621565b505050505050565b600061266283836125ff565b60408301905092915050565b6000602082019050919050565b6000612686826125c8565b61269081856125d3565b935061269b836125e4565b8060005b838110156126cc5781516126b38882612656565b97506126be8361266e565b92505060018101905061269f565b5085935050505092915050565b60006080820190506126ee600083018661220c565b8181036040830152612700818561256a565b90508181036060830152612714818461267b565b9050949350505050565b7f424c533a2076616c69646174655369676e617475726573206661696c65640000600082015250565b6000612754601e83612362565b915061275f8261271e565b602082019050919050565b6000602082019050818103600083015261278381612747565b9050919050565b6000819050919050565b6127a56127a08261150c565b61278a565b82525050565b60006127b78284612794565b60208201915081905092915050565b6127cf8161150c565b82525050565b600082825260208201905092915050565b60006127f182611606565b6127fb81856127d5565b935061280b818560208601611622565b6128148161164c565b840191505092915050565b600060408201905061283460008301856127c6565b818103602083015261284681846127e6565b90509392505050565b600061286261285d846120e9565b61171d565b9050806020840283018581111561287c5761287b61155e565b5b835b818110156128a55780612891888261201c565b84526020840193505060208101905061287e565b5050509392505050565b600082601f8301126128c4576128c3611554565b5b60026128d184828561284f565b91505092915050565b6000604082840312156128f0576128ef61154a565b5b60006128fe848285016128af565b91505092915050565b6129108161175d565b82525050565b600060808201905061292b6000830187611516565b6129386020830186611516565b6129456040830185612907565b6129526060830184611d21565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b7f557365206a6163446f75626c652066756e6374696f6e20696e73746561640000600082015250565b60006129c0601e83612362565b91506129cb8261298a565b602082019050919050565b600060208201905081810360008301526129ef816129b3565b9050919050565b6000612a018261179b565b9150612a0c8361179b565b9250828203905081811115612a2457612a23611f2c565b5b92915050565b600061014082019050612a40600083018d612907565b612a4d602083018c611d21565b612a5a604083018b611516565b612a67606083018a611516565b612a746080830189611d21565b612a8160a0830188611d21565b612a8e60c0830187611d21565b612a9b60e0830186611d21565b612aa9610100830185611d21565b612ab7610120830184611516565b9b9a5050505050505050505050565b7f496e76616c6964206e756d626572000000000000000000000000000000000000600082015250565b6000612afc600e83612362565b9150612b0782612ac6565b602082019050919050565b60006020820190508181036000830152612b2b81612aef565b9050919050565b6000612b3d8261179b565b9150612b488361179b565b925082612b5857612b5761295b565b5b828204905092915050565b6000612b6e8261179b565b9150612b798361179b565b9250828202612b878161179b565b91508282048414831517612b9e57612b9d611f2c565b5b509291505056fea2646970667358221220b7f64a3210fac9b63d019dd8edd5aad14fafcdc8925657b1231e3f65931e58ca64736f6c63430008110033";

type BLSSignatureAggregatorConstructorParams =
  | [
      linkLibraryAddresses: BLSSignatureAggregatorLibraryAddresses,
      signer?: Signer
    ]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BLSSignatureAggregatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => {
  return (
    typeof xs[0] === "string" ||
    (Array.isArray as (arg: any) => arg is readonly any[])(xs[0]) ||
    "_isInterface" in xs[0]
  );
};

export class BLSSignatureAggregator__factory extends ContractFactory {
  constructor(...args: BLSSignatureAggregatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      const [linkLibraryAddresses, signer] = args;
      super(
        _abi,
        BLSSignatureAggregator__factory.linkBytecode(linkLibraryAddresses),
        signer
      );
    }
  }

  static linkBytecode(
    linkLibraryAddresses: BLSSignatureAggregatorLibraryAddresses
  ): string {
    let linkedBytecode = _bytecode;

    linkedBytecode = linkedBytecode.replace(
      new RegExp("__\\$b78e61b50eae8ff14018a753b33166207a\\$__", "g"),
      linkLibraryAddresses["src/aa-4337/bls/lib/BLSOpen.sol:BLSOpen"]
        .replace(/^0x/, "")
        .toLowerCase()
    );

    return linkedBytecode;
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BLSSignatureAggregator> {
    return super.deploy(overrides || {}) as Promise<BLSSignatureAggregator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BLSSignatureAggregator {
    return super.attach(address) as BLSSignatureAggregator;
  }
  override connect(signer: Signer): BLSSignatureAggregator__factory {
    return super.connect(signer) as BLSSignatureAggregator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BLSSignatureAggregatorInterface {
    return new utils.Interface(_abi) as BLSSignatureAggregatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BLSSignatureAggregator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BLSSignatureAggregator;
  }
}

export interface BLSSignatureAggregatorLibraryAddresses {
  ["src/aa-4337/bls/lib/BLSOpen.sol:BLSOpen"]: string;
}
