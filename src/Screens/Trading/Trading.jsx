import Accordion from "../../Components/Accordion/Accordion";
import React from "react";
import { Link } from "react-router-dom";
import "./trading.css";
export default function Trading() {
  return (
    <div className="Trading">
      <div className="trading-section-1">
        <div className="trading-section-1-content">
          <h1 className="section-title">Trading</h1>
          <p>
            Trade involves the transfer of goods and services from one person or
            entity to another...
          </p>
          <Link to="/ipo">Trading with us</Link>
        </div>
        <div className="trading-section-1-image">
          <img src="/images/trading-header.svg" alt="" />
        </div>
      </div>
      <div className="trading-section-2">
        <img src="/images/trading-banner.svg" alt="" />
        <h1>What is Trading?</h1>
        <p>
          It's the aggregation of buyers and sellers of stocks (also known as shares), which represent ownership claims on businesses; these may include securities that are publicly traded, as well as private stock that is sold to investors through equity crowdfunding platforms, such as private companies that are listed on the stock exchange. The majority of the time, an investment is done with a specific plan in mind.</p>
        <p>  Both buyers and sellers are involved in a trade when they agree to the ask price or the bid price. Buyers may be inclined to increase their bids if they are outnumbered by sellers. Because of this, sellers will raise their pricing, pushing the price up.

        </p>
      </div>
      <div className="trading-section-3">
        <h1>Equity</h1>
        <Accordion title="What is Equity?">
          <div className="contect-info">
            <div className="contect-info-content">
              <p>
                The phrase "equity" is used to describe fairness and justice, as opposed to the term "equality" itself: In contrast to equality, which is offering the same to everyone, equity means acknowledging and making adjustments to inequalities because we do not all start from the same place. Bias and systemic structures can create hurdles that we need to identify and overcome, both intentionally and unintentionally.
              </p>
            </div>
          </div>
        </Accordion>
      </div>
      <div className="trading-section-3">
        <h1>F&O</h1>
        <Accordion title="What is F&O">
          <div className="contect-info">
            <div className="contect-info-content">
              <p>
                t is possible to buy and sell a specific stock or index in the future by using derivative contracts such as futures and options. The derivatives market is a subset of the equities market that deals in financial instruments. The most frequent form of derivative contract involves the purchase and sale of futures and options. It is a less risky investment than the stock market because of its speculative character.
              </p>
            </div>
          </div>
        </Accordion>
      </div>
      <div className="trading-section-3">
        <h1>Comodity</h1>
        <Accordion title="What is Comodity?">
          <div className="contect-info">
            <div className="contect-info-content">
              <p>
                You can trade commodity derivative in Gold, Silver, Crude Oil, Copper, Zinc, Lead, member of MCX and National Commodity & Derivatives Exchange Limited .Nickel, Natural Gas, Refined Soya, Menthe Oil, Soya bean, guar, Chana, Sugar, Black Pepper (Kali mirch), Cardamom, Chilly, Jeera (Cumin) and other Commodities. You shall have to procure user ID and Password first from Kalpataru.
              </p>
            </div>
          </div>
        </Accordion>
      </div>

      <div className="trading-section-3">
        <h1>SLB</h1>
        <Accordion title="What is SLB?">
          <div className="contect-info">
            <div className="contect-info-content">
              <p>
              Using the Securities Lending and Borrowing Mechanism, investors can take out short-term loans or long-term loans of their stock. Hedging can be accomplished without resorting to the futures market thanks to the platform. Investors who borrow money from SLB are typically short-term traders who wish to sell shares they don't own. Lenders, on the other hand, are investors who purchased shares with the intention of holding them for the long term but have already sold them or otherwise disposed of them.
              </p>
            </div>
          </div>
        </Accordion>
      </div>

      {/* <div className="trading-section-4">
        <img src="/images/trading-faq.svg" alt="" />
        <div className="section-4-content">
          <h1>What is F&O</h1>
          <p>
            It is possible to buy and sell a specific stock or index in the future by using derivative contracts such as futures and options.
            The derivatives market is a subset of the equities market that deals in financial instruments. The most frequent form of derivative contract involves the purchase and sale of futures and options. It is a less risky investment than the stock market because of its speculative character.

          </p>
        </div>
      </div>
      <div className="trading-section-2">
        <h1>What is Comodity?</h1>
        <p>
        You can trade commodity derivative in Gold, Silver, Crude Oil, Copper, Zinc, Lead, member of MCX and National Commodity & Derivatives Exchange Limited .Nickel, Natural Gas, Refined Soya, Menthe Oil, Soya bean, guar, Chana, Sugar, Black Pepper (Kali mirch), Cardamom, Chilly, Jeera (Cumin) and other Commodities. You shall have to procure user ID and Password first from Kalpataru.
        </p>
      </div>
      <div className="trading-section-2">
        <h1>What is SLB?</h1>
        <p>
        Using the Securities Lending and Borrowing Mechanism, investors can take out short-term loans or long-term loans of their stock. Hedging can be accomplished without resorting to the futures market thanks to the platform. Investors who borrow money from SLB are typically short-term traders who wish to sell shares they don't own. Lenders, on the other hand, are investors who purchased shares with the intention of holding them for the long term but have already sold them or otherwise disposed of them.
        </p>
      </div> */}
    </div>
  );
}
