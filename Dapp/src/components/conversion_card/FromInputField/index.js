import React from 'react'
import { BsChevronDown } from "react-icons/bs";

const From = ({onTokenChangeClick, fromInput}) => {
    return (
        <div>
            <label htmlFor="" className="text-sm my-2 block text-red-500">
                    From
                </label>

                <div className="p-2 border rounded flex items-center gap-4">
                   
                <div className="hover:bg-gray-300 p-2 rounded cursor-pointer flex items-center gap-2" onClick={onTokenChangeClick}>
                        <div className="logo w-6">
                            <img
                                src="https://cryptologos.cc/logos/binance-coin-bnb-logo.png"
                                alt=""
                            />
                        </div>
                    <p className="title">{`${fromInput !== null ? fromInput : 'Select a Token'}` }</p>
                        <BsChevronDown />
                </div>
                
                    <input
                        type="number"
                        placeholder="0.0"
                        className="flex-grow p-2"
                    />
                </div>
        </div>
    )
}

export default From
