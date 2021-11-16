import React from "react";
import MyNavLink from "./nav_link";
import MyNavLinkDropdown from "./nav_link_dropdown";

const NavbarLinks = ({ homepage = false }) => {
    return (
        <ul className={`text-center xl:flex space-y-4 xl:space-y-0`}>
            <li>
                <MyNavLink homepage={homepage} to={"section1"}>
                    Home
                </MyNavLink>
            </li>

            <li>
                <MyNavLinkDropdown
                    title="About"
                    links={[<a href="/about-us" className="text-lg md:text-lg font-medium ">About us</a>,
                    <a href="/how-to-buy" className="text-lg md:text-lg font-medium ">How to buy</a>]}
                />
            </li>

            <li>
                <MyNavLinkDropdown
                    title="Earn"
                    links={[<MyNavLink>Stake</MyNavLink>, <MyNavLink>Farm</MyNavLink>]}
                />
            </li>

            <li>
                <MyNavLinkDropdown
                    title="Win"
                    links={[<MyNavLink>Lottery</MyNavLink>, <MyNavLink>Prediction</MyNavLink>]}
                />
            </li>

            <li>
                <MyNavLinkDropdown
                    title="Marketplace"
                    links={[
                        <MyNavLink>NFT</MyNavLink>,
                        <MyNavLink>Merch</MyNavLink>,
                        <a href="/swap" className="text-lg md:text-lg font-medium">Swap</a>,
                    ]}
                />
            </li>

            <li>
                <a href="/charity" className="font-medium text-lg  py-2 px-4">
                    Charity
                </a>
            </li>

            <li>
                <MyNavLink homepage={homepage} to={"roadmap_section"}>
                    Roadmap
                </MyNavLink>
            </li>

            <li>
                <MyNavLinkDropdown
                    title="More"
                    links={[
                        <MyNavLink>Blog</MyNavLink>,
                        <MyNavLink homepage={homepage} to={"faq_section"}>FAQ</MyNavLink>,
                        <MyNavLink homepage={homepage} to={"contact_section"}>Contact Us</MyNavLink>,
                    ]}
                />
            </li>
        </ul>
    );
};

export default NavbarLinks;
