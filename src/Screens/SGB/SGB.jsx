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
            A sovereign gold bond (SGB) is a government security denominated in kilos of gold. 
            This is an alternative to keeping gold in the form of paper currency. Cash is required from 
            investors to cover the issue price, and investors will get cash in exchange for their bonds when 
            they mature. Reserve Bank of India issues the Bond on the Government of India's behalf.
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
