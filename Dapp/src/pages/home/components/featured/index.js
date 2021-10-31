import React from "react";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import homepage_content from "../../static/content/content";

const Featured = () => {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1   
              }
            }]
    };

    return (
        <div className="min-h-screen">
            <div className="px-8 container mx-auto space-y-20 py-20">
                <div className=" space-y-8">
                    <h2 className="text-center text-4xl font-bold text-primary">
                        Featured
                    </h2>
                    <p className="text-center max-w-md mx-auto text-lg text-gray-600">
                        The Revolutionary LunaChow Burn Structure at launch –
                        Burn now, Not Later!
                    </p>
                </div>
                <Slider {...settings}>
                    {homepage_content.featured_carousel.map((featured) => (
                        <div className="p-2 md:w-1/4">
                            <div className="rounded-3xl p-8 py-12 space-y-4 bg-secondary-light">
                                <div className="flex justify-center h-32">
                                    <img
                                        src={featured.img}
                                        alt=""
                                        className="object-contain"
                                    />
                                </div>
                                <p>{featured.desc}</p>
                            </div>{" "}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default Featured;
