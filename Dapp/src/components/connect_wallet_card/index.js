import React, { useEffect, useState } from "react";
import { MdArrowBack } from "react-icons/md";
import Switch from "../switch";
import binanceWallet from "../../assets/binanceWallet.png";
import metamask from "../../assets/metamask.png";
import trustWallet from "../../assets/trustWallet.png";
import { useEthers, useEtherBalance } from "@usedapp/core";

const ConnectWallet = ({ changeScreen, accountAddress, setAccountAddress }) => {
    const [switchBtn, setSwitchBtn] = useState(0);
    const { activateBrowserWallet, account } = useEthers();
    const etherBalance = useEtherBalance(account);

    useEffect(() => {
        // activateBrowserWallet();
        console.log('etherBalance', etherBalance);
    }, []);

    function handleConnectWallet(){
        activateBrowserWallet();
        setAccountAddress(account);
        console.log('etherBalance', etherBalance);
    }

    return (
        <div className="max-w-lg mx-auto rounded-lg shadow p-8 space-y-4 bg-secondary-light">
            <div className="flex items-center gap-3">
                <button onClick={() => changeScreen("home")}>
                    <MdArrowBack size={24} />
                </button>
                <p className="text-lg font-medium">Back</p>
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
                        <button
                            className="flex items-center gap-4 rounded bg-primary-dark text-white p-4 cursor-pointer w-full"
                            onClick = {handleConnectWallet}
                        >
                            <div className="img w-10">
                                <img src={binanceWallet} alt="" />
                            </div>
                            <p className="font-medium">
                                Binance Chain Wallet
                            </p>
                        </button>
                    </li>

                    <li className="">
                        <button
                            className="flex items-center gap-4 rounded bg-primary-dark text-white p-4 cursor-pointer w-full"
                            onClick = {handleConnectWallet}
                        >
                            <div className="img w-10">
                                <img src={metamask} alt="" />
                            </div>
                            <p className="font-medium">
                                Metamask
                            </p>
                        </button>
                    </li>

                    <li className="">
                        <button
                            className="flex items-center gap-4 rounded bg-primary-dark text-white p-4 cursor-pointer w-full"
                            onClick = {handleConnectWallet}
                        >
                            <div className="img w-10">
                                <img src={trustWallet} alt="" />
                            </div>
                            <p className="font-medium">
                                Trustwallet
                            </p>
                        </button>
                    </li>

                </ul>
            )}

            {!!switchBtn && (
                <ul className="space-y-2">
                    <li className="">
                        <button
                            className="flex items-center gap-4 rounded bg-primary-dark text-white p-4 cursor-pointer w-full"
                            onClick = {handleConnectWallet}
                        >
                            <div className="img w-10">
                                <img src={metamask} alt="" />
                            </div>
                            <p className="font-medium">
                                Metamask
                            </p>
                        </button>
                    </li>

                    <li className="">
                        <button
                            className="flex items-center gap-4 rounded bg-primary-dark text-white p-4 cursor-pointer w-full"
                            onClick = {handleConnectWallet}
                        >
                            <div className="img w-10">
                                <img src={trustWallet} alt="" />
                            </div>
                            <p className="font-medium">
                                TrustWallet
                            </p>
                        </button>
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
