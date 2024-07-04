import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FiRefreshCw } from "react-icons/fi";
import axios from "axios";
import "../../Css/sensorDetails.css";

export const LastSensorDetails = () => {
  const { macAddress, name } = useParams();
  const [sensor, setSensor] = useState(null);
  //get last sensor details from server using mac address and name as route parameters
  useEffect(() => {
    async function fetchSensorDetails() {
      const url = `http://localhost:8000/sensors/details/last?macAddress=${macAddress}&name=${name}`;
      try {
        const apiResponse = await axios.get(url);
        setSensor(apiResponse.data);
        console.log(apiResponse.data); // Log the response data
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchSensorDetails();
  }, [macAddress, name]);

  //async function to get data from server
  const refreshData = async () => {
    try {
      const apiResponse = await axios.get(
        `http://localhost:8000/sensors/details/last?macAddress=${macAddress}&name=${name}`,
      );
      setSensor(apiResponse.data);
      console.log(apiResponse.data); // Log the refreshed data
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="my-2 text-center">Current Data</h1>
      <button
        onClick={() => refreshData()}
        type="button"
        className="offset-xl-10 offset-lg-9 offset-md-8 offset-sm-7 offset-6  button-33"
      >
        Refresh <FiRefreshCw />
      </button>
      {/* check if sensor and sensor values  already exist */}
      {sensor ? (
        <div>
          <div className="card-deck row my-5">
            {/* Pressure */}
            {sensor.pressure !== null && sensor.pressure !== undefined && (
              <div className="card border-light shadow p-3 mb-5 bg-body rounded col-xl-3 col-lg-4 col-md-5 col-sm-5 col-9 mx-xl-5 mx-lg-5 mx-md-4 mx-3">
                <div className="d-flex align-items-center">
                  <span className="display-3 me-3">🌬️</span>
                  <div className="card-body">
                    <h5 className="card-title">Pressure</h5>
                    <p className="card-text">
                      {sensor.pressure.toFixed(2)} hPa
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Humidity */}
            {sensor.humidity !== null && sensor.humidity !== undefined && (
              <div className="card border-light shadow p-3 mb-5 bg-body rounded col-xl-3 col-lg-4 col-md-5 col-sm-5 col-9 mx-xl-5 mx-lg-5 mx-md-3 mx-3">
                <div className="d-flex align-items-center">
                  <span className="display-3 me-3">💧</span>
                  <div className="card-body">
                    <h5 className="card-title">Humidity</h5>
                    <p className="card-text">{sensor.humidity.toFixed(2)} %</p>
                  </div>
                </div>
              </div>
            )}

            {/* Altitude */}
            {sensor.altitude !== null && sensor.altitude !== undefined && (
              <div className="card border-light shadow p-3 mb-5 bg-body rounded col-xl-3 col-lg-4 col-md-5 col-sm-5 col-9 mx-xl-5 mx-lg-5 mx-md-4 mx-3">
                <div className="d-flex align-items-center">
                  <span className="display-3 me-3">🏔️</span>
                  <div className="card-body">
                    <h5 className="card-title">Altitude</h5>
                    <p className="card-text">{sensor.altitude.toFixed(2)} m</p>
                  </div>
                </div>
              </div>
            )}

            {/* Air Quality */}
            {sensor.airQuality !== null && sensor.airQuality !== undefined && (
              <div className="card border-light shadow p-3 mb-5 bg-body rounded col-xl-3 col-lg-4 col-md-5 col-sm-5 col-9 mx-xl-5 mx-lg-5 mx-md-4 mx-3">
                <div className="d-flex align-items-center">
                  <span className="display-3 me-3">🌫️</span>
                  <div className="card-body">
                    <h5 className="card-title">Air Quality</h5>

                    {sensor.airQuality <= 150 ? (
                      <span className="button-33">Good</span>
                    ) : (
                      <span className="button-45">Bad</span>
                    )}
                  </div>
                </div>
              </div>
            )}

            {/* Temperature */}
            {sensor.temperature !== null &&
              sensor.temperature !== undefined && (
                <div className="card border-light shadow p-3 mb-5 bg-body rounded col-xl-3 col-lg-4 col-md-5 col-sm-5 col-9 mx-xl-5 mx-lg-5 mx-md-4 mx-3">
                  <div className="d-flex align-items-center">
                    <span className="display-3 me-3">🌡️</span>
                    <div className="card-body">
                      <h5 className="card-title">Temperature</h5>
                      <p className="card-text">
                        {sensor.temperature.toFixed(2)} °C
                      </p>
                    </div>
                  </div>
                </div>
              )}

            {/* Time */}
            {sensor.time !== null && sensor.time !== undefined && (
              <div className="card border-light shadow p-3 mb-5 bg-body rounded col-xl-3 col-lg-4 col-md-5 col-sm-5 col-9 mx-xl-5 mx-lg-5 mx-md-4 mx-3">
                <div className="d-flex align-items-center">
                  <span className="display-3 me-3">⏰</span>
                  <div className="card-body">
                    <h5 className="card-title">Date</h5>
                    <p className="card-text">{sensor.time}</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      ) : (
        <p>Loading sensor details...</p>
      )}
    </div>
  );
};
