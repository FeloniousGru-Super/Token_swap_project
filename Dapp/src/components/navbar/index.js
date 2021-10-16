import React from "react";
import Switch from "../switch";
import { HiMenu } from "react-icons/hi";
import logo from "../../assets/logo.png";

const Navbar = ({ changeScreen }) => {
    return (
        <nav className="flex items-center p-4">
            <div className="logo w-12">
                <img src={logo} alt="Site Logo" />
            </div>
            <div className="switch ml-auto">
                <Switch
                    states={["BSC Mainnet", "Connect to a Wallet"]}
                    onChange={""}
                    defaultIdx={1}
                />
            </div>
            <div className="hamburger p-1 bg-white text-red-500 rounded shadow ml-4">
                <button onClick={() => changeScreen("settings")}>
                    <HiMenu size={24} />
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
