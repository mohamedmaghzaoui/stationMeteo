import { Link } from "react-router-dom";
import "../../Css/sensorHeader.css";

export const SensorHeader = (props) => {
  return (
    <div>
      <h1>Our Data</h1>

      <div
        style={{ width: "90%", border: "none" }}
        className="card my-xl-3 col-lg-3 col-md-3 col-sm-8 col-12 offset bg-body mx-xl-5 mx-3"
      >
        <div className="row">
          <img
            className="my-5 offset-xl-2 col-xl-4 img-fluid "
            src="https://images.ctfassets.net/fevtq3bap7tj/5LF6om44pOItONlk0lct0a/70d966ebeb374dcd8e5abe1c26cb2159/Technology_dashboard__1_.svg"
            alt=""
          />
          <div className="col-xl-4 my-xl-5 my-3 ">
            <h3>Sensor data</h3>
            <p>
              Optimize energy usage, reduce your carbon footprint, and cut down
              the bills with our Smart Energy Dashboard. ...
            </p>
            <br />
            <button
              onClick={() => props.setForm("shown")}
              className="btn btn-primary col-4"
            >
              Add Module
            </button>
            <Link to={"/contact"} className="btn  btn-outline-info mx-3">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
