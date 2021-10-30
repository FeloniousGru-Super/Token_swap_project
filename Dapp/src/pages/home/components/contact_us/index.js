import React from "react";
import { MdMail } from "react-icons/md";
import {FaTelegramPlane, FaTwitter} from "react-icons/fa"
const ContactUS = () => {
    return (
        <div className="container mx-auto my-20 space-y-6" id={"contact_section"}>
            <div className=" space-y-4">
                <h2 className="text-center text-4xl font-bold text-primary">
                    Contact Us
                </h2>
                <p className="text-center">Any questions? Reach out to us</p>

                <div className="py-6 text-gray-700 flex justify-center gap-4">
                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                            <MdMail size="16"/>
                        </div>
                        <p>support@lunachow.com</p>
                    </div>

                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                            <FaTwitter size="16"/>
                        </div>
                        <p>Join us on Twitter</p>
                    </div>

                    <div className="flex gap-2">
                        <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white">
                            <FaTelegramPlane size="16"/>
                        </div>
                        <p>Join us on Telegram</p>
                    </div>
                </div>

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
                        <textarea
                            name=""
                            id=""
                            placeholder="Message"
                            className="py-4 px-6 rounded-3xl bg-gray-100 flex-grow w-full h-56"
                        ></textarea>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUS;
