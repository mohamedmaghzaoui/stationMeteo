import { Link } from "react-router-dom";

export const Price = () => {
  const modulePrice = 8; // Price of one module in euros

  return (
    <div>
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
        <br/>
        <p className="text-white fs-4 opacity-75">
          Commercial use license, support, and bulk purchasing options for sensor modules
        </p>
        <Link to="/contact" type="button" className="mx-4 btn btn-primary btn-lg">
          Contact Us
        </Link>
        <Link to="/features" type="button" className="mx-4 btn btn-outline-light btn-lg">
          Features
        </Link>
      </div>
      <div className="my-3 offset-1 row">
        <div className="mb-5 col">
          <h2>Free Trial</h2>
          <span className="fw-bold display-6">0€ </span> 
          <br />
          <button className="btn btn-lg btn-primary my-4">Contact Us</button>
          <p>Includes:</p>
          <ul>
            <li>1 free module to test for a week</li>
            <li>Access to our site and web services</li>
          </ul>
        </div>

        <div className="mb-5 col">
          <h2>Basic Plan</h2>
          <span className="fw-bold display-6">20€ </span> 
          <br />
          <Link className="btn btn-lg btn-primary my-4">Contact Us</Link>
          <p>Includes:</p>
          <ul>
            <li>2 free modules</li>
            <li>Access to our site, web services, and server</li>
            <li>API Integration</li>
          </ul>
        </div>

        <div className="mb-5 col">
          <h2>Premium Plan</h2>
          <span className="fw-bold display-6">40€ </span> 
          <br />
          <Link className="btn btn-lg btn-primary my-4">Contact Us</Link>
          <p>Includes:</p>
          <ul>
            <li>4 free modules</li>
            <li>Access to our site, web services, server, and database</li>
            <li>API Integration</li>
            <li>User Management and Dashboard</li>
            <li>Customizable Alerts</li>
          </ul>
        </div>
        <div className=" ">
  <h2>Customizable Plan</h2>
  <span className="fw-bold display-6">8€ per module</span> 
  <br />
  <Link className="btn btn-lg btn-primary my-4">Contact Us</Link>
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
