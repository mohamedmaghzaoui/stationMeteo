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

  return (
    <div className="container mt-4">
      <h1>All Sensor Details</h1>
      {sensorDetails.length > 0 ? (
        <div>
          {sensorDetails.map((sensor, index) => (
            <div key={index} className="mt-3">
              <h2>Sensor {index + 1} Details</h2>
              <table className="table table-bordered mt-3">
                <tbody>
                  <tr>
                    <th scope="row">Pressure</th>
                    <td>{sensor.pressure}</td>
                  </tr>
                  <tr>
                    <th scope="row">Humidity</th>
                    <td>{sensor.humidity}</td>
                  </tr>
                  <tr>
                    <th scope="row">Altitude</th>
                    <td>{sensor.altitude}</td>
                  </tr>
                  <tr>
                    <th scope="row">Air Quality</th>
                    <td>{sensor.airQuality}</td>
                  </tr>
                  <tr>
                    <th scope="row">Temperature</th>
                    <td>{sensor.temperature}</td>
                  </tr>
                  <tr>
                    <th scope="row">Time</th>
                    <td>{sensor.time}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          ))}
        </div>
      ) : (
        <p>Loading sensor details...</p>
      )}
    </div>
  );
};
