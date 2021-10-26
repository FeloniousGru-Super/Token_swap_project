import React from "react";
import { Switch, Route } from "react-router-dom";

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
