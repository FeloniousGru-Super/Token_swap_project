import React, { useState } from "react";
import AddLiquidityForm from "../../components/add_liq_form";
import ImportLiquidityForm from "../../components/import_liq_form";
import MainButton from "../../components/main_button";
import "../../App.css";
import ConversionCard from "../../components/conversion_card";
import Settings from "../../components/settings_card";
import ConnectWallet from "../../components/connect_wallet_card";
import Navbar from "../../components/navbar";
import { Route, Switch } from "react-router";

import bg_pattern_flip from "../../assets/bg_pattern_2.jpg";
import Footer from "../../components/footer";
import { useEthers, CHAIN_NAMES, useGasPrice } from "@usedapp/core";

const Swap = () => {
    //
    // conversion form state
    //

    const [fromInput, setFromInput] = useState(null);
    const [toInput, setToInput] = useState(null);

    //
    // end of conversion form state
    //
    const [selectedSpeedOption, setSelectedSpeedOption] = useState(0);
    const [selectedToleranceOption, setSelectedToleranceOption] = useState(0);
    const [customToleranceValue, setCustomToleranceValue] = useState("");
    //
    // settings screen state
    //
    const [accountAddress, setAccountAddress] = useState(true);
    //
    // end of settings screen state
    //
    // screen(pages) states and business logic
    const [currentScreen, setCurrentScreen] = useState("home");

    const changeScreen = (newScreen, inputField = null) => {
        setCurrentScreen(newScreen);

        if (inputField !== null) {
        }
    };

    const { chainId } = useEthers();

    let component = null;
    switch (currentScreen) {
        case "home":
            component = (
                <ConversionCard
                    changeScreen={changeScreen}
                    setFromInput={setFromInput}
                    setToInput={setToInput}
                    fromInput={fromInput}
                    toInput={toInput}
                    accountAddress={accountAddress}
                />
            );
            break;
        case "settings":
            component = (
                <Settings
                    changeScreen={changeScreen}
                    selectedSpeedOption={selectedSpeedOption}
                    selectedToleranceOption={selectedToleranceOption}
                    customToleranceValue={customToleranceValue}
                    setSelectedSpeedOption={setSelectedSpeedOption}
                    setSelectedToleranceOption={setSelectedToleranceOption}
                    setCustomToleranceValue={setCustomToleranceValue}
                    useGasPrice={useGasPrice}
                />
            );
            break;
        case "connect_wallet":
            component = <ConnectWallet 
                            changeScreen={changeScreen} 
                            accountAddress={accountAddress} 
                            setAccountAddress={setAccountAddress}
                        />;
            break;
        default:
            break;
    }

    return (
        <div className="min-h-screen">
            <div className="">
                <Navbar changeScreen={changeScreen} />
                <div className="relative" style={{ zIndex: -99 }}>
                    <div className="pattern_bg absolute -top-36 -left-20">
                        <img src={bg_pattern_flip} alt="" className="w-10/12" />
                    </div>
                </div>

                <MainButton 
                    changeScreen={changeScreen}
                    accountAddress={accountAddress} 
                    setAccountAddress={setAccountAddress}
                    chain={CHAIN_NAMES[chainId]}
                />
                <Switch>
                    <Route path={"/swap/add_liq"}>
                        <AddLiquidityForm />
                    </Route>
                    <Route path={"/swap/import_liq"}>
                        <ImportLiquidityForm />
                    </Route>
                    <Route path="/swap">{component}</Route>
                </Switch>

                <div
                    className="relative flex justify-end"
                    style={{ height: "300px" }}
                >
                    <img
                        className="absolute right-0 -top-10"
                        src={bg_pattern_flip}
                        alt=""
                        style={{
                            zIndex: -99,
                            height: "450px",
                            transform: "scale(-1, -1)",
                        }}
                    />
                </div>

                <Footer />
            </div>
        </div>
    );
};

export default Swap;
