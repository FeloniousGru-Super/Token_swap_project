import React, { useState } from "react";
import ada from "./static/ada.png";
import { MdSearch } from "react-icons/md";
import Switch from "react-switch";

const MakeDonation = () => {
    // data
    const __currencies = [
        { id: 1, image: ada, text: "ADA" },
        { id: 2, image: require("./static/luchow.png").default, text: "LUCHOW" },
        { id: 3, image: require("./static/aave.png").default, text: "AAVE" },
        { id: 4, image: require("./static/btc.png").default, text: "BTC" },
        { id: 5, image: require("./static/busd.png").default, text: "BUSD" },
        { id: 6, image: require("./static/bnb.png").default, text: "BNB" },
        { id: 7, image: require("./static/dodge.png").default, text: "DODGE" },
        { id: 8, image: require("./static/eth.png").default, text: "ETH" },
        { id: 9, image: require("./static/shib.png").default, text: "SHIB" },
    ];

    const [currencies, setCurrencies] = useState(__currencies);

    // values to sumbit
    const [currencySelected, setCurrencySelected] = useState(null);
    const [switchState, setSwitchState] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");

    const onSearchQueryChange = (e) => {
        const query = e.target.value;
        setSearchQuery(e.target.value);

        if (query === "") {
            setCurrencies(__currencies);
        } else {
            console.log("Filtering");
            const filteredCurrencies = currencySearch(query);
            setCurrencies(filteredCurrencies);
            console.log(filteredCurrencies);
        }
    };

    const currencySearch = (query) => {
        return __currencies.filter((currency) => {
            return currency.text.toLowerCase().match(new RegExp(query, "g")) || false;
        });
    };

    return (
        <div className="max-w-md mx-auto h-full w-full bg-primary-muted conversion_card_shadow rounded-3xl px-6 py-12 space-y-4">
            {/* search */}
            <div>
                <input
                    type="text"
                    placeholder="Search"
                    className="block w-full p-2 px-6 rounded-full placeholder-black"
                    value={searchQuery}
                    onChange={onSearchQueryChange}
                />
                <div className="relative">
                    <div className="absolute right-3 -top-7">
                        <MdSearch size={16} />
                    </div>
                </div>
            </div>

            {/* select currency */}
            <div className="space-y-3">
                <p className="text-sm text-black px-2">Select currency</p>
                <div className="rounded-xl bg-white p-4 py-6 max-h-44 overflow-y-scroll">
                    <div className="flex flex-wrap justify-start gap-2">
                        {currencies.map((currency) => (
                            <button
                                key={currency.id}
                                className={`border-2 rounded-full p-2 px-4 flex items-center gap-1 ${
                                    currencySelected === currency.id
                                        ? "border-red-500"
                                        : "border-black"
                                }`}
                                onClick={() => setCurrencySelected(currency.id)}>
                                <img src={currency.image} alt="" className="w-5" />
                                <span className="text-sm">{currency.text}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <form action="" className="space-y-4">
                {/* amount */}
                <div className="space-y-3">
                    <div className="text-sm px-3">
                        <p>ADA amount</p>
                        <p>Minimum: 7.424003 ADA</p>
                    </div>
                    <input
                        type="text"
                        placeholder="100 ADA"
                        className="block w-full p-2 px-6 rounded-full"
                        required="required"
                    />
                </div>

                <div className="flex items-center gap-2">
                    <span>Crypto</span>
                    <Switch
                        checked={switchState}
                        onChange={() => setSwitchState((switchState) => !switchState)}
                        checkedIcon={false}
                        uncheckedIcon={false}
                        height={15}
                        width={46}
                        handleDiameter={25}
                        onColor="#E17C5D"
                        offColor="#EDCFC6"
                        onHandleColor="#741F04"
                        offHandleColor="#E17C5D"
                    />

                    <span>USD</span>
                </div>

                {/* donate */}
                <button className="block w-full rounded-full p-3 text-center text-lg text-white bg-red-50 bg-gradient-to-b from-yellow-500 to-yellow-600">
                    Donate
                </button>
            </form>
        </div>
    );
};

export default MakeDonation;
