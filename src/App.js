import React, { useEffect } from "react";
import "./App.css";
import "./scss/flexmaster.scss";
import Prism from "prismjs";
import Grid from "./components/Grid";
import Card from "./components/Card";
import Buttons from "./components/Buttons";
import Typography from "./components/Typography";
import Alerts from "./components/Alerts";
import Tabs from "./components/Tabs";
import Accordion from "./components/Accordion";
import Table from "./components/Table";
import GetStarted from "./components/GetStarted";
import Menu from "./components/Menu";
import LandingSection from "./components/LandingSection";
import FeatureSection from "./components/FeatureSection";
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
              <GetStarted />
              <Grid />
              <Accordion />
              <Alerts />
              <Buttons />
              <Card />
              <Table />
              <Tabs />
              <Typography />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
