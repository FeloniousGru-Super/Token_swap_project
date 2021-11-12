import React from "react";
import { Link } from "react-scroll";

const MyNavLink = ({ homepage = false, to = "", children }) => {
    return (
        <>
            {homepage ? (
                <Link to={to} spy={true} smooth={true} offset={-100}>
                    <a
                        href={`/#${to}`}
                        className="font-medium text-lg  py-2 px-4"
                    >
                        {children}
                    </a>
                </Link>
            ) : (
                <a href={`/#${to}`} className="font-medium text-lg  py-2 px-4">
                    {children}
                </a>
            )}
        </>
    );
};

export default MyNavLink;
