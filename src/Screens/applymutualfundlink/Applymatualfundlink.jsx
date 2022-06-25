import React from "react";
import "./applymatualfundlink.css";
import CustomInputs from "../../Components/Inputs/Input";
import { ArrowDropDown } from "@mui/icons-material";
export default function Applymatualfundlink() {
  return (
    <div className="Applymatualfundlink">
      <h1 className="section-title">
        Baroda BNP Paribas Aggressive Hybrid Fund(G)-Direct Plan
      </h1>
      <div className="row">
        <div className="col">
          <h3 className="h3-span">
            18.56
            <ArrowDropDown />
            -01.0(-0.54%)
          </h3>
          <p>
            <span>Nav as on:</span> 25 May-22
          </p>
        </div>
        <div className="col">
          <h3>
            <span>Fund Family:</span> Baroda BNP Paribas Mutual Fund
          </h3>
          <p>
            <span>Fund Class:</span> Hybrid - Aggressive Hybrid Fund
          </p>
        </div>
      </div>
      <div className="form">
        <h1 className="section-title">Apply for Mutual Funds</h1>
        <h3>Please leave your details and we will get in touch with you.</h3>
        <div className="customInput">
          <CustomInputs label="Name" name="Name" width={100} type="text" />
          <CustomInputs label="Mobile No" name="Name" width={100} type="text" />
          <CustomInputs label="Email" name="Name" width={100} type="text" />
          <CustomInputs label="City" name="Name" width={100} type="text" />
          <label>
            <input type="checkbox" />I agree to the Terms and Conditions
          </label>
        </div>
        <button>Apply Now</button>
      </div>
    </div>
  );
}
