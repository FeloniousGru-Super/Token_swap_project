import React from "react";
import { useState } from "react";

const Switch = ({ states = [], onChange, defaultIdx=0 }) => {
    const activeStyling = "bg-red-500 text-white ";
    const [selected, setSelected] = useState(defaultIdx);

    return (
        <div className="flex bg-white rounded shadow">
            {states.map((state, idx) => {
                return (
                    <button
                        className={`py-2 px-6 rounded ${
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
