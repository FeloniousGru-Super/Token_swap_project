import React, { useState } from "react";
import coin_img from "./static/coin_img.png";
import pattern from "../../../../assets/bg_pattern_3.png";

const About = () => {
    return (
        <div className="min-h-screen overflow-hidden relative">
            {/* pattern top */}
            <div className=" relative" style={{}}>
                <div className="absolute right-0 -top-40">
                    <img src={pattern} alt="" style={{ transform: "scaleX(-1)" }} />
                </div>
            </div>

            <div className="py-32 space-y-20 max-w-screen-lgxl container mx-auto px-8 relative" style={{zIndex: 1}}>
                <div className="max-w-xs mx-auto">
                    <img src={coin_img} alt="" />
                </div>

                <div className="text-center space-y-4">
                    <h2 className="font-bold text-4xl text-primary">About Us</h2>
                    <p className="text-left max-w-lg mx-auto text-gray-600">
                    LunaChow is the world’s first crypto protocol leveraging the power of community to build a better token that maximizes fairness and profits. 
                    </p>

                    <p className="text-left max-w-lg mx-auto text-gray-600">
                    LunaChow is an ERC-20 token built on the Ethereum network, the world’s largest decentralized smart contract ecosystem. The LunaChow community plays a critical role in creating and deploying the tokens development schedule, making it a truly democratic token that disrupts traditional financial structures by giving power to the people. 
                    </p>

                    <p className="text-left max-w-lg mx-auto text-gray-600">
                    The LunaChow team also created the token with transparency in mind, embracing a public sale process and opting out of private sales. The result is a token with an easier entry point for initial investment, making LunaChow more accessible for a wider number of would-be investors. 
                    </p>

                    <p className="text-left max-w-lg mx-auto text-gray-600">
                    An aggressive burn structure also sets LunaChow apart from other tokens, with 99.9% of all tokens burned on protocol launch. This revolutionary structure immediately rewards investors with an elevated token value and helps weather market uncertainties better. 
                    </p>
                </div>

            </div>
            
        </div>
    );
};

export default About;
