//diffrent libraries
import { Link } from "react-router-dom";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../Css/Login.css";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { UserContext } from "../../contexts/userContext";

export const Login = () => {
  const navigate = useNavigate();
  //username context
  const { setUsername } = useContext(UserContext);
  //login schema
  const userSchema = yup.object().shape({
    email: yup.string().required("Email is required"),
    password: yup
      .string()
      .required("password is required")
      .min(6, "password too short"),
  });
  //state for show password icon and change type
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");
  //use use form for data managment
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const submitData = async (userData) => {
    const url = "http://localhost:8000/login";
    console.log(userData);
    try {
      setLoginError(
        <div class="spinner-grow text-primary" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>,
      );
      const response = await axios.post(
        "http://localhost:8000/login",
        userData,
      );
      console.log(response);
      setUsername((prev) => prev + "a"); //change username to re render component and request name for symfony server
      navigate("/");
    } catch (err) {
      console.log(err.response);
      setLoginError("Incorrect email or password");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitData)} className="my-5">
        <div class="form-outline offset-xl-4 offset-lg-4 offset-sm-3 offset-2 mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-8">
          <label class="form-label" for="form2Example1">
            Email address
          </label>
          <input
            {...register("email")}
            type="email"
            id="form2Example1"
            class="form-control"
          />
          {errors.email ? (
            <span className="text-danger"> {errors.email.message} </span>
          ) : (
            <span />
          )}
        </div>

        <div class="position-relative form-outline offset-xl-4 offset-lg-4 offset-sm-3 offset-2 mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-8">
          <label class="form-label" for="form2Example2">
            Password
          </label>

          <input
            {...register("password")}
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
          {errors.password ? (
            <span className="text-danger"> {errors.password.message} </span>
          ) : (
            <p />
          )}
          {loginError && (
            <p className="text-center text-danger fw-bold">{loginError}</p>
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
            <Link style={{ color: "#4550E6" }}>Forgot password?</Link>
          </div>
        </div>

        <button
          style={{ backgroundColor: "#4550E6" }}
          type="submit"
          class="btn text-light fw-medium btn-block mb-4 offset-xl-4 offset-lg-4 offset-2 col-xl-3 col-lg-3 col-md-5 col-sm-6 col-8"
        >
          Sign in
        </button>

        <div className="offset-xl-5 offset-2">
          <p>
            Not a member?{" "}
            <Link style={{ color: "#4550E6" }} to={"/SignUp"}>
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};
