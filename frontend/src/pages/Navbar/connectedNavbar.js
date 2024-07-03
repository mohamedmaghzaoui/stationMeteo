/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { FaUser } from "react-icons/fa";
import "../../Css/navbar.css";

import { UserDropDown } from "./components/userDropDown";
import { ModeDropDown } from "./components/modeDropdown";
import { useState } from "react";
import { Button } from "bootstrap/dist/js/bootstrap.bundle.min";
export const ConnectedNavbar = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div className="">
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-primary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse container-fluid"
            id="navbarSupportedContent"
          >
            <ul
              style={{ fontSize: "17px" }}
              className=" navbar-nav me-auto mb-2 mb-lg-0 container-fluid"
            >
              <li className="nav-item  col-1  ">
                <Link className=" nav-link fw-medium link-border  " to={"/"}>
                  🌦️ Station
                </Link>
              </li>

              <li className="nav-item col-1 ">
                <Link
                  className="nav-link fw-medium link-border   "
                  to={"/price"}
                >
                  💲 Pricing
                </Link>
              </li>

              <li className="nav-item px-1 col-1">
                <Link className="nav-link fw-medium link-border" to={"/Sensor"}>
                  📡 Sensor
                </Link>
              </li>

              <li className="nav-item px-xl-1 px-lg-1 col-1 ">
                <Link
                  to={"/contact"}
                  className="nav-link fw-medium link-border"
                >
                  📧 Contact
                </Link>
              </li>
              <li className="nav-item offset-xl-3  px-xl-3 px-lg-3 "></li>

              {/* User dropdown */}
              <UserDropDown />
              {/*dropdown begin */}
              <ModeDropDown />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
