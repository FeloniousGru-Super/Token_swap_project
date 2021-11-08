import React from 'react'
import people from "./static/people2.png"

const DonationItem = () => {
    return (
        <div>
            <div className="rounded-3xl bg-primary-dark p-12 text-white space-y-2">

                <img src={people} alt="" />
                <h2 className="font-medium text-primary-darker text-lg">Dog Charity</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                
            </div>
        </div>
    )
}

export default DonationItem
