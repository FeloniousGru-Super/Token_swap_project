import React from "react";
import { BsChevronDown } from "react-icons/bs";

const From = ({ onTokenChangeClick, fromInput, input = true }) => {
    return (
        <div className="rounded-8xl py-6 px-10 text-white bg-primary">
            <label htmlFor="" className="px-1 text-sm block text-white font-medium">
                From
            </label>

            <div className="py-2 rounded flex items-center gap-4">
                <div
                    className="hover:bg-red-300 px-1 py-2 rounded cursor-pointer flex items-center gap-2"
                    onClick={onTokenChangeClick}
                >
                    {!!fromInput && (
                        <div className="logo w-8">
                            <img src={fromInput.img} alt="" />
                        </div>
                    )}
                    <p className="title font-medium text-lg">{`${
                        fromInput !== null ? fromInput.title : "Select a Token"
                    }`}</p>
                    <BsChevronDown />
                </div>
                {input && (
                    <input
                        type="number"
                        placeholder="0.0"
                        className="flex-grow p-2 bg-transparent text-white text-right placeholder-white font-medium text-lg"
                    />
                )}
            </div>
        </div>
    );
};

export default From;
