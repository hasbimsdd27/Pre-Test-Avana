import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let setNavbar = null;
  const [sidebar, setSidebar] = useState(true);

  if (sidebar) {
    setNavbar = { display: "none" };
  } else {
    setNavbar = { display: "flex" };
  }

  return (
    <>
      <div className="mainContainer" style={{ transition: "0.5s" }}>
        <div className="sideBar" style={setNavbar}>
          <div className="sideBarContent">
            <h1>This is sidebar</h1>
          </div>
        </div>
        <div className="appContent">
          <div className="mainAppContent">
            <button
              className="button"
              onClick={() => {
                sidebar ? setSidebar(false) : setSidebar(true);
              }}
            >
              Hide Sidebar
            </button>
            <h1>This is main body</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
