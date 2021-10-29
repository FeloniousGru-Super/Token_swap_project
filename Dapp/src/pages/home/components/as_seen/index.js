import React from "react";

import image1 from "./static/1.png";
import image2 from "./static/2.png";
import image3 from "./static/3.png";
import image4 from "./static/4.png";
import image5 from "./static/5.png";
import image6 from "./static/6.png";
import image7 from "./static/7.png";
import image8 from "./static/8.png";
import image9 from "./static/9.png";
import image10 from "./static/10.png";
import image11 from "./static/11.png";
import image12 from "./static/12.png";

const AsSeen = () => {
    return (
        <div className="">
            <div className="container mx-auto my-20">
                <div className=" space-y-16">
                    <h2 className="text-center text-4xl font-bold text-primary">
                        As seen in
                    </h2>

                    <div className="flex flex-wrap gap-8 items-center justify-center">
                        <div>
                            <img src={image1} alt="" />
                        </div>
                        <div>
                            <img src={image2} alt="" />
                        </div>
                        <div>
                            <img src={image3} alt="" />
                        </div>
                        <div>
                            <img src={image4} alt="" />
                        </div>
                        <div>
                            <img src={image5} alt="" />
                        </div>

                        <div>
                            <img src={image6} alt="" />
                        </div>

                        <div>
                            <img src={image7} alt="" />
                        </div>

                        <div>
                            <img src={image8} alt="" />
                        </div>

                        <div>
                            <img src={image9} alt="" />
                        </div>

                        <div>
                            <img src={image10} alt="" />
                        </div>

                        <div>
                            <img src={image11} alt="" />
                        </div>

                        <div>
                            <img src={image12} alt="" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsSeen;
