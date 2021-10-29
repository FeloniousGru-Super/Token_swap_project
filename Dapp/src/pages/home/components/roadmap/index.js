import React from "react";
import dog_on_rocekt from "../../static/dog_on_rocket.png";
import roadmap from "../../static/roadmap.png"
import ListItem from "./list_item";

const Roadmap = () => {
    return (
        <div className="min-h-screen">
            <div className="container mx-auto space-y-20">
                <div className=" space-y-8">
                    <h2 className="text-center text-4xl font-bold text-primary">Roadmap</h2>
                    <p className="text-center max-w-md mx-auto text-lg text-gray-600">
                        The Revolutionary LunaChow Burn Structure at launch –
                        Burn now, Not Later!
                    </p>

                    <div className="max-w-md mx-auto">
                        <img src={dog_on_rocekt} alt="" />
                    </div>

                    <div className="flex justify-center">
                        <img src={roadmap} alt="" />
                    </div>

                    <div className="flex justify-center gap-44 relative -top-20">
                        <div className="relative -top-32">
                            <h3 className="text-lg font-medium">Phase 1</h3>
                            <ul className="text-gray-600">
                                <ListItem>Token Launch</ListItem>
                                <ListItem>Token Launch</ListItem>
                                <ListItem>Token Launch</ListItem>
                                <ListItem>Token Launch</ListItem>
                            </ul>
                        </div>

                        <div className="">
                            <h3 className="text-lg font-medium">Phase 2</h3>
                            <ul className="text-gray-600">
                                <ListItem>Token Launch</ListItem>
                                <ListItem>Token Launch</ListItem>
                                <ListItem>Token Launch</ListItem>
                                <ListItem>Token Launch</ListItem>
                            </ul>
                        </div>

                        <div className="relative -top-32">
                            <h3 className="text-lg font-medium">Phase 3</h3>
                            <ul className="text-gray-600">
                                <ListItem>Token Launch</ListItem>
                                <ListItem>Token Launch</ListItem>
                                <ListItem>Token Launch</ListItem>
                                <ListItem>Token Launch</ListItem>
                            </ul>
                        </div>

                        <div className="">
                            <h3 className="text-lg font-medium">Phase 4</h3>
                            <ul className="text-gray-600">
                                <ListItem>Token Launch</ListItem>
                                <ListItem>Token Launch</ListItem>
                                <ListItem>Token Launch</ListItem>
                                <ListItem>Token Launch</ListItem>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Roadmap;
