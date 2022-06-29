import React from 'react'
import './depository.css'

export default function Depository() {
    return (
        <div className='Depository'>
            <div className="section-1">
                <div className="section-1-content">
                    <h1>Depository Participant</h1>
                    <p>A depository is an entity which helps an investor to buy or sell securities such as stocks and bonds in a paper-less manner.</p>
                </div>
                <div className="section-1-image">
                    <img src='images/Depository.svg' alt='' />
                </div>
            </div>
            <div className="section-3">
                <div className="mutualFund-header">
                    <h1>What is depository ?</h1>
                </div>
                <div className="section-3-content">
                <p>
                    An organization, bank, or institution that keeps and trades securities. A depository provides market 
                    security and liquidity, lends deposited money, invests in assets, and offers a funds transmission mechanism.
                </p>
                </div>
                <div className="mutualFund-header">
                    <h1>What are CDSL and NSDL?</h1>
                </div>
                <div className="section-3-content">
                <p>
                    If you are an investor in India, you should know about the two working depositories that make it 
                    possible to buy and sell shares. India has two depositories: Central Securities Depositories Limited 
                    (CSDL) and National Securities Depository Limited (NSDL). Both depositories hold your financial 
                    assets that aren't physical, like stocks and bonds, and let you buy and sell them on the stock market.
                </p>
                </div>
            </div>
        </div>
    )
}
