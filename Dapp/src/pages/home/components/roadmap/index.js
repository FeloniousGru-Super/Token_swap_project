import React from "react";
import dog_on_rocekt from "../../static/dog_on_rocket.png";
import roadmap from "../../static/roadmap.png"
import ListItem from "./list_item";

const Roadmap = () => {
    return (
        <div className="min-h-screen" id="roadmap_section">
            <div className="px-8 container mx-auto space-y-20">
                <div className=" space-y-8">
                    <h2 className="text-center text-4xl font-bold text-primary">Roadmap</h2>
                    <p className="text-center max-w-md mx-auto text-lg text-gray-600">
                        The Revolutionary LunaChow Burn Structure at launch –
                        Burn now, Not Later!
                    </p>

                    <div className="max-w-md mx-auto">
                        <img src={dog_on_rocekt} alt="" />
                    </div>

                    <div className="hidden md:flex justify-center">
                        <img src={roadmap} alt="" className="w-full object-cover" />
                    </div>

                    <div className="p-8 space-y-4 md:p-0 md:space-y-0 md:flex md:justify-center lg:gap-44 relative lg:-top-20">
                        <div className="md:w-1/4 relative md:-top-32">
                            <h3 className="text-lg font-medium ">Phase 1</h3>
                            <ul className="text-gray-600">
                                <ListItem checked={true}>Token Launch</ListItem>
                                <ListItem checked={true}>Whitepaper design</ListItem>
                                <ListItem checked={true}>Website design</ListItem>
                                <ListItem checked={true}>Burn Event - 99.9% token burned</ListItem>
                            </ul>
                        </div>

                        <div className="md:w-1/4 ">
                            <h3 className="text-lg font-medium">Phase 2</h3>
                            <ul className="text-gray-600">
                                <ListItem checked={true}>List on CoinMarketCap</ListItem>
                                <ListItem checked={true}>List on CoinGecko</ListItem>
                                <ListItem checked={true}>Social Media Marketing</ListItem>
                                <ListItem checked={true}>Charity Drive</ListItem>
                            </ul>
                        </div>

                        <div className="md:w-1/4 relative md:-top-32">
                            <h3 className="text-lg font-medium">Phase 3</h3>
                            <ul className="text-gray-600">
                                <ListItem>Third Party Auditing of Contract</ListItem>
                                <ListItem>Website Redesign</ListItem>
                                <ListItem>Marketplace NFT & GIFT</ListItem>
                                <ListItem>Website Redesign</ListItem>
                            </ul>
                        </div>

                        <div className="md:w-1/4 ">
                            <h3 className="text-lg font-medium">Phase 4</h3>
                            <ul className="text-gray-600">
                                <ListItem>Exchange App Development - Stage 1</ListItem>
                                <ListItem>Global multimedia marketing push</ListItem>
                                <ListItem>Partnership with Payment System Providers - CoinPayments etc</ListItem>
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
