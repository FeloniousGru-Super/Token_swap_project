import React from "react";

const ContactUS = () => {
    return (
        <div className="container mx-auto my-20 space-y-6">
            <div className=" space-y-4">
                <h2 className="text-center text-4xl font-bold text-primary">
                    Contact Us
                </h2>
                <p className="text-center">Any questions? Reach out to us</p>
            </div>

            <div>
                <form action="" className="max-w-xl mx-auto space-y-4">
                    <div className="flex gap-2">
                        <input
                            type="text"
                            className="p-2 px-4 rounded-full bg-gray-100 flex-grow"
                            placeholder="Name"
                        />

                        <input
                            type="email"
                            className="p-2 px-4 rounded-full bg-gray-100 flex-grow"
                            placeholder="Email"
                        />
                    </div>

                    <div>
                        <textarea name="" id="" placeholder="Message" className="py-4 px-6 rounded-3xl bg-gray-100 flex-grow w-full h-56"></textarea>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default ContactUS;
