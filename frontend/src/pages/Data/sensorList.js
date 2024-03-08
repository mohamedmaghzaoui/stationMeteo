import { useEffect } from "react"; // Import React and useEffect
import { useState } from "react";
import { SensorHeader } from "./sensorHeader";
import axios from "axios"; // Correct the import statement
import { SensorForm } from "./sensorForm";
export const Sensor = () => {
  const [sensorData, setSensorData] = useState(null);
  const [form, setForm] = useState("hidden");
  async function fetchData() {
    const url = "http://localhost:8000/get_sensor_data";
    try {
      const apiResponse = await axios.get(url);
      setSensorData(apiResponse.data.sensorData);
      console.log(apiResponse); // Log the response data
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    // Use useEffect to make the API request when the component mounts

    fetchData(); // Call the fetchData function
  }, []); // The empty array [] ensures the effect runs once on component mount

  return (
    <div>
      <SensorHeader setForm={setForm} />

      {form == "shown" && <SensorForm setForm={setForm} />}

      {sensorData === null ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h1>Sensor Data</h1>
          <table className="table w-75">
            <thead>
              <tr>
                <th>ID</th>
                <th>Pressure</th>
                <th>Humidity</th>
                <th>Altitude</th>
                <th>Air Quality</th>
                <th>Mac Address</th>
                <th>Time</th>
                <th>Temperature</th>
              </tr>
            </thead>
            <tbody>
              {sensorData.map((sensor) => (
                <tr key={sensor.id}>
                  <td>{sensor.id}</td>
                  <td>{sensor.pressure}</td>
                  <td>{sensor.humidity}</td>
                  <td>{sensor.altitude}</td>
                  <td>{sensor.airQuality}</td>
                  <td>{sensor.macAddress}</td>
                  <td>{sensor.time}</td>
                  <td>{sensor.temperature}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
