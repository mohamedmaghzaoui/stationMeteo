import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { faSnowflake } from "@fortawesome/free-solid-svg-icons";

export const Home = () => {
  return (
    <div className="position-relative container-fluid ">
      <img
        style={{ height: "480px" }}
        className="img-fluid w-100"
        src="https://open-meteo.com/images/snowy.webp"
        alt=""
      />
      <div className=" my-5 position-absolute top-0 start-50 translate-middle-x text-center w-100">
        <FontAwesomeIcon icon={faSnowflake} size="5x" className="text-white" />
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
      <div className="container-fluid w-100 row my-5 ">
        <div className=" col-xl-5 col-lg-5 col-md-5 col-sm-10 col-12 offset-xl-2 offset-lg-1 ">
          <h2 className="display-5 col fw-normal">Best meteo Data</h2>
          <h3>Query Global Weather Data for Free</h3>
          <p style={{ color: "#666276", font: "Noto Sans" }} className="fs-5">
            Integrate weather into your applications with the easiest-to-use
            global weather API including historical weather data, current
            conditions, up-to-date forecasts, and historical forecast
            information.
          </p>
          <p style={{ color: "#666276", font: "Noto Sans" }} className="fs-5">
            With our user-friendly JSON API, accessing weather data has never
            been easier. Whether you're developing an application or seeking
            weather information for personal use, our APIs provide seamless
            integration and deliver the data you need in a simple and accessible
            format.
          </p>
          <button
            type="button"
            class="rounded-pill btn btn-primary btn-lg col-xl-3 col-lg-3 col-12 "
          >
            Sign in
          </button>
          <button
            type="button"
            class="rounded-pill btn button btn-outline-secondary btn-lg col-xl-3 col-lg-3 col-12 mx-2 my-2"
          >
            Documentation
          </button>
        </div>
        <img
          className="img-fluid col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12"
          src="https://content.meteoblue.com/assets/images/elements/jsondata.png"
          alt=""
          width="80%"
          height="auto"
        />
      </div>
    </div>
  );
};
