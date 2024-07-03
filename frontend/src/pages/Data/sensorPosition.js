import "../../Css/sensorPosition.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
export const SensorPosition = (props) => {
  const place = props.place;
  const placePositions = {
    "Salle 1": { top: "31%", left: "45%" },
    "Salle 2": { top: "31%", left: "30%" },
    "Salle 3": { top: "39%", left: "22%" },
    "Salle 4": { top: "63%", left: "9%" },
    "Salle 5": { top: "70%", left: "10%" },
    "Salle 6": { top: "71%", left: "24%" },
    "Salle de reunion": { top: "71%", left: "37%" },
    Detente: { top: "77%", left: "55%" },
    Direction: { top: "79%", left: "59%" },
    "Impression 3d": { top: "78%", left: "72%" },
    Administratif: { top: "58%", left: "88%" },
    "Salle video": { top: "26%", left: "75%" },
    Acceuil: { top: "34%", left: "68%" },
  };
  const existForm = () => {
    props.setShcoolCard("hidden");
  };
  const position = placePositions[place] || { top: "0", left: "0" };
  return (
    <div className="overlay">
      <div className="image bg-body">
        <FontAwesomeIcon
          onClick={() => existForm()}
          id="exit_icon"
          icon={faTimes}
          className="fs-1 my-2  col-1 offset-11 "
        ></FontAwesomeIcon>
        <h1 className="text-center ">Place : {place}</h1>
        <div style={{ position: "relative" }}>
          <img className="img-fluid" src="/map.png" alt="" />
          <FontAwesomeIcon
            icon={faMapMarkerAlt}
            className="fs-3"
            style={{
              position: "absolute",
              top: position.top,
              left: position.left,
              color: "blue",
            }}
          />
        </div>
      </div>
    </div>
  );
};
