import React, { useContext } from "react";
import { DataConsumer } from "../../Context/Context";
import { Link } from "react-router-dom";

export default function CategoryTab() {
  const { dataVal, tabVal } = useContext(DataConsumer);
  const [data] = dataVal;
  const [tab, setTab] = tabVal;

  const onButtonClick = (e) => {
    let menuItems = document.querySelectorAll(".doc-menu ul li a"),
      tabData = e.currentTarget.getAttribute("data-id");

    [...menuItems].forEach((item, idx) => {
      idx === 0
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
    setTab((prev) => ({
      ...prev,
      currentTab: tabData,
    }));
  };

  return (
    <div className="wrapper-fluid category-tabs">
      <div className="wrapper">
        <div className="grid-wrapper">
          {Object.entries(data).map(([key, value]) => {
            let dataId = value[0].name.toLowerCase().replace(' ','-');
            return (
              <React.Fragment key={key}>
                <div
                  className={`grid-6 grid-md category-tab ${value[0].theme} ${
                    key === tab.currentTab ? "active" : ""
                  }`}
                  data-id={key}
                  onClick={onButtonClick}
                >
                  <Link to={`/documentation/${key}/${dataId}`}>
                    <img alt={value[0].category} src={require(`../../../images/docs/${key}.svg`)} />
                    <h6>{value[0].category}</h6>
                  </Link>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}
