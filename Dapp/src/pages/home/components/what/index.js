import React from "react";
import pattern from "../../../../assets/bg_pattern_2.jpg";
import coins from "./static/coins.png"

const What = () => {
    return (
        <div className="min-h-screen" id="about_section">
            <div className="background-top relative" style={{ zIndex: -99 }}>
                <div className="absolute right-0 -top-40">
                    <img
                        src={pattern}
                        alt=""
                        style={{ transform: "scaleX(-1)" }}
                    />
                </div>
            </div>

            <div className="container px-8 mx-auto py-32 space-y-20">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold text-primary">
                        What is <span className="uppercase text-yellow-500">$Luchow</span> Token
                    </h2>
                    <p className="text-lg text-gray-600">
                        The revolutionary LunaChow burn structure at launch -
                        Burn now, not later!
                    </p>
                </div>

                <div className="flex flex-wrap justify-center md:justify-end gap-4">

                    <div className="hidden md:block relative -right-24">
                        <img src={coins} alt="" className="h-64"/>
                    </div>

                    <div className="px-8 py-12 bg-primary rounded-8xl w-80 space-y-4">
                        <p className="text-white">
                        Inspired by Shiba Inu and Dogecoin, LunaChow boasts an aggressive token burn structure. 99.9% of all LunaChow tokens are burned at protocol launch.
                        </p>
                        <button className="bg-red-700 rounded-full text-white py-2 px-4">
                            Read more
                        </button>
                    </div>

                    <div className="px-8 py-12 bg-primary rounded-8xl w-80 space-y-4">
                        <p className="text-white">
                        LunaChow is an ERC-20 token built on the Ethereum network, the world’s largest decentralized smart contract ecosystem. Real-time collaboration with.
                        </p>
                        <button className="block bg-red-700 rounded-full text-white py-2 px-4">
                            Read more
                        </button>
                    </div>

                </div>

            </div>

            <div className="hidden background-top">
                <div className="">
                    <img src={pattern} alt="" />
                </div>
            </div>
        </div>
    );
};

export default What;
