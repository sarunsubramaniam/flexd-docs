import React from "react";
import logo from "../images/docs/icon.svg";
import { Link } from "react-router-dom";

export default function Header(props) {
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
                <li>Docs</li>
                <li>
                  <i className="fa fa-github" aria-hidden="true"></i>
                </li>

                {props.button === true ? (
                  <li className="button-wrapper">
                    <Link className="button white">Download</Link>
                  </li>
                ) : null}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
