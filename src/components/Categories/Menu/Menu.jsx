import React, { useEffect, useContext } from "react";
import { DataConsumer } from "../../Context/Context";

export default function Menu() {
  const [data, setData] = useContext(DataConsumer);
  useEffect(() => {
    (function () {
      let menuItem = document.querySelectorAll(".doc-menu ul li");
      [...menuItem].forEach((currentItem, idx) => {
        idx === 0
          ? currentItem.classList.add("active")
          : currentItem.classList.remove("active");
        currentItem.addEventListener("click", function (e) {
          [...menuItem].forEach((removeItem) => {
            removeItem.classList.remove("active");
          });
          let currentItem = e.currentTarget,
            targetComponent = currentItem.getAttribute("data-id"),
            fmTab = document.querySelectorAll(".fm-tab");
          [...fmTab].forEach((item, i) => {
            item.style.display = "none";
          });
          document.querySelector(`#${targetComponent}`).style.display = "block";
          currentItem.classList.add("active");
        });
      });
    })();
  });

  const pageData = data.page;

  // data[pageData].sort((a, b) => a.id - b.id);

  return (
    <React.Fragment>
      <div className="doc-menu">
        <ul>
          {data.page === pageData
            ? data[pageData].map((item, idx) => {
                return (
                  <li
                    key={idx}
                    data-id={item.dataId}
                    style={{
                      display: item.display === true ? "block" : "none",
                    }}
                  >
                    {item.name}
                  </li>
                );
              })
            : ""}
        </ul>
      </div>
    </React.Fragment>
  );
}
