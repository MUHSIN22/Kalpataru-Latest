import React from "react";
import "./AboutUs.css";
export default function AboutUs() {
  return (
    <div className="AboutUs-Container">
      <div className="AboutUs-Banner">
        <div className="AboutUs-Banner-Content">
          <h1>About Us</h1>
          <p> Central India's most trusted,time tested and transparent</p>
        </div>
        <div className="AboutUs-Banner-Image">
          <img src="/images/AboutUs-image.png" alt="" />
        </div>
      </div>
      <div className="AboutUs-Content-row">
        <div className="AboutUs-Logo">
          <img src="/images/AboutUs-Logo.png" alt="" />
        </div>
        <div className="AboutUs-Content">
          <p >
            Kalpataru is a wishful Devine Tree and in present context a widely
            Trusted, Time tested and Transparent Share Broker, Mutual Fund
            Distributor and D.P. of this region. Kalpataru offers a complete
            solution to all your Investment problems, needs and requirements
            since 1992.
          </p>
          <p >
            Kalpataru is a spectrum of vision, vibgyor , style, standard,
            creativity, craze and honesty. All the seven colours of share
            business can be felt and enjoyed in Kalpataru. Our field of
            operation is Share Trading, Commodity, Derivative (F&O) Trading,
            Currency, IPO, Demat, Mutual Fund and Pan Card Services
          </p>
          <p >
            So when ever and where ever you need, you will find Kalpataru at
            your door step to help you trade and transact with any stock
            exchange in India or abroad.
          </p>
        </div>
      </div>

      <div className="about-milestone-container">
        <h1>Milestone Reached</h1>
        <img src="/images/about us/about success.png" className="about-success-img" alt="" />
        <div className="milestone-cards-wrapper">
          
          <div className="milestone-card">
            <img src="/images/about us/m1.png" className="milestone-img" alt="" />
            <h3 className="milestone-title">2000</h3>
            <p className="milestone-description">
              Kalpataru is a spectrum of vision, vibgyor, 
              style, standard, creativity, craze and 
              honesty. All the seven colours of share 
              business can be felt and enjoyed in Kalpataru. 
            </p>
          </div>

          <div className="milestone-card">
            <img src="/images/about us/m2.png" className="milestone-img" alt="" />
            <h3 className="milestone-title">2005</h3>
            <p className="milestone-description">
              Kalpataru is a spectrum of vision, vibgyor , 
              style, standard, creativity, craze and 
              honesty. All the seven colours of share 
              business can be felt and enjoyed in Kalpataru. 
            </p>
          </div>

          <div className="milestone-card">
            <img src="/images/about us/m3.png" className="milestone-img" alt="" />
            <h3 className="milestone-title">2012</h3>
            <p className="milestone-description">
              Kalpataru is a spectrum of vision, vibgyor , 
              style, standard, creativity, craze and 
              honesty. All the seven colours of share 
              business can be felt and enjoyed in Kalpataru. 
            </p>
          </div>

          <div className="milestone-card">
            <img src="/images/about us/m4.png" className="milestone-img" alt="" />
            <h3 className="milestone-title">2015</h3>
            <p className="milestone-description">
              Kalpataru is a spectrum of vision, vibgyor , 
              style, standard, creativity, craze and 
              honesty. All the seven colours of share 
              business can be felt and enjoyed in Kalpataru. 
            </p>
          </div>

          <div className="milestone-card">
            <img src="/images/about us/m5.png" className="milestone-img" alt="" />
            <h3 className="milestone-title">2022</h3>
            <p className="milestone-description">
              Kalpataru is a spectrum of vision, vibgyor , 
              style, standard, creativity, craze and 
              honesty. All the seven colours of share 
              business can be felt and enjoyed in Kalpataru. 
            </p>
          </div>
        </div>
      </div>

      <div className="Meet-The-Team-Container">
        <h1>Meet The Team</h1>
        <div className="Team-Grid-Container">
          <div className="Team-Cards-Grid">
            <div className="Team-Card">
              <h4>Ramesh Manya Jain</h4>
              <p className="section-para">Chairman</p>
            </div>
            <div className="Team-Card">
              <h4>Aditya Manya Jain</h4>
              <p className="section-para">Vice Chairman</p>
            </div>
            <div className="Team-Card">
              <h4>Amitabh Manya Jain</h4>
              <p className="section-para">Managing Director</p>
            </div>
            <div className="Team-Card">
              <h4>Sharda Manya Jain</h4>
              <p className="section-para">Director</p>
            </div>
            <div className="Team-Card">
              <h4>Savita Manya Jain</h4>
              <p className="section-para">Director</p>
            </div>
            <div className="Team-Card">
              <h4>Ramesh Manya Jain</h4>
              <p className="section-para">Director</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Achievements-Container">
        {" "}
        <h1>Membership Details</h1>
        <div className="Container-Row">
          <div className="Container-Col">
            <img src="/images/AboutUs-Logo.png" alt="" />
            <p className="section-para">
            Kalpataru is a wishful Devine Tree and in present context a widely Trusted.
            </p>
          </div>
          <div className="Container-Images">
            <div className="achievement-wrapper">
              <img src="/images/about us/achievement 1.png" alt="" className="achievement-image" />
            </div>
            <div className="achievement-wrapper">
              <img src="/images/about us/achievement 2.png" alt="" className="achievement-image" />
            </div>
            <div className="achievement-wrapper">
              <img src="/images/about us/achievement 3.png" alt="" className="achievement-image" />
            </div>
            <div className="achievement-wrapper">
              <img src="/images/about us/achievement 4.png" alt="" className="achievement-image" />
            </div>
            <div className="achievement-wrapper">
              <img src="/images/about us/achievement 5.png" alt="" className="achievement-image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
