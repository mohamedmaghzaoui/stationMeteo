import { useEffect, useState } from "react";
import { SensorHeader } from "./sensorHeader";
import { TiWeatherCloudy } from "react-icons/ti";
import { FaDatabase, FaMapMarkerAlt } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { TypeAnimation } from "react-type-animation";
import { BsDatabaseFillAdd } from "react-icons/bs";
import { BiTimeFive } from "react-icons/bi";
import axios from "axios";
import { SensorForm } from "./sensorForm";
import { Link } from "react-router-dom";
import { SensorPosition } from "./sensorPosition";
import "../../Css/sensorList.css";
import "../../Css/sensorDetails.css";
export const Sensor = () => {
  const [sensorData, setSensorData] = useState(null);
  const [form, setForm] = useState("hidden"); //state to show or hide module form
  const [schoolCard, setShcoolCard] = useState("hidden"); //state to show or hide school card
  const [actionStatus, setActionStatus] = useState("idle"); // State for action status
  const [currentPlace, setCurrentPlace] = useState(""); // State for current place

  const wait = (
    <div className="text-center ">
      <div
        style={{ width: "5rem", height: "5rem" }}
        class="spinner-grow text-primary mx-4"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
      <div
        style={{ width: "5rem", height: "5rem" }}
        class="spinner-grow text-primary mx-4"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
      <div
        style={{ width: "5rem", height: "5rem" }}
        class="spinner-grow text-primary mx-4"
        role="status"
      >
        <span class="visually-hidden">Loading...</span>
      </div>
      ,
    </div>
  );

  async function fetchData() {
    setActionStatus("loading"); // Set action status to loading
    const url = "http://localhost:8000/user/sensors";
    try {
      const apiResponse = await axios.get(url);
      setSensorData(apiResponse.data.sensorData);
      console.log(apiResponse.data); // Log the response data
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setActionStatus("idle"); // Reset action status to idle
    }
  }
  useEffect(() => {
    fetchData(); // Initial fetch on component mount
  }, []);

  async function unlinkSensor(macAddress) {
    setActionStatus("deleting"); // Set action status to deleting
    const url = "http://localhost:8000/sensors/delete";
    try {
      const response = await axios.delete(url, {
        data: { macAddress },
      });
      console.log(response.data); // Log the response data
      fetchData();
    } catch (err) {
      console.log(err);
    } finally {
      setActionStatus("idle"); // Reset action status to idle
    }
  }

  return (
    <div>
      <SensorHeader fetchData={fetchData} setForm={setForm} />
      {console.log("card", schoolCard)}

      {form === "shown" && <SensorForm setForm={setForm} />}

      {actionStatus !== "idle" ? ( // Show animation during actionStatus other than "idle"
        wait
      ) : sensorData == null || sensorData.length === 0 ? (
        <h1 className="text-center">
          <TypeAnimation
            sequence={["No sensor data available", 1500, "Add a module", 1500]}
            style={{ color: "#4550E6", fontWeight: "bold" }}
            speed={20}
            repeat={Infinity}
          />
        </h1>
      ) : (
        <div className="row">
          {sensorData.map((group, index) => (
            <div
              className="col-xl-3 col-lg-3 col-md-5 col-sm-8 col-10 mx-xl-4 mx-lg-4 mx-md-2 my-4"
              key={index}
            >
              <div className="card border-light shadow p-3 mb-5 bg-body rounded">
                <div className="card-body">
                  <TiWeatherCloudy id="card_icon" size={60} color="blue" />
                  <h2 className="card-title text-center">{group.name}</h2>
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
                      to={`/sensorDetails/all/${group.macAddress}/${group.name}`}
                      className="btn btn-outline-info col-5"
                    >
                      <BiTimeFive /> History
                    </Link>
                    <Link
                      onClick={() => {
                        setCurrentPlace(group.place);
                        setShcoolCard("shown");
                      }}
                      className="btn btn-outline-success col-5 my-2 mx-3 p"
                    >
                      <FaMapMarkerAlt /> View place
                    </Link>
                    <button
                      onClick={() => unlinkSensor(group.macAddress)}
                      className="btn btn-outline-danger col-5 my-2"
                    >
                      <MdDeleteForever /> Delete
                    </button>
                    {schoolCard === "shown" && (
                      <SensorPosition
                        place={currentPlace}
                        setShcoolCard={setShcoolCard}
                      />
                    )}
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
