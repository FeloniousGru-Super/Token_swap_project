import React from "react";
import logo from "../../assets/logo.png";

const Navbar = ({ changeScreen }) => {
    return (
        <nav className="flex items-center p-4">
            <div className="logo w-12 mr-8">
                <img src={logo} alt="Site Logo" />
            </div>            
        </nav>
    );
};

export default Navbar;
