import "../../Css/sensorPosition.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
export const SensorPosition = (props) => {
  const existForm=()=>{
    props.setShcoolCard("hidden")

  }
  return (
    <div className="overlay">
      <div  className="image bg-body">
      <FontAwesomeIcon
      onClick={()=>existForm()}
            id="exit_icon"
            icon={faTimes}
            className="fs-1 my-2  col-1 offset-11 "
          ></FontAwesomeIcon>
        <h1 className="text-center ">school map</h1>
        <img  className="img-fluid " src="/map.png" alt="" />
      </div>
    </div>
  );
};
