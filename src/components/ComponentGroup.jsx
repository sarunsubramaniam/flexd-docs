import React, { useContext } from "react";
import { DataConsumer } from "../Context";

export default function ComponentGroup() {
  const [data, setData] = useContext(DataConsumer);

  return (
    <React.Fragment>
      {data.map((item, idx) => (
        <React.Fragment key={idx}>{item.component}</React.Fragment>
      ))}
    </React.Fragment>
  );
}
