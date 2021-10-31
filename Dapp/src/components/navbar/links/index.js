import React from "react";
import { Link } from "react-scroll";

const NavbarLinks = () => {
    return (
        <ul className={`text-center xl:flex space-y-4 xl:space-y-0`}>
            <li>
                <Link to={"section1"} spy={true} smooth={true} offset={-70}>
                    <a
                        href="#section_1"
                        className="font-medium text-lg  py-2 px-4"
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
                        className="font-medium text-lg  py-2 px-4"
                    >
                        About
                    </a>
                </Link>
            </li>

            <li>
                <a
                    href="#how_section"
                    className="font-medium text-lg  py-2 px-4"
                >
                    How to Buy
                </a>
            </li>

            <li>
                <a
                    href="#marketplace_section"
                    className="font-medium text-lg  py-2 px-4"
                >
                    Marketplace
                </a>
            </li>

            <li>
                <a
                    href="#charity_section"
                    className="font-medium text-lg  py-2 px-4"
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
                        className="font-medium text-lg  py-2 px-4"
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
                        className="font-medium text-lg  py-2 px-4"
                    >
                        Contact
                    </a>
                </Link>
            </li>

            <li>
                <a
                    href="#more_section"
                    className="font-medium text-lg  py-2 px-4"
                >
                    More
                </a>
            </li>
        </ul>
    );
};

export default NavbarLinks;
