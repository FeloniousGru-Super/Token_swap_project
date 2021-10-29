import React from "react";
import yahoo_finance from "./static/yahoo_finance.png";
const Featured = () => {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto space-y-20 py-20">
                <div className=" space-y-8">
                    <h2 className="text-center text-4xl font-bold text-primary">
                        Featured
                    </h2>
                    <p className="text-center max-w-md mx-auto text-lg text-gray-600">
                        The Revolutionary LunaChow Burn Structure at launch –
                        Burn now, Not Later!
                    </p>
                </div>

                <div className="flex flex-wrap">
                    <div className="p-2 md:w-1/4">
                        <div className="rounded-3xl p-8 py-12 space-y-4 bg-secondary-light">
                            <div className="flex justify-center">
                                <img src={yahoo_finance} alt="" />
                            </div>
                            <p>
                                To counteract these potential threats, many
                                projects burn tokens at the launch or
                                periodically to deliver value to shareholders.
                                LunaChow leverages this approach in a unique
                                way. By burning 99.9% of the initial supply,
                                LunaChow fairly and immediately delivers
                                years-worth of value
                            </p>
                        </div>{" "}
                    </div>
                    <div className="p-2 md:w-1/4">
                        <div className="rounded-3xl p-8 py-12 space-y-4 bg-secondary-light">
                            <div className="flex justify-center">
                                <img src={yahoo_finance} alt="" />
                            </div>
                            <p>
                                To counteract these potential threats, many
                                projects burn tokens at the launch or
                                periodically to deliver value to shareholders.
                                LunaChow leverages this approach in a unique
                                way. By burning 99.9% of the initial supply,
                                LunaChow fairly and immediately delivers
                                years-worth of value
                            </p>
                        </div>
                    </div>
                    <div className="p-2 md:w-1/4">
                        <div className="rounded-3xl p-8 py-12 space-y-4 bg-secondary-light">
                            <div className="flex justify-center">
                                <img src={yahoo_finance} alt="" />
                            </div>
                            <p>
                                To counteract these potential threats, many
                                projects burn tokens at the launch or
                                periodically to deliver value to shareholders.
                                LunaChow leverages this approach in a unique
                                way. By burning 99.9% of the initial supply,
                                LunaChow fairly and immediately delivers
                                years-worth of value
                            </p>
                        </div>
                    </div>
                    <div className="p-2 md:w-1/4">
                        <div className="rounded-3xl p-8 py-12 space-y-4 bg-secondary-light">
                            <div className="flex justify-center">
                                <img src={yahoo_finance} alt="" />
                            </div>
                            <p>
                                To counteract these potential threats, many
                                projects burn tokens at the launch or
                                periodically to deliver value to shareholders.
                                LunaChow leverages this approach in a unique
                                way. By burning 99.9% of the initial supply,
                                LunaChow fairly and immediately delivers
                                years-worth of value
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Featured;
