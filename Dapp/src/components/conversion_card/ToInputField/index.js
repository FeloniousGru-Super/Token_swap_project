import React from "react";
import { BsChevronDown } from "react-icons/bs";
const To = ({ onTokenChangeClick, toInput, input = true }) => {
    return (
        <div>
            <label htmlFor="" className="text-sm my-2 block text-red-500">
                To (estimated)
            </label>

            <div className="p-2 border rounded flex items-center gap-4">
                <div
                    className="hover:bg-gray-300 p-2 rounded cursor-pointer flex items-center gap-2 select-none"
                    onClick={onTokenChangeClick}
                >
                    {!!toInput && (
                        <div className="logo w-6">
                            <img src={toInput.img} alt="" />
                        </div>
                    )}
                    <p className="title w-full font-medium">{`${
                        toInput !== null ? toInput.title : "Select a Token"
                    }`}</p>{" "}
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

export default To;
