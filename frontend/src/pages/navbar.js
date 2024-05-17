/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";
export const Navbar = () => {
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
              <li className="nav-item  px-1">
                <Link className="offset nav-link fw-medium " to={"/"}>
                  🌦️ Station Météo
                </Link>
              </li>

              <li className="nav-item  px-1">
                <Link className="nav-link fw-medium " to={"/price"}>
                  Pricing
                </Link>
              </li>

              <li className="nav-item px-1">
                <Link className="nav-link fw-medium" to={"/Sensor"}>
                  Sensor
                </Link>
              </li>

              <li className="nav-item px-xl-1 px-lg-1 ">
                <Link className="nav-link fw-medium">API Docs</Link>
              </li>
              <li className="nav-item px-xl-1 px-lg-1  ">
                <Link to={"/contact"} className="nav-link fw-medium">
                  Contact us
                </Link>
              </li>
              <li className="nav-item offset-xl-4  px-xl-3 px-lg-3 ">
                <Link
                  style={{ fontSize: "20px" }}
                  to={"/login"}
                  className="nav-link fw-medium "
                >
                  Log in
                </Link>
              </li>
              <li className="nav-item  ">
                <Link
                  style={{
                    backgroundColor: "#2E51ED",
                    color: "#fff",
                    fontSize: "20px",
                  }}
                  to={"/SignUp"}
                  className="btn   fw-bold"
                >
                  Sign up
                </Link>
              </li>

              {/*dropdown begin */}
              <li className="nav-item dropdown  offset-1  ">
                <a
                  className="nav-link dropdown-toggle  "
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {theme == "light" ? (
                    <FontAwesomeIcon
                      icon={faSun}
                      className="fs-3"
                    ></FontAwesomeIcon>
                  ) : (
                    <FontAwesomeIcon
                      icon={faMoon}
                      className="fs-3"
                    ></FontAwesomeIcon>
                  )}
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a
                      onClick={() => {
                        setTheme("light");
                        document
                          .querySelector("body")
                          .setAttribute("data-bs-theme", "light");
                        document.querySelector("body").style.backgroundColor =
                          "#f5f5f5";
                      }}
                      className="dropdown-item"
                    >
                      <FontAwesomeIcon cl icon={faSun} size="1x" />{" "}
                      <span className="mx-1">Light</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setTheme("dark");
                        document
                          .querySelector("body")
                          .setAttribute("data-bs-theme", "dark");
                        document.querySelector("body").style.backgroundColor =
                          "#343a40";
                      }}
                      className="dropdown-item  "
                    >
                      <FontAwesomeIcon
                        icon={faMoon}
                        size="1x"
                      ></FontAwesomeIcon>{" "}
                      <span className="mx-1">Dark</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
