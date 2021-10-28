import React from "react";
import { MdArrowBack, MdSearch } from "react-icons/md";
import sfmLogo from "../../assets/sfm.png";
import logo from "../../assets/logo.png"

const SelectToken = ({ onBack, onSelect }) => {
    const tokens_ = [
        {
            id: 1,
            title: "ETH",
            img: "https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg",
        },
        {
            id: 2,
            title: "WETH",
            img: "https://cdn.worldvectorlogo.com/logos/ethereum-eth.svg",
        },
        { id: 3, title: "LUNACHOW", img: logo },
    ];

    return (
        <div className="max-w-md mx-auto rounded-lg shadow p-8 space-y-4 bg-secondary-light">
            <div className="flex items-center gap-3">
                <button onClick={() => onBack()}>
                    <MdArrowBack size={24} />
                </button>
                <p className="text-lg font-medium">Select a token</p>
            </div>

            <div className="flex items-center gap-2 search relative p-2 border rounded-lg ">
                <MdSearch size={26} className="" />
                <input
                    type="text"
                    className="w-full text-lg focus:outline-none"
                    placeholder="Search name or paste address"
                    autoFocus="true"
                />
            </div>

            <ul>
                {tokens_.map((token, idx) => {
                    return (
                        <li
                            className="flex items-center gap-4 p-2 hover:bg-gray-200 mt-1 cursor-pointer rounded"
                            key={idx}
                            onClick={() => onSelect(token)}
                        >
                            <div className="w-8">
                                <img src={token.img} alt="WBNB logo" />
                            </div>
                            <p className="title">{token.title}</p>
                            <p className="value ml-auto"> - </p>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default SelectToken;
