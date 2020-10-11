import React, { useEffect } from "react";
import Menu from "../Categories/Menu/Menu";
import ComponentGroup from "../Categories/ComponentGroup";
import Header from "../Common/Header";
import CategoryTab from "../Categories/Tab/CategoryTab";

export default function Documentation() {
  useEffect(() => {});
  return (
    <React.Fragment>
      <Header theme="opaque" button={true} />
      <div className="header-offset"></div>
      <CategoryTab />
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
