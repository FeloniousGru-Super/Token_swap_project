import React, { useState } from "react";
import hand_coin from "./static/hand_coin.png";
import pattern from "../../../../assets/bg_pattern_3.png";

const Community = () => {
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
                    <img src={hand_coin} alt="" />
                </div>

                <div className="text-center space-y-4">
                    <h2 className="font-bold text-4xl text-primary">A Community-Focused Project</h2>
                    <p className="text-center max-w-xl mx-auto text-gray-600">
                        A true-for-the-people blockchain protocol, LunaChow isn’t only changing the way people invest in crypto—it’s changing the way people use their crypto to change the world.  
                    </p>

                    <p className="text-center max-w-xl mx-auto text-gray-600">
                        Through its charitable arm, LunaChow empowers token investors to use their crypto wealth for good. Through monthly charity drives, LunaChow donates 100% of donations to a charity that serves underprivileged children, helping them rise above homelessness and poverty so they can achieve their full potential. 
                    </p>
                </div>

                <div className="text-center space-y-4">
                    <h2 className="font-bold text-4xl text-primary">A Token Built with Goodwill</h2>
                    <p className="text-center max-w-xl mx-auto text-gray-600">
                        LunaChow operates with a number of values in mind, but perhaps goodwill is one of the most enduring. From showing goodwill towards our valued community to goodwill to the world around us with our charitable efforts, LunaChow seeks to make the world a better place through the power of crypto.  
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Community;
