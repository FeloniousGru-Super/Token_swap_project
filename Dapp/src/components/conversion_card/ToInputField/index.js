import React from "react";
import { BsChevronDown } from "react-icons/bs";
const To = ({ onTokenChangeClick, toInput, input = true }) => {
    return (
        <div className="rounded-8xl py-6 px-10 border-2 border-primary">
            <label htmlFor="" className="p-1 text-sm font-bold block text-primary">
                To (Estimated)
            </label>

            <div className="py-2 rounded flex items-center gap-4">
                <div
                    className="hover:bg-red-300 px-1 py-2 rounded cursor-pointer flex items-center gap-2 select-none"
                    onClick={onTokenChangeClick}
                >
                    {!!toInput && (
                        <div className="logo w-8">
                            <img src={toInput.img} alt="" />
                        </div>
                    )}
                    <p className="title w-full text-lg font-medium">{`${
                        toInput !== null ? toInput.title : "Select a Token"
                    }`}</p>
                    <BsChevronDown />
                </div>
                {input && (
                    <input
                        
                        type="number"
                        placeholder="0.0"
                        className="bg-primary-muted lex-grow p-2 text-right text-lg font-bold placeholder-black"
                    />
                )}
            </div>
        </div>
    );
};

export default To;
