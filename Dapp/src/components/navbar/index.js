import React from "react";
import logo from "../../assets/logo.png";
import pattern_bg_flip from "../../assets/bg_pattern_1_flip.png";

import { Link } from "react-scroll";

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
                                <Link
                                    to={"section1"}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                >
                                    <a
                                        href="#section_1"
                                        className="font-medium text-lg text-primary py-2 px-4"
                                    >
                                        Home
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={"about_section"}
                                    spy={true}
                                    smooth={true}
                                    offset={-90}
                                    
                                >
                                    <a
                                        href="#about_section"
                                        className="font-medium text-lg text-primary py-2 px-4"
                                    >
                                        About
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <a
                                    href="#how_section"
                                    className="font-medium text-lg text-primary py-2 px-4"
                                >
                                    How to Buy
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#marketplace_section"
                                    className="font-medium text-lg text-primary py-2 px-4"
                                >
                                    Marketplace
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#charity_section"
                                    className="font-medium text-lg text-primary py-2 px-4"
                                >
                                    Charity
                                </a>
                            </li>

                            <li>
                                <Link
                                    to={"roadmap_section"}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    
                                >
                                    <a
                                        href="#roadmap_section"
                                        className="font-medium text-lg text-primary py-2 px-4"
                                    >
                                        Roadmap
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to={"contact_section"}
                                    spy={true}
                                    smooth={true}
                                    offset={-100}
                                    
                                >
                                    <a
                                        href="#contact_section"
                                        className="font-medium text-lg text-primary py-2 px-4"
                                    >
                                        Contact
                                    </a>
                                </Link>
                            </li>

                            <li>
                                <a
                                    href="#more_section"
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
