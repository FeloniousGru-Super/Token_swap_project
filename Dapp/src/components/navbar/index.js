import React from "react";
import logo from "../../assets/logo.png";
import pattern_bg_flip from "../../assets/bg_pattern_1_flip.png";

const Navbar = ({ changeScreen }) => {
    return (
        <div className="sticky top-0 z-10">
            <div
                className="bg-secondary-light p-2 bg-center bg-cover relative"
                style={{ backgroundImage: `url(${pattern_bg_flip})` }}
            >
                <nav className="container mx-auto flex items-center p-4">
                    <div className="logo mr-8 flex items-center gap-2">
                        <img src={logo} alt="Site Logo" className="w-12" />
                        <span className="font-bold uppercase text-primary text-xl">
                            Lunachow
                        </span>
                    </div>

                    <div className="ml-auto links">
                        <ul className="flex">
                            <li>
                                <a
                                    href="#"
                                    className="font-medium text-lg text-lg text-primary py-2 px-4"
                                >
                                    Home
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="font-medium text-lg text-primary py-2 px-4"
                                >
                                    About
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="font-medium text-lg text-primary py-2 px-4"
                                >
                                    How to Buy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="font-medium text-lg text-primary py-2 px-4"
                                >
                                    Marketplace
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="font-medium text-lg text-primary py-2 px-4"
                                >
                                    Charity
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="font-medium text-lg text-primary py-2 px-4"
                                >
                                    Roadmap
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="font-medium text-lg text-primary py-2 px-4"
                                >
                                    Contact
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="font-medium text-lg text-primary py-2 px-4"
                                >
                                    More
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;
