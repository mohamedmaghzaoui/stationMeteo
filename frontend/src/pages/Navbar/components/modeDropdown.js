import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const ModeDropDown = () => {
  const [theme, setTheme] = useState("light");

  return (
    <li className="nav-item dropdown  offset-xl-1  ">
      <a
        className="nav-link dropdown-toggle  "
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {theme == "light" ? (
          <FontAwesomeIcon icon={faSun} className="fs-3"></FontAwesomeIcon>
        ) : (
          <FontAwesomeIcon icon={faMoon} className="fs-3"></FontAwesomeIcon>
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
              document.querySelector("body").style.backgroundColor = "#f5f5f5";
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
              document.querySelector("body").style.backgroundColor = "#343a40";
            }}
            className="dropdown-item  "
          >
            <FontAwesomeIcon icon={faMoon} size="1x"></FontAwesomeIcon>{" "}
            <span className="mx-1">Dark</span>
          </a>
        </li>
      </ul>
    </li>
  );
};
