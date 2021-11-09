import React, { useRef } from "react";

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
import Slider from "react-slick";
import { GrNext } from "react-icons/gr";
import { GrPrevious } from "react-icons/gr";

const AsSeen = () => {
    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
        image9,
        image10,
        image11,
        image12,
    ];

    const settings = {
        dots: false,
        infinite: false,
        speed: 300,
        slidesToShow: 5,
        prevArrow: <PrevButton />,
        nextArrow: <NextButton />,
    };

    return (
        <div className="overflow-hidden">
            <div className="px-8 max-w-screen-lgxl container mx-auto my-20">
                <div className="space-y-16">
                    <h2 className="text-center text-4xl font-bold text-primary">As seen in</h2>

                    <div className="">
                        <div className="px-8">
                            <Slider {...settings}>
                                {images.map((image) => (
                                    <div className="px-3">
                                        <img
                                            src={image}
                                            style={{ height: "80px", width: "250px" }}
                                            alt=""
                                            className="object-contain"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AsSeen;

const PrevButton = ({ onClick, className, style }) => {
    return (
        <button
            onClick={onClick}
            className={`${className} -mt-4`}
            style={{ ...style}}>
            <span className="text-primary">
                <GrPrevious size={28}/>
            </span>
        </button>
    );
};

const NextButton = ({ onClick, className, style }) => {
    return (
        <button
            onClick={onClick}
            className={`${className} -mt-4`}
            style={{ ...style }}>
            <p className="text-primary">
                <GrNext size={28} />
            </p>
        </button>
    );
};