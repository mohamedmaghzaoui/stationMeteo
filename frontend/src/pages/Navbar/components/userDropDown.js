import { FaUser } from "react-icons/fa";
import axios from "axios";
import { useContext } from "react";
import { UserContext } from "../../../contexts/userContext";
import { useNavigate } from "react-router-dom";
export const UserDropDown = () => {
  const { username, setUsername } = useContext(UserContext);
  const navigate = useNavigate();
  const Logout = async () => {
    let url = "http://localhost:8000/logout";
    try {
      const response = await axios.post(url);
      console.log(response);
    } catch (err) {
      console.log(err);

      setUsername((prev) => prev + "a"); //change username to re render component and request name for symfony server
      navigate("/");
    }
  };
  return (
    <li className="nav-item dropdown  offset-xl-1  ">
      <a
        className="nav-link dropdown-toggle  "
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <FaUser size={23} />
      </a>
      <ul className="dropdown-menu">
        {username && (
          <li>
            <a className="dropdown-item bg-dark-subtle">
              <span className="mx-1 text-body-emphasis">{username}</span>
            </a>
          </li>
        )}

        <li>
          <a className="dropdown-item">
            <span className="mx-1">Profile</span>
          </a>
        </li>
        <li>
          <a className="dropdown-item">
            <span className="mx-1">User settings</span>
          </a>
        </li>
        <li>
          <span className="dropdown-item">
            <span onClick={() => Logout()} className="mx-1 text-danger fw-bold">
              Logout
            </span>
          </span>
        </li>
      </ul>
    </li>
  );
};
