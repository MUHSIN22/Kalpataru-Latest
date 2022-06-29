import { Link } from "react-router-dom";
import React from "react";
import "./ipo.css";
import TablePrimary from "../../Components/TablePrimary/TablePrimary";
import IPOTable from "../../JSON DB/IPOTable";
export default function IPO() {
  return (
    <div className="ipo-container">
      <div className="ipo-section-1">
        <div className="section-1-content">
          <h1 className="section-title">Initial Public Offering </h1>
          <p>
            Discover  IPOs with the highest growth potential
            early and invest now through Kalpataru to earn big in the future...
          </p>
          <Link to="/apply-ipo">Apply IPO</Link>
        </div>
        <div className="section-1-image">
          <img src="/images/ipo-header.png" alt="" />
        </div>
      </div>
      <div className="section-2">
        <div className="section-2-content">
          <div className="section-2-image">
            <img src="/images/ipo-image2.svg" alt="" />
          </div>
          <div className="section-2-col">
            <h1>Initial Public Offering</h1>
            <p>
              A company's first time issuing its stock to the general public is called an initial public offering (IPO). 
              A public offering of stock (IPO) is a method through which a firm may get access to equity funding from the 
              general investing public.
            </p>
          </div>
        </div>
        <div className="section-2-col">
          <h2>Is IPO is a good investment? </h2>
          <p>
            One approach to generate rapid money in the stock market is via initial public offerings (IPOs). 
            An increasing number of initial public offerings (IPOs) hit the market every year. Investors in initial 
            public offerings (IPOs) stand to benefit greatly from this situation.
          </p>
        </div>
      </div>
      <div className="section-3">
        <div className="mutualFund-header">
          <h1 className="section-title">IPO Listing</h1>
        </div>
        <div className="parent-table">
          <TablePrimary data={IPOTable}/>
          {/* <div className="orange border-right">
            <h4>IOP Name</h4>
          </div>
          <div className="orange border-right">
            <h4>Exchange</h4>
          </div>
          <div className="orange border-right">
            <h4>Issue Price</h4>
          </div>
          <div className="orange border-right">
            <h4>Issue Size</h4>
          </div>
          <div className="orange border-right">
            <h4>Open Date</h4>
          </div>
          <div className="orange">
            <h4>Close Date</h4>
          </div>
          <div className="white border-bottom border-right">
            <p>KCK Industries Limited</p>
          </div>
          <div className="white border-bottom border-right">
            <p>NSE</p>
          </div>
          <div className="white border-bottom border-right">
            <p>₹30.00 - ₹30.00</p>
          </div>
          <div className="white border-bottom border-right">
            <p>₹1,500,000.00</p>
          </div>
          <div className="white  border-bottom border-right">
            <p>	27-06-2022</p>
          </div>
          <div className="white border border-right border-bottom">
            <p>30-06-2022</p>
          </div>
          <div className="white border-bottom border-right">
            <p>KCK Industries Limited</p>
          </div>
          <div className="white border-bottom border-right">
            <p>NSE</p>
          </div>
          <div className="white border-bottom border-right">
            <p>₹30.00 - ₹30.00</p>
          </div>
          <div className="white border-bottom border-right">
            <p>₹1,500,000.00</p>
          </div>
          <div className="white border-bottom border-right">
            <p>	27-06-2022</p>
          </div>
          <div className="white border border-bottom">
            <p>30-06-2022</p>
          </div>
          <div className="white border-bottom border-right">
            <p>KCK Industries Limited</p>
          </div>
          <div className="white border-bottom border-right">
            <p>NSE</p>
          </div>
          <div className="white border-bottom border-right">
            <p>₹30.00 - ₹30.00</p>
          </div>
          <div className="white border-bottom border-right">
            <p>₹1,500,000.00</p>
          </div>
          <div className="white  border-bottom border-right">
            <p>	27-06-2022</p>
          </div>
          <div className="white border border-right border-bottom">
            <p>30-06-2022</p>
          </div> */}
        </div>
      </div>
    </div>
  );
}
