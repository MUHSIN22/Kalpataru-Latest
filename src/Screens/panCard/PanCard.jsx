import React from "react";
import ContactUsBlock from "../../Components/ContactUs-Block/ContactUsBlock";
import "./pancard.css";
export default function PanCard() {
  return (
    <div className="PanCard">
      <div className="section-1">
        <div className="section-1-content">
          <h1>PAN Card Application</h1>
          <p>
            A PAN card is an essential document for any Indian citizen for proof
            of identity and more importantly for all your tax purposes. The
            Income Tax Department of India has made PAN card applications easier
            over the years with the help of the internet.
          </p>
        </div>
        <div className="section-1-image">
          <img src="images/pancard.svg" alt="" />
        </div>
      </div>
      <div className="section-3">
        <div className="mutualFund-header">
          <h1>How to apply for PAN Card</h1>
        </div>
        <div className="section-3-content">
          <p>
            Application of a PAN card can be done online as well as through
            offline methods. To apply for the card online, you can visit the
            official website of Protean eGov Technologies Limited (formerly
            NSDL) and fill in the required details. You can also visit the
            website of UTIIISL to do so. For offline application, you will be
            required to download the application form and submit it to the
            agency of your choice.
          </p>
        </div>
      </div>
      <div className="section-3">
        <div className="mutualFund-header">
          <h1>
            Online Process to apply for PAN Card
          </h1>
        </div>
        <div className="section-3-content-row">
          <h4> Step-1 </h4>
          <div className="col">
          <p>
            In order to apply for a PAN card online, you will have to visit the
            website of Protean eGov Technologies Limited(formerly NSDL)</p> 
            <p>where
            you can fill in the information which needs to be submitted.
          </p>
          </div>
        </div>
        <div className="section-3-content-row">
          <h4> Step-2</h4>
          <div className="col">
            <p>
              {" "}
              Click on the option 'Apply Online' on the top left corner since
              you are a new applicant.
            </p>
            <p>
              In the drop-down, you can select one from the three options which
              are:
            </p>
            <p>New PAN – Indian Citizen</p>
            <p>New PAN – Foreign Citizen</p>
            <p>Changes or Correction on Existing PAN/Re-print of PAN card.</p>
          </div>
        </div>
        <div className="section-3-content-row">
          <h4>Step-4 </h4>

          <div className="col">
            <p>
              After choosing any one of the following options, you will need to
              fill in your details.
            </p>
            <p>
              The information must be provided for these sections:
            </p>
            <p> Title</p>
            <p>First name</p>
            <p>Middle name</p>
            <p>Last name</p>
            <p>Date of Birth</p>
            <p>Email ID</p>
            <p>Phone number</p>
          </div>
        </div>
        <div className="section-3-content-row">
          <h4> Step-5</h4>
          <p>
            After providing the required information, you will have to re-type a
            captcha code and then click on 'Submit'.
          </p>
        </div>
        <div className="section-3-content-row">
          <h4> Step-6</h4>
          <p>
            After submitting, the website provides you with a 15-digit
            acknowledgement number and the page must be printed
          </p>
        </div>
      </div>
      <div className="contect-info">
        <ContactUsBlock />
      </div>
    </div>
  );
}
