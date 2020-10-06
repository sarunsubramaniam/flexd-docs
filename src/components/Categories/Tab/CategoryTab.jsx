import React, { useContext, useEffect } from "react";
import { DataConsumer } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function CategoryTab() {
  useEffect(() => {});
  const [data, setData] = useContext(DataConsumer);
  const onButtonClick = (e) => {
    let currentTab = e.currentTarget.getAttribute("data-id"),
      menuItems = document.querySelectorAll(".doc-menu ul li a");

    if (e.currentTarget.getAttribute("data-id") === currentTab) {
      setData((prev) => ({ ...prev, page: currentTab }));
    }

    [...menuItems].forEach((item, idx) => {
      idx === 0
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
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
                <Link to={`/documentation/${key}/${value[0].dataId}`}>
                  <h6>{value[0].category}</h6>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
