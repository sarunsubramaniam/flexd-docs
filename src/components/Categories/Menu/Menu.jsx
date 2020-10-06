import React, { useEffect, useContext } from "react";
import { DataConsumer } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function Menu() {
  const [data] = useContext(DataConsumer);
  useEffect(() => {});
  const onMenuClick = (e) => {
    let menuItems = document.querySelectorAll(".doc-menu ul li a");
    [...menuItems].forEach((item, idx) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  const pageData = data.page;

  // data[pageData].sort((a, b) => a.id - b.id);

  return (
    <React.Fragment>
      <div className="doc-menu">
        <ul>
          {data[pageData].map((item, idx) => {
            return (
              <li
                key={idx}
                data-id={item.dataId}
                style={{
                  display: item.display === true ? "block" : "none",
                }}
              >
                <Link
                  onClick={onMenuClick}
                  class={idx === 0 ? "active" : ""}
                  to={`/documentation/${pageData}/${item.dataId}`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}
