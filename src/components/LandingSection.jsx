import React from "react";
import logo from "../images/docs/logo.png";

export default function LandingSection() {
  return (
    <div className="wrapper component-section">
      <div className="grid-wrapper doc-header-content">
        <div className="grid-sm-7">
          <img src={logo} alt="" />
          <span>
            <h4>
              A free, open source, responsive UI framework completely built with
              <span>Flexbox & SASS</span>
            </h4>
          </span>
          <div className="grid-12 button-wrapper">
            <button className="button white">Get Started</button>
            <button className="button white">Download</button>
          </div>
        </div>
      </div>
    </div>
  );
}
