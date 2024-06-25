//import libraries
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Link } from "react-router-dom";
import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { FaArrowAltCircleRight } from "react-icons/fa";
import "../Css/home.css";
import { TypeAnimation } from "react-type-animation";
import { FaArrowRight } from "react-icons/fa";
export const Home = () => {
  //dynamic text
  const texts = ["json data", "weather information", "station api"];

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
        <Link to={"/login"} type="button" class="btn btn-primary  btn-lg ">
          Login
        </Link>
        <button type="button" class="mx-4 btn btn-outline-light btn-lg">
          Features
        </button>
      </div>
      <div className="container-fluid w-100 row my-5 bg-body  ">
        <div className=" col-xl-5 col-lg-5 col-md-5 col-sm-10 col-12 offset-xl-2 offset-lg-1 ">
          <h2 className="display-4 col fw-bold">Best meteo Data</h2>
          <h3 className="fw-bold display-4">Query Global Weather Data</h3>
          <p style={{ color: "#828D9F", font: "Noto Sans" }} className="fs-5">
            Integrate weather into your applications with the easiest-to-use
            global weather API including historical weather data, current
            conditions, up-to-date forecasts, and historical forecast
            information.
          </p>
          <p style={{ color: "#828D9F", font: "Noto Sans" }} className="fs-5">
            With our user-friendly JSON API, accessing weather data has never
            been easier. Whether you're developing an application or seeking
            weather information for personal use, our APIs provide seamless
            integration and deliver the data you need in a simple and accessible
            format.
            <br />
            Explore our{" "}
            <TypeAnimation
              sequence={[
                "Json data",
                1500,
                "weather api",
                1500,
                "meteo information",
                1500,
              ]}
              style={{ color: "#4550E6", fontWeight: "bold" }}
              speed={20}
              repeat={Infinity}
            />
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
              Voir les docs
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
        <span className="my-1"></span>
      </div>
      <div>
        <h1 className="fw-bold text-center text-body">
          Real Time, Forecasted, Future, Marine and Historical Weather
        </h1>
        <p
          style={{ color: "#828D9F", font: "Noto Sans" }}
          className="fs-5 text-center"
        >
          Free Weather Forecast in JSON and XML for commercial and
          non-commercial use
        </p>
        <div className="row offset-1">
          <div class="card border-light col-xl-3 col-lg-3 col-md-5 col-sm-8 col-10 mx-xl-4 mx-lg-4 mx-md-2 shadow p-3 mb-5 bg-body roundedd ">
            <div
              className="w-50 rounded-pill"
              style={{ backgroundColor: "#DEFFFE" }}
            >
              <span className="mx-3" style={{ color: "#014847" }}>
                Minute Forecasts
              </span>
            </div>
            <div class="card-body ">
              <h2 class="card-title fw-bold text-body">Rapid Updates</h2>
              <p class="card-text my-3">
                We understand the importance of having the most up-to-date
                weather information. That's why our local weather models are
                updated every minute
              </p>

              <span>
                <u style={{ cursor: "pointer" }} className="fw-bolder  mx-1">
                  Learn more about this
                </u>
                <FaArrowRight color="#05BDBA" />
              </span>
            </div>
          </div>
          <div class="card border-light col-xl-3 col-lg-3 col-md-5 col-sm-8 col-10 mx-xl-4 mx-lg-4 mx-md-2 shadow p-3 mb-5 bg-body roundedd ">
            <div
              className="w-50 rounded-pill"
              style={{ backgroundColor: "#EDF4FF" }}
            >
              <span className="mx-3" style={{ color: "#2036A1" }}>
                No need to pay
              </span>
            </div>
            <div class="card-body ">
              <h2 class="card-title fw-bold text-body">Free API</h2>
              <p class="card-text my-3">
                We understand the importance of having the most up-to-date
                weather information. That's why our local weather models are
                updated every minute
              </p>

              <span>
                <u style={{ cursor: "pointer" }} className="fw-bolder  mx-1">
                  Learn more about this
                </u>
                <FaArrowRight color="#05BDBA" />
              </span>
            </div>
          </div>
          <div class="card border-light  col-xl-3 col-lg-3 col-md-5  col-sm-8 col-10 mx-xl-4 mx-lg-4 mx-md-2 shadow p-3 mb-5 bg-body rounded ">
            <div
              className="w-50 rounded-pill"
              style={{ backgroundColor: "#FDF5D8" }}
            >
              <span className="mx-3" style={{ color: "#603408" }}>
                User friendly
              </span>
            </div>
            <div class="card-body ">
              <h2 class="card-title fw-bold text-body">Easy to use</h2>
              <p class="card-text my-3">
                We understand the importance of having the most up-to-date
                weather information. That's why our local weather models are
                updated every minute
              </p>

              <span>
                <u style={{ cursor: "pointer" }} className="fw-bolder  mx-1">
                  Learn more about this
                </u>
                <FaArrowRight color="#05BDBA" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
