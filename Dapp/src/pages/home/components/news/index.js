import React from "react";
import homepage_content from "../../static/content/content";

const CryptoNews = () => {
    return (
        <div className="min-h-screen">
            <div className="px-8 container mx-auto space-y-20 py-20">
                <div className=" space-y-8">
                    <h2 className="text-center text-4xl font-bold text-primary">
                        Latest crypto news
                    </h2>
                    <p className="text-center max-w-md mx-auto text-lg text-gray-600">
                        The Revolutionary LunaChow Burn Structure at launch –
                        Burn now, Not Later!
                    </p>
                </div>

                <div className="flex flex-wrap justify-center">
                    {homepage_content.news.map((news) => (
                        <div className="md:w-1/4 p-2">
                            <div className="rounded-8xl overflow-hidden bg-secondary-light" style={{height: "395px"}}>
                                <div className="flex justify-center h-44">
                                    <img src={news.img} alt="" className="w-full h-full object-cover"/>
                                </div>

                                <div className="px-6 py-8 space-y-4">
                                    <h2 className="text-primary font-medium">
                                        {news.title}
                                    </h2>
                                    <p className="max-h-20">
                                        {news.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <a
                        href="/"
                        className=" text-center w-1/2 rounded-full py-3 px-4 bg-gradient-to-b from-yellow-500 to-yellow-600 font-medium text-white"
                    >
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CryptoNews;
