import React, { useEffect, useContext } from "react";
import Prism from "prismjs";
import { DataConsumer } from "../Context/Context";
import { Route } from "react-router-dom";

export default function ComponentGroup() {
  useEffect(() => {
    Prism.highlightAll();
  });
  const [data] = useContext(DataConsumer);
  const pageData = data.page;

  return (
    <React.Fragment>
      {data[pageData].map((item, idx) => {
        return (
          <Route path={`/documentation/${pageData}/${item.dataId}`}>
            <div
              id={item.dataId}
              className={`component-section fm-tab ${item.theme}`}
            >
              {item.component}
            </div>
          </Route>
        );
      })}
    </React.Fragment>
  );
}
