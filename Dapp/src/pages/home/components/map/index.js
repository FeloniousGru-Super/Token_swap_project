import React from "react";
import map from "./static/map.png";

const Map = () => {
    return (
        <div
            className="min-h-screen container mx-auto flex items-center justify-around"
            style={{ backgroundImage: `url(${map})`, backgroundSize: "cover" }}
        >
            
            <div>
                <h4 className="text-2xl font-medium">Value</h4>
                <p className="text-center">0.000002240</p>
            </div>

            <div>
                <h4 className="text-2xl font-medium">Holder</h4>
                <p className="text-center">2,682,322</p>
            </div>

            <div>
                <h4 className="text-2xl font-medium">Holder</h4>
                <p className="text-center">2,682,322</p>
            </div>
        </div>
    );
};

export default Map;
