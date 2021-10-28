import React from "react";

const MainButton = ({ changeScreen, accountAddress, setAccountAddress }) => {
    return (
        <div className="my-16">
            <h2 className="text-center text-2xl font-bold p-2 mb-6 text-primary">Swap</h2>
            <div className="flex justify-center">
                <div className="flex bg-secondary text-white rounded-full overflow-hidden shadow">
                    <button className={`py-6 px-6 rounded font-medium`}>
                        BSC Smart Chain
                    </button>
                    <button
                        className={`py-3 px-6 rounded-full bg-primary font-medium hover:bg-red-400`}
                        onClick={() => changeScreen("connect_wallet")}
                    >
                        {console.log('accountAddress', accountAddress)}
                        { accountAddress == true ? ( <p>Connect to a Wallet</p> ) : String(accountAddress).substring(0, 7) + "..."  + String(accountAddress).substring(35) }
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MainButton;
