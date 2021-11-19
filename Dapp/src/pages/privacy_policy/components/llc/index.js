import React, { useState } from "react";
import vector from "./static/vector.png";
import world from "./static/world.png";
import pattern from "../../../../assets/bg_pattern_3.png";

const Llc = () => {
    return (
        <div className="min-h-screen overflow-hidden relative">
            {/* pattern top */}
            <div className=" relative" style={{}}>
                <div className="absolute right-0 -top-40">
                    <img src={pattern} alt="" style={{ transform: "scaleX(-1)" }} />
                </div>
            </div>

            <div className="py-32 space-y-20 max-w-screen-lgxl container mx-auto px-8 relative" style={{zIndex: 1}}>
                <div className="max-w-xs mx-auto">
                    <img src={vector} alt="" />
                </div>

                <div className="text-center space-y-4">
                    <h2 className="font-bold text-4xl text-primary">A Community-Focused Project</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        A true-for-the-people blockchain protocol, LunaChow isn’t only changing the way people invest in crypto—it’s changing the way people use their crypto to change the world.  
                    </p>

                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Through its charitable arm, LunaChow empowers token investors to use their crypto wealth for good. Through monthly charity drives, LunaChow donates 100% of donations to a charity that serves underprivileged children, helping them rise above homelessness and poverty so they can achieve their full potential. 
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Consent</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        By using our website, you hereby consent to our Privacy Policy and agree to its terms.
                    </p>
                </div>

                <div className="max-w-xs mx-auto">
                    <img src={world} alt="" />
                </div>

                <div className="text-center space-y-4">
                    <h2 className="font-bold text-4xl text-primary">Information We Collect</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        The personal information that you are asked to provide, and the reasons why you are asked to provide it, will be made clear to you at the point we ask you to provide your personal information.
                        If you contact us directly, we may receive additional information about you such as your name, email address, phone number, the contents of the message and/or attachments you may send us, and any other information you may choose to provide.
                        When you register for an Account, we may ask for your contact information, including items such as name, company name, address, email address, and telephone  
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">How we use your information</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        We use the information we collect in various ways, including to:
                        <ul>
                        <li>● Provide, operate, and maintain our website </li>
                        <li>● Improve, personalize, and expand our website</li>
                        <li>● Understand and analyze how you use our website</li>
                        <li>● Develop new products, services, features, and functionality</li>
                        <li>● Communicate with you, either directly or through one of our partners, including for      customer service, to provide you with updates and other information relating to the 
                        website, and for marketing and promotional purposes</li>
                        <li>● Send you emails</li>
                        <li>● Find and prevent fraud</li>
                        </ul>
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Log Files</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        www.lunachow.com follows a standard procedure of using log files. These files log 
                        visitors when they visit websites. All hosting companies do this and a part of hosting 
                        services' analytics. The information collected by log files include internet protocol (IP) 
                        addresses, browser type, Internet Service Provider (ISP), date and time stamp, 
                        referring/exit pages, and possibly the number of clicks. These are not linked to any 
                        information that is personally identifiable. The purpose of the information is for 
                        analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information.
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Cookies and Web Beacons</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Like any other website, www.lunachow.com uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Our Advertising Partners</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Some of advertisers on our site may use cookies and web beacons. Our advertising 
                        partners are listed below. Each of our advertising partners has their own Privacy Policy for their policies on user data. For easier access, we hyperlinked to their Privacy Policies below.
                        ● Google
                        https://policies.google.com/technologies/ads
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Advertising Partners Privacy Policies</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        You may consult this list to find the Privacy Policy for each of the advertising partners of www.lunachow.com.
                        Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on 
                        www.lunachow.com, which are sent directly to users' browser. They automatically 
                        receive your IP address when this occurs. These technologies are used to measure the 
                        effectiveness of their advertising campaigns and/or to personalize the advertising 
                        content that you see on websites that you visit.
                        Note that www.lunachow.com has no access to or control over these cookies that are used by third-party advertisers.
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Third Party Privacy Policies</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        www.lunachow.com's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options.
                        You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites.
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">CCPA Privacy Rights (Do Not Sell My Personal Information)</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Under the CCPA, among other rights, consumers have the right to:
                        Request that a business that collects a consumer's personal data disclose the categories and specific pieces of personal data that a business has collected about consumers.
                        Request that a business delete any personal data about the consumer that a business has collected.
                        Request that a business that sells a consumer's personal data, not sell the consumer's 
                        personal data.
                        If you make a request, we have one month to respond to you. If you would like to 
                        exercise any of these rights, please contact us.
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">GDPR Data Protection Rights</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        We would like to make sure you are fully aware of all your data protection rights. Every user is entitled to the following:
                        The right to access – You have the right to request copies of your personal data. We may charge you a small fee for this service.
                        The right to rectification – You have the right to request that we correct any information you believe is inaccurate. You also have the right to request that we complete the 
                        information you believe is incomplete.
                        The right to erasure – You have the right to request that we erase your personal data, under certain conditions.
                        The right to restrict processing – You have the right to request that we restrict the 
                        processing of your personal data, under certain conditions.
                        The right to object to processing – You have the right to object to our processing of your personal data, under certain conditions.
                        The right to data portability – You have the right to request that we transfer the data that we have collected to another organization, or directly to you, under certain conditions.
                        If you make a request, we have one month to respond to you. If you would like to 
                        exercise any of these rights, please contact us.
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Children's Information</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity.
                        www.lunachow.com does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Llc;
