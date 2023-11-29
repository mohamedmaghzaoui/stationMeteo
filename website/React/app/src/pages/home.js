import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { faCloud } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <div className="position-relative">
      <img
        style={{ height: "480px" }}
        className="img-fluid w-100"
        src="https://open-meteo.com/images/convective_clouds.webp"
        alt=""
      />
      <div className=" my-5 position-absolute top-0 start-50 translate-middle-x text-center w-100">
        <FontAwesomeIcon icon={faCloud} size="5x" className="text-white" />
        <h1 className="text-light mt-3 fw-normal text-opacity-75 display-2">
          Station App
        </h1>
        <p className="text-white fs-4 opacity-75">
          Connecting the Elements, Monitoring the Atmosphere — Your Personal
          Weather Station.
        </p>
        <button type="button" class="btn btn-primary btn-lg ">
          Login
        </button>
        <button type="button" class="mx-4 btn btn-outline-light btn-lg">
          Features
        </button>
      </div>
    </div>
  );
};
