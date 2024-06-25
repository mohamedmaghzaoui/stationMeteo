import { useEffect } from "react"; // Import React and useEffect
import { useState } from "react";
import { SensorHeader } from "./sensorHeader";
import { TiWeatherCloudy } from "react-icons/ti";
import axios from "axios"; // Correct the import statement
import { SensorForm } from "./sensorForm";
import { Link } from "react-router-dom";
export const Sensor = () => {
  const [sensorData, setSensorData] = useState(null);
  const [form, setForm] = useState("hidden");
  async function fetchData() {
    const url = "http://localhost:8000/user/sensors";
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
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row">
          {sensorData.map((group, index) => (
            <div
              className="col-xl-3 col-lg-3 col-md-5  col-sm-8 col-10 mx-xl-4 mx-lg-4 mx-md-2"
              key={index}
            >
              <div className="card border-light   shadow p-3 mb-5 bg-body rounded">
                <div className="card-body">
                  <TiWeatherCloudy size={60} color="blue" />
                  <h5 className="card-title">{group.name}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {group.macAddress}
                  </h6>
                  <p className="card-text">
                    <strong>Place:</strong> {group.place}
                  </p>
                  <Link
                    to={`/sensorDetails/${group.macAddress}/${group.name}`}
                    className="btn btn-primary"
                  >
                    See Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
