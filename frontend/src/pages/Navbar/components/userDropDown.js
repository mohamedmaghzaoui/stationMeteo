import { FaUser } from "react-icons/fa";
export const UserDropDown = () => {
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
            <span className="mx-1 text-danger fw-bold">Logout</span>
          </a>
        </li>
      </ul>
    </li>
  );
};
