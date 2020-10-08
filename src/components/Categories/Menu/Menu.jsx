import React, { useContext } from "react";
import { DataConsumer } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function Menu() {
  const { dataVal, tabVal } = useContext(DataConsumer);
  const [data] = dataVal;
  const [tab] = tabVal;
  const onMenuClick = (e) => {
    let menuItems = document.querySelectorAll(".doc-menu ul li a");
    [...menuItems].forEach((item, idx) => {
      item.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
  };

  // data[pageData].sort((a, b) => a.id - b.id);

  return (
    <React.Fragment>
      <div className="doc-menu">
        <ul>
          {data[tab.currentTab].map((item, idx) => {
            return (
              <React.Fragment key={idx}>
                <li
                  data-id={item.dataId}
                  style={{
                    display: item.display === true ? "block" : "none",
                  }}
                >
                  <Link
                    onClick={onMenuClick}
                    className={idx === 0 ? "active" : ""}
                    to={`/documentation/${tab.currentTab}/${item.dataId}`}
                  >
                    {item.name}
                  </Link>
                </li>
              </React.Fragment>
            );
          })}
        </ul>
      </div>
    </React.Fragment>
  );
}
