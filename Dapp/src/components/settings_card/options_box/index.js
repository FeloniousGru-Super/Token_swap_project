import React from "react";
import { MdInfoOutline } from "react-icons/md";

const OptionsBox = ({ options = [], title, custom=false, postfix="" }) => {
    return (
        <div className="my-4 space-y-2">
            <div className="flex justify-between">
                <p>{title}</p>
                <button>
                    <MdInfoOutline size={20} className="hover:bg-red-500 hover:text-white rounded-full"/>
                </button>
            </div>
            <div className="flex flex-wrap gap-2">
                {options.map((option, idx) => (
                    <div className="py-2 px-6 rounded-xl bg-gray-200 shadow cursor-pointer hover:bg-red-500 hover:text-white" key={idx}>
                        {option.title} {postfix}
                    </div>
                ))}
                {custom && <input type="text" placeholder="0.0" className="py-2 px-4 rounded-xl bg-gray-200 shadow w-24"/>}
            </div>
        </div>
    );
};

export default OptionsBox;
