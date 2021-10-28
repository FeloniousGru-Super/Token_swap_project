import React, { useState } from "react";

import FromInputField from "../conversion_card/FromInputField";
import ToInputField from "../conversion_card/ToInputField";
import SelectToken from "../select_token_card";
import { MdArrowBack } from "react-icons/md";
import {AiOutlinePlusCircle} from "react-icons/ai"
import { useHistory } from "react-router";

const AddLiquidityForm = ({
    changeScreen
}) => {
    

    // form state
    const [toInput, setToInput] = useState(null)
    const [fromInput, setFromInput] = useState(null)

    const [displayTokenSelect, setDisplayTokenSelect] = useState(false);
    const [seletecingTokenFor, setSeletecingTokenFor] = useState("from"); // either from or to

    const handleTokenSelect = (token) => {
        if (seletecingTokenFor === "from") {
            setFromInput(token);
        } else setToInput(token);

        setDisplayTokenSelect(false);
    };

    const history = useHistory()

    return (
        <>
            {displayTokenSelect === true ? (
                <SelectToken
                    onBack={() => setDisplayTokenSelect(false)}
                    onSelect={handleTokenSelect}
                />
            ) : (
                <div className="max-w-xl mx-auto rounded-lg p-8 space-y-4 bg-secondary-light">
                    <div className="flex items-center gap-3">
                        <button onClick={() => history.goBack()}>
                            <MdArrowBack size={24} />
                        </button>
                        <p className="text-lg font-medium">Add Liquidity</p>
                    </div>

                    <form action="">
                        <FromInputField
                            changeScreen={changeScreen}
                            onTokenChangeClick={() => {
                                setSeletecingTokenFor("from");
                                setDisplayTokenSelect(true);
                            }}
                            fromInput={fromInput}
                        />
                        <div className="flex justify-center mt-6 text-red-500">
                            <button type="button">
                                <AiOutlinePlusCircle size={48} />
                            </button>
                        </div>
                        <ToInputField
                            changeScreen={changeScreen}
                            onTokenChangeClick={() => {
                                setSeletecingTokenFor("to");
                                setDisplayTokenSelect(true);
                            }}
                            toInput={toInput}
                        />

                        <div className="text-center pt-6">
                            <button
                                type="submit"
                                value="Connect to a Wallet"
                                className="py-2 px-4 bg-red-500 text-white rounded-xl mt-2 shadow-md"
                            >
                                Connect to a Wallet
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
};

export default AddLiquidityForm;
