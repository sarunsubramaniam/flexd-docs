import React from "react";
import ban from "../images/docs/ban.png";
import cube from "../images/docs/cube.png";
import magic from "../images/docs/magic.png";
import responsive from "../images/docs/responsive.png";

export default function FeatureSection() {
  return (
    <div className="wrapper-fluid doc-features">
      <div className="wrapper">
        <div className="grid-wrapper">
          <div className="grid-6 grid-md doc-feature-item">
            <img src={responsive} alt="" />
            <h6>Responsive</h6>
          </div>
          <div className="grid-6 grid-md doc-feature-item">
            <img src={cube} alt="" />
            <h6>Flexbox</h6>
          </div>
          <div className="grid-6 grid-md doc-feature-item">
            <img src={magic} alt="" />
            <h6>Elegant UI</h6>
          </div>
          <div className="grid-6 grid-md doc-feature-item">
            <img src={ban} alt="" />
            <h6>jQuery Free</h6>
          </div>
          <div className="grid-6 grid-md doc-feature-item">
            <img src={responsive} alt="" />
            <h6>SASS</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
