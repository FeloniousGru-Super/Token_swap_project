import React from "react";


const Card = ({data}) => {
    return (
        <div className="bg-primary-dark bg-opacity-70 rounded-3xl px-6 pb-12 h-full">
            <div className="flex justify-center relative -top-6">
                <h4 className="bg-primary-darker text-white inline-block px-8 py-2 mx-auto rounded-full">
                    Step {data.step}
                </h4>
            </div>
            <img src={data.image} alt="" className="block mx-auto h-24" />
            <div className="text-center space-y-2 max-w-xs mx-auto">
                <h2 className="text-primary-darker font-medium text-lg">
                    {data.title}
                </h2>
                <p dangerouslySetInnerHTML={{__html: data.text}}/>
            </div>
        </div>
    );
};

export default Card;
