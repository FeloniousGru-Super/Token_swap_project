import React, { useState } from "react";
import com from "./static/com.png";
import pattern from "../../../../assets/bg_pattern_3.png";

const Body = () => {
    return (
        <div className="min-h-screen overflow-hidden relative">
            {/* pattern top */}
            <div className=" relative" style={{}}>
                <div className="absolute right-0 -top-100">
                    <img src={pattern} alt="" style={{ transform: "scaleX(-1)" }} />
                </div>
            </div>

            <div className="py-12 space-y-5 max-w-screen-lgxl container mx-auto px-8 relative" style={{zIndex: 1}}>
                <div className="max-w-xs mx-auto">
                    <img className="m-auto" src={com} alt="" />
                </div>

                <div className="text-center space-y-14">
                    <h2 className="font-bold text-5xl text-primary">Disclaimer</h2>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">No Investment Advice</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        The information provided on this website does not constitute investment advice, financial advice, trading advice, or any other sort of advice and you should not treat any of the website's content as such. LunaChow LLC does not guarantee any returns of assets nor recommend that any cryptocurrency should be bought, sold, or held by you. Do conduct your own due diligence and consult your financial advisor before making any investment decisions.  
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Accuracy of Information</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        LunaChow LLC will strive to ensure accuracy of information listed on this website although it will not hold any responsibility for any missing or wrong information. LunaChow LLC provides all information as is. You understand that you are using all information available here at your own risk.
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Non-Endorsement</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        The appearance of third-party advertisements and hyperlinks on LunaChow LLC does not constitute an endorsement, guarantee, warranty, or recommendation by LunaChow LLC. Do conduct your own due diligence before deciding to use any third-party services. 
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Body;
