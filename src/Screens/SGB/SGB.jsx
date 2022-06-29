import React from "react";
import TablePrimary from "../../Components/TablePrimary/TablePrimary";
import SGBTable from "../../JSON DB/SGBTable";
import "./Sgb.css";
export default function SGB() {
  return (
    <div className="SGB">
      <div className="section-1">
        <div className="section-1-content">
          <h1>Sovereign Gold Bonds</h1>
          <p>
            SGBs are gold-denominated government securities. They serve as a substitute for owning gold in the form of coins. There is a cash payment for the issue price of a bond, and it is repaid in cash at maturity. The Reserve Bank of India issues the Bond on behalf of the Indian government.
          </p>
        </div>
        <div className="sectiom-1-image">
          <img src="/images/sgb.svg" alt="" />
        </div>
      </div>
      <div className="mutualFund-header">
        <h1 className="section-title">Sovereign Gold Bonds</h1>
      </div>
      <div className="parent-table">
        <TablePrimary data={SGBTable}/>
      </div>
    </div>
  );
}
