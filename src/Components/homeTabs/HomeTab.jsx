import React, { useState } from "react";
import "./HomeTab.css";
export default function HomeTab() {
  const [ShowTab, setShowTab] = useState("Target-NSE");
  return (
    <div className="HomePage-Tab-Container">
      <div className="Tab-Triggers-row">
        <button onClick={() => setShowTab("Target-NSE")} className={`Tab-Trigger ${ShowTab === 'Target-NSE' && 'Active-Tab'}`}>NSE</button>
        <button onClick={() => setShowTab("Target-BSE")} className={`Tab-Trigger ${ShowTab === 'Target-BSE' && 'Active-Tab'}`}>BSE</button>
        <button onClick={() => setShowTab("Target-MCX")} className={`Tab-Trigger ${ShowTab === 'Target-MCX' && 'Active-Tab'}`}>MCX</button>
      </div>
      <div className="Tab-Targets">
        {ShowTab === "Target-NSE" && (
          <div className="Target-NSE">
            <h1>Equities</h1>
            <h1>Derivatives</h1>
            <h1>Fixed Income & Debt</h1>
          </div>
        )}
        {ShowTab === "Target-BSE" && (
          <div className="Target-BSE">
            <h1>Equities</h1>
            <h1>Derivatives</h1>
            <h1>Fixed Income & Debt</h1>
          </div>
        )}

        {ShowTab === "Target-MCX" && (
          <div className="Target-MCX">
            <h1>Commodities & Bullion Metals</h1>
          </div>
        )}
      </div>
    </div>
  );
}
