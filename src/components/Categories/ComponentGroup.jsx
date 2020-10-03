import React, { useEffect, useContext } from "react";
import Prism from "prismjs";
import { DataConsumer } from "../Context/Context";

export default function ComponentGroup() {
  useEffect(() => {
    Prism.highlightAll();
  });
  const [data, setData] = useContext(DataConsumer);
  const pageData = data.page;

  return (
    <React.Fragment>
      {data.page === pageData
        ? data[pageData].map((item, idx) => (
            <div
              id={item.dataId}
              className={`component-section fm-tab ${item.theme}`}
            >
              {item.component}
            </div>
          ))
        : ""}
    </React.Fragment>
  );
}
