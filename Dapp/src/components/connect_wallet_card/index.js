import React, { useState } from "react";
import { MdArrowBack } from "react-icons/md";
import Switch from "../switch";
import logo from "../../assets/logo.png";

const ConnectWallet = ({ changeScreen }) => {
    const [switchBtn, setSwitchBtn] = useState(0);

    return (
        <div className="max-w-md mx-auto rounded-lg shadow p-8 space-y-4 bg-white">
            <div className="flex items-center gap-3">
                <button onClick={() => changeScreen("home")}>
                    <MdArrowBack size={24} />
                </button>
                <p className="text-lg font-medium">Connect to a Token</p>
            </div>

            <div className={"flex justify-center"}>
                <Switch
                    states={["BSC", "Ethereum"]}
                    selected={switchBtn}
                    setSelected={setSwitchBtn}
                />
            </div>

            {!switchBtn && (
                <ul className="space-y-2">
                    <li className="">
                        <a
                            href="/"
                            className="flex items-center gap-4 rounded bg-gray-100 border p-4"
                        >
                            <div className="img w-10">
                                <img src={logo} alt="" />
                            </div>
                            <p className="font-medium">
                                Install Binance Chain Wallet
                            </p>
                        </a>
                    </li>

                    <li className="">
                        <a
                            href="/"
                            className="flex items-center gap-4 rounded bg-gray-100 border p-4"
                        >
                            <div className="img w-10">
                                <img src={logo} alt="" />
                            </div>
                            <p className="font-medium">
                                Install Metamask
                            </p>
                        </a>
                    </li>

                    <li className="">
                        <a
                            href="/"
                            className="flex items-center gap-4 rounded bg-gray-100 border p-4"
                        >
                            <div className="img w-10">
                                <img src={logo} alt="" />
                            </div>
                            <p className="font-medium">
                                Install Trustwallet
                            </p>
                        </a>
                    </li>

                    <li className="">
                        <a
                            href="/"
                            className="flex items-center gap-4 rounded bg-gray-100 border p-4"
                        >
                            <div className="img w-10">
                                <img src={logo} alt="" />
                            </div>
                            <p className="font-medium">
                                Get MathWallet App
                            </p>
                        </a>
                    </li>
                </ul>
            )}

            {!!switchBtn && (
                <ul className="space-y-2">
                    <li className="">
                        <a
                            href="/"
                            className="flex items-center gap-4 rounded bg-gray-100 border p-4"
                        >
                            <div className="img w-10">
                                <img src={logo} alt="" />
                            </div>
                            <p className="font-medium">
                                Install Metamask
                            </p>
                        </a>
                    </li>

                    <li className="">
                        <a
                            href="/"
                            className="flex items-center gap-4 rounded bg-gray-100 border p-4"
                        >
                            <div className="img w-10">
                                <img src={logo} alt="" />
                            </div>
                            <p className="font-medium">
                                Install TrustWallet
                            </p>
                        </a>
                    </li>

                    <li className="">
                        <a
                            href="/"
                            className="flex items-center gap-4 rounded bg-gray-100 border p-4"
                        >
                            <div className="img w-10">
                                <img src={logo} alt="" />
                            </div>
                            <p className="font-medium">
                                Get MathWallet App
                            </p>
                        </a>
                    </li>
                </ul>
            )}

            <div>
                <p className="text-center font-medium">
                    New to Binance Smart Chain
                </p>
                <a href="/" className="block text-center font-medium text-red-500">
                    Learn more about wallets
                </a>
            </div>
        </div>
    );
};

export default ConnectWallet;
