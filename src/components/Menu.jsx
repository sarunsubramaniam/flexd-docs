import React, { useEffect, useContext } from "react";
import { DataConsumer } from "../Context";

export default function Menu() {
  useEffect(() => {
    (function () {
      let menuItem = document.querySelectorAll(".doc-menu ul li");
      [...menuItem].forEach((currentItem, idx) => {
        currentItem.addEventListener("click", function (e) {
          [...menuItem].map((removeItem) =>
            removeItem.classList.remove("active")
          );
          let currentItem = e.currentTarget,
            targetComponent = currentItem.getAttribute("data-id"),
            fmTab = document.querySelectorAll(".fm-tab");
          [...fmTab].forEach((item) => {
            item.style.display = "none";
          });
          document.querySelector(`#${targetComponent}`).style.display = "block";
          e.target.classList.add("active");
        });
      });
    })();
  });

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
