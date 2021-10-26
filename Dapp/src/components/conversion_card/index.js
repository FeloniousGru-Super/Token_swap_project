import React, { useState } from "react";
import Switch from "../switch";
import {
    MdInfoOutline,
    MdOutlineSettings,
    MdArrowDownward,
} from "react-icons/md";
import FromInputField from "./FromInputField";
import ToInputField from "./ToInputField";
import SelectToken from "../select_token_card";
import Pool from "./pool";

const ConversionCard = ({
    changeScreen,
    setFromInput,
    setToInput,
    fromInput,
    toInput,
}) => {
    const [tooltipVisibility, setTooltipVisibility] = useState(false);

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
                                    onClick={() =>
                                        setTooltipVisibility((prev) => !prev)
                                    }
                                    onMouseEnter={() =>
                                        setTooltipVisibility(true)
                                    }
                                    onMouseLeave={() =>
                                        setTooltipVisibility(false)
                                    }
                                />
                                <div
                                    className={`absolute w-64 bg-white p-2 rounded shadow right-0 lg:left-96 border ${
                                        tooltipVisibility ? "visible" : "hidden"
                                    }`}
                                >
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Corporis, animi
                                        officiis? Perferendis, dolor. Aliquam ad
                                        beatae est amet ducimus facere omnis
                                        dolorum commodi sint impedit accusamus
                                        fuga, voluptatum, maxime sunt.
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
                            />
                            <div className="flex justify-center relative text-black mt-2">
                                <button
                                    className="bg-secondary absolute -top-8 rounded-full p-2"
                                    type="button"
                                    onClick={handleInvertClick}
                                >
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
                            />

                            <div className="text-center pt-6">
                                <button
                                    type="submit"
                                    value="Connect to a Wallet"
                                    className="py-6 px-12 border-white border-2 bg-primary text-white rounded-full mt-2 shadow-md font-medium"
                                >
                                    Connect to a Wallet
                                </button>
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
