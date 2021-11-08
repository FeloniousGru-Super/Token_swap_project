import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import DonationItem from "./item";

import people from "./static/people.png";
import MakeDonation from "./make_donation";

const Charity = () => {
    return (
        <div>
            <Navbar />
            {/* Charity */}
            <div className="py-16">
                <div className="container max-w-screen-lgxl mx-auto space-y-24">
                    <div className="space-y-6">
                        <div className="text-center space-y-2">
                            <h2 className="text-5xl text-primary font-medium">Charity</h2>
                            <p className="max-w-lg m-auto text-gray-600 text-xl">
                                Linked to positive social impact
                            </p>
                        </div>

                        <div className="rounded-8xl bg-primary-dark2 flex justify-around gap-4 p-12">
                            <div className="w-1/2 space-y-6">
                                <img src={people} alt="" />
                                <div className="space-y-2 text-white">
                                    <h2 className="text-primary-darker font-medium text-lg">
                                        Join the cause
                                    </h2>
                                    <p>Total charity Donations</p>
                                    <p className="text-4xl font-medium">$349,000,000</p>
                                    <p>
                                        PawsWithCause plus FurKids work with 45 different shelters
                                        in the USA! We have already donated $95,000+ with much more
                                        to come!
                                    </p>
                                    <h4 className="text-primary-darker font-medium text-lg">
                                        Donate to our Charity Wallet using NowPayments
                                    </h4>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <MakeDonation />
                            </div>
                        </div>
                    </div>

                    {/* upcoming donations */}
                    <div>
                        <div className="text-center space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-5xl text-primary font-medium">
                                    Upcoming Donations
                                </h2>
                                <p className="max-w-lg m-auto text-gray-600 text-xl">
                                    Linked to positive social impact
                                </p>
                            </div>
                            <div className="text-left flex justify-center gap-2">
                                <DonationItem />
                                <DonationItem />
                            </div>
                        </div>
                    </div>

                    {/* past donations */}
                    <div>
                        <div className="text-center space-y-6">
                            <div className="space-y-2">
                                <h2 className="text-5xl text-primary font-medium">
                                    Past Donations
                                </h2>
                                <p className="max-w-lg m-auto text-gray-600 text-xl">
                                    Linked to positive social impact
                                </p>
                            </div>
                            <div className="text-left flex justify-center gap-2">
                                <DonationItem />
                                <DonationItem />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* footer  */}
            <Footer />
        </div>
    );
};

export default Charity;
