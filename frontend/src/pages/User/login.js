import { Link } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Css/Login.css";
import { useState } from "react";

export const Login = () => {
  //state for show password icon and change type
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <form className="my-5">
        <div class="form-outline offset-xl-4 offset-lg-4 offset-sm-3 offset-2 mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-8">
          <label class="form-label" for="form2Example1">
            Email address
          </label>
          <input type="email" id="form2Example1" class="form-control" />
        </div>

        <div class="position-relative form-outline offset-xl-4 offset-lg-4 offset-sm-3 offset-2 mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-8">
          <label class="form-label" for="form2Example2">
            Password
          </label>

          <input
            type={showPassword ? "text" : "password"}
            id
            class="form-control "
          />
          {showPassword ? (
            <FontAwesomeIcon
              onClick={() => setShowPassword(false)}
              id="icon"
              className="offset-xl-11 offset-lg-11 offset-10"
              icon={faEye}
            />
          ) : (
            <FontAwesomeIcon
              id="icon"
              onClick={() => setShowPassword(true)}
              className="offset-xl-11 offset-lg-11 offset-10"
              icon={faEyeSlash}
            />
          )}
        </div>

        <div class="row mb-4">
          <div class="col row d-flex justify-content-center">
            <div class="form-check offset-xl-7 offset-lg-7 offset-3  col-xl-3 col-lg-3   ">
              <input
                style={{
                  cursor: "pointer",
                }}
                class="form-check-input "
                id="form2Example31"
                type="checkbox"
              />
              <label class="form-check-label   " for="form2Example31">
                {" "}
                Remember me{" "}
              </label>
            </div>
          </div>

          <div class="col">
            <a href="#!">Forgot password?</a>
          </div>
        </div>

        <button
          type="button"
          class="btn btn-primary btn-block mb-4 offset-xl-4 offset-lg-4 offset-2 col-xl-3 col-lg-3 col-md-5 col-sm-6 col-8"
        >
          Sign in
        </button>

        <div className="offset-xl-5 offset-2">
          <p>
            Not a member? <Link to={"/SignUp"}>Register</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
