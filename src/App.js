import React, { useState, useEffect } from "react";
import logo from "./assets/logo/avana-logo.png";
import avatar from "./assets/images/avtar-man.png";
import { connect } from "react-redux";
import "./App.css";
import "font-awesome/css/font-awesome.min.css";
import { getSidebar } from "./_actions/setting";
import Accordion from "./components/Accordion";
const App = props => {
  useEffect(() => {
    props.getSidebar();
  }, []);
  let setChild = null;
  let setNavbar = null;
  const [sidebar, setSidebar] = useState(true);

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
              {props.SidebarMenu.data.map((item, index) =>
                item.isShowed ? (
                  item.isAllowed ? (
                    item.childs ? (
                      <Accordion title={item.id} key={index}>
                        {item.childs
                          ? item.childs.map((item, index) =>
                              item.isShowed ? (
                                item.isAllowed ? (
                                  <div className="accordion-text" key={index}>
                                    {item.id}
                                  </div>
                                ) : (
                                  <div
                                    className="accordion-text disabled"
                                    key={index}
                                  >
                                    {item.id}
                                  </div>
                                )
                              ) : null
                            )
                          : null}
                      </Accordion>
                    ) : (
                      <div className="noChild">{item.id}</div>
                    )
                  ) : (
                    <div className="disabled">{item.id}</div>
                  )
                ) : null
              )}
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
};

const mapStateToProps = state => {
  return {
    SidebarMenu: state.SidebarMenu
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSidebar: () => dispatch(getSidebar())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
