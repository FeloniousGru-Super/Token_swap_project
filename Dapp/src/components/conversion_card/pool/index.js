import React from "react";

const Pool = () => {
    return (
        <div className="space-y-6">
            <a href="/swap/add_liq">
                <button className="block w-full p-4 text-center shadow bg-gray-200 rounded text-red-500 font-medium">
                    Add Liquidity
                </button>
            </a>

            <div className="space-y-4">
                <p className="text-red-500">Your liquidity</p>
                <div className="px-4 py-12 text-center rounded shadow bg-gray-200">
                    <p>Connect a wallet to view your liquidity</p>
                </div>
            </div>

            <p className="text-center text-sm font-medium underline">
                Don't See a pool you joined?{" "}
                <a href="/swap/import_liq" className="text-red-500">
                    Import it
                </a>
            </p>
        </div>
    );
};

export default Pool;
