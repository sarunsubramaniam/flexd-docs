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
            let dataId = item.name.toLowerCase().replace(' ','-');
            let url = window.location.pathname,
                category = url.split('/')[3];
            return (
              <React.Fragment key={idx}>
                <li
                  data-id={dataId}
                  style={{
                    display: item.display === true ? "block" : "none",
                  }}
                >
                  <Link
                    onClick={onMenuClick}
                    className={(dataId === category) ? "active" : ""}
                    to={`/documentation/${tab.currentTab}/${dataId}`}
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
