import React, { useState } from "react";

import { Route, Switch } from "react-router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Body from "./components/body";

const Disclainmer = () => {
    return (
        <div className="min-h-screen overflow-hidden relative">
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
};

export default Disclainmer;
