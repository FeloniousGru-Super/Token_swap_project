import React from "react";
import pattern from "../../../../assets/bg_pattern_1.png";
import Question from "./question";
import homepage_content from "../../static/content/content";

const FAQ = () => {
    return (
        <div className="overflow-hidden bg-secondary-light relative" id="faq_section">
            <div className="relative" style={{ zIndex: 1 }}>
                <div className="absolute right-0 -top-40">
                    <img
                        src={pattern}
                        alt=""
                        style={{ transform: "scaleX(-1)" }}
                    />
                </div>
            </div>

            <div
                className="max-w-screen-lgxl container mx-auto py-32 px-16  relative"
                style={{ zIndex: 1 }}
            >
                <div className="text-center space-y-4">
                    <h2 className="text-4xl font-bold text-primary">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg max-w-sm mx-auto text-gray-600">
                        Below you will find the most popular questions about LunaChow. For additional information, please reach out to the team!
                    </p>

                    <div className="space-y-4">
                        {homepage_content.questions.map((question) => (
                            <Question {...question} />
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-52" style={{}}>
                <div className="">
                    <img
                        src={pattern}
                        alt=""
                        style={{ transform: "scaleY(-1)" }}
                    />
                </div>
            </div>
        </div>
    );
};

export default FAQ;
