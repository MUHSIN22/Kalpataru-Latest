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
          Trading is the process of buying and selling financial instruments to make money. These instruments 
          are made up of different assets that have a value that goes up and down, and you can trade on 
          which way that value goes.
          <br /><br />
          When buyers and sellers agree on the ask price or the bid price, this is called a trade. 
          If there are more sellers than buyers, buyers may be more likely to raise their bids. As a result, 
          sellers will raise their prices, which will make the price go up.
        </p>
      </div>
      <div className="trading-section-3">
        <h1>Equity</h1>
        <Accordion title="What is Equity?">
          <div className="contect-info">
            <div className="contect-info-content">
              <p>
                Equity refers to a company's ownership shares. In simplest words, it is the entire amount of money a 
                shareholder would get if all of a company's obligations were paid off and its assets were liquidated.
                 When a person invests in a company's equity, he or she becomes a minority shareholder.
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
                Using derivative contracts like futures and options, you can buy and sell a specific stock or index in 
                the future. The derivatives market is a part of the stock market where financial instruments are traded.
                 Futures and options are the most common types of derivative contracts that people buy and sell. 
                 It is a less risky investment than the stock market.
              </p>
            </div>
          </div>
        </Accordion>
      </div>
      <div className="trading-section-3">
        <h1>Comodity</h1>
        <Accordion title="What is Commodity?">
          <div className="contect-info">
            <div className="contect-info-content">
              <p>
                The buying and selling of commodities and derivatives of those commodities takes place on a commodities 
                exchange, similar to the way stock and share transactions are conducted.
                <br /><br />
                • Barley, chana, maize, moong, paddy, etc. are only some of the commodities that may be traded on 
                the National Commodity & Derivatives Exchange Limited (NCDEX).
                <br /><br />
                • Bullion, base metals, energy, and more may all be traded on the Multi Commodity Exchange of India 
                Limited (MCX).
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
                SLB stands for "Securities Lending and Borrowing," a system that allows investors to borrow or lend shares 
                to other market players. The exchange may be used as a substitute for the futures market for 
                protecting against risk. Investors looking to borrow money via SLB are often short sellers. On the 
                other hand, lenders are long-term investors who own shares that are now sitting dormant in their Demat accounts.
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
