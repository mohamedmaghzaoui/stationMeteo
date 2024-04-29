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
          <a className="navbar-brand">Station</a>
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
              style={{ fontSize: "16px" }}
              className=" navbar-nav me-auto mb-2 mb-lg-0 container-fluid"
            >
              <li className="nav-item  px-1">
                <Link className="nav-link fw-medium " to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item  px-1">
                <Link className="nav-link fw-medium " to={"/"}>
                  Pricing
                </Link>
              </li>

              <li className="nav-item px-1">
                <Link className="nav-link fw-medium" to={"/Sensor"}>
                  Sensor
                </Link>
              </li>
              <li className="nav-item px-xl-1 px-lg-1">
                <div class="dropdown">
                  <button
                    class="nav-link dropdown-toggle fw-medium"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Account
                  </button>
                  <ul class="dropdown-menu ">
                    <li>
                      <Link className="dropdown-item " to={"/Login"}>
                        Login{" "}
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to={"/SignUp"}>
                        Sign Up{" "}
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="nav-item px-xl-1 px-lg-1 ">
                <Link className="nav-link fw-medium">API Docs</Link>
              </li>
              <li className="nav-item  ">
                <Link className="nav-link fw-medium">Contact us</Link>
              </li>

              {/*dropdown begin */}
              <li className="nav-item dropdown  offset-xl-7  ">
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
