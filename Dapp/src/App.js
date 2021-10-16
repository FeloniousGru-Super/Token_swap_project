import ConversionCard from "./components/conversion_card";
import Navbar from "./components/navbar";
import SelectToken from "./components/select_token_card";
import Settings from "./components/settings_card";
import React, { useState } from "react";

function App() {
    //
    // conversion form state
    //

    const [fromInput, setFromInput] = useState(null);
    const [toInput, setToInput] = useState(null);

    //
    // end of conversion form state
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
            component = <Settings changeScreen={changeScreen} />;
            break;
        default:
            break;
    }

    return (
        <div className="App bg-blue-100 min-h-screen">
            <div className="container mx-auto">
                <Navbar changeScreen={changeScreen} />
                {component}
            </div>
        </div>
    );
}

export default App;
