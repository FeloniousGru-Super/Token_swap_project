import mainnetSwapAbi from "./mainnetSwapAbi.json";
import bscSwapAbi from "./bscSwapAbi.json";
import { Contract, utils } from "ethers";
import { useContractFunction, useContractCall, ContractCall } from "@usedapp/core";

export function initUniswapMainnetContract() {
    const mainnetSwapInterface = new utils.Interface(mainnetSwapAbi);
    return new Contract("0xe2C0Ae988413afD7a1EDe13E6e386b9cd9bE9E12", mainnetSwapInterface);
}

export function initPancakeSwapBSCContract() {
    const bscSwapInterface = new utils.Interface(bscSwapAbi);
    return new Contract("0x7cb67b9F33cEcB98A5a3D078e5c3C95985dFDb4e", bscSwapInterface);
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

export function useContractMethodCallGetAmountOut(args) {
    const bscSwapInterface = new utils.Interface(bscSwapAbi);
    const call = {
        abi: bscSwapInterface,
        address: "0x7cb67b9F33cEcB98A5a3D078e5c3C95985dFDb4e",
        method: "getAmountOutMin",
        args: args,
    };
    const res = useContractCall(call) ?? [];
    return res;
}
export function useContractMethodCallGetAmountIn(args) {
    const bscSwapInterface = new utils.Interface(bscSwapAbi);
    const call = {
        abi: bscSwapInterface,
        address: "0x7cb67b9F33cEcB98A5a3D078e5c3C95985dFDb4e",
        method: "getAmountInMin",
        args: args,
    };
    const res = useContractCall(call) ?? [];
    return res;
}
