import React from "react";
import ContactUsBlock from "../../Components/ContactUs-Block/ContactUsBlock";
import TablePrimary from "../../Components/TablePrimary/TablePrimary";
import mutualfundProfile from "../../JSON DB/mutualfundProfile";
import "./applyMutualFund.css";
export default function ApplyMutualFund() {
  return (
    <div className="ApplyMutualFund">
      <h1 className="section-title">FUND PROFILE</h1>
      <div className="mutualFund-content">
        <div className="mutualFund-header">
          <h1 className="section-title">Mutual Funds Profile</h1>
        </div>
        <div className="parent-table">
          <TablePrimary data={mutualfundProfile} />
        </div>
        <div className="contect-info">
          <ContactUsBlock />
        </div>
      </div>
    </div>
  );
}
