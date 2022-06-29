import { AddCircle } from "@mui/icons-material";
import React, { useState } from "react";
import Accordion from "../../Components/Accordion/Accordion";
import ContactUsBlock from "../../Components/ContactUs-Block/ContactUsBlock";
import "./PrivacyPolicy.css";
export default function PrivacyPolicy() {
  return (
    <div className="PrivacyPolicy-Container">
      <div className="PrivacyPolicy-Banner">
        <div className="PrivacyPolicy-Banner-content">
          <h1>Privacy Policy</h1>
          <p>
            A statement about Kalpatru policy on content displayed in the
            website and user's personal details...
          </p>
        </div>
        <div className="PrivacyPolicy-Banner-Image">
          <img src="/images/PrivacyPolicy-BannerImage.png" alt="" />
        </div>
      </div>
      <div className="PrivacyPolicy-Dropdown-Col">
        <div className="Privacy-Dropdown-Header">
          <h1>Attention Investors!</h1>
        </div>
        <div className="PrivacyPolicy-Dropdowns">
          <Accordion title="PRIVACY POLICY STATEMENT">
            <p>
              We, at Kalpataru Multiplier LTD, acknowledge and accept that the
              personal details that you impart to us, is to be kept in strict
              confidentiality and to use the information only in the manner
              which would be beneficial to our customers. We consider our
              relationship with you as invaluable and strive to respect and
              safeguard your right to privacy.
            </p>
            <p>
              We shall use the personal information to improve our service to
              you and to keep you updated about our new product or information
              that may be of interest to you. The information collected from you
              would be used in the right spirit and context in which it is
              intended to be used. Your information would be used by us to
              process your trading request and to carry out the settlements of
              your obligations
            </p>
          </Accordion>
          <Accordion title="IMPART YOUR PERSONAL INFORMATION">
            <p>
              We, at Kalpataru Multiplier LTD,, acknowledge and accept that the
              personal details that you impart to us, is to be kept in strict
              confidentiality and to use the information only in the manner
              which would be beneficial to our customers. We consider our
              relationship with you as invaluable and strive to respect and
              safeguard your right to privacy.
            </p>
          </Accordion>
          <Accordion title="KALPATARU MULTIPLIER LTD">
            <p>
              We, at Kalpataru Multiplier LTD,, acknowledge and accept that the
              personal details that you impart to us, is to be kept in strict
              confidentiality and to use the information only in the manner
              which would be beneficial to our customers. We consider our
              relationship with you as invaluable and strive to respect and
              safeguard your right to privacy.
            </p>
          </Accordion>
          <Accordion title="INFORMATION SHARING AND DISCLOSURE">
            <p>
              We, at Kalpataru Multiplier LTD,, acknowledge and accept that the
              personal details that you impart to us, is to be kept in strict
              confidentiality and to use the information only in the manner
              which would be beneficial to our customers. We consider our
              relationship with you as invaluable and strive to respect and
              safeguard your right to privacy.
            </p>
          </Accordion>
        </div>
      </div>
      <ContactUsBlock />
    </div>
  );
}
