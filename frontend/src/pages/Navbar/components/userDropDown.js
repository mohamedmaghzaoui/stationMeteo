import { FaUser } from "react-icons/fa";
import axios from "axios";
export const UserDropDown = () => {
  const Logout = async () => {
    let url = "http://localhost:8000/logout";
    try {
      const response = await axios.post(url);
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <li className="nav-item dropdown  offset-1  ">
      <a
        className="nav-link dropdown-toggle  "
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <FaUser size={23} />
      </a>
      <ul className="dropdown-menu">
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
          <a className="dropdown-item">
            <span onClick={() => Logout()} className="mx-1 text-danger fw-bold">
              Logout
            </span>
          </a>
        </li>
      </ul>
    </li>
  );
};
