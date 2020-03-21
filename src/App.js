import React, { useState, useEffect } from "react";
import logo from "./assets/logo/avana-logo.png";
import avatar from "./assets/images/avtar-man.png";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";

function App() {
  let setNavbar = null;
  const [sidebar, setSidebar] = useState(true);
  const [hq, setHq] = useState(false);
  const [agent, setAgent] = useState(false);
  const [products, setProducts] = useState(false);
  const [webstore, setWebStore] = useState(false);
  const [setting, setSetting] = useState(false);
  const [modules, setModules] = useState(false);

  if (sidebar) {
    setNavbar = { display: "flex" };
  } else {
    setNavbar = { display: "none" };
  }

  return (
    <>
      <div className="mainContainer" style={{ transition: "0.5s" }}>
        <div className="sideBar" style={setNavbar}>
          <div className="sideBarContent">
            <div className="imageArea">
              <div className="imageContainer">
                <img className="logoImage" src={logo} alt="Logo" />
              </div>
              <div className="imageContainer">
                <img className="avatar" src={avatar} alt="Logo" />
              </div>
            </div>
            <div className="menuArea">
              <div className="sideBarParent">Dashboard</div>
              <div
                className="sideBarParent"
                onClick={() => setHq(!hq)}
                style={hq ? { backgroundColor: "#333" } : null}
              >
                <div>HQ</div>
                <div>
                  {hq ? (
                    <i className="fa fa-chevron-up"></i>
                  ) : (
                    <i className="fa fa-chevron-down"></i>
                  )}
                </div>
              </div>
              {hq ? (
                <div style={{ marginBottom: "5px" }}>
                  <div className="sideBarChild">Stockist</div>
                  <div className="sideBarChild">Dropship Affiliate</div>
                </div>
              ) : null}
              <div
                className="sideBarParent"
                onClick={() => setAgent(!agent)}
                style={agent ? { backgroundColor: "#333" } : null}
              >
                <div>Agent</div>
                <div>
                  {agent ? (
                    <i className="fa fa-chevron-up"></i>
                  ) : (
                    <i className="fa fa-chevron-down"></i>
                  )}
                </div>
              </div>
              {agent ? (
                <div style={{ marginBottom: "5px" }}>
                  <div className="sideBarChild">My Purchase</div>
                </div>
              ) : null}
              <div className="sideBarParent">Orders</div>
              <div
                className="sideBarParent"
                onClick={() => setProducts(!products)}
                style={products ? { backgroundColor: "#333" } : null}
              >
                <div>Products</div>
                <div>
                  {products ? (
                    <i className="fa fa-chevron-up"></i>
                  ) : (
                    <i className="fa fa-chevron-down"></i>
                  )}
                </div>
              </div>
              {products ? (
                <div style={{ marginBottom: "5px" }}>
                  <div className="sideBarChild">All Products</div>
                  {/* ada dhild lagi disini */}
                  <div className="sideBarChild">Categories</div>
                  <div className="sideBarChild">Variations</div>
                  <div className="sideBarChild">Collections</div>
                </div>
              ) : null}
              <div
                className="sideBarParent"
                onClick={() => setWebStore(!webstore)}
                style={webstore ? { backgroundColor: "#333" } : null}
              >
                <div>Web Store</div>
                <div>
                  {webstore ? (
                    <i className="fa fa-chevron-up"></i>
                  ) : (
                    <i className="fa fa-chevron-down"></i>
                  )}
                </div>
              </div>
              {webstore ? (
                <div style={{ marginBottom: "5px" }}>
                  <div className="sideBarChild">Settings</div>
                  {/* ada dhild lagi disini */}
                  {/* <div className="sideBarChild">Web Store Logo</div>
                  <div className="sideBarChild">Web Store Profile</div>
                  <div className="sideBarChild">Web Store Mobile Friendly</div>
                  <div className="sideBarChild">Infinite Scroll</div>
                  <div className="sideBarChild">Home Page Product Display</div>
                  <div className="sideBarChild">Show Filter Control</div> */}
                  <div className="sideBarChild">Google Analytic</div>
                  <div className="sideBarChild">Themes</div>
                  <div className="sideBarChild">Pages</div>
                  <div className="sideBarChild">Pages</div>
                  <div className="sideBarChild">SEO</div>
                  {/* ada child */}
                  <div className="sideBarChild">Store Newsletter</div>
                </div>
              ) : null}
              <div
                className="sideBarParent"
                onClick={() => setSetting(!setting)}
                style={setting ? { backgroundColor: "#333" } : null}
              >
                <div>Setting</div>
                <div>
                  {setting ? (
                    <i className="fa fa-chevron-up"></i>
                  ) : (
                    <i className="fa fa-chevron-down"></i>
                  )}
                </div>
              </div>
              {setting ? (
                <div style={{ marginBottom: "5px" }}>
                  <div className="sideBarChild">Shop Manager</div>
                  <div className="sideBarChild">Store Info</div>
                  <div className="sideBarChild">Shipping</div>
                  {/* ada child */}
                  <div className="sideBarChild">Payment</div>
                  <div className="sideBarChild">Invoicing</div>
                  <div className="sideBarChild">Developer</div>
                  <div className="sideBarChild">Tax-Information</div>
                </div>
              ) : null}
              <div
                className="sideBarParent"
                onClick={() => setModules(!modules)}
                style={modules ? { backgroundColor: "#333" } : null}
              >
                <div>Modules</div>
                <div>
                  {modules ? (
                    <i className="fa fa-chevron-up"></i>
                  ) : (
                    <i className="fa fa-chevron-down"></i>
                  )}
                </div>
              </div>
              {modules ? (
                <div style={{ marginBottom: "5px" }}>
                  <div className="sideBarChild">Facebook Marketing</div>
                  <div className="sideBarChild">Instagram</div>
                  <div className="sideBarChild">Messenger</div>
                  {/* ada child */}
                  <div className="sideBarChild">Blogspot</div>
                  <div className="sideBarChild">Twitter</div>
                  <div className="sideBarChild">Whatsapp</div>
                  <div className="sideBarChild">Avacredit</div>
                  <div className="sideBarChild">Avachat</div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="appContent">
          <div className="mainAppContent">
            <div className="contentContainer">
              <div className="blocks" style={{ backgroundColor: "#999" }}>
                <button className="button" onClick={() => setSidebar(!sidebar)}>
                  {sidebar ? "Hide Sidebar" : "Show Sidebar"}
                </button>
              </div>
              <div className="blocks" style={{ backgroundColor: "#999" }}></div>
              <div className="blocks" style={{ backgroundColor: "#999" }}></div>
              <div className="blocks" style={{ backgroundColor: "#999" }}></div>
              <div className="blocks" style={{ backgroundColor: "#999" }}></div>
              <div className="blocks" style={{ backgroundColor: "#999" }}></div>
              <div className="blocks" style={{ backgroundColor: "#999" }}></div>
              <div className="blocks" style={{ backgroundColor: "#999" }}></div>
              <div className="blocks" style={{ backgroundColor: "#999" }}></div>
              <div className="blocks" style={{ backgroundColor: "#999" }}></div>
              <div className="blocks" style={{ backgroundColor: "#999" }}></div>
              <div className="blocks" style={{ backgroundColor: "#999" }}></div>
              <div className="blocks" style={{ backgroundColor: "#999" }}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
