import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export const LastSensorDetails = () => {
  const { macAddress, name } = useParams();
  const [sensor, setSensor] = useState(null);

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

  return (
    <div className="container mt-4">
      <h1>Last Sensor Details</h1>
      {sensor ? (
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
      ) : (
        <p>Loading sensor details...</p>
      )}
    </div>
  );
};
