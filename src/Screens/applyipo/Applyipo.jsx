import React from 'react'
import TablePrimary from '../../Components/TablePrimary/TablePrimary'
import applyIPO from '../../JSON DB/applyIPO'
import './applyipo.css'
export default function Applyipo() {
    return (
        <div className='Applyipo'>
            <div className="section-1">
                <div className="section-1-content">
                    <h1>Apply to invest in IPOs</h1>
                </div>
                <div className="section-1-image">
                    <img src='/images/apply-ipo.svg' alt='' />
                </div>

            </div>
            <div className="content-wrapper">
                <div className="h1">
                    <h1 className='section-title'>IPOs / Takeovers / Buybacks / Delistings</h1>
                </div>
                <div className="mutualFund-header">
                    <h1 className='section-title'>Current Issue</h1>
                </div>
                <div className="parent-table">
                    <TablePrimary data={applyIPO} />
                </div>
            </div>
        </div>
    )
}
