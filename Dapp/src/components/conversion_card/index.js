import { useEffect, useState } from "react";
import Switch from "../switch";
import { MdInfoOutline, MdOutlineSettings, MdArrowDownward } from "react-icons/md";
import FromInputField from "./FromInputField";
import ToInputField from "./ToInputField";
import SelectToken from "../select_token_card";
import Pool from "./pool";
import { utils } from "ethers";
import { useEthers, ChainId } from "@usedapp/core";
import {
    initUniswapMainnetContract,
    useContractMethod,
    initApproveContract,
    initPancakeSwapBSCContract,
    useContractMethodCall,
    getExpectedPrices,
    getTokens,
    approve,
    swapHandler,
    getBSCTokenAndAmounts,
    setBSCTokenAmounts,
} from "./swap";

const ConversionCard = ({
    changeScreen,
    setFromInput,
    setToInput,
    fromInput,
    toInput,
    accountAddress,
    selectedSpeedOption,
    selectedToleranceOption,
    customToleranceValue,
    customTransactionDetail,
    gasPrice,
}) => {
    const [tooltipVisibility, setTooltipVisibility] = useState(false);
    const { chainId, library } = useEthers();

    // Get Tokens
    const {
        swapContract_ETH,
        WETH_ETH,
        LUCHOW_ETH,
        swapContract_BSC,
        WBNB_BSC,
        LUCHOW_BSC,
        tokensETH,
        tokensBSC,
    } = getTokens();

    // My Uniswap Swap Contract
    const uniswapMainnetContract = initUniswapMainnetContract(swapContract_ETH);
    const { state: mainnetConvertLunaChowToExactEthState, send: mainnetConvertLunaChowToExactEth } =
        useContractMethod(uniswapMainnetContract, "convertLunaChowToExactEth");
    const { state: mainnetConvertEthToExactLunaChowState, send: mainnetConvertEthToExactLunaChow } =
        useContractMethod(uniswapMainnetContract, "convertEthToExactLunaChow");

    // Approve Mainnet WETH
    const approveMainnetWETHContract = initApproveContract(WETH_ETH);
    const { send: approveMainnetWETH } = useContractMethod(approveMainnetWETHContract, "approve");

    // Approve Mainnet Luna Chow
    const approveMainnetLunaChowContract = initApproveContract(LUCHOW_ETH);
    const { send: approveMainnetLunaChow } = useContractMethod(
        approveMainnetLunaChowContract,
        "approve"
    );

    // My Pancakswap Swap Contract
    const pancakeSwapBSCContract = initPancakeSwapBSCContract(swapContract_BSC);
    const { state: bscConvertBNBToExactLunaChowState, send: bscConvertBNBToExactLunaChow } =
        useContractMethod(pancakeSwapBSCContract, "convertBNBToExactLunaChow");
    const { state: bscConvertLunaChowToExactBNBState, send: bscConvertLunaChowToExactBNB } =
        useContractMethod(pancakeSwapBSCContract, "convertLunaChowToExactBNB");
    const { state: bscSwapState, send: bscSwap } = useContractMethod(
        pancakeSwapBSCContract,
        "swap"
    );

    // Approve BSC WBNB
    const approveBSCWBNBContract = initApproveContract(WBNB_BSC);
    const { send: approveBSCWBNB } = useContractMethod(approveBSCWBNBContract, "approve");

    // Approve BSC Luna Chow
    const approveBSCLunaChowContract = initApproveContract(LUCHOW_BSC);
    const { send: approveBSCLunaChow } = useContractMethod(approveBSCLunaChowContract, "approve");

    async function mainnetHandleSwap(_tokenIn, _tokenOut, _amountIn, _amountOut, _deadline) {
        console.log("mainnetConvertEthToExactLunaChow");
        if (fromInput["id"] === 1) {
            await mainnetConvertEthToExactLunaChow(_amountOut, _deadline, {
                value: _amountIn,
            }).then(console.log(mainnetConvertEthToExactLunaChowState));
        } else {
            await mainnetConvertLunaChowToExactEth(
                _tokenIn,
                _tokenOut,
                _amountIn,
                _amountOut,
                _deadline
            ).then(() => {
                approve(
                    mainnetConvertLunaChowToExactEthState,
                    _tokenIn,
                    approveMainnetLunaChow,
                    approveMainnetWETH,
                    LUCHOW_ETH,
                    WETH_ETH,
                    swapContract_ETH
                );
            });
        }
    }

    async function bscHandleSwap(_tokenIn, _tokenOut, _amountIn, _amountOut, _deadline) {
        if (fromInput["id"] === 1) {
            await bscConvertBNBToExactLunaChow(_tokenOut, _amountOut, _deadline, {
                value: _amountIn,
            }).then(console.log(bscConvertBNBToExactLunaChowState));
        } else if (toInput["id"] === 1) {
            await bscConvertLunaChowToExactBNB(_tokenIn, _amountIn, _amountOut, _deadline).then(
                () => {
                    approve(
                        bscConvertLunaChowToExactBNBState,
                        _tokenIn,
                        approveBSCLunaChow,
                        approveBSCWBNB,
                        LUCHOW_BSC,
                        WBNB_BSC,
                        swapContract_BSC
                    );
                }
            );
        } else {
            await bscSwap(_tokenIn, _tokenOut, _amountIn, _amountOut, _deadline).then(() => {
                approve(
                    bscSwapState,
                    _tokenIn,
                    approveBSCLunaChow,
                    approveBSCWBNB,
                    _tokenIn,
                    _tokenOut,
                    swapContract_BSC
                );
            });
        }
    }

    async function handleSwap() {
        await swapHandler(
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
        );
    }

    const handleInvertClick = () => {
        const temp = fromInput;
        setFromInput(toInput);
        setToInput(temp);
    };

    const [displayTokenSelect, setDisplayTokenSelect] = useState(false);
    const [seletecingTokenFor, setSeletecingTokenFor] = useState("from"); // either from or to

    const handleTokenSelect = (token) => {
        if (seletecingTokenFor === "from") {
            setFromInput(token);
        } else setToInput(token);

        setDisplayTokenSelect(false);
    };

    const [switchBtn, setSwitchBtn] = useState(0);

    const [fromTokenValue, setFromTokenValue] = useState(0);
    const [from, setFrom] = useState(false);
    const [toTokenValue, setToTokenValue] = useState(0);
    const [to, setTo] = useState(false);

    // Get user input
    const { tIn, tOut, amIn, amOut } = getBSCTokenAndAmounts(
        tokensBSC,
        fromInput,
        toInput,
        fromTokenValue,
        toTokenValue
    );

    // Call BSC get prices contract
    const bscAmountOutMin =
        useContractMethodCall("getAmountOutMin", swapContract_BSC, [tIn, tOut, amIn]) / 1e18;
    const bscAmountInMin =
        useContractMethodCall("getAmountInMin", swapContract_BSC, [tIn, tOut, amOut]) / 1e18;

    // Set BSC Prices
    setTimeout(() => {
        setBSCTokenAmounts(
            chainId,
            bscAmountInMin,
            bscAmountOutMin,
            to,
            setTo,
            setFromTokenValue,
            from,
            setFrom,
            setToTokenValue
        );
    }, 1000);

    // Handle prices BSC/Mainnet
    async function handlePrices(type, value) {
        await getExpectedPrices(
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
        );
    }

    return (
        <>
            {displayTokenSelect === true ? (
                <SelectToken
                    onBack={() => setDisplayTokenSelect(false)}
                    onSelect={handleTokenSelect}
                />
            ) : (
                <div className="max-w-xl mx-auto rounded-2xl p-8 bg-primary-muted space-y-8 relative conversion_card_shadow">
                    <div className="flex items-center">
                        <Switch
                            states={["Swap", "Pool"]}
                            selected={switchBtn}
                            setSelected={setSwitchBtn}
                        />
                        <div className="ml-auto settings flex items-center gap-4 text-red-500">
                            <button>
                                <MdOutlineSettings
                                    size={24}
                                    onClick={() => changeScreen("settings")}
                                />
                            </button>

                            <button>
                                <MdInfoOutline
                                    size={24}
                                    onClick={() => setTooltipVisibility((prev) => !prev)}
                                    onMouseEnter={() => setTooltipVisibility(true)}
                                    onMouseLeave={() => setTooltipVisibility(false)}
                                />
                                <div
                                    className={`absolute w-64 bg-white p-2 rounded shadow right-0 lg:left-96 border ${
                                        tooltipVisibility ? "visible" : "hidden"
                                    }`}>
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Corporis, animi officiis? Perferendis, dolor. Aliquam ad
                                        beatae est amet ducimus facere omnis dolorum commodi sint
                                        impedit accusamus fuga, voluptatum, maxime sunt.
                                    </p>
                                </div>
                            </button>
                        </div>
                    </div>
                    {!switchBtn && (
                        <form action="">
                            <FromInputField
                                changeScreen={changeScreen}
                                onTokenChangeClick={() => {
                                    setSeletecingTokenFor("from");
                                    setDisplayTokenSelect(true);
                                }}
                                fromInput={fromInput}
                                fromTokenValue={fromTokenValue}
                                handlePrices={handlePrices}
                            />
                            <div className="flex justify-center relative text-black mt-2">
                                <button
                                    className="bg-secondary absolute -top-8 rounded-full p-2"
                                    type="button"
                                    onClick={handleInvertClick}>
                                    <MdArrowDownward size={36} />
                                </button>
                            </div>
                            <ToInputField
                                changeScreen={changeScreen}
                                onTokenChangeClick={() => {
                                    setSeletecingTokenFor("to");
                                    setDisplayTokenSelect(true);
                                }}
                                toInput={toInput}
                                toTokenValue={toTokenValue}
                                handlePrices={handlePrices}
                            />

                            <div className="text-center pt-6">
                                {accountAddress === true ? (
                                    <button
                                        type="button"
                                        value="Connect to a Wallet"
                                        className="py-6 px-12 border-white border-2 bg-primary text-white rounded-full mt-2 shadow-md font-medium"
                                        onClick={() => changeScreen("connect_wallet")}>
                                        <p>Connect to a Wallet</p>
                                    </button>
                                ) : (
                                    <button
                                        type="button"
                                        value="Swap"
                                        className="py-6 px-12 border-white border-2 bg-primary text-white rounded-full mt-2 shadow-md font-medium"
                                        onClick={handleSwap}>
                                        <p>Swap</p>
                                    </button>
                                )}
                            </div>
                        </form>
                    )}
                    {!!switchBtn && <Pool />}
                </div>
            )}
        </>
    );
};

export default ConversionCard;
