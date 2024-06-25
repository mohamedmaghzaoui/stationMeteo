import { useEffect } from "react"; // Import React and useEffect
import { useState } from "react";
import { SensorHeader } from "./sensorHeader";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaEye, FaEdit, FaDatabase, FaMapMarkerAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import axios from "axios"; // Correct the import statement
import { SensorForm } from "./sensorForm";
import { Link } from "react-router-dom";
export const Sensor = () => {
  const [sensorData, setSensorData] = useState(null);
  const [form, setForm] = useState("hidden");
  const [apiTime, setApiTime] = useState(false);
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
  const unlinkSensor = async (macAddress) => {
    let url = "http://localhost:8000/sensors/delete";
    try {
      const response = await axios.delete(url, {
        data: { macAddress }, // Pass macAddress in the data object
      });
      console.log(response.data); // Log the response data
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    // Use useEffect to make the API request when the component mounts

    fetchData(); // Call the fetchData function
  }, []); // The empty array [] ensures the effect runs once on component mount

  return (
    <div>
      <SensorHeader setForm={setForm} />

      {form == "shown" && <SensorForm setForm={setForm} />}

      {sensorData === null ? (
        <div className="text-center">
          <div
            style={{ width: "8rem", height: "8rem" }}
            class="spinner-grow text-primary mx-5"
            role="status"
          >
            <span class="visually-hidden ">Loading...</span>
          </div>
          <div
            style={{ width: "8rem", height: "8rem" }}
            class="spinner-grow text-primary mx-5"
            role="status"
          >
            <span class="visually-hidden ">Loading...</span>
          </div>
          <div
            style={{ width: "8rem", height: "8rem" }}
            class="spinner-grow text-primary mx-5"
            role="status"
          >
            <span class="visually-hidden ">Loading...</span>
          </div>
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
                  <h2 className="card-title  text-center ">{group.name}</h2>
                  <h6 className="card-subtitle my-2 text-muted">
                    <strong className="text-warning">Mac address : </strong>{" "}
                    {group.macAddress}
                  </h6>
                  <p className="card-text">
                    <strong className="text-warning"> Place:</strong>{" "}
                    {group.place}
                  </p>
                  <div className="row">
                    <Link
                      to={`/sensorDetails/last/${group.macAddress}/${group.name}`}
                      className="btn btn-outline-primary col-5 mx-3"
                    >
                      <FaDatabase /> Last Data
                    </Link>
                    <Link
                      to={`/sensorDetails/last/${group.macAddress}/${group.name}`}
                      className="btn btn-outline-info col-5"
                    >
                      <FaDatabase /> All data
                    </Link>
                    <Link className="btn btn-outline-success col-5 my-2 mx-3 p">
                      <FaMapMarkerAlt /> View place
                    </Link>
                    <Link
                      onClick={() => unlinkSensor(group.macAddress)}
                      className="btn btn-outline-danger col-5 my-2"
                    >
                      <MdDeleteForever /> Delete
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
