import React from "react";

import coin_gecko from "../../static/coin_gecko.png";
import nft from "../../static/nft.png";
import polygon from "../../static/polygon.png";
const Upcoming = () => {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto space-y-20">
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold text-primary">
                        What's coming Next?
                    </h2>
                </div>

                <div className="flex flex-wrap gap-12 justify-center pt-16">
                    <div className="px-8 pb-8  bg-primary-dark rounded-3xl w-80 text-center relative">
                        <div className="flex justify-center relative -top-10">
                            <img
                                src={polygon}
                                alt=""
                                className="w-32 h-32"
                                style={{
                                    filter: "drop-shadow(-15px 15px 20px rgba(0,0,0,.5))",
                                }}
                            />
                        </div>
                        <h4 className="text-primary-darker text-lg">
                            Lunachow now on Polygon Chain
                        </h4>
                        <p className="text-white">LUCHOW is now available on Polygon blockchain. </p>
                    </div>

                    <div className="px-8 pb-8  bg-primary-dark rounded-3xl w-80 text-center relative">
                        <div className="flex justify-center relative -top-10">
                            <img
                                src={nft}
                                alt=""
                                className="w-32 h-32"
                                style={{
                                    filter: "drop-shadow(-15px 15px 20px rgba(0,0,0,.5))",
                                }}
                            />
                        </div>
                        <h4 className="text-primary-darker text-lg">
                            NFT Marketplace
                        </h4>
                        <p className="text-white">Development is currently ongoing on the NFT Marketplace.</p>
                    </div>

                    <div className="px-8 pb-8  bg-primary-dark rounded-3xl w-80 text-center relative">
                        <div className="flex justify-center relative -top-10">
                            <img
                                src={coin_gecko}
                                alt=""
                                className="w-32 h-32"
                                style={{
                                    filter: "drop-shadow(-15px 15px 20px rgba(0,0,0,.5))",
                                }}
                            />
                        </div>
                        <h4 className="text-primary-darker text-lg">
                            Now listed on CoinGecko and CoinMarketCap
                        </h4>
                        <p className="text-white">Development is currently ongoing on the NFT.</p>
                    </div>

                
                </div>
            </div>
        </div>
    );
};

export default Upcoming;
