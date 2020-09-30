import React, { useState, useContext } from "react";
import { DataConsumer } from "../Context";

export default function Menu() {
  const [data, setData] = useContext(DataConsumer);
  data.sort((a, b) => a.id - b.id);

  return (
    <div className="doc-menu">
      <ul>
        {data.map((item, idx) => {
          return (
            <li
              key={idx}
              className={idx === 0 ? "active" : null}
              data-id={item.dataId}
              style={{ display: item.display === true ? "block" : "none" }}
            >
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
