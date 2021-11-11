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
                    links={[<MyNavLink>About us</MyNavLink>, <MyNavLink>How to buy</MyNavLink>]}
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
                        <MyNavLink>Swap</MyNavLink>,
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
                        <MyNavLink>FAQ</MyNavLink>,
                        <MyNavLink>Contact Us</MyNavLink>,
                    ]}
                />
            </li>
        </ul>
    );
};

export default NavbarLinks;
