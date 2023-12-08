import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as SunIcon } from "../images/brightness-high.svg";
import { useState } from "react";
export const Navbar = () => {
  const [theme, setTheme] = useState("light");
  return (
    <div data-bs-theme >
      <nav className="navbar navbar-expand-lg bg-body-tertiary navbar bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Station
          </a>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 container-fluid">
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/Sensor"}>
                  Sensor
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" >
                  Account
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">API Docs</Link>
              </li>
              {/*dropdown begin */}
              <li className="nav-item dropdown offset-xl-9  ">
                <a
                  className="nav-link dropdown-toggle  "
                  href="#"
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
                      onClick={() => 
                        {setTheme("light")
                        document.querySelector("body").setAttribute("data-bs-theme","light")
                        document.querySelector("body").style.backgroundColor = "#f5f5f5";
                        

                    
                    }}
                      className="dropdown-item"
                      href="#"
                    >
                      <FontAwesomeIcon cl icon={faSun} size="1x" />{" "}
                      <span className="mx-1">Light</span>
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => {
                        setTheme("dark")
                        document.querySelector("body").setAttribute("data-bs-theme","dark")
                        document.querySelector("body").style.backgroundColor = "#343a40";


                    }}
                      className="dropdown-item  "
                      href="#"
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
