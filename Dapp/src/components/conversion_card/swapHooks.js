import mainnetSwapAbi from "./mainnetSwapAbi.json";
import bscSwapAbi from "./bscSwapAbi.json";
import { Contract, utils } from "ethers";
import { useContractFunction } from "@usedapp/core";


export function initUniswapMainnetContract() {
    const mainnetSwapInterface = new utils.Interface(mainnetSwapAbi);
    return new Contract("0xe2C0Ae988413afD7a1EDe13E6e386b9cd9bE9E12", mainnetSwapInterface);
}

export function initPancakeSwapBSCContract() {
    const bscSwapInterface = new utils.Interface(bscSwapAbi);
    return new Contract("0xefcfcE917dFF09482A371acCC26d444c747d1D36", bscSwapInterface);
}

export function initApproveContract(tokenAddress) {
    let abi = ["function approve(address _spender, uint256 _value) public returns (bool success)"];
    const approveInterface = new utils.Interface(abi);
    return new Contract(tokenAddress, approveInterface);
}

export function useContractMethod(contract, methodName) {
    const { state, send } = useContractFunction(contract, methodName, {});
    return { state, send };
}
