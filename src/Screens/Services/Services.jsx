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
                  A mutual fund is a company that pools money from many 
                  investors and invests the money in securities such as stocks, 
                  bonds, and short-term debt.
                </p>
            </Accordion>
            </div>
            <div className="pention-schema-grid">
              <div className="top-card" ref={topCardRef}>
                <img src="/images/services/pention.png" alt="" className="pension-img" />
                <div className="card-content">
                  <h1>National Pension Scheme</h1>
                  <p >
                    It was introduced by the government in 
                    2004. Initially, it was an exclusive scheme 
                    available only to government employees. 
                    However, in 2009, NPS in India was made 
                    available to employees beyond the public 
                    sector. It allows you to invest in the 
                    scheme throughout your employment.
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
            Bonds are a type of investment designed to 
aid governments and corporations to raise 
money. In a mutual fund, money collected 
from various investors is taken together to 
buy a large variety of securities.
            </p>
          </div>
        </div>
        <div className="section-2-col">
          <h2>Is Bond a good investment? </h2>
          <p>
          Bond funds are a good way to diversify your portfolio, beyond just holding stocks. In terms of risk, bonds are comparatively less risky than stocks or mutual funds.
          </p>
        </div>
      </div>

            <h1 className="main-title">Tax saving schemes</h1>
            <Accordion title="Tax saving schemes">
                <p className="section-subtitle">
                  Tax saving mutual funds are just like any other mutual funds 
                  with an added tax-saving benefit. The special feature of this 
                  type of mutual fund is that the investments made in the 
                  tax-saving mutual funds are eligible for tax benefits 
                  under section 80C of the Indian Income Tax Act.
                </p>
            </Accordion>
        </div>
    </main>
  )
}
