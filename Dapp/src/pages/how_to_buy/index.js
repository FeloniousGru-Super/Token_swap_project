import React from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Card from "./card";
import coin_with_base from "./static/coin_on_base.png";

const HowToBuy = () => {
    const data = [
        {
            step: 1,
            image: require("./static/metamask_base.png").default,
            title: "Download and Install Trust Wallet MetaMask wallet",
            text: "Download and Create a Trust Wallet or MetaMask Wallet using a mobile device. That will allow you to buy, sell, send, and receive Lunachow.",
        },
        {
            step: 2,
            image: require("./static/etherium.png").default,
            title: "Add Ethereum to your Wallet",
            text: "Add Ethereum to your Trust Wallet or MetaMask Wallet in order to make trade that are based on the Ethereum Protocol, like LunaChow.",
        },
        {
            step: 3,
            image: require("./static/uniswap.png").default,
            title: "Uniswap",
            text: "From your mobile browser, navigate to: Uniswap link",
        },
        {
            step: 4,
            image: require("./static/wallet.png").default,
            title: "Connect your wallet",
            text: `1. Selecting WalletConnect <br />2. Select Trust Wallet or MetaMask and allow the connection. <br/>3. Accept Trust Wallet or MetaMask connection in the app Switchback to your browser without closing Trust Wallet or `,
        },
        {
            step: 5,
            image: require("./static/slippage.png").default,
            title: "Slippage",
            text: "Select slippage: Settings –> Set slippage to 12-13%",
        },
        {
            step: 6,
            image: require("./static/finalize.png").default,
            title: "Download and Install Trust Wallet MetaMask wallet",
            text: "Finalize the trade by clicking swap.",
        },
    ];

    return (
        <div>
            <Navbar />
            {/* how to buy */}
            <div className=" bg-primary-muted py-16">
                <div className="container max-w-screen-lgxl mx-auto space-y-12">
                    <div class="text-center space-y-8">
                        <h2 className="text-5xl text-primary font-bold">How to buy</h2>
                        <p className="max-w-lg m-auto text-gray-600 text-xl">
                            Learn how to buy LUCHOW Tokens in just a few simple steps. You can buy
                            LUCHOW Tokens with Trust Wallet or MetaMask on Uniswap, PancakeSwap,
                            Quickswap etc. Follow the guide below, step by step.
                        </p>
                        <img src={coin_with_base} alt="" className="pt-4 block w-64 mx-auto" />
                    </div>

                    <div className="bg-secondary rounded-3xl p-16">
                        <iframe
                            className="w-full shadow"
                            height="500"
                            src="https://www.youtube.com/embed/QjiO_hFesTA"
                            title="YouTube video player"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>
                    </div>
                </div>
            </div>

            {/* how to get */}
            <div className="py-12">
                <div className="container max-w-screen-lgxl mx-auto space-y-12">
                    <div class="text-center py-12">
                        <h2 className="text-5xl text-primary font-bold">How to get $LUCHOW</h2>
                    </div>

                    <div className="flex flex-wrap">
                        {data.map((item) => (
                            <div className="w-1/2 p-4 mb-6">
                                <Card data={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default HowToBuy;
