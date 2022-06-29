import React from 'react'
import CustomInputs from '../../Components/Inputs/Input'
import './generalInsurence.css'

export default function GeneralInsurence() {
    return (
        <div className='GeneralInsurence'>
            <div className="section-1">
                <div className="section-1-content">
                    <h1>General Insurance</h1>
                    <p>General insurance refers to insurance policies that do not fall within the domain of life insurance. The various types of general insurance include fire, marine, motor, accident, and other non-life policies.</p>
                </div>
                <div className="section-1-image">
                    <img src='images/general-insurenece.svg' alt='' />
                </div>
            </div>
            <div className="mutualFund-header">
                <h1>General Insurance</h1>
            </div>
            {/* <div className="performance">
                <h2>Performance</h2>
                <div className="performance-row">
                    <div className="performance-col">
                        <p>Todays Low</p>
                        <h3>110.60</h3>
                    </div>
                    <img src='/images/gen-in-image1.svg' alt='' />
                    <div className="performance-col">
                        <p>Todays High</p>
                        <h3>115.45</h3>
                    </div>
                </div>
                <div className="performance-row">
                    <div className="performance-col">
                        <p>52W Low</p>
                        <h3>109.10</h3>
                    </div>
                    <img src='/images/gen-in-image2.svg' alt='' />
                    <div className="performance-col">
                        <p>52W High</p>
                        <h3>211.50</h3>
                    </div>
                </div>
            </div>
            <div className="general-insurence-row">
                <div className="general-insurence-row-col">
                    <p>Open Price</p>
                    <h3>110.60</h3>
                </div>
                <div className="general-insurence-row-col">
                    <p>Prev.Close</p>
                    <h3>110.20</h3>
                </div>
                <div className="general-insurence-row-col">
                    <p>Volume</p>
                    <h3>986348</h3>
                </div>
                <div className="general-insurence-row-col">
                    <p>Value</p>
                    <h3>11.24 cr</h3>
                </div>
            </div> */}
            <div className="section-2">
                <h1>About General Insurance</h1>
                <p>
                    The physical assets are susceptible to harm, and it is necessary to maintain their economic worth. 
                    General insurance products are purchased for this reason because they offer protection against 
                    unpredictable occurrences such as the asset's destruction or loss. Similar to life insurance, general 
                    insurance products come with a premium.
                </p>
            </div>

            <div className="Details-Container">
                <h1 >Drop Your Details</h1>
                <div className="Details-Form-row">
                    <div className="Form-image">
                        <img src="/images/Details-image.png" alt="" />
                    </div>
                    <div className="Details-Form">
                        <CustomInputs
                            label="Name"
                            name="Name"
                            placeholder="John Doe"
                            width={80}
                            type="text"
                        />
                        <CustomInputs
                            label="Email"
                            name="Name"
                            placeholder="JohnDoe@gmail.com"
                            width={80}
                            type="text"
                        />
                        <CustomInputs
                            label="Phone No"
                            name="Name"
                            placeholder="1234567899"
                            width={80}
                            type="text"
                        />
                        <label htmlFor="Message">Message</label>
                        <textarea name="Message" id="" cols="30" rows="10"></textarea>
                        <div className="Details-button">
                            {" "}
                            <button className="Details-btn">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
