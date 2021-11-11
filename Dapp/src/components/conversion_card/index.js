import React, { useState, useCallback } from "react";
import Switch from "../switch";
import { MdInfoOutline, MdOutlineSettings, MdArrowDownward } from "react-icons/md";
import FromInputField from "./FromInputField";
import ToInputField from "./ToInputField";
import SelectToken from "../select_token_card";
import Pool from "./pool";
import mainnetSwapAbi from "./mainnetSwapAbi.json";
import bscSwapAbi from "./bscSwapAbi.json";
import { Contract, utils } from "ethers";
import { useContractFunction, useEthers, ChainId } from "@usedapp/core";

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
    const { chainId } = useEthers();

    // Uniswap Contract
    const uniswapMainnetContract = initUniswapMainnetContract();
    const { state: mainnetConvertLunaChowToExactEthState, send: mainnetConvertLunaChowToExactEth } =
        useContractMethod(uniswapMainnetContract, "convertLunaChowToExactEth");
    const { state: mainnetConvertEthToExactLunaChowState, send: mainnetConvertEthToExactLunaChow } =
        useContractMethod(uniswapMainnetContract, "convertEthToExactLunaChow");

    // Approve Mainnet WETH
    const approveMainnetWETHContract = initApproveContract(
        "0xc778417E063141139Fce010982780140Aa0cD5Ab"
    );
    const { state: approveMainnetWETHState, send: approveMainnetWETH } = useContractMethod(
        approveMainnetWETHContract,
        "approve"
    );

    // Approve Mainnet Luna Chow
    const approveMainnetLunaChowContract = initApproveContract(
        "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
    );
    const { state: approveMainnetLunaChowState, send: approveMainnetLunaChow } = useContractMethod(
        approveMainnetLunaChowContract,
        "approve"
    );

    // Pancakswap Contract
    const pancakeSwapBSCContract = initPancakeSwapBSCContract();
    const { state: bscConvertBNBToExactLunaChowState, send: bscConvertBNBToExactLunaChow } =
        useContractMethod(pancakeSwapBSCContract, "convertBNBToExactLunaChow");
    const { state: bscConvertLunaChowToExactBNBState, send: bscConvertLunaChowToExactBNB } =
        useContractMethod(pancakeSwapBSCContract, "convertLunaChowToExactBNB");
    const { state: bscSwapState, send: bscSwap } = useContractMethod(
        pancakeSwapBSCContract,
        "swap"
    );

    // Approve BSC BNB
    const approveBSCWBNBContract = initApproveContract(
        "0xc778417E063141139Fce010982780140Aa0cD5Ab"
    );
    const { state: approveBSCWBNBState, send: approveBSCWBNB } = useContractMethod(
        approveBSCWBNBContract,
        "approve"
    );

    // Approve BSC Luna Chow
    const approveBSCLunaChowContract = initApproveContract(
        "0x442Be68395613bDCD19778e761f03261ec46C06D"
    );
    const { state: approveBSCLunaChowState, send: approveBSCLunaChow } = useContractMethod(
        approveBSCLunaChowContract,
        "approve"
    );

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

    var fromTokenValue;
    var toTokenValue;

    function onToChange(value) {
        toTokenValue = value;
    }

    function onFromChange(value) {
        fromTokenValue = value;
    }

    function getGas(selectedSpeedOption) {
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

    async function handleSwap() {
        if (fromInput && toInput && fromTokenValue && toTokenValue) {
            // const _tokenIn = "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984";
            const _tokenIn = "0x442Be68395613bDCD19778e761f03261ec46C06D";
            const _tokenOut = "0xc778417E063141139Fce010982780140Aa0cD5Ab";
            const _amountIn = utils.parseEther(fromTokenValue.toString());
            const _amountOut = utils.parseEther(toTokenValue.toString());
            const _deadline = customTransactionDetail;
            // console.log("gas", getGas(selectedSpeedOption));
            // console.log("slippage", getSlippage(selectedToleranceOption, customToleranceValue));
            // console.log("deadline (min)", customTransactionDetail);
            switch (chainId) {
                case ChainId.Mainnet:
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
                            console.log(mainnetConvertLunaChowToExactEthState)
                            if (
                                mainnetConvertLunaChowToExactEthState.errorMessage ===
                                    "execution reverted: STF" ||
                                mainnetConvertLunaChowToExactEthState.errorMessage ===
                                    "execution reverted: Insufficient allowance"
                            ) {
                                if (_tokenIn === "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984") {
                                    approveMainnetLunaChow(
                                        "0xe2C0Ae988413afD7a1EDe13E6e386b9cd9bE9E12",
                                        "10000000000000000000"
                                    );
                                } else if (
                                    _tokenIn === "0xc778417E063141139Fce010982780140Aa0cD5Ab"
                                ) {
                                    approveMainnetWETH(
                                        "0xe2C0Ae988413afD7a1EDe13E6e386b9cd9bE9E12",
                                        "10000000000000000000"
                                    );
                                }
                            }
                        });
                    }
                    break;

                // case ChainId.BSC:
                case ChainId.Ropsten:
                    if (fromInput["id"] === 1) {
                        await bscConvertBNBToExactLunaChow(_tokenIn, _amountOut, _deadline, {
                            value: _amountIn,
                        }).then.console.log(bscConvertBNBToExactLunaChowState);
                    } else if (toInput["id"] === 1) {
                        await bscConvertLunaChowToExactBNB(
                            _tokenIn,
                            _amountIn,
                            _amountOut,
                            _deadline
                        ).then(() => {
                            console.log(bscConvertLunaChowToExactBNBState);
                            if (
                                bscConvertLunaChowToExactBNBState.errorMessage ===
                                    "execution reverted: STF" ||
                                bscConvertLunaChowToExactBNBState.errorMessage ===
                                    "execution reverted: Insufficient allowance"
                            ) {
                                if (_tokenIn === "0x442Be68395613bDCD19778e761f03261ec46C06D") {
                                    approveBSCLunaChow(
                                        "0xefcfcE917dFF09482A371acCC26d444c747d1D36",
                                        "10000000000000000000"
                                    );
                                } else if (
                                    _tokenIn === "0xc778417E063141139Fce010982780140Aa0cD5Ab"
                                ) {
                                    approveBSCWBNB(
                                        "0xefcfcE917dFF09482A371acCC26d444c747d1D36",
                                        "10000000000000000000"
                                    );
                                }
                            }
                        });
                    } else {
                        await bscSwap(_tokenIn, _tokenOut, _amountIn, _amountOut, _deadline).then(
                            () => {
                                console.log(bscSwapState);
                                if (
                                    bscSwapState.errorMessage === "execution reverted: STF" ||
                                    bscSwapState.errorMessage ===
                                        "execution reverted: Insufficient allowance"
                                ) {
                                    if (_tokenIn === "0x442Be68395613bDCD19778e761f03261ec46C06D") {
                                        approveBSCLunaChow(
                                            "0xefcfcE917dFF09482A371acCC26d444c747d1D36",
                                            "10000000000000000000"
                                        );
                                    } else if (
                                        _tokenIn === "0xc778417E063141139Fce010982780140Aa0cD5Ab"
                                    ) {
                                        approveBSCWBNB(
                                            "0xefcfcE917dFF09482A371acCC26d444c747d1D36",
                                            "10000000000000000000"
                                        );
                                    }
                                }
                            }
                        );
                    }
                    break;

                default:
                    break;
            }
        }
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
                                onChange={onFromChange}
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
                                onChange={onToChange}
                            />

                            <div className="text-center pt-6">
                                {accountAddress == true ? (
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
