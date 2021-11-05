import { Route, Switch } from "react-router";
import "./App.css";
import Home from "./pages/home";
import HowToBuy from "./pages/how_to_buy";
import Swap from "./pages/swap";
function App() {
    return (
        <Switch>
            <Route path="/swap">
                <Swap />
            </Route>

            <Route path="/how-to-buy">
                <HowToBuy />
            </Route>
            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export default App;
