import React, { useState } from "react";

import { Route, Switch } from "react-router";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import About from "./components/about";
import Community from "./components/community";
import Core from "./components/core_value";

const AboutUs = () => {
    return (
        <div className="min-h-screen overflow-hidden relative">
            <Navbar />
            {/* about us */}
            <About />
            {/* core value */}
            <Core />
            {/* community */}
            <Community />
            <Footer />
        </div>
    );
};

export default AboutUs;
