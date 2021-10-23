import React from "react";

const Switch = ({ states = [], selected=0, setSelected }) => {
    const activeStyling = "bg-primary text-white ";
    

    return (
        <div className="flex bg-secondary text-white rounded-full overflow-hidden shadow">
            {states.map((state, idx) => {
                return (
                    <button
                        className={`py-4 px-6 rounded-full font-medium ${
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
