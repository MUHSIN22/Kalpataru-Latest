import React, { useRef } from 'react'
import Accordion from '../../Components/Accordion/Accordion'
import BannerSecondary from '../../Components/BannerSecondary/BannerSecondary'
import './Services.css'
import { Link } from "react-router-dom";
export default function Services() {
  const topCardRef = useRef();
  const bottomCardRef = useRef();
  let isSwap = false;

  const swapTheCard = () => {
    if(!isSwap){
      console.log('here');
      topCardRef.current.style.transform = "translateX(-55%)"
      bottomCardRef.current.style.transform = "translateX(55%)"
      setTimeout(() => {
        bottomCardRef.current.style.zIndex = '3'
        topCardRef.current.style.transform = "translateX(5%)"
        bottomCardRef.current.style.transform = "translateX(-5%)"
      },300)
      isSwap = true;
    }else{
      bottomCardRef.current.style.transform = "translateX(-55%)"
      topCardRef.current.style.transform = "translateX(55%)"
      setTimeout(() => {
        bottomCardRef.current.style.zIndex = '1'
        bottomCardRef.current.style.transform = "translateX(5%)"
        topCardRef.current.style.transform = "translateX(-5%)"
      },300)
      isSwap = false;
    }
  }

  return (
    <main className="services-page">
    <div className="section-1">
      <div className="section-1-content">
        <h1>Mutual Funds</h1>
        <p>Active mutual funds have an edge over passive funds in the long run...</p>
        <Link to="/applumutualfund">Apply Mutual Funds</Link>
      </div>
      <div className="section-1-image">
        <img src='images/service-banner.png' alt='' />
      </div>
    </div>
        <div className="service-wrapper">
       
            <h1>Mutual Funds Distributor</h1>
            <div className="service-accordion">
            <Accordion  title="What are Mutual funds?">
                <p>
                  When people invest money in mutual funds, that money is pooled together and then invested in various assets such as stocks, bonds, short-term money market instruments, and other types of securities.
                </p>
            </Accordion>
            </div>
            <div className="pention-schema-grid">
              <div className="top-card" ref={topCardRef}>
                <img src="/images/services/pention.png" alt="" className="pension-img" />
                <div className="card-content">
                  <h1>National Pension Scheme</h1>
                  <p >
                    The Government of India established the National Pension System (NPS) 
                    so that all participants would receive a steady stream of money once they 
                    reached retirement age. The PFRDA (Pension Fund Regulatory and Development Authority) 
                    oversees NPS. It allows you to invest in the scheme throughout your employment.
                  </p>
                  <button className="btn-see-more" onClick={swapTheCard}>See More</button>
                </div>
              </div>
              <div className="bottom-card" ref={bottomCardRef}>
                <p >
                    It was introduced by the government in 
                    2004. Initially, it was an exclusive scheme 
                    available only to government employees. 
                    However, in 2009, NPS in India was made 
                    available to employees beyond the public 
                    sector. It allows you to invest in the 
                    scheme throughout your employment.
                  </p>
                  <button className="btn-see-more" onClick={swapTheCard}>See Less</button>
              </div>
            </div>
            <div className="section-2">
        <div className="section-2-content">
          <div className="section-2-image">
            <img src="/images/ipo-image2.svg" alt="" />
          </div>
          <div className="section-2-col">
            <h1>BONDS</h1>
            <p>
              Investing in a bond is similar to lending money to a firm or the government. 
              The loan is used by the company for operating expenses, and the investor earns interest. 
              A bond's market value might fluctuate over time.
            </p>
          </div>
        </div>
        <div className="section-2-col">
          <h2>Is Bond a good investment? </h2>
          <p>
          Investing in bond funds is a sensible alternative to only buying equities for 
          portfolio diversification. Bonds are safer investment options than stock markets or mutual funds.
          </p>
        </div>
      </div>

            <h1 className="main-title">Tax saving schemes</h1>
            <Accordion title="Tax saving schemes">
                <p className="section-subtitle">
                  A Tax-saving mutual funds are like other mutual funds but save taxes. Tax-saving mutual 
                  funds provide tax advantages under section 80C of the Indian Income Tax Act. 
                  <br /> <br />
                  54 EC- One of the ways to save on your capital gains tax is to invest in bonds
                   within six months of the trading of the property and receiving the gains. On investing in 
                   bonds, you can claim a tax exemption under Section 54EC of the Indian Income Tax Act, 1961.
                </p>
            </Accordion>
        </div>
    </main>
  )
}
