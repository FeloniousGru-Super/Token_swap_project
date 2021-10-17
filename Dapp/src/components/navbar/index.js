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
                <div className="flex bg-white rounded shadow">
                    <button
                        className={`py-2 px-6 rounded`}
                    >
                        BSC Mainnet
                    </button>
                    <button
                        className={`py-2 px-6 rounded bg-red-500 text-white font-medium hover:bg-red-400`}
                        onClick={() => changeScreen("connect_wallet")}
                    >
                        Connect to a Wallet
                    </button>
                    
                </div>
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
