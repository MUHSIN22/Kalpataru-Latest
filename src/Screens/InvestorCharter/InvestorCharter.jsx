import React from 'react'
import TablePrimary from '../../Components/TablePrimary/TablePrimary'
import investorCharter from '../../JSON DB/investorCharter'
import './InvestorCharter.css'
export default function InvestorCharter() {
    return (
        <div className='InvestorCharter'>
            <div className="section1">
                <div className="section-1-content">
                    <h1>Investor Charter</h1>
                    <p>Regulatory statements &
                        complaint redressal details...</p>
                </div>
                <div className="section-1-image">
                    <img src='images/ic.png' alt='' />
                </div>
            </div>
            <div className="mutualFund-header">
          <h1>Trend of monthly disposal of complaints</h1>
        </div>
        <div className="parent-table">
          <TablePrimary data={investorCharter.monthlyDisposal} />
        </div>
        <div className="mutualFund-header">
          <h1>Trend of annual disposal of complaints</h1>
        </div>
        <div className="parent-table">
          <TablePrimary data={investorCharter.annualDisposal} />
        </div>
        </div>
    )
}
