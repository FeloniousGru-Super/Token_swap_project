<<<<<<< HEAD
import React from "react";
import { Switch, Route } from "react-router-dom";
=======
import ConversionCard from "./components/conversion_card";
import Navbar from "./components/navbar";
import Settings from "./components/settings_card";
import React, { useState } from "react";
import ConnectWallet from "./components/connect_wallet_card";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddLiquidityForm from "./components/add_liq_form";
import ImportLiquidityForm from "./components/import_liq_form";
import MainButton from "./components/main_button";
function App() {
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
    const [customToleranceValue, setCustomToleranceValue] = useState('');
    //
    // settings screen state
    //

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
                />
            );
            break;
        case "connect_wallet":
            component = <ConnectWallet changeScreen={changeScreen} />;
            break;
        default:
            break;
    }
>>>>>>> 67d6ad23d2876c56c54e540935df660622f926fd

import "./App.css";
import Swap from "./pages/swap";
function App() {
    return (
        <Switch>
            <Route path="/swap">
                <Swap />
            </Route>
            
            <Route path="/">Homepage</Route>
        </Switch>
    );
}

export default App;
