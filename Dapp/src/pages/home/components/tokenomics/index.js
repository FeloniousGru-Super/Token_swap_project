import React from "react";
import pattern from "../../../../assets/bg_pattern_1.png";
import pieChart from "../../static/pie_chart.png";

const Tokenomics = () => {
    return (
        <div className="min-h-screen overflow-hidden bg-secondary-light relative">
            <div className=" relative" style={{}}>
                <div className="absolute right-0 -top-40">
                    <img
                        src={pattern}
                        alt=""
                        style={{ transform: "scaleX(-1)" }}
                    />
                </div>
            </div>

            <div className="py-32">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold text-primary">
                        Tokenomics
                    </h2>
                    <p className="text-lg max-w-sm mx-auto text-gray-600">
                        The revolutionary LunaChow burn structure at launch -
                        Burn now, not later!
                    </p>

                    <div className="pt-32 flex justify-center">
                        <img src={pieChart} alt="" className="max-w-3xl" />
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-52" style={{}}>
                <div className="">
                    <img
                        src={pattern}
                        alt=""
                        style={{ transform: "scaleY(-1)" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Tokenomics;
