import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const SensorDetails = () => {
  const { macAddress, name } = useParams();
  const [sensorDetails, setSensorDetails] = useState([]);

  useEffect(() => {
    async function fetchAllSensorDetails() {
      const url = `http://localhost:8000/sensors/details/all/?macAddress=${macAddress}&name=${name}`;
      try {
        const apiResponse = await axios.get(url);
        setSensorDetails(apiResponse.data.sensorDetails);
        console.log(apiResponse.data.sensorDetails); // Log the response data
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchAllSensorDetails();
  }, [macAddress, name]);
  const lastIndex = sensorDetails.length - 1;

  return (
    <div className="container mt-4">
      <h1 className="text-center">History</h1>
      {sensorDetails.length > 0 ? (
        <div>
          {sensorDetails.map((sensor, index) => (
            <div key={index} className="mt-3">
              <h2>Module data {lastIndex - index}</h2>
              <div className="card-deck row my-5">
                <div className="card border-light shadow p-3 mb-5 bg-body rounded col-xl-3 col-lg-4 col-md-5 col-sm-5 col-9 mx-xl-5 mx-lg-5 mx-md-4 mx-3">
                  <div className="d-flex align-items-center">
                    <span className="display-3 me-3">🌬️</span>
                    <div className="card-body">
                      <h5 className="card-title">Pression</h5>
                      <p className="card-text">
                        {sensor.pressure.toFixed(2)} hPa
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card border-light shadow p-3 mb-5 bg-body rounded col-xl-3 col-lg-4 col-md-5 col-sm-5 col-9 mx-xl-5 mx-lg-5 mx-md-3 mx-3">
                  <div className="d-flex align-items-center">
                    <span className="display-3 me-3">💧</span>
                    <div className="card-body">
                      <h5 className="card-title">Humidité</h5>
                      <p className="card-text">
                        {sensor.humidity.toFixed(2)} %
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card border-light shadow p-3 mb-5 bg-body rounded  col-xl-3 col-lg-4 col-md-5 col-sm-5 col-9 mx-xl-5 mx-lg-5 mx-md-4 mx-3">
                  <div className="d-flex align-items-center">
                    <span className="display-3 me-3">🏔️</span>
                    <div className="card-body">
                      <h5 className="card-title">Altitude</h5>
                      <p className="card-text">
                        {sensor.altitude.toFixed(2)} m
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card border-light shadow p-3 mb-5 bg-body rounded  col-xl-3 col-lg-4 col-md-5 col-sm-5 col-9 mx-xl-5 mx-lg-5 mx-md-4 mx-3">
                  <div className="d-flex align-items-center">
                    <span className="display-3 me-3">🌫️</span>
                    <div className="card-body">
                      <h5 className="card-title">Qualité de l'air</h5>
                      <p className="card-text">{sensor.airQuality}</p>
                    </div>
                  </div>
                </div>
                <div className="card border-light shadow p-3 mb-5 bg-body rounded  col-xl-3 col-lg-4 col-md-5 col-sm-5 col-9 mx-xl-5 mx-lg-5 mx-md-4 mx-3">
                  <div className="d-flex align-items-center">
                    <span className="display-3 me-3">🌡️</span>
                    <div className="card-body">
                      <h5 className="card-title">Température</h5>
                      <p className="card-text">
                        {sensor.temperature.toFixed(2)} °C
                      </p>
                    </div>
                  </div>
                </div>
                <div className="card border-light shadow p-3 mb-5 bg-body rounded col-xl-3 col-lg-4 col-md-5 col-sm-5 col-9 mx-xl-5 mx-lg-5 mx-md-4 mx-3">
                  <div className="d-flex align-items-center">
                    <span className="display-3 me-3">⏰</span>
                    <div className="card-body">
                      <h5 className="card-title">Date</h5>
                      <p className="card-text">{sensor.time}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading sensor details...</p>
      )}
    </div>
  );
};
