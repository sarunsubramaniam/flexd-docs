import React from "react";
import Menu from "./Menu";
import ComponentGroup from "./ComponentGroup";
import Header from "./Header";
import Features from "./Features";

export default function Body() {
  return (
    <React.Fragment>
      <Header theme="opaque" button={true} />
      <div className="header-offset"></div>
      {/* <Features /> */}

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
    </React.Fragment>
  );
}
