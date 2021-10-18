import React from "react";
import { BsChevronDown } from "react-icons/bs";

const From = ({ onTokenChangeClick, fromInput, input = true }) => {
    return (
        <div>
            <label htmlFor="" className="text-sm my-2 block text-red-500">
                From
            </label>

            <div className="p-2 border rounded flex items-center gap-4">
                <div
                    className="hover:bg-gray-300 p-2 rounded cursor-pointer flex items-center gap-2"
                    onClick={onTokenChangeClick}
                >
                    {!!fromInput && (
                        <div className="logo w-6">
                            <img src={fromInput.img} alt="" />
                        </div>
                    )}
                    <p className="title font-medium">{`${
                        fromInput !== null ? fromInput.title : "Select a Token"
                    }`}</p>
                    <BsChevronDown />
                </div>
                {input && (
                    <input
                        type="number"
                        placeholder="0.0"
                        className="flex-grow p-2"
                    />
                )}
            </div>
        </div>
    );
};

export default From;
