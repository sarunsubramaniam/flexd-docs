import React, { useEffect, useContext } from "react";
import Prism from "prismjs";
import { DataConsumer } from "../Context";

export default function ComponentGroup() {
  useEffect(() => {
    Prism.highlightAll();
  });
  const [data, setData] = useContext(DataConsumer);

  return (
    <React.Fragment>
      {data.map((item, idx) => (
        <React.Fragment key={idx}>{item.component}</React.Fragment>
      ))}
    </React.Fragment>
  );
}
