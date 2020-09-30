import React, { useEffect, useContext } from "react";
import "./css/flexmaster.css";
import "./App.scss";
import Prism from "prismjs";
import ComponentGroup from "./components/ComponentGroup";
import Menu from "./components/Menu";
import LandingSection from "./components/LandingSection";
import FeatureSection from "./components/FeatureSection";
import { DataProvider } from "./Context";

function App() {
  useEffect(() => {
    /* Menu */
    (function () {
      let menuItem = document.querySelectorAll(".doc-menu ul li");
      [...menuItem].forEach((currentItem, idx) => {
        currentItem.addEventListener("click", function (e) {
          [...menuItem].map((removeItem) =>
            removeItem.classList.remove("active")
          );
          let currentItem = e.currentTarget,
            targetComponent = currentItem.getAttribute("data-id"),
            fmTab = document.querySelectorAll(".fm-tab");
          [...fmTab].forEach((item) => {
            item.style.display = "none";
          });
          document.querySelector(`#${targetComponent}`).style.display = "block";
          e.target.classList.add("active");
        });
      });
    })();
  });
  return (
    <React.Fragment>
      <DataProvider>
        <div className="wrapper-fluid doc-header">
          <LandingSection />
          <FeatureSection />
        </div>
        <div className="wrapper-fluid doc-body">
          <div className="wrapper">
            <div className="grid-wrapper">
              <div className="grid-sm-2">
                <Menu />
              </div>
              <div className="grid-12 grid-sm-10">
                <ComponentGroup />
              </div>
            </div>
          </div>
        </div>
      </DataProvider>
    </React.Fragment>
  );
}

export default App;
