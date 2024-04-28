import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Link } from "react-router-dom";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "../Css/home.css";

export const Home = () => {
  //   <FontAwesomeIcon icon={faSnowflake} size="5x" className="text-white" />
  return (
    <div className="position-relative container-fluid ">
      <img
        style={{ height: "480px" }}
        className="img-fluid w-100"
        src="https://open-meteo.com/images/snowy.webp"
        alt=""
      />
      <div className=" my-5 position-absolute top-0 start-50 translate-middle-x text-center w-100">
        <br />
        <h1 className="text-light mt-3 fw-normal text-opacity-75 display-2">
          Station App
        </h1>

        <p className="text-white fs-4 opacity-75">
          Connecting the Elements, Monitoring the Atmosphere — Your Personal
          Weather Station.
        </p>
        <Link to={"/login"} type="button" class="btn btn-primary btn-lg ">
          Login
        </Link>
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
            id="sign_button"
            type="button"
            class=" btn btn-lg col-xl-3 col-lg-3 col-12 "
          >
            <Link
              to={"/SignUp"}
              className="mx-2 fw-semibold"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              Sign up
            </Link>
            <FaArrowAltCircleRight color="white" />
          </button>
          <button
            style={{ backgroundColor: "#5D6778" }}
            type="button"
            class=" btn button btn-lg col-xl-4 col-lg-3 col-12 mx-2 my-2"
          >
            <span className="mx-2 fw-semibold" style={{ color: "#fff" }}>
              voir les docs
            </span>
            <FaArrowAltCircleRight color="white" />
          </button>
        </div>
        <img
          className="img-fluid col-xl-4 col-lg-4 col-md-6 col-sm-8 col-12"
          src="https://cdn.weatherapi.com/v5/assets/images/promo-figure-alt.svg"
          alt=""
          width="80%"
          height="auto"
        />
      </div>
    </div>
  );
};
