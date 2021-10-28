import React from "react";
import pattern from "../../../../assets/bg_pattern_2.jpg";
import dog_coin from "../../static/dog_coin.png";
import coins from "../../static/coins.png";
import coins_pot from "../../static/coins_pot.png";

const Fair = () => {
    return (
        <div className="min-h-screen">
            <div className="background-top relative" style={{ zIndex: -99 }}>
                <div className="absolute right-0 -top-40">
                    <img
                        src={pattern}
                        alt=""
                        style={{ transform: "scaleX(-1)" }}
                    />
                </div>
            </div>

            <div className="container mx-auto py-32 space-y-20">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold text-primary">
                        Token Fair Launch
                    </h2>
                    <p className="text-lg text-gray-600 max-w-md mx-auto">
                        LunaChow is the first completely fair launch token –
                        zero private sale or team allocation. Additionally,
                        ample initial liquidity protects investors. LunaChow
                        represents integrity and fairness at its best!
                    </p>
                </div>

                <div className="flex flex-wrap gap-12 justify-center pt-16">
                    <div className="px-8 pb-8  bg-primary rounded-3xl w-80 text-center relative">
                        <div className="flex justify-center relative -top-10">
                            <img
                                src={dog_coin}
                                alt=""
                                className="w-32 h-32"
                                style={{
                                    filter: "drop-shadow(-15px 15px 20px rgba(0,0,0,.5))",
                                }}
                            />
                        </div>
                        <h4 className="text-secondary font-medium text-lg">
                            Launch Date
                        </h4>
                        <p className="text-white">April 10, 2021</p>
                    </div>

                    <div className="px-8 pb-8  bg-primary rounded-3xl w-80 text-center relative">
                        <div className="flex justify-center relative -top-10">
                            <img
                                src={coins_pot}
                                alt=""
                                className="w-32 h-32 object-contain"
                                style={{
                                    filter: "drop-shadow(-15px 15px 20px rgba(0,0,0,.5))",
                                }}
                            />
                        </div>
                        <h4 className="text-secondary font-medium text-lg">
                            Circulating Supply
                        </h4>
                        <p className="text-white">
                            999,000,000,000 $LUCHOW (0.09%)
                        </p>
                    </div>

                    <div className="px-8 pb-8  bg-primary rounded-3xl w-80 text-center relative">
                        <div className="flex justify-center relative -top-16">
                            <img
                                src={coins}
                                alt=""
                                className="w-32 h-32 object-cover"
                                style={{
                                    filter: "drop-shadow(-15px 15px 20px rgba(0,0,0,.5))",
                                }}
                            />
                        </div>
                        <h4 className="text-secondary font-medium text-lg">
                            Total
                        </h4>
                        <p className="text-white">
                            1,000,000,000,000,000 $LUCHOW
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fair;
