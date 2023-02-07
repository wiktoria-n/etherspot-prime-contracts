/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../../../../../common";
import type {
  BNPairingPrecompileCostEstimator,
  BNPairingPrecompileCostEstimatorInterface,
} from "../../../../../../../src/bls/lib/hubble-contracts/contracts/libs/BNPairingPrecompileCostEstimator";

const _abi = [
  {
    inputs: [],
    name: "baseCost",
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
        name: "pairCount",
        type: "uint256",
      },
    ],
    name: "getGasCost",
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
    name: "perPairCost",
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
    name: "run",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50610b95806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80634e79f8ca146100515780639382255714610081578063c04062261461009f578063ebfd94b2146100a9575b600080fd5b61006b600480360381019061006691906105fd565b6100c7565b6040516100789190610639565b60405180910390f35b6100896100ea565b6040516100969190610639565b60405180910390f35b6100a76100f0565b005b6100b16100fa565b6040516100be9190610639565b60405180910390f35b60008054600154836100d99190610683565b6100e391906106dd565b9050919050565b60005481565b6100f8610100565b565b60015481565b600061010a610142565b9050600061011661031d565b905081816101249190610733565b600181905550600154826101389190610733565b6000819055505050565b6000806040518060c0016040528060018152602001600281526020017f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed81526020017f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81526020017f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa81525090506101fe6105a0565b6000806107d05a61020f9190610733565b90506107d05a11610255576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161024c906107ea565b60405180910390fd5b60005a905060208460c087600886fa925060005a826102749190610733565b9050836102b6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102ad9061087c565b60405180910390fd5b6000856000600181106102cc576102cb61089c565b5b602002015114610311576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161030890610963565b60405180910390fd5b80965050505050505090565b60008060405180610180016040528060018152602001600281526020017f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed81526020017f090689d0585ff075ec9e99ad690c3395bc4b313370b38ef355acdadcd122975b81526020017f12c85ea5db8c6deb4aab71808dcb408fe3d1e7690c43d37b4ce6cc0166fa7daa815260200160018152602001600281526020017f198e9393920d483a7260bfb731fb5d25f1aa493335a9e71297e485b7aef312c281526020017f1800deef121f1e76426a00665e5c4479674322d4f75edadd46debd5cd992f6ed81526020017f275dc4a288d1afb3cbb1ac09187524c7db36395df7be3b99e673b13a075a65ec81526020017f1d9befcd05a5323e6da4d435f3b617cdb3af83285c2df711ef39c01571827f9d81525090506104806105a0565b6000806107d05a6104919190610733565b90506107d05a116104d7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016104ce906109f5565b60405180910390fd5b60005a905060208461018087600886fa925060005a826104f79190610733565b905083610539576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053090610a87565b60405180910390fd5b60018560006001811061054f5761054e61089c565b5b602002015114610594576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161058b90610b3f565b60405180910390fd5b80965050505050505090565b6040518060200160405280600190602082028036833780820191505090505090565b600080fd5b6000819050919050565b6105da816105c7565b81146105e557600080fd5b50565b6000813590506105f7816105d1565b92915050565b600060208284031215610613576106126105c2565b5b6000610621848285016105e8565b91505092915050565b610633816105c7565b82525050565b600060208201905061064e600083018461062a565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600061068e826105c7565b9150610699836105c7565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156106d2576106d1610654565b5b828202905092915050565b60006106e8826105c7565b91506106f3836105c7565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0382111561072857610727610654565b5b828201905092915050565b600061073e826105c7565b9150610749836105c7565b92508282101561075c5761075b610654565b5b828203905092915050565b600082825260208201905092915050565b7f424e50616972696e67507265636f6d70696c65436f7374457374696d61746f7260008201527f3a206e6f7420656e6f756768206761732c2073696e676c652070616972000000602082015250565b60006107d4603d83610767565b91506107df82610778565b604082019050919050565b60006020820190508181036000830152610803816107c7565b9050919050565b7f424e50616972696e67507265636f6d70696c65436f7374457374696d61746f7260008201527f3a2073696e676c6520706169722063616c6c206973206661696c656400000000602082015250565b6000610866603c83610767565b91506108718261080a565b604082019050919050565b6000602082019050818103600083015261089581610859565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f424e50616972696e67507265636f6d70696c65436f7374457374696d61746f7260008201527f3a2073696e676c6520706169722063616c6c20726573756c74206d757374206260208201527f6520300000000000000000000000000000000000000000000000000000000000604082015250565b600061094d604383610767565b9150610958826108cb565b606082019050919050565b6000602082019050818103600083015261097c81610940565b9050919050565b7f424e50616972696e67507265636f6d70696c65436f7374457374696d61746f7260008201527f3a206e6f7420656e6f756768206761732c20636f75706c652070616972000000602082015250565b60006109df603d83610767565b91506109ea82610983565b604082019050919050565b60006020820190508181036000830152610a0e816109d2565b9050919050565b7f424e50616972696e67507265636f6d70696c65436f7374457374696d61746f7260008201527f3a20636f75706c6520706169722063616c6c206973206661696c656400000000602082015250565b6000610a71603c83610767565b9150610a7c82610a15565b604082019050919050565b60006020820190508181036000830152610aa081610a64565b9050919050565b7f424e50616972696e67507265636f6d70696c65436f7374457374696d61746f7260008201527f3a20636f75706c6520706169722063616c6c20726573756c74206d757374206260208201527f6520310000000000000000000000000000000000000000000000000000000000604082015250565b6000610b29604383610767565b9150610b3482610aa7565b606082019050919050565b60006020820190508181036000830152610b5881610b1c565b905091905056fea2646970667358221220b427910e349bd13557e2359ec8f50f8a89d56412dd95abea69ec03c7b8ea0d2d64736f6c634300080c0033";

type BNPairingPrecompileCostEstimatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BNPairingPrecompileCostEstimatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class BNPairingPrecompileCostEstimator__factory extends ContractFactory {
  constructor(...args: BNPairingPrecompileCostEstimatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<BNPairingPrecompileCostEstimator> {
    return super.deploy(
      overrides || {}
    ) as Promise<BNPairingPrecompileCostEstimator>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): BNPairingPrecompileCostEstimator {
    return super.attach(address) as BNPairingPrecompileCostEstimator;
  }
  override connect(signer: Signer): BNPairingPrecompileCostEstimator__factory {
    return super.connect(signer) as BNPairingPrecompileCostEstimator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BNPairingPrecompileCostEstimatorInterface {
    return new utils.Interface(
      _abi
    ) as BNPairingPrecompileCostEstimatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BNPairingPrecompileCostEstimator {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BNPairingPrecompileCostEstimator;
  }
}
