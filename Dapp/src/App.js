import ConversionCard from "./components/conversion_card";
import Navbar from "./components/navbar";
import Settings from "./components/settings_card";
import React, { useState } from "react";
import ConnectWallet from "./components/connect_wallet_card";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AddLiquidityForm from "./components/add_liq_form";
import ImportLiquidityForm from "./components/import_liq_form";
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
    const [customToleranceValue, setCustomToleranceValue] = useState('')
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

    return (
        <div className="App bg-blue-100 min-h-screen">
            <div className="container mx-auto">
                <Navbar changeScreen={changeScreen} />
                <Switch>
                    <Route path={"/add_liq"}>
                        <AddLiquidityForm />
                    </Route>
                    <Route path={"/import_liq"}>
                        <ImportLiquidityForm />
                    </Route>
                    <Route path="/">{component}</Route>
                </Switch>
            </div>
        </div>
    );
}

export default App;
