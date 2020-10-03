import React, { useContext, useEffect } from "react";
import { DataConsumer } from "../../Context/Context";

export default function CategoryTab() {
  useEffect(() => {});
  const [data, setData] = useContext(DataConsumer);
  const onButtonClick = (e) => {
    let categoryTab = document.querySelectorAll(".category-tab");
    let fmTab = document.querySelectorAll(".fm-tab");
    [...fmTab].forEach((item, i) => {
      i === 0 ? (item.style.display = "block") : (item.style.display = "none");
      [...categoryTab].forEach((tab, i) => {
        tab.classList.remove("active");
      });
    });

    e.currentTarget.classList.add("active");

    let currentTab = e.currentTarget.getAttribute("data-id");

    if (e.currentTarget.getAttribute("data-id") === currentTab) {
      setData((prev) => ({ ...prev, page: currentTab }));
    }
  };
  return (
    <div className="wrapper-fluid category-tabs">
      <div className="wrapper">
        <div className="grid-wrapper">
          {Object.entries(data).map(([key, value]) => {
            return key === "page" ? (
              ""
            ) : (
              <div
                className={`grid-6 grid-md category-tab ${value[0].theme} ${
                  data.page === key ? "active" : ""
                }`}
                data-id={key}
                onClick={onButtonClick}
              >
                <h6>{value[0].category}</h6>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
