import mainnetSwapAbi from "./mainnetSwapAbi.json";
import bscSwapAbi from "./bscSwapAbi.json";
import { Contract, utils } from "ethers";
import { useContractFunction, useContractCall, ChainId } from "@usedapp/core";
import { abi as IUniswapV3PoolABI } from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";
import { getPoolPrices } from "./myUniswapV3Api.ts";

export function getTokens() {
    // Ropsten Uniswap v3
    // const LUCHOW_ETH = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
    // const WETH_ETH = "0xc778417E063141139Fce010982780140Aa0cD5Ab";
    const swapContract_ETH = "0xe2C0Ae988413afD7a1EDe13E6e386b9cd9bE9E12";
    // Mainnet
    var LUCHOW_ETH = "0xA5Ef74068d04ba0809B7379dD76Af5Ce34Ab7C57";
    var WETH_ETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
    // const swapContract_ETH = "";
    const tokensETH = [WETH_ETH, WETH_ETH, WETH_ETH, LUCHOW_ETH];

    // Ropsten Uniswap v2
    const LUCHOW_BSC = "0xab55Be12B02cCCeF49CA09E3eE2614C68C1fA643";
    const WBNB_BSC = "0xc778417E063141139Fce010982780140Aa0cD5Ab";
    const swapContract_BSC = "0x7cb67b9F33cEcB98A5a3D078e5c3C95985dFDb4e";
    // Binance Smart Chain
    // var LUCHOW_BSC = "0xe4e8e6878718bfe533702D4a6571Eb74D79b0915";
    // var WBNB_BSC = "0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c";
    // const swapContract_BSC = "";
    const tokensBSC = [WBNB_BSC, WBNB_BSC, WBNB_BSC, LUCHOW_BSC];
    return {
        swapContract_ETH,
        WETH_ETH,
        LUCHOW_ETH,
        swapContract_BSC,
        WBNB_BSC,
        LUCHOW_BSC,
        tokensETH,
        tokensBSC,
    };
}

export function initUniswapMainnetContract(contract) {
    const mainnetSwapInterface = new utils.Interface(mainnetSwapAbi);
    return new Contract(contract, mainnetSwapInterface);
}

export function initPancakeSwapBSCContract(contract) {
    const bscSwapInterface = new utils.Interface(bscSwapAbi);
    return new Contract(contract, bscSwapInterface);
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

export function useContractMethodCall(methodName, contract, args) {
    const bscSwapInterface = new utils.Interface(bscSwapAbi);
    const call = {
        abi: bscSwapInterface,
        address: contract,
        method: methodName,
        args: args,
    };
    try {
        const res = useContractCall(call) ?? [];
        return res;
    } catch (error) {}
}

export function approve(
    currentSwapState,
    _tokenIn,
    projectTtoken,
    approveTokenContract,
    swapContract,
    nativeToken,
    approveNativeTokenContract
) {
    console.log(currentSwapState);
    if (
        currentSwapState.errorMessage === "execution reverted: STF" ||
        currentSwapState.errorMessage === "execution reverted: Insufficient allowance"
    ) {
        if (_tokenIn === projectTtoken) {
            approveTokenContract(swapContract, "1000000000000000000000000000000");
        } else if (_tokenIn === nativeToken) {
            approveNativeTokenContract(swapContract, "1000000000000000000000000000000");
        }
    } else if (
        currentSwapState.errorMessage === "execution reverted: ds-math-sub-underflow" ||
        currentSwapState.errorMessage ===
            "execution reverted: UniswapV2Router: EXCESSIVE_INPUT_AMOUNT"
    ) {
        console.log("Price Impact too high!");
    } else if (currentSwapState.errorMessage === "execution reverted: Insufficient balance") {
        console.log("Insufficient balance!");
    }
}

export function getBSCTokenAndAmounts(tokensBSC, fromInput, toInput, fromTokenValue, toTokenValue) {
    var amIn;
    var amOut;
    if (fromInput && toInput) {
        const tIn = tokensBSC[fromInput.id];
        const tOut = tokensBSC[toInput.id];
        amIn = Number(fromTokenValue) ? fromTokenValue : 0;
        amOut = Number(toTokenValue) ? toTokenValue : 0;
        try {
            amIn = utils.parseEther(Number(amIn).toFixed(18).toString());
            amOut = utils.parseEther(Number(amOut).toFixed(18).toString());
        } catch (error) {}
        return { tIn, tOut, amIn, amOut };
    }
    var tIn;
    var tOut;
    return { tIn, tOut, amIn, amOut };
}

export async function setBSCTokenAmounts(
    chainId,
    bscAmountInMin,
    bscAmountOutMin,
    to,
    setTo,
    setFromTokenValue,
    from,
    setFrom,
    setToTokenValue
) {
    if (chainId == ChainId.Ropsten) {
        if (to) {
            setTo(false);
            setFromTokenValue(bscAmountInMin);
        } else if (from) {
            setFrom(false);
            setToTokenValue(await bscAmountOutMin);
        }
    }
}

export async function getExpectedPrices(
    type,
    setToTokenValue,
    value,
    setFromTokenValue,
    chainId,
    library,
    setTo,
    setFrom,
    tokensETH,
    fromInput,
    toInput
) {
    if (type === "to") {
        setToTokenValue(value);
    } else if (type === "from") {
        setFromTokenValue(value);
    }
    try {
        switch (chainId) {
            case ChainId.Mainnet:
                await setMainnetPrices(
                    tokensETH,
                    fromInput,
                    toInput,
                    type,
                    value,
                    chainId,
                    library,
                    setFromTokenValue,
                    setToTokenValue
                );
                break;

            // case ChainId.BSC:
            case ChainId.Ropsten:
                setBSCPrices(type, setTo, setFrom);
                break;

            default:
                break;
        }
    } catch (error) {}
}

function setBSCPrices(type, setTo, setFrom) {
    if (type === "to") {
        setTo(true);
        // setFromTokenValue(bscAmountInMin);
    } else if (type === "from") {
        setFrom(true);
    }
}

async function setMainnetPrices(
    tokensETH,
    fromInput,
    toInput,
    type,
    value,
    chainId,
    library,
    setFromTokenValue,
    setToTokenValue
) {
    const _tokenInETH = tokensETH[fromInput.id];
    const _tokenOutETH = tokensETH[toInput.id];
    if (type === "to") {
        await setPrice(
            value,
            _tokenInETH,
            _tokenOutETH,
            chainId,
            false,
            library,
            setFromTokenValue
        );
    } else if (type === "from") {
        await setPrice(value, _tokenInETH, _tokenOutETH, chainId, true, library, setToTokenValue);
    }
}

async function setPrice(
    value,
    _tokenInETH,
    _tokenOutETH,
    chainId,
    isFromInput,
    library,
    setTokenValue
) {
    const _amountInput = utils.parseEther(Number(value).toFixed(18).toString());
    const amountOutput = await getPoolPrices(
        _amountInput,
        _tokenInETH,
        _tokenOutETH,
        chainId,
        IUniswapV3PoolABI,
        isFromInput,
        library
    );
    setTokenValue(amountOutput);
}

function getGas(selectedSpeedOption, gasPrice) {
    switch (selectedSpeedOption) {
        case 0:
            return gasPrice;
        case 1:
            return gasPrice + 5;
        case 2:
            return gasPrice + 10;
        default:
            break;
    }
}

function getSlippage(selectedToleranceOption, customToleranceValue) {
    if (customToleranceValue) {
        return customToleranceValue;
    }

    switch (selectedToleranceOption) {
        case 0:
            return 0.001;
        case 1:
            return 0.005;
        case 2:
            return 0.01;
        default:
            break;
    }
}

export async function swapHandler(
    fromInput,
    toInput,
    fromTokenValue,
    toTokenValue,
    customTransactionDetail,
    selectedSpeedOption,
    selectedToleranceOption,
    customToleranceValue,
    chainId,
    tokensETH,
    mainnetHandleSwap,
    tokensBSC,
    bscHandleSwap,
    gasPrice
) {
    if (fromInput && toInput && fromTokenValue && toTokenValue) {
        try {
            const _amountIn = utils.parseEther(fromTokenValue.toString());
            const _amountOut = utils.parseEther(toTokenValue.toString());
            const _deadline = Math.ceil((customTransactionDetail * 60) / 15);
            // console.log("gas", getGas(selectedSpeedOption, gasPrice));
            // console.log("slippage", getSlippage(selectedToleranceOption, customToleranceValue));
            switch (chainId) {
                case ChainId.Mainnet:
                    // case ChainId.Ropsten:
                    const _tokenInETH = tokensETH[fromInput.id];
                    const _tokenOutETH = tokensETH[toInput.id];
                    await mainnetHandleSwap(
                        _tokenInETH,
                        _tokenOutETH,
                        _amountIn,
                        _amountOut,
                        _deadline
                    );
                    break;

                // case ChainId.BSC:
                case ChainId.Ropsten:
                    const _tokenInBSC = tokensBSC[fromInput.id];
                    const _tokenOutBSC = tokensBSC[toInput.id];

                    await bscHandleSwap(
                        _tokenInBSC,
                        _tokenOutBSC,
                        _amountIn,
                        _amountOut,
                        _deadline
                    );
                    break;

                default:
                    break;
            }
        } catch (error) {
            console.log("Swap error:", error);
        }
    }
}
