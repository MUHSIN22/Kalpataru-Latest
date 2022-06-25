import { Link } from "react-router-dom";
import React from "react";
import "./ipo.css";
export default function IPO() {
  return (
    <div className="ipo-container">
      <div className="ipo-section-1">
        <div className="section-1-content">
          <h1 className="section-title">IPO</h1>
          <p>
            Buy <span>cheap</span>, earn <span>big</span> Discover IPOs with the highest growth potential
            early and invest now through Kalpataru to earn big in the future.
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
            <h1>IPO</h1>
            <p>
              It's not uncommon for a rapidly expanding business that has
              already depleted its private equity pool to turn to the general
              public for further funding. By listing its shares on the stock
              market, a corporation can raise money from investors. In order to
              list a firm on the stock market, a corporation must go through the
              process of an initial public offering (IPO). Companies can now
              borrow money from the public using this approach.
            </p>
          </div>
        </div>
        <div className="section-2-col">
          <h2>Is IPO is a good investment? </h2>
          <p>
            Stocks in a firm are sold in an IPO to retail investors,
            institutional investors, and individuals with substantial financial
            resources. A firm becomes publicly traded when it makes an initial
            public offering (IPO) and is listed on a stock exchange. Until then,
            it will continue to be a privately held firm. As a result, while the
            company's shares were formerly owned privately, they are now owned
            by the general public as a result of the IPO. So, an IPO is the
            process by which a private company is made public by the selling of
            its stock to members of the public at large.
          </p>
        </div>
      </div>
      <div className="section-3">
        <div className="mutualFund-header">
          <h1 className="section-title">IPO Listing</h1>
        </div>
        <div className="parent-table">
          <div className="orange border-right">
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
          </div>
        </div>
      </div>
    </div>
  );
}
