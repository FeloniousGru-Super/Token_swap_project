import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import { MdCopyAll } from "react-icons/md";

import catWithCoins from "./static/cat_with_coins.png";
import pattern from "../../assets/bg_pattern_1.png";
import unicorn from "./static/unicorn.png";
import cat from "./static/cat.png";
import experiment from "./static/experiment.png";
import What from "./components/what";
import Tokenomics from "./components/tokenomics";
import Fair from "./components/fair";
import Upcoming from "./components/upcoming";

const Home = () => {
    return (
        <div>
            <Navbar />
            <div className="min-h-screen">
                <div className="bg-primary-grayed rounded-br-16xl">
                    <div className="hero bg-secondary-light overflow-hidden rounded-br-16xl">
                        <div className="container mx-auto px-12">
                            <div className="flex items-center gap-16 justify-between py-20">
                                <div className="w-1/2 space-y-6">
                                    <h2 className="text-8xl font-black tracking-wide">
                                        <span className="text-primary block">
                                            Lunachow
                                        </span>
                                        <span className="block">
                                            Decentralized
                                        </span>
                                        <span className="text-secondary">
                                            Protocol
                                        </span>
                                    </h2>
                                    <div className="flex gap-2">
                                        <div className="bg-primary text-white font-medium py-1 px-6 rounded-full flex gap-2 items-center">
                                            <img src="" alt="" />
                                            <span>DxAxWkdfCfed</span>
                                            <button>
                                                <MdCopyAll size={22} />
                                            </button>
                                        </div>

                                        <div className="bg-primary text-white font-medium py-1 px-6 rounded-full flex gap-2 items-center">
                                            <img src="" alt="" />
                                            <span>DxAxWkdfCfed</span>
                                            <button>
                                                <MdCopyAll size={22} />
                                            </button>
                                        </div>
                                    </div>

                                    <button className="block w-full text-center font-medium bg-gradient-to-b from-yellow-500 to-yellow-600 rounded-full text-white p-3">
                                        Whitepaper
                                    </button>
                                    <div className="flex gap-4">
                                        <button className="w-1/2 rounded-full py-3 px-4 bg-gradient-to-b from-yellow-500 to-yellow-600 font-medium text-white">
                                            Donate
                                        </button>
                                        <button className="w-1/2 rounded-full py-2 px-4 bg-gradient-to-b from-yellow-500 to-yellow-600 font-medium text-white">
                                            Swap
                                        </button>
                                    </div>
                                </div>

                                <div className="w-1/2 h-96 flex justify-center">
                                    <img
                                        src={catWithCoins}
                                        alt=""
                                        className=""
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="relative h-40">
                            <div className="absolute -bottom-40 -left-20 w-full">
                                <img
                                    src={pattern}
                                    alt=""
                                    style={{ transform: "scaleY(-1)" }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="py-32 flex items-center justify-center gap-16">
                        <div className="space-y-4">
                            <h2 className="text-6xl text-primary font-bold">
                                Buy $LUCHOW
                            </h2>
                            <p className="text-2xl text-gray-600 max-w-md">
                                You can buy $LUCHOW Token from Uniswap, Pancake
                                Swap & Dexlabs
                            </p>
                        </div>

                        <div className="flex justify-center gap-4">
                            <button>
                                <img src={unicorn} alt="" className="w-32" />
                            </button>
                            <button>
                                <img src={cat} alt="" className="w-32" />
                            </button>
                            <button>
                                <img src={experiment} alt="" className="w-32" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <What />
            <Tokenomics />
            <Fair />
            <Upcoming />

            <Footer />
        </div>
    );
};

export default Home;
