import React, { useState } from "react";
import logo from "../../assets/logo.png";
import pattern_bg_flip from "../../assets/bg_pattern_1_flip.png";
import { CgDetailsMore } from "react-icons/cg";
import NavbarLinks from "./links";

const Navbar = ({ changeScreen, homepage }) => {
    const [displayLinks, setDisplayLinks] = useState(false);

    return (
        <div className="sticky top-0 z-10 shadow">
            <div
                className="bg-secondary-light p-2 bg-center bg-cover relative"
                style={{ backgroundImage: `url(${pattern_bg_flip})` }}
            >
                <nav className="max-w-screen-lgxl container mx-auto flex items-center p-4">
                    <div className="logo mr-8 flex items-center gap-2">
                        <img src={logo} alt="Site Logo" className="w-12" />
                        <span className="font-bold uppercase text-primary text-xl">
                            Lunachow
                        </span>
                    </div>

                    <div className="ml-auto links hidden xl:block text-primary-darker">
                        <NavbarLinks homepage={homepage} />
                    </div>

                    {/* mobile */}
                    <div className="ml-auto xl:hidden">
                        <button
                            class="text-primary-muted bg-primary-darker p-2 rounded shadow-none"
                            onClick={() => setDisplayLinks(!displayLinks)}
                        >
                            <CgDetailsMore size={32} />
                        </button>
                    </div>
                </nav>
                {displayLinks && (
                    <div className="relative container mx-auto xl:hidden z-10">
                        <div className="absolute w-full top-2 bg-primary-darker py-3 rounded-lg text-white rounded-br-3xl rounded-bl-3xl shadow-sm">
                            <NavbarLinks />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
