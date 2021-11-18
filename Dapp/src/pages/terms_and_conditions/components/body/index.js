import React, { useState } from "react";
import coin from "./static/coin.png";
import vector_smart from "./static/vector_smart.png";
import pattern from "../../../../assets/bg_pattern_3.png";

const Body = () => {
    return (
        <div className="min-h-screen overflow-hidden relative">
            {/* pattern top */}
            <div className=" relative" style={{}}>
                <div className="absolute right-0 -top-0">
                    <img src={pattern} alt="" style={{ transform: "scaleX(-1)" }} />
                </div>
            </div>

            <div className="py-12 space-y-5 max-w-screen-lgxl container mx-auto px-8 relative" style={{zIndex: 1}}>
                <div className="max-w-xs mx-auto flex">
                    <img className="m-auto" src={coin} alt="" />
                </div>
                <div className="max-w-xs mx-auto">
                    <img src={vector_smart} alt="" />
                </div>

                <div className="text-center space-y-4">
                    <h2 className="font-bold text-4xl text-primary">Terms and Conditions</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Welcome to www.lunachow.com!
                        These terms and conditions outline the rules and regulations for the use of LunaChow LLC's Website, located at http://www.lunachow.com/.
                        By accessing this website, we assume you accept these terms and conditions. Do not continue to use www.lunachow.com if you do not agree to take all the terms and conditions stated on this page.  
                    </p>

                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: "Client", "You" and "Your" refers to you, the person log on this website and compliant to the Company’s terms and conditions. "The Company", "Ourselves", "We", "Our" and "Us", refers to our Company. "Party", "Parties", or "Us", refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client’s needs in respect of provision of the Company’s stated services, in accordance with and subject to, prevailing law of Netherlands. Any use of the above terminology or other words in the singular, plural, capitalization and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Cookies</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        We employ the use of cookies. By accessing www.lunachow.com, you agreed to use cookies in agreement with the LunaChow LLC's Privacy Policy.
                        Most interactive websites use cookies to let us retrieve the user’s details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                        No Investment Advice.  
                    </p>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        The Custodian has no responsibility to monitor or oversee the investment activity undertaken by a Fund or its Investment Advisor or by an Portfolio. The Custodian has no duty to ensure or to inquire whether an Investment Advisor complies with any investment objectives or restrictions agreed upon between a Fund and the Investment Advisor or whether the Investment Advisor complies with its legal obligations under applicable securities laws or other laws, including laws intended to protect the interests of investors. The Custodian shall neither assess nor take any responsibility or liability for the suitability or appropriateness of the investments made by a Fund or a Portfolio or on its behalf.
                        License  
                    </p>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Unless otherwise stated, LunaChow LLC and/or its licensors own the intellectual property rights for all material on www.lunachow.com. All intellectual property rights are reserved. You may access this from www.lunachow.com for your own personal use subjected to restrictions set in these terms and conditions.  
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">You Must Not:</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Republish material from www.lunachow.com
                        Sell, rent or sub-license material from www.lunachow.com
                        Reproduce, duplicate or copy material from www.lunachow.com
                        Redistribute content from www.lunachow.com
                    </p>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Parts of this website offer an opportunity for users to post and exchange opinions and information in certain areas  of the website. LunaChow LLC does not filter, edit, publish or review Comments prior to their presence on the website. Comments do not reflect the views and opinions of LunaChow LLC,its agents and/or affiliates. Comments reflect the views and opinions of the person who post their views and opinions. To the extent permitted by applicable laws, LunaChow LLC shall not be liable for the Comments or for any liability, damages or expenses caused and/or suffered as a result of any use of and/or posting of and/or appearance of the Comments on this website.
                    </p>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        LunaChow LLC reserves the right to monitor all Comments and to remove any Comments which can be considered inappropriate, offensive or causes breach of these Terms and Conditions.
                        You warrant and represent that:
                        You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;
 
                    </p>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;
                        The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy
                        The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.
                    </p>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        You hereby grant LunaChow LLC a non-exclusive license to use, reproduce, edit and authorize others to use, reproduce and edit any of your Comments in any and all forms, formats or media.
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Hyperlinking to our Content</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        The following organizations may link to our Website without prior written approval:
                        Government agencies;
                        Search engines;
                        News organizations;
                        Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and
                        System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.
                        These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and 
                    </p>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        (c) fits within the context of the linking party’s site.
                        We may consider and approve other link requests from the following types of organizations:
                        commonly-known consumer and/or business information sources;
                        dot.com community sites;
                        associations or other groups representing charities;
                        online directory distributors;
                        internet portals;
                        accounting, law and consulting firms; and
                        educational institutions and trade associations.
                        We will approve link requests from these organizations if we decide that: (a) the link would not make us look unfavorably to ourselves or to our accredited businesses; (b) the organization does not have any negative records with us; (c) the benefit to us from the visibility of the hyperlink compensates the absence of LunaChow LLC; and (d) the link is in the context of general resource information.
                    </p>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        These organizations may link to our home page so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party’s site.
                        If you are one of the organizations listed in paragraph 2 above and are interested in linking to our website, you must inform us by sending an e-mail to LunaChow LLC. Please include your name, your organization name, contact information as well as the URL of your site, a list of any URLs from which you intend to link to our Website, and a list of the URLs on our site to which you would like to link. Wait 2-3 weeks for a response.
                        Approved organizations may hyperlink to our Website as follows:
                    </p>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        By use of our corporate name; or
                        By use of the uniform resource locator being linked to; or
                        By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.
                    </p>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        No use of LunaChow LLC's logo or other artwork will be allowed for linking absent a trademark license agreement.
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">iFrames</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website. 
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Content Liability</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        We shall not be hold responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights. 
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Your Privacy</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Please read Privacy Policy
                        Reservation of Rights
                        We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                        Removal of links from our website
                        If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                        We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date. 
                    </p>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Cookie Policy for www.lunachow.com
                        This is the Cookie Policy for www.lunachow.com, accessible from http://www.lunachow.com/
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Your Privacy</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Please read Privacy Policy
                        Reservation of Rights
                        We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and it’s linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                        Removal of links from our website
                        If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                        We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date. 
                    </p>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Cookie Policy for www.lunachow.com
                        This is the Cookie Policy for www.lunachow.com, accessible from http://www.lunachow.com/
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">What Are Cookies</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        As is common practice with almost all professional websites this site uses cookies, which are tiny files that are downloaded to your computer, to improve your experience. This page describes what information they gather, how we use it and why we sometimes need to store these cookies. We will also share how you can prevent these cookies from being stored however this may downgrade or 'break' certain elements of the sites functionality. 
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">How We Use Cookies</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        We use cookies for a variety of reasons detailed below. Unfortunately in most cases there are no industry standard options for disabling cookies without completely disabling the functionality and features they add to this site. It is recommended that you leave on all cookies if you are not sure whether you need them or not in case they are used to provide a service that you use. 
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Disabling Cookies</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        You can prevent the setting of cookies by adjusting the settings on your browser (see your browser Help for how to do this). Be aware that disabling cookies will affect the functionality of this and many other websites that you visit. Disabling cookies will usually result in also disabling certain functionality and features of the this site. Therefore it is recommended that you do not disable cookies. 
                        The Cookies We Set
                        Account related cookies
                        If you create an account with us then we will use cookies for the management of the signup process and general administration. These cookies will usually be deleted when you log out however in some cases they may remain afterwards to remember your site preferences when logged out. 
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Login related cookies</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        We use cookies when you are logged in so that we can remember this fact. This prevents you from having to log in every single time you visit a new page. These cookies are typically removed or cleared when you log out to ensure that you can only access restricted features and areas when logged in.
                        Email newsletters related cookies
                        This site offers newsletter or email subscription services and cookies may be used to remember if you are already registered and whether to show certain notifications which might only be valid to subscribed/unsubscribed users.
                        Orders processing related cookies
                        This site offers e-commerce or payment facilities and some cookies are essential to ensure that your order is remembered between pages so that we can process it properly. 
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">Third Party Cookies</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        In some special cases we also use cookies provided by trusted third parties. The following section details which third party cookies you might encounter through this site.
                        This site uses Google Analytics which is one of the most widespread and trusted analytics solution on the web for helping us to understand how you use the site and ways that we can improve your experience. These cookies may track things such as how long you spend on the site and the pages that you visit so we can continue to produce engaging content.
                        For more information on Google Analytics cookies, see the official Google Analytics page.
                        Third party analytics are used to track and measure usage of this site so that we can continue to produce engaging content. These cookies may track things such as how long you spend on the site or pages you visit which helps us to understand how we can improve the site for you.
                        From time to time we test new features and make subtle changes to the way that the site is delivered. When we are still testing new features these cookies may be used to ensure that you receive a consistent experience whilst on the site whilst ensuring we understand which optimisations our users appreciate the most.
                        As we sell products it's important for us to understand statistics about how many of the visitors to our site actually make a purchase and as such this is the kind of data that these cookies will track. This is important to you as it means that we can accurately make business predictions that allow us to monitor our advertising and product costs to ensure the best possible price.
                        Several partners advertise on our behalf and affiliate tracking cookies simply allow us to see if our customers have come to the site through one of our partner sites so that we can credit them appropriately and where applicable allow our affiliate partners to provide any bonus that they may provide you for making a purchase.
                        We also use social media buttons and/or plugins on this site that allow you to connect with your social network in various ways. For these to work the following social media sites including; (List the social networks whose features you have integrated with your site?:12), will set cookies through our site which may be used to enhance your profile on their site or contribute to the data they hold for various purposes outlined in their respective privacy policies. 
                    </p>
                </div>

                <div className="text-left space-y-4">
                    <h2 className="font-bold text-2xl text-primary">More Information</h2>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        Hopefully that has clarified things for you and as was previously mentioned if there is something that you aren't sure whether you need or not it's usually safer to leave cookies enabled in case it does interact with one of the features you use on our site. 
                    </p>
                    <p className="text-left max-w-xxl mx-auto text-gray-600">
                        However if you are still looking for more information then you can contact us through one of our preferred contact methods:
                        Email: Support@lunachow.com
                        By visiting this link:
                    </p>
                </div>
            </div>
            
        </div>
    );
};

export default Body;
