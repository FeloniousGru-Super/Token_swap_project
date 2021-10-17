import React, { useState } from "react";
import { MdInfoOutline } from "react-icons/md";

const OptionsBox = ({
    options = [],
    title,
    custom = false,
    postfix = "",
    onChange,
    selected,
    customToleranceValue = "",
    setCustomToleranceValue,
}) => {
    return (
        <div className="my-4 space-y-2">
            <div className="flex justify-between">
                <p>{title}</p>
                <button>
                    <MdInfoOutline
                        size={20}
                        className="hover:bg-red-500 hover:text-white rounded-full"
                    />
                </button>
            </div>
            <div className="flex flex-wrap gap-2">
                {options.map((option, idx) => (
                    <button
                        className={`py-2 px-6 rounded-xl bg-gray-200 shadow cursor-pointer hover:bg-red-500 hover:text-white ${
                            selected === idx &&
                            customToleranceValue === "" &&
                            "bg-red-500 text-white"
                        }`}
                        key={idx}
                        onClick={() => {
                            onChange(idx);
                            if (setCustomToleranceValue)
                                setCustomToleranceValue("");
                        }}
                    >
                        {option.title} {postfix}
                    </button>
                ))}
                {custom && (
                    <input
                        type="text"
                        value={customToleranceValue}
                        onChange={(e) => {
                            setCustomToleranceValue(e.target.value);
                        }}
                        placeholder="0.0"
                        className={`py-2 px-4 rounded-xl bg-gray-200 shadow w-24 outline-none ${
                            customToleranceValue !== "" &&
                            "border-2 bg-red-100 border-red-500"
                        }`}
                    />
                )}
            </div>
        </div>
    );
};

export default OptionsBox;
