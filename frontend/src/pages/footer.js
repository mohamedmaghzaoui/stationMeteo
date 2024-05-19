import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div>
      <h4 style={{ color: "#5D6778" }}>Developpers</h4>
      <div className="row">
        <div className="col-1">
          <Link
            style={{ textDecoration: "underline" }}
            className="nav-link my-1 col"
            to={"/price"}
          >
            Price
          </Link>
          <Link
            style={{ textDecoration: "underline" }}
            className="nav-link my-1"
            to={"/price"}
          >
            Sensor
          </Link>
          <Link
            style={{ textDecoration: "underline" }}
            className="nav-link my-1"
            to={"/price"}
          >
            Account
          </Link>
          <Link
            style={{ textDecoration: "underline" }}
            className="nav-link "
            to={"/price"}
          >
            Github
          </Link>
        </div>
        <div className=" col">
          <Link
            style={{ textDecoration: "underline" }}
            className="nav-link my-1"
            to={"/price"}
          >
            About us
          </Link>
          <Link
            style={{ textDecoration: "underline" }}
            className="nav-link my-1"
            to={"/price"}
          >
            Contact us
          </Link>
          <Link
            style={{ textDecoration: "underline" }}
            className="nav-link my-1"
            to={"/price"}
          >
            Privacy
          </Link>
        </div>
      </div>

      <p></p>
      <p></p>
    </div>
  );
};
