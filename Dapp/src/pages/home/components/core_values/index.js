import React from "react";
import handshake from "./static/hand-shake.png";
import together from "./static/together.png";
import transparency from "./static/transparency.png";

const CoreValues = () => {
    return (
        <div className="min-h-screen overflow-hidden bg-secondary-light relative">
            <div className="py-32 space-y-20 max-w-screen-lgxl container mx-auto px-8">
                <div className="text-center space-y-4">
                    <h2 className="font-bold text-4xl text-primary">
                        Core Values
                    </h2>
                    <p className="text-center max-w-md mx-auto text-gray-600">
                        The Revolutionary LunaChow Burn Structure at launch –
                        Burn now, Not Later!
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-8 space-y-4">
                    <div className="md:w-1/4 bg-primary rounded-3xl px-4 pb-12 text-white text-center">
                        <div className="w-24 h-24 mx-auto rounded-full border-2 border-primary relative -top-10 bg-primary">
                            <div className="h-full rounded-full border-secondary-light border-4 flex items-center justify-center">
                                <img
                                    src={transparency}
                                    alt=""
                                    className="w-12"
                                />
                            </div>
                        </div>

                        <h3 className="text-lg font-medium">Transparency</h3>
                        <p>
                            The LunaChow team remains honest and forthright with
                            the community always.
                        </p>
                    </div>

                    <div className="bg-primary rounded-3xl px-4 pb-12 text-white text-center md:w-1/4">
                        <div className="w-24 h-24 mx-auto rounded-full border-2 border-primary relative -top-10 bg-primary">
                            <div className="h-full rounded-full border-secondary-light border-4 flex items-center justify-center">
                                <img src={handshake} alt="" className="w-12" />
                            </div>
                        </div>

                        <h3 className="text-lg font-medium">Commitment</h3>
                        <p>
                            The LunaChow ecosystem and community will stand the
                            test of the time period.
                        </p>
                    </div>

                    <div className="bg-primary rounded-3xl px-4 pb-12 text-white text-center md:w-1/4">
                        <div className="w-24 h-24 mx-auto rounded-full border-2 border-primary relative -top-10 bg-primary">
                            <div className="h-full rounded-full border-secondary-light border-4 flex items-center justify-center">
                                <img src={together} alt="" className="w-12" />
                            </div>
                        </div>

                        <h3 className="text-lg font-medium">Collaboration</h3>
                        <p>
                            The LunaChow community works tirelessly to build a
                            brighter future together.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreValues;
