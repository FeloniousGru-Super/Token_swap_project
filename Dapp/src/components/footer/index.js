import React from "react";
import logo from "../../assets/logo.png";
import facebook from "../../assets/facebook.png";
import twitter from "../../assets/twitter.png";
import instagram from "../../assets/instagram.png";
import reddit from "../../assets/reddit.png";
import github from "../../assets/github.png";
import telegram from "../../assets/telegram.png";
import coin from "./static/coin.png";

const Footer = () => {
    return (
        <div className="bg-secondary-light py-12">
            <div className="container mx-auto p-8 md:p-12 space-y-8">
                <div className="md:flex flex-wrap gap-16 justify-between space-y-8">
                    <div className="flex gap-6">
                        <div>
                            <img
                                src={coin}
                                alt=""
                                className="filter drop-shadow-2xl"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <img src={logo} alt="" className="w-8" />
                                <h2 className="text-lg uppercase text-primary font-bold">
                                    Lunachow
                                </h2>
                            </div>
                            <p className="w-80 text-gray-500">
                                LUNACHOW is a decentralized digital currency
                                that can be used as a medium of exchange or to
                                facilitate a trade. It is a border less
                                democratic form of digital money.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-medium">Company</h3>
                        <ul className="space-y-1">
                            <li>
                                <a href="#" className="text-gray-700">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700">
                                    Terms and Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-medium">Service</h3>
                        <ul className="space-y-1">
                            <li>
                                <a href="#" className="text-gray-700">
                                    Buy Crypto
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700">
                                    Buy NFT
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700">
                                    Donate
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="space-y-3">
                        <h3 className="font-medium">Support</h3>
                        <ul className="space-y-1">
                            <li>
                                <a href="#" className="text-gray-700">
                                    About Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700">
                                    Terms and Conditions
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-700">
                                    Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-0.5 bg-primary rounded-full"></div>

                <div className="flex flex-wrap items-center space-y-4 justify-center">
                    <p className="text-primary">
                        Copyright © 2021, LunaChow LLC | All Rights Reserved
                    </p>

                    <ul className="md:ml-auto flex gap-2">
                        <li>
                            <a href="@">
                                <img src={facebook} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="@">
                                <img src={telegram} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="@">
                                <img src={instagram} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="@">
                                <img src={github} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="@">
                                <img src={reddit} alt="" />
                            </a>
                        </li>
                        <li>
                            <a href="@">
                                <img src={twitter} alt="" />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
