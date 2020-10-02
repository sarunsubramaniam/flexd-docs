import React, { useEffect } from "react";
import Prism from "prismjs";
import logo from "../images/docs/logo.svg";
import Features from "./Features";
import { Link } from "react-router-dom";
import GetStarted from "./GetStarted";
import Header from "./Header";

export default function Landing() {
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <React.Fragment>
      <Header theme="opaque" button={false} />
      <div className="wrapper-fluid doc-landing">
        <div className="wrapper component-section">
          <div className="grid-wrapper doc-landing-content">
            <div className="grid-sm-7">
              <img src={logo} alt="" />
              <span>
                <h4>
                  A free, open source, responsive UI framework completely built
                  with
                  <span>Flexbox & SASS</span>
                </h4>
              </span>
              <div className="grid-12 button-wrapper">
                <Link className="button link large" to="/components">
                  Get Flexd<i className="fa fa-angle-right"></i>
                </Link>
                <Link className="button link large">
                  Download<i className="fa fa-angle-right"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Features />
      <div className="wrapper-fluid doc-body">
        <div className="wrapper">
          <div className="grid-wrapper">
            <div className="grid-12 grid-sm-12">
              <GetStarted />
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
