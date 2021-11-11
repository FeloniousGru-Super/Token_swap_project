import React from "react";
import map from "./static/map.png";
import background from "./static/background.png";

const Map = () => {
    return (
        <div
            className=" max-w-screen-lgxl min-h-screen container mx-auto flex items-center justify-around"
            style={{ backgroundImage: `url(${map})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
        >
            <div
                className=" h-40 w-40 bg-contain bg-no-repeat flex justify-center items-center "
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "contain",
                }}
            >
                <div className="relative -top-1 -left-1 text-center">
                    <h4 className="text-2xl font-medium">Value</h4>
                    <p className="text-center">0.000002240</p>
                </div>
            </div>

            <div
                className=" h-40 w-40 bg-contain bg-no-repeat flex justify-center items-center "
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "contain",
                }}
            >
                <div className="relative -top-1 -left-1 text-center">
                    <h4 className="text-2xl font-medium">Holder</h4>
                    <p className="text-center">2,682,322</p>
                </div>
            </div>

            <div
                className=" h-40 w-40 bg-contain bg-no-repeat flex justify-center items-center "
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "contain",
                }}
            >
                <div className="relative -top-1 -left-1 text-center">
                    <h4 className="text-2xl font-medium">Holder</h4>
                    <p className="text-center">5,682,322</p>
                </div>
            </div>
        </div>
    );
};

export default Map;
