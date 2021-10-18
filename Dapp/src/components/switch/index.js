import React from "react";
import { useState } from "react";

const Switch = ({ states = [], selected=0, setSelected }) => {
    const activeStyling = "bg-red-500 text-white ";
    

    return (
        <div className="flex bg-white rounded shadow">
            {states.map((state, idx) => {
                return (
                    <button
                        className={`py-2 px-6 rounded font-medium ${
                            idx === selected ? activeStyling : ""
                        }`}
                        onClick={() => setSelected(idx)}
                        key={idx}
                    >
                        {state}
                    </button>
                );
            })}
        </div>
    );
};

export default Switch;
