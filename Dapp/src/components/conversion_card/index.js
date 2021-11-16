import { useState } from "react";
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
    useContractMethodCallGetAmountIn,
    useContractMethodCallGetAmountOut,
} from "./swapHooks";
import { abi as IUniswapV3PoolABI } from "@uniswap/v3-core/artifacts/contracts/interfaces/IUniswapV3Pool.sol/IUniswapV3Pool.json";
import { getPoolPrices } from "./myUniswapV3Api.ts";

const ConversionCard = ({
    changeScreen,
    setFromInput,
    setToInput,
    fromInput,
    toInput,
    accountAddress,
    // selectedSpeedOption,
    // selectedToleranceOption,
    customToleranceValue,
    customTransactionDetail,
    gasPrice,
}) => {
    const [tooltipVisibility, setTooltipVisibility] = useState(false);
    const { chainId, library } = useEthers();

    const uniswapMainnetContract = initUniswapMainnetContract();
    const { state: mainnetConvertLunaChowToExactEthState, send: mainnetConvertLunaChowToExactEth } =
        useContractMethod(uniswapMainnetContract, "convertLunaChowToExactEth");
    const { state: mainnetConvertEthToExactLunaChowState, send: mainnetConvertEthToExactLunaChow } =
        useContractMethod(uniswapMainnetContract, "convertEthToExactLunaChow");

    // Approve Mainnet WETH
    const approveMainnetWETHContract = initApproveContract(
        "0xc778417E063141139Fce010982780140Aa0cD5Ab"
    );
    const { send: approveMainnetWETH } = useContractMethod(approveMainnetWETHContract, "approve");

    // Approve Mainnet Luna Chow
    const approveMainnetLunaChowContract = initApproveContract(
        "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984"
    );
    const { send: approveMainnetLunaChow } = useContractMethod(
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
        // "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2"
    );
    const { send: approveBSCWBNB } = useContractMethod(approveBSCWBNBContract, "approve");

    // Approve BSC Luna Chow
    const approveBSCLunaChowContract = initApproveContract(
        "0x442Be68395613bDCD19778e761f03261ec46C06D"
    );
    const { send: approveBSCLunaChow } = useContractMethod(approveBSCLunaChowContract, "approve");

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

    function approve(
        currentSwapState,
        _tokenIn,
        approveToken,
        approveNativeToken,
        token,
        nativeToken,
        swapContract
    ) {
        console.log(currentSwapState);
        if (
            currentSwapState.errorMessage === "execution reverted: STF" ||
            currentSwapState.errorMessage === "execution reverted: Insufficient allowance"
        ) {
            if (_tokenIn === token) {
                approveToken(swapContract, "1000000000000000000000000000000");
            } else if (_tokenIn === nativeToken) {
                approveNativeToken(swapContract, "1000000000000000000000000000000");
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
                    "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
                    "0xc778417E063141139Fce010982780140Aa0cD5Ab",
                    "0x7cb67b9F33cEcB98A5a3D078e5c3C95985dFDb4e"
                );
            });
        }
    }

    async function bscHandleSwap(_tokenIn, _tokenOut, _amountIn, _amountOut, _deadline) {
        if (fromInput["id"] === 1) {
            await bscConvertBNBToExactLunaChow(_tokenIn, _amountOut, _deadline, {
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
                        "0x442Be68395613bDCD19778e761f03261ec46C06D",
                        "0xc778417E063141139Fce010982780140Aa0cD5Ab",
                        "0x7cb67b9F33cEcB98A5a3D078e5c3C95985dFDb4e"
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
                    "0x442Be68395613bDCD19778e761f03261ec46C06D",
                    "0xc778417E063141139Fce010982780140Aa0cD5Ab",
                    "0x7cb67b9F33cEcB98A5a3D078e5c3C95985dFDb4e"
                );
            });
        }
    }

    async function handleSwap() {
        if (fromInput && toInput && fromTokenValue && toTokenValue) {
            try {
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
                    // case ChainId.Ropsten:
                        await mainnetHandleSwap(
                            _tokenIn,
                            _tokenOut,
                            _amountIn,
                            _amountOut,
                            _deadline
                        );
                        break;

                    case ChainId.BSC:
                    // case ChainId.Ropsten:
                        await bscHandleSwap(_tokenIn, _tokenOut, _amountIn, _amountOut, _deadline);
                        break;

                    default:
                        break;
                }
            } catch (error) {
                console.log("Swap error:", error);
            }
        }
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

    const [fromTokenValue, setFromTokenValue] = useState(0.0);
    const [from, setFrom] = useState(false);
    const [toTokenValue, setToTokenValue] = useState(0.0);
    const [to, setTo] = useState(false);

    const tIn = "0xab55Be12B02cCCeF49CA09E3eE2614C68C1fA643";
    const tOut = "0xc778417E063141139Fce010982780140Aa0cD5Ab";

    var amIn = 0;
    var amOut = 0;
    try {
        amIn = utils.parseEther(Number(fromTokenValue.toFixed(18)).toString());
        amOut = utils.parseEther(Number(toTokenValue.toFixed(18)).toString());
    } catch (error) {
        console.log(error);
    }
    const bscAmountOutMin = useContractMethodCallGetAmountOut([tIn, tOut, amIn]) / 1e18;
    const bscAmountInMin = useContractMethodCallGetAmountIn([tIn, tOut, amOut]) / 1e18;
    // console.log(bscAmountOutMin, bscAmountInMin);
    if (chainId == ChainId.Ropsten) {
        console.log(bscAmountInMin.toString(), bscAmountOutMin.toString());
        if (to) {
            setFromTokenValue(bscAmountInMin);
            setTo(false);
        } else if (from) {
            setToTokenValue(bscAmountOutMin);
            setFrom(false);
        }
    }

    async function handlePrices(type, value) {
        if (type === "to") {
            setToTokenValue(value);
        } else if (type === "from") {
            setFromTokenValue(value);
        }
        try {
            switch (chainId) {
                case ChainId.Mainnet:
                    if (type === "to") {
                        const _amountOut = utils.parseEther(Number(value.toFixed(18)).toString());
                        const amountIn = await getPoolPrices(
                            _amountOut,
                            "0",
                            chainId,
                            IUniswapV3PoolABI,
                            false,
                            library
                        );
                        console.log(amountIn.toString(), _amountOut.toString());
                        setFromTokenValue(amountIn);
                    } else if (type === "from") {
                        const _amountIn = utils.parseEther(Number(value.toFixed(18)).toString());
                        const amountOut = await getPoolPrices(
                            _amountIn,
                            "0",
                            chainId,
                            IUniswapV3PoolABI,
                            true,
                            library
                        );
                        console.log(_amountIn.toString(), amountOut.toString());
                        setToTokenValue(amountOut);
                    }
                    break;

                // case ChainId.BSC:
                case ChainId.Ropsten:
                    // console.log(bscAmountInMin.toString(), bscAmountOutMin.toString());
                    if (type === "to") {
                        setTo(true);
                        // setFromTokenValue(bscAmountInMin);
                    } else if (type === "from") {
                        setFrom(true);
                        // setToTokenValue(bscAmountOutMin);
                    }
                    break;

                default:
                    break;
            }
        } catch (error) {
            console.log(error);
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
