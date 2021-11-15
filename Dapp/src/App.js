import { Route, Switch } from "react-router";
import "./App.css";
import Charity from "./pages/charity";
import Home from "./pages/home";
import HowToBuy from "./pages/how_to_buy";
import Swap from "./pages/swap";
import AboutUs from "./pages/about_us";
function App() {
    return (
        <Switch>
            <Route path="/about-us">
                <AboutUs />
            </Route>

            <Route path="/swap">
                <Swap />
            </Route>

            <Route path="/how-to-buy">
                <HowToBuy />
            </Route>

            <Route path="/charity">
                <Charity />
            </Route>

            <Route path="/">
                <Home />
            </Route>
        </Switch>
    );
}

export default App;
