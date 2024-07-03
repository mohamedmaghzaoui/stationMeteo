import { Link } from "react-router-dom";

export const Price = () => {
  const modulePrice = 45; // Price of one module in euros, assuming a 50% profit margin

  return (
    <div className="position-relative container-fluid">
      <img
        style={{ height: "480px" }}
        className="img-fluid w-100"
        src="https://open-meteo.com/images/convective_clouds.webp"
        alt=""
      />
      <div className="my-5 position-absolute top-0 start-50 translate-middle-x text-center w-100">
        <br />
        <br />
        <h1 className=" text-light mt-3 fw-normal text-opacity-75 display-2">
          Pricing
        </h1>
        <br />
        <p className="text-white fs-4 opacity-75">
          Commercial use license, support, and bulk purchasing options for
          sensor modules
        </p>
        <Link
          to="/contact"
          type="button"
          className="mx-4 btn btn-primary btn-lg"
        >
          Contact Us
        </Link>
        <Link
          to="/features"
          type="button"
          className="mx-4 btn btn-outline-light btn-lg"
        >
          Features
        </Link>
      </div>
      <div className="my-3 offset-1  row">
        <div className=" col-xl-3 col-lg-3 col-md-4 col-sm-5 col-9 my-3 my-xl-2  ">
          <h2>Free Trial</h2>
          <span className="fw-bold display-6">0€</span>
          <br />
          <Link to={"/contact"} className="btn btn-lg btn-primary my-4">
            Contact Us
          </Link>
          <p>Includes:</p>
          <ul>
            <li>1 free module to test for a week</li>
            <li>Access to our site and web services</li>
          </ul>
        </div>
        <div className=" col-xl-4 col-lg-4 col-md-5 col-sm-5 col-9 my-sm-4 my-3 my-xl-2  mx-xl-5 mx-lg-5">
          <h2>Basic Plan</h2>
          <span className="fw-bold display-6">105€</span>{" "}
          {/* Assuming 2 modules at 45€ each */}
          <br />
          <Link to={"/contact"} className="btn btn-lg btn-primary my-4">
            Contact Us
          </Link>
          <p>Includes:</p>
          <ul>
            <li>2 modules</li>
            <li>Access to our site, web services, and server</li>
            <li>Option to customize and visualize module placement</li>
          </ul>
        </div>

        <div className="col-xl-4 col-lg-3 col-md-5 my-md-5 my-sm-4 my-3 my-xl-2 col-sm-5 col-9 ">
          <h2>Customizable Plan</h2>
          <span className="fw-bold display-6">45€ per module</span>
          <br />
          <Link to={"/contact"} className="btn btn-lg btn-primary my-4">
            Contact Us
          </Link>
          <p>Includes:</p>
          <ul>
            <li>Option to purchase modules individually</li>
            <li>Access to our site, web services, server, and database</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
