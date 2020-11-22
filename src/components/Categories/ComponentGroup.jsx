import React, { useEffect, useContext } from "react";
import Prism from "prismjs";
import { DataConsumer } from "../Context/Context";
import { Route } from "react-router-dom";

export default function ComponentGroup() {
  const { dataVal, tabVal } = useContext(DataConsumer);
  const [data] = dataVal;
  const [tab, setTab] = tabVal;
  
  useEffect(() => {
    Prism.highlightAll();
    let url = window.location.pathname,
        category = url.split('/')[2];
    setTab((prev) => ({
      ...prev,
      currentTab: category,
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
      {data[tab.currentTab].map((item, idx) => {
        let dataId = item.name.toLowerCase().replace(' ','-');
        return (
          <React.Fragment key={dataId}>
            <Route exact path={`/documentation/${tab.currentTab}/${dataId}`}>
              <div
                id={dataId}
                className={`component-section fm-tab ${item.theme}`}
              >
                <div className="grid-wrapper">
                  <div className="grid-12">
                    <h3 className="section-title">{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
                  {React.createElement(item.component)}
              </div>
            </Route>
          </React.Fragment>
        );
      })}
    </React.Fragment>
  );
}
