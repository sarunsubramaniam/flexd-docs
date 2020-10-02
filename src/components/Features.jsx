import React from "react";
import JQueryIcon from "../images/docs/jQuery.svg";
import FlexIcon from "../images/docs/cube.svg";
import SassIcon from "../images/docs/sass.svg";
import ElegantIcon from "../images/docs/elegance.svg";
import DeviceIcon from "../images/docs/responsive.svg";
import GitIcon from "../images/docs/git.svg";

export default function Features() {
  return (
    <div className="wrapper-fluid doc-features">
      <div className="wrapper">
        <div className="grid-wrapper">
          <div className="grid-6 grid-md doc-feature-item">
            <img src={DeviceIcon} />
            <h6>Responsive</h6>
          </div>
          <div className="grid-6 grid-md doc-feature-item">
            <img src={FlexIcon} />
            <h6>Flexbox</h6>
          </div>
          <div className="grid-6 grid-md doc-feature-item">
            <img src={ElegantIcon} />
            <h6>Elegant UI</h6>
          </div>
          <div className="grid-6 grid-md doc-feature-item">
            <img src={JQueryIcon} />
            <h6>jQuery Free</h6>
          </div>
          <div className="grid-6 grid-md doc-feature-item">
            <img src={GitIcon} />
            <h6>Open Source</h6>
          </div>
          <div className="grid-6 grid-md doc-feature-item">
            <img src={SassIcon} />
            <h6>SASS</h6>
          </div>
        </div>
      </div>
    </div>
  );
}
