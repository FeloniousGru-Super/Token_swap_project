import React from "react";
import MyNavLink from "./nav_link";

const NavbarLinks = ({ homepage = false }) => {
    return (
        <ul className={`text-center xl:flex space-y-4 xl:space-y-0`}>
            <li>
                <MyNavLink homepage={homepage} to={"section1"}>
                    Home
                </MyNavLink>
            </li>

            <li>
                <MyNavLink homepage={homepage} to={"about_section"}>
                    About
                </MyNavLink>
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
                <MyNavLink homepage={homepage} to={"roadmap_section"}>
                    Roadmap
                </MyNavLink>
            </li>

            <li>
                <MyNavLink homepage={homepage} to={"contact_section"}>
                    Contact us
                </MyNavLink>
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
