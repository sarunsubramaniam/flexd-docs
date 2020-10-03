import React from "react";
import JQueryIcon from "../../images/docs/jQuery.svg";
import FlexIcon from "../../images/docs/cube.svg";
import SassIcon from "../../images/docs/sass.svg";
import ElegantIcon from "../../images/docs/elegance.svg";
import DeviceIcon from "../../images/docs/responsive.svg";
import GitIcon from "../../images/docs/git.svg";

export default function Features() {
  return (
    <div className="wrapper-fluid doc-features">
      <div className="wrapper">
        <div className="grid-wrapper">
          <div className="grid-6 grid-md doc-feature-item">
            <img src={DeviceIcon} alt="" />
            <h6>Responsive</h6>
          </div>
          <div className="grid-6 grid-md doc-feature-item">
            <img src={FlexIcon} alt="" />
            <h6>Flexbox</h6>
          </div>
          <div className="grid-6 grid-md doc-feature-item">
            <img src={ElegantIcon} alt="" />
            <h6>Elegant UI</h6>
          </div>
          <div className="grid-6 grid-md doc-feature-item">
            <img src={JQueryIcon} alt="" />
            <h6>jQuery Free</h6>
          </div>
          <div className="grid-6 grid-md doc-feature-item">
            <img src={GitIcon} alt="" />
            <h6>Open Source</h6>
          </div>
          <div className="grid-6 grid-md doc-feature-item">
            <img src={SassIcon} alt="" />
            <h6>SASS</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
