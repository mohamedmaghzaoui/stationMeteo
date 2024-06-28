import { Link } from "react-router-dom";
import "../Css/footer.css"

export const Footer = () => {
  return (
    <div>
      
      <div style={{fontSize:"17px"}} className="row ">
      
        <div className="col-2 offset-1" style={{textDecoration:"none",color:"#828D9F"}}>
         
        <Link
            
            className="nav-link my-1 hover-link"
            to={"/"}
          >
            Station
          </Link>
          
          <Link
            
            className="nav-link my-1 col hover-link"
            to={"/price"}
          >
            Price
          </Link>
          <Link
            
            className="nav-link my-1 hover-link"
            to={"/sensor"}
          >
            Sensor
          </Link>
          <Link
            
            className="nav-link my-1 hover-link"
            to={"/login"}
          >
            login
          </Link>
          <Link
            
            className="nav-link hover-link "
            to={"/SignUp"}
          >
            sign up
          </Link>
        </div>
        <div className="col offset-1" style={{color:"#828D9F"}}>
          <Link
            
            className="nav-link my-1 hover-link"
            to={"/"}
          >
            About us
          </Link>
          <Link
            
            className="nav-link my-1 hover-link"
            to={"/contact"}
          >
            Contact us
          </Link>
          <Link
            
            className="nav-link my-1 hover-link"
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
