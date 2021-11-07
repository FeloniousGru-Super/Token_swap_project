import React from "react";
import { MdArrowBack, MdInfoOutline } from "react-icons/md";
import OptionsBox from "./options_box";

const Settings = ({
    changeScreen,
    selectedSpeedOption,
    setSelectedSpeedOption,
    selectedToleranceOption,
    setSelectedToleranceOption,
    customToleranceValue,
    setCustomToleranceValue,
    setCustomTransactionDetail,
    gasPrice
}) => {
    const speedOptions = [
        { title: "Standard (" + gasPrice + ")" },
        { title: "Fast (" + (gasPrice + 5) + ")" },
        { title: "Instant (" + (gasPrice + 10) + ")" },
    ];

    const toleranceOptions = [
        { title: "0.1" },
        { title: "0.5" },
        { title: "1" },
    ];

    return (
        <div className="max-w-md mx-auto shadow p-8 bg-secondary-light rounded-2xl">
            <div className="flex items-center gap-2">
                <button>
                    <MdArrowBack
                        size={24}
                        onClick={() => changeScreen("home")}
                    />
                </button>
                <p className="text-lg font-medium">Settings</p>
            </div>

            <OptionsBox
                options={speedOptions}
                onChange={setSelectedSpeedOption}
                selected={selectedSpeedOption}
                title="Default Transaction Speed (GWEI)"
            />
            <OptionsBox
                options={toleranceOptions}
                onChange={setSelectedToleranceOption}
                selected={selectedToleranceOption}
                title="Slippage Tolerance"
                custom="true"
                customToleranceValue={customToleranceValue}
                setCustomToleranceValue={setCustomToleranceValue}
                postfix="%"
            />

            <div className="space-y-2">
                <div className="flex justify-between">
                    <p>Transaction Details</p>
                    <button>
                        <MdInfoOutline
                            size={20}
                            className="hover:bg-red-500 hover:text-white rounded-full"
                        />
                    </button>
                </div>

                <div className="flex items-center justify-between rounded-xl bg-gray-200 gap-2 overflow-hidden ">
                    <input
                        onInput={val => setCustomTransactionDetail(val.target.value)}
                        type="text"
                        placeholder="1"
                        className="py-2 px-4 focus:outline-none bg-gray-200"
                    />
                    <p className="pr-4">minutes</p>
                </div>
            </div>
        </div>
    );
};

export default Settings;
