import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const MyNavLinkDropdown = ({ title, links }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <div onMouseEnter={() => setDropdown(true)} onMouseLeave={() => setDropdown(false)}>
            <button className="font-medium text-lg px-4 flex items-center justify-center w-full gap-2">
                <span>{title}</span>
                <span className="">
                    <BiChevronDown />
                </span>
            </button>
            {dropdown && (
                <div className="relative">
                    <div
                        className="static xl:absolute pt-2 right-0 rounded"
                        style={{ minWidth: "180px" }}>
                        <ul className="xl:bg-primary-muted p-1 shadow rounded py-2 space-y-2">
                            {links.map((link) => (
                                <li className="hover:bg-primary-dark2 hover:text-white p-2 rounded">
                                    {link}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MyNavLinkDropdown;
