import React, { useState } from "react";
import Iframe from 'react-iframe';
import ada from "./static/ada.png";
import { MdSearch } from "react-icons/md";
import Switch from "react-switch";

const MakeDonation1 = () => {
    return (
        <div className="max-w-md mx-auto h-full w-full bg-primary-muted conversion_card_shadow rounded-3xl px-12 py-12 space-y-4">
            <Iframe url="https://nowpayments.io/embeds/donation-widget?api_key=N19SF16-ZJ84XBV-HKFVNT8-Z8NRK63"
                width="354px"
                height="630px"
                scrolling="no"
                frameborder="0"
                style="overflow-y: hidden;"
                position="relative"/>
        </div>
    );
};

export default MakeDonation1;
