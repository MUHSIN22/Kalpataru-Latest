import React from "react";
import { Link } from "react-router-dom";
import "./ContactUsBlock.css";
export default function ContactUsBlock() {
  return (
    <div className="ContactUsBlock-Container">
      <div className="ContactUs-Card">
        <img
          src="/images/ContactUs-Cup1.png"
          alt=""
          className="ContactUs-Upper-Cup"
        />
        <h1>Didn’t Find what you were Looking For ?</h1>
        <Link to='/contact-us' className="ContactUs-link">Contact Support</Link>
        <img
          src="/images/ContactUs-Cup2.png"
          alt=""
          className="ContactUs-Lower-Cup"
        />
      </div>
    </div>
  );
}
