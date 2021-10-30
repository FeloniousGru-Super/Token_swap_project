import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";


const Question = ({question, answer}) => {
    const [expand, setExpand] = useState(false);

    return (
        <div
            className={`md:max-w-xl mx-auto bg-primary py-4  px-6 space-y-4 ${
                expand ? "rounded-3xl" : "rounded-full"
            }`}
        >
            <button
                className="flex items-center gap-2 w-full text-white font-medium cursor-pointer"
                onClick={() => setExpand(!expand)}
            >
                <h2>{question}</h2>
                <div className="ml-auto">
                    {expand ? (
                        <IoIosArrowForward size={24} />
                    ) : (
                        <IoIosArrowDown size={24} />
                    )}
                </div>
            </button>

            {expand && (
                <div className="text-white space-y-2">
                    <p>
                       {answer}
                    </p>
                </div>
            )}
        </div>
    );
};

export default Question;
