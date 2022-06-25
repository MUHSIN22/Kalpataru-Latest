import React, { useState } from "react";
import marginList from "../../JSON DB/marginList";
import TablePrimary from "../TablePrimary/TablePrimary";
import "./TableTab.css";
export default function TableTab() {
  const [ShowTab, setShowTab] = useState("NSE_Cash");
  return (
    <div className="TableTab-container">
      <section className="TableTab-section container-padding">
        <div className="TableTab-btns-wrapper">
          <button onClick={() => setShowTab("NSE_Cash")} className={`TableTab-btn-tbl ${ShowTab === 'NSE_Cash' && ' Table-ActiveTab'}`}>NSE Cash</button>
          <span className="TableTab-v-line-red"></span>
          <button onClick={() => setShowTab("Margin-MTF")} className={`TableTab-btn-tbl ${ShowTab === 'Margin-MTF' && ' Table-ActiveTab'}`}>MTF</button>
          <span className="TableTab-v-line-red"></span>
          <button onClick={() => setShowTab("Margin-NSF_F&O")} className={`TableTab-btn-tbl ${ShowTab === 'Margin-NSF_F&O' && ' Table-ActiveTab'}`}>NSF F&O</button>
          <span className="TableTab-v-line-red"></span>
          <button onClick={() => setShowTab("Margin-MCX")} className={`TableTab-btn-tbl ${ShowTab === 'Margin-MCX' && ' Table-ActiveTab'}`}>MCX</button>
          <span className="TableTab-v-line-red"></span>
          <button onClick={() => setShowTab("Margin-MTF_FUT")} className={`TableTab-btn-tbl ${ShowTab === 'Margin-MTF_FUT' && ' Table-ActiveTab'}`}>MTF vs FUT</button>
        </div>
        <div className="TableTab-table-wrapper">
          {ShowTab === "NSE_Cash" && (
            <div className="Margin-Cal NSE_Cash">
              {" "}
              <TablePrimary data={marginList.nse} />
            </div>
          )}
          {ShowTab === "Margin-MTF" && (
            <div className="Margin-Cal Margin-MTF">
              {" "}
              <TablePrimary data={marginList.MTF} />
            </div>
          )}
          {ShowTab === "Margin-NSF_F&O" && (
            <div className="Margin-Cal Margin-NSF_F&O">
              {" "}
              <TablePrimary data={marginList.nse} />
            </div>
          )}
          {ShowTab === "Margin-MCX" && (
            <div className="Margin-Cal Margin-MCX">
              {" "}
              <TablePrimary data={marginList.MCX} />
            </div>
          )}
          {ShowTab === "Margin-MTF_FUT" && (
            <div className="Margin-Cal Margin-MTF_FUT">
              {" "}
              <TablePrimary data={marginList.MTFFUT} />
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
