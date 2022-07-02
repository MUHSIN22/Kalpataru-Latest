import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import {AiFillLinkedin, AiOutlineTwitter, AiFillFacebook} from 'react-icons/ai'
import {BsInstagram} from 'react-icons/bs'
import './footer.css'
export default function Footer() {
  const [footerBg,setFooterBg] = useState("")

  useEffect(() => {
    if(window.innerWidth < 500){
      setFooterBg("Footer-bg1.png")
    }else{
      setFooterBg("Footer-bg.png")
    }
  },[])
  return (
    <div className='Footer' style={{ backgroundImage: `url("/images/${footerBg}")` }}>
      <div className="socialmedia-icon">
        <a href='https://www.facebook.com/kalpatarumultiplerltd'><Facebook/></a> 
        <a href='https://www.instagram.com/kalpataru_multiplier_ltd/' ><Instagram /></a> 
        <a href='https://www.linkedin.com/company/kalpatarumultiplierltd/' ><LinkedIn /> </a>
        <a href='https://twitter.com/Kalpataru_Multi' ><Twitter /></a>
      </div>

      <div className="socialmedia-icon-mobile">
        <a href='https://www.facebook.com/kalpatarumultiplerltd'>
          <AiFillFacebook/>
        </a> 
        <a href='https://www.instagram.com/kalpataru_multiplier_ltd/' >
          <BsInstagram/>
        </a> 
        <a href='https://www.linkedin.com/company/kalpatarumultiplierltd/' >
          <AiFillLinkedin />
        </a>
        <a href='https://twitter.com/Kalpataru_Multi' >
          <AiOutlineTwitter />
        </a>
      </div>
      <div className="section-2">
        <div className="section-2-image">
          <img src='/images/logo.svg' alt />
        </div>
        <div className="section-2-content">
          <Link to='/aboutus'>About Us</Link>
          <Link to='/services'>Services</Link>
          <Link to='/contact-us'>Contact Us</Link>
          <Link to='/download'> Downloads</Link>
          <Link to='/'> Careers</Link>
          <Link to='/'>Privacy Policy</Link>
          <Link to='/'>Terms of Use</Link>
          <Link to='/'> Disclaimer</Link>
          <Link to='/'>NSE</Link>
          <Link to='/'>BSE</Link>
          <Link to='/'>MCX</Link>
          <Link to='/'>CDSL</Link>
          <Link to='/'>SEBI</Link>
          <Link to='/'>SCORES</Link>
          <Link to='/investor-charter'>Investor Charter</Link>
        </div>
      </div>
      <div className="footer-row">
        <div className="section-3">
          <h1>Kalpataru Multiplier Ltd.</h1>
          <p>A trusted, time-tested, and ethical Share Broker, Mutual Fund Distributor, and D.P. in the current setting in this region. Since 1992, Kalpataru has been a one-stop-shop for all of your investment concerns, demands, and requirements.</p>
          <h2>Address</h2>
          <p>Hall No. 2, 1st Floor Western Block,</p>

            <p>Above Central Bank, GTB Complex,</p>

           <p>T. T. Nagar, Bhopal-462003</p>
        </div>
        <div className="section-4">
          <Link to='/'>Security Policy</Link>
          <Link to='/'>Policies and Procedure</Link>
          <Link to='/'>PMLA Policy</Link>
          <Link to='/'> Surveillance Policy</Link>
          <Link to='/privacy-policy'>Privacy Policy</Link>
          <Link to='/'>Branch Supervision Policy</Link>
          <Link to='/'>SEBI Complaint</Link>
          <Link to='/'> Investor Charter</Link>
        </div>
        <div className="section-5">
          <Link to='/'>Disclaimer</Link>
          <Link to='/'>RMS Policy</Link>
          <Link to='/'>Useful Links</Link>
          <Link to='/'>Careers</Link>
          <Link to='/'>Internal Office
            Automation Software</Link>
          <Link to='/investor-charter'>Investor Complaints</Link>

        </div>
        <div className="section-6">
          <div className="call-wrapper">
            <p>Call Us:  
            <a href="tel:+91-9425008895 "> 9425008895, </a>
            <a href="tel:+91-0755-4276725">0755-4276725, </a>
            <a href='tel:+91-0755-4276726'>0755-4276726</a>
            </p>
          </div>
       <p>Email Us: <a href = "kmlho@kalpatarumulti.com">kmlho@kalpatarumulti.com</a></p>
        </div>
      </div>
    </div>
  )
}
