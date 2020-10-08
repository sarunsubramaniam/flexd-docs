import React, { useContext } from "react";
import logo from "../../images/docs/icon.svg";
import { Link } from "react-router-dom";
import { DataConsumer } from "../Context/Context";

export default function Header(props) {
  const { dataVal, tabVal } = useContext(DataConsumer);
  const [data] = dataVal;
  const [tab] = tabVal;
  const onNavClick = () => {
    let menuItems = document.querySelectorAll(".doc-menu ul li a");
    [...menuItems].forEach((item, idx) => {
      item.classList.remove("active");
      idx === 0
        ? item.classList.add("active")
        : item.classList.remove("active");
    });
  };
  return (
    <header className={props.theme}>
      <div className="wrapper-fluid">
        <div className="wrapper">
          <div className="grid-wrapper align-center">
            <div className="grid-2 logo">
              <Link to="/">
                <img src={logo} alt="" />
              </Link>
            </div>
            <div className="nav-menu">
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link
                    onClick={onNavClick}
                    to={`/documentation/${tab.currentTab}/${
                      data[tab.currentTab][0].dataId
                    }`}
                  >
                    Documentation
                  </Link>
                </li>
                {props.button === true ? (
                  <li className="button-wrapper">
                    <Link to="" className="button white">
                      Download
                    </Link>
                  </li>
                ) : null}
                <li to="">
                  <i className="fa fa-github" aria-hidden="true"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
