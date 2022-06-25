import React from "react";
import CustomInputs from "../../Components/Inputs/Input";
import TestimonialCarousel from "../../Components/TestimonialCarousel/TestimonialCarousel";
import "./PartnerWithUs.css";
export default function PartnerWithUs() {
  return (
    <div className="PartnerWithUs-Container">
      <div className="PartnerWithUs-Banner">
        <div className="Banner-Content">
          <h1>Partner With Us</h1>
          <p>
            Our power and entrepreneurial
            spirit will make it profitable!
          </p>
        </div>
        <div className="Banner-Image">
          <img src="/images/PWS-image.png" alt="" />
        </div>
      </div>
      <div className="Benefit-Container">
        <h1 >Benefit of Our association</h1>
        <div className="Benefits-Block">
          <p >
          An investment partner, also known as an investment firm, is a business that accepts funds from organisations and individuals and then invests it for a profit. Investment partner companies pool client funds to purchase investments on behalf of their clients. The way companies invest, what assets they buy, and who their customers are are all different. Based on their experience, aims, and investment strategy, a company's philosophy is formed.
          </p>
          <p >
          When acquiring a business, many companies prefer to be involved in all aspects of day-to-day operations, including sales, marketing, human resources, and so on. Investing with a financial counsellor is very different from investing with a financial partner. In addition to deciding what to invest in, an investment partner is also involved in managing the asset.
          </p>
        </div>
      </div>
      <div className="Details-Container">
        <h1 >Drop Your Details</h1>
        <div className="Details-Form-row">
          <div className="Form-image">
            <img src="/images/Details-image.png" alt="" />
          </div>
          <div className="Details-Form">
            <CustomInputs
              label="Name"
              name="Name"
              placeholder="John Doe"
              width={80}
              type="text"
            />
            <CustomInputs
              label="Email"
              name="Name"
              placeholder="JohnDoe@gmail.com"
              width={80}
              type="text"
            />
            <CustomInputs
              label="Phone No"
              name="Name"
              placeholder="1234567899"
              width={80}
              type="text"
            />
            <label htmlFor="Message">Message</label>
            <textarea name="Message" id="" cols="30" rows="10"></textarea>
            <div className="Details-button">
              {" "}
              <button className="Details-btn">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div className="Partner-With-Carousel">
        <TestimonialCarousel />
      </div>
    </div>
  );
}
