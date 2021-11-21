import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import DonationItem from "./item";

import people from "./static/people.png";
import world from "./static/world.png";
import MakeDonation from "./make_donation";
import MakeDonation1 from "./make_donation1";

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
                                    <h2 className="text-primary-darker font-medium text-4xl">
                                        Join the cause
                                    </h2>
                                    <p className="text-xl">Total charity Donations</p>
                                    <p className="text-7xl font-medium">$349,000,000</p>
                                    <p className="text-xl">
                                        PawsWithCause plus FurKids work with 45 different shelters
                                        in the USA! We have already donated $95,000+ with much more
                                        to come!
                                    </p>
                                    <h4 className="text-primary-darker font-medium text-4xl">
                                        Donate to our Charity Wallet using NowPayments
                                    </h4>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <MakeDonation1 />
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

            <div className="py-8 space-y-10 max-w-screen-lgxl container mx-auto px-8 relative" style={{zIndex: 1}}>
                <div className="max-w-xs mx-auto">
                    <img src={world} alt="" />
                </div>

                <div className="text-center space-y-4">
                    <h2 className="font-bold text-3xl text-primary">Changing the World with Crypto</h2>
                    <p className="text-center max-w-4xl mx-auto text-gray-600">
                        Together, the LunaChow community is committed to using crypto to break down financial barriers by lifting up underserved communities and giving them the opportunity to build generational wealth.  
                    </p>
                </div>

                <div className="text-center space-y-4">
                    <h2 className="font-bold text-3xl text-primary">A Global Movement for Good</h2>
                    <p className="text-center max-w-4xl mx-auto text-gray-600">
                        Blockchain technology has disrupted traditional financial systems, giving new types of investors from across the globe an opportunity to grow life-changing wealth. The blockchain community now has the chance to disrupt those systems further by driving wealth redistribution and giving today’s most marginalized communities access to the resources needed to lift them out of poverty and grow their wealth.   
                    </p>
                </div>

                <div className="text-center space-y-4">
                    <h2 className="font-bold text-3xl text-primary">Driving A Brighter Future</h2>
                    <p className="text-center max-w-4xl mx-auto text-gray-600">
                        LunaChow is committed to driving global change through its charitable activities. Since LunaChow was founded for the masses by the masses, it only makes sense that together, the LunaChow community will serve those less fortunate by giving them the financial resources needed to grow their financial literacy, lift them out of poverty, and give them access to tools they need to thrive in all aspects of their life.  
                    </p>
                    <p className="text-center max-w-4xl mx-auto text-gray-600">
                        With this in mind, our ongoing charity drive seeks to lift up those most vulnerable—children. 100% of our charity drive funds will go to charities that benefit underprivileged children, including those facing homelessness, extraordinary poverty, other economically distressed situations. By using our wealth to disrupt poverty early on in a child's life, we can help change the narrative for millions of children and their families worldwide. Once a child’s basic needs are met, they then can begin to access resources that help them and their families build generational stability and wealth.  
                    </p>
                </div>

                <div className="text-center space-y-4">
                    <h2 className="font-bold text-3xl text-primary">A Collective Movement for Change</h2>
                    <p className="text-center max-w-4xl mx-auto text-gray-600">
                        Together, we can rewrite the story for millions of children living in poverty, all through the power of crypto. We invite you to share your favorite charity that serves underprivileged children with us. Each month, our drive will benefit a different agency so we can serve the widest number of children possible and make the biggest global impact. While we can't guarantee we'll be able to serve them all, we will work together to make sure no child is left behind when so many of us in the world prosper.   
                    </p>
                </div>
            </div>
            {/* footer  */}
            <Footer />
        </div>
    );
};

export default Charity;
