import { Route, Switch } from "react-router";
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
