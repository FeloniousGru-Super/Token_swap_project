import React, { useState } from "react";

import { Route, Switch } from "react-router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Llc from "./components/llc";

const PrivacyPolicy = () => {
    return (
        <div className="min-h-screen overflow-hidden relative">
            <Navbar />
            <Llc />
            <Footer />
        </div>
    );
};

export default PrivacyPolicy;
