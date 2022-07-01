import React, { useEffect, useRef, useState } from 'react'
import './Home.css'
import MultiCarousel from '../../Components/Multi-Carousel/Carousel'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import FaqCard from '../../Components/FaqCard/FaqCard';
import HomeSlider from '../../Components/HomeSlider/HomeSlider';
import SliderCard from '../../Components/sliderCard/SliderCard';
import FaqList from '../../JSON DB/FaqList';
import HomeTab from '../../Components/homeTabs/HomeTab'
import FlotingButton from '../floatingButton/FlotingButton'

export default function Home() {

    return (
        <main className="home-page">
            {/* <button className="btn-quick-service">Quick Service</button> */}
            <div className="home-banner">
                <div className="image-section">
                    <img src="/images/home/home-banner-img.png" alt="" />
                </div>
                <div className="banner-content">
                    <div className="top-content">
                    {/* <img src='/images/home-logo.png' alt='' /> */}
                    <p>Trusted by many people.... </p>
                    <h2>Start investing Today </h2>
                    </div>
                    <div className="heading">
                        <h1>Invest in</h1>
                      <div className="wrapper">
                        <div className="item">
                            <h1><span> Mutual Funds</span></h1>
                        </div>
                        <div className="item">
                            <h1><span>IPO</span></h1>
                        </div>
                        <div className="item">
                            <h1><span>Stock</span></h1>
                        </div>
                      </div>
                    </div>
                    <Link to='/signup'>Get Started</Link>
                </div>

            </div>
<FlotingButton/>
            <div className="welcome-section">
                <div className="welcome-content">
                    <h1 className="section-title">Welcome to <span>Kalpataru</span> Multiplier Ltd.</h1>
                    <div className="welcome-card">
                        <p className="card-para section-para">
                            The desired Devine Tree, Kalpataru is a widely regarded,
                            time-tested, and transparent Share Broker, Investment Distributor,
                            and D.P. in the current setting of this region. All of your investment
                            needs and concerns can be met by Kalpataru, which has been in business since
                            1992. Derivative (F&O) trading, currency trading, IPO, mutual fund, and
                            pan card services are all part of our business.
                        </p>
                        <Link to='/aboutus' className="btn-read-more">Read More</Link>
                    </div>
                </div>
                <div className="welcome-image-section">
                    <img src="/images/home/welcome.png" alt="" className="welcome-image" />
                </div>
            </div>

            <div className="features-section">
                <div className="feature-image-wrapper">
                    <img src="/images/home/feature.png" alt="" />
                </div>
                <div className="feature-content">
                    <h1>Features</h1>
                    <div className="features-list">
                        <div className="feature-card">
                            Expert Advisory
                        </div>
                        <div className="feature-flow">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <div className="feature-card">
                            Transparent Pricing
                        </div>
                        <div className="feature-flow">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <div className="feature-card">
                            Flexible Brokerage Plans
                        </div>
                        <div className="feature-flow">
                            <FontAwesomeIcon icon={faArrowRight} />
                        </div>
                        <div className="feature-card">
                            Offers Both Online and Offline
                        </div>
                    </div>
                </div>
            </div>

            <div className="offered-product-section">
                <h1>Offered Products with Exchanges</h1>
                <div className="main-product-section">
                    <div className="op-image-wrapper">
                        <img src="/images/home/offered-product.png" alt="" />
                    </div>
                    <div className="op-content">
                      <HomeTab/>
                    </div>
                </div>
            </div>

            <div className="contact-section">
                <h1>Choose the correct path to Multiplying your wealth</h1>
                <h2>Drop Your Details</h2>
                <div className="contact-section-main">
                    <form className="contact-form">
                        <input type="text" placeholder='Name' className="contact-input" />
                        <input type="text" placeholder='Mobile Number' className="contact-input" />
                        <input type="email" placeholder='Email ID' className="contact-input" />
                        <button className="btn-submit" type='submit'>Submit</button>
                    </form>

                    <div className="contact-image-wrapper">
                        <img src="/images/home/contact.png" alt="" className="contact-image" />
                    </div>
                </div>
            </div>

            <div className="know-more-section">
                <div className="know-more-main">
                    <div className="know-more-content">
                        <h1>Want to know more about Kalpataru?</h1>
                        <p>Click here to know more...</p>
                        <Link to='/aboutUs' className="btn-about-us">About Us</Link>
                    </div>
                    <div className="know-more-image-wrapper">
                        <img src="/images/home/about.png" alt="" />
                    </div>
                </div>
            </div>

            <div className="service-section">
                <div className="service-content">
                    <h1>Our Services</h1>
                    <div className="service-content-main">
                    <div className="service-cards-wrapper">
                        
                        <div className="service-card">
                            <h6 className="card-title"><a href='/trading'>Trading</a></h6>
                            <img src="/images/home/s2.png" alt="" className="service-card-img" />
                        </div>
                        <div className="service-card">
                            <h6 className="card-title"><a href='/services'>Mutual Fund</a></h6>
                            <img src="/images/home/s1.png" alt="" className="service-card-img" />
                        </div>
                        <div className="service-card">
                            <h6 className="card-title"><a href='depository'>Demat Services</a></h6>
                            <img src="/images/home/s3.png" alt="" className="service-card-img" />
                        </div>
                        <div className="service-card">
                            <h6 className="card-title"><a href='/ipo'>IPO</a></h6>
                            <img src="/images/home/s4.png" alt="" className="service-card-img" />
                        </div>
                        <div className="service-card">
                            <h6 className="card-title"><a href='/general-insurenece'>General Insurance</a></h6>
                            <img src="/images/home/s5.png" alt="" className="service-card-img" />
                        </div>
                        <div className="service-card">
                            <h6 className="card-title"><a href='/pancard'>PAN Card</a></h6>
                            <img src="/images/home/s6.png" alt="" className="service-card-img" />
                        </div>
                        <div className="service-card">
                            <h6 className="card-title"><a href='/sgb'>Sovereign Gold Bonds</a></h6>
                            <img src="/images/home/s7.png" alt="" className="service-card-img" />
                        </div>
                        <div className="service-card">
                            <h6 className="card-title">National Pension Schema</h6>
                            <img src="/images/home/s8.png" alt="" className="service-card-img" />
                        </div>
                    </div>
              <div className="service-image-wrapper">
                    <img src="/images/home/service.png" alt="" className="service-image" />
                </div>
                </div>
                </div>
            </div>


            <div className="Home-MultiCarousel-Container">
        <h1>Clients’ Testimonials</h1>
        <div className="Home-Multi-Carousel">
          <MultiCarousel />
        </div>
      </div>

            <section className="faq-section">
                <h1>FAQ's</h1>
                <div className="faq-wrapper">
                    {
                        FaqList.map((item, index) => (
                            <FaqCard key={index} data={item} />
                        ))
                    }
                </div>
            </section>
        </main>
    )
}
