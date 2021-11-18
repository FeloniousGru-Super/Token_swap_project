import React from "react";
import map from "./static/map.png";
import background from "./static/background.png";

const Map = () => {
    return (
        <div
            className="max-w-screen-lgxl container mx-auto flex flex-wrap gap-12 items-center justify-center py-72"
            style={{ backgroundImage: `url(${map})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
        >
            <div
                className=" h-40 w-40 bg-contain bg-no-repeat flex justify-center items-center px-8 "
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "contain",
                }}
            >
                <div className="relative -top-1 -left-1 text-center">
                    <h4 className="text-lg font-medium">Value</h4>
                    <p className="text-center">0.000002240</p>
                </div>
            </div>

            <div
                className=" h-40 w-40 bg-contain bg-no-repeat flex justify-center items-center px-8 "
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "contain",
                }}
            >
                <div className="relative -top-1 -left-1 text-center">
                    <h4 className="text-lg font-medium">Holder</h4>
                    <p className="text-center">2,682,322</p>
                </div>
            </div>

            <div
                className=" h-40 w-40 bg-contain bg-no-repeat flex justify-center items-center px-8 "
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "contain",
                }}
            >
                <div className="relative -top-1 -left-1 text-center">
                    <h4 className="text-lg font-medium">Burned</h4>
                    <p className="text-center">426.32945 TR</p>
                </div>
            </div>

            <div
                className=" h-40 w-40 bg-contain bg-no-repeat flex justify-center items-center px-8 "
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "contain",
                }}
            >
                <div className="relative -top-1 -left-1 text-center">
                    <h4 className="text-lg font-medium">Circulating</h4>
                    <p className="text-center">573.67055 TR</p>
                </div>
            </div>

            <div
                className=" h-40 w-40 bg-contain bg-no-repeat flex justify-center items-center px-8"
                style={{
                    backgroundImage: `url(${background})`,
                    backgroundSize: "contain",
                }}
            >
                <div className="relative -top-1 -left-1 text-center">
                    <h4 className="text-lg font-medium">Market Cap</h4>
                    <p className="text-center">$1.28502 B</p>
                </div>
            </div>
        </div>
    );
};

export default Map;
