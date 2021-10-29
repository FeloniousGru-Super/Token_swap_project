import React from "react";
import news from "./static/news.png";

const CryptoNews = () => {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto space-y-20 py-20">
                <div className=" space-y-8">
                    <h2 className="text-center text-4xl font-bold text-primary">
                        Latest crypto news
                    </h2>
                    <p className="text-center max-w-md mx-auto text-lg text-gray-600">
                        The Revolutionary LunaChow Burn Structure at launch –
                        Burn now, Not Later!
                    </p>
                </div>

                <div className="flex flex-wrap">
                    <div className="md:w-1/4 p-2">
                        <div className="rounded-3xl overflow-hidden bg-secondary-light">
                            <div className="flex justify-center">
                                <img src={news} alt="" />
                            </div>

                            <div className="px-6 py-8 space-y-4">
                                <h2 className="text-primary font-medium">
                                    Let’s be clear: Blockchain technology is
                                    infrastructure
                                </h2>
                                <p>
                                    With continued dialogue between the
                                    blockchain industry and the U.S. Congress,
                                    there is still hope
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/4 p-2">
                        <div className="rounded-3xl overflow-hidden bg-secondary-light">
                            <div className="flex justify-center">
                                <img src={news} alt="" />
                            </div>

                            <div className="px-6 py-8 space-y-4">
                                <h2 className="text-primary font-medium">
                                    Let’s be clear: Blockchain technology is
                                    infrastructure
                                </h2>
                                <p>
                                    With continued dialogue between the
                                    blockchain industry and the U.S. Congress,
                                    there is still hope
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/4 p-2">
                        <div className="rounded-3xl overflow-hidden bg-secondary-light">
                            <div className="flex justify-center">
                                <img src={news} alt="" />
                            </div>

                            <div className="px-6 py-8 space-y-4">
                                <h2 className="text-primary font-medium">
                                    Let’s be clear: Blockchain technology is
                                    infrastructure
                                </h2>
                                <p>
                                    With continued dialogue between the
                                    blockchain industry and the U.S. Congress,
                                    there is still hope
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-1/4 p-2">
                        <div className="rounded-3xl overflow-hidden bg-secondary-light">
                            <div className="flex justify-center">
                                <img src={news} alt="" />
                            </div>

                            <div className="px-6 py-8 space-y-4">
                                <h2 className="text-primary font-medium">
                                    Let’s be clear: Blockchain technology is
                                    infrastructure
                                </h2>
                                <p>
                                    With continued dialogue between the
                                    blockchain industry and the U.S. Congress,
                                    there is still hope
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center">
                    <a  href="/" className=" text-center w-1/2 rounded-full py-3 px-4 bg-gradient-to-b from-yellow-500 to-yellow-600 font-medium text-white">
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CryptoNews;
