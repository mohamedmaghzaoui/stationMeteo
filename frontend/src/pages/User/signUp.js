//import libraries
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../Css/User.css";
import axios from "axios";
import { UserContext } from "../../contexts/userContext";

export const SignUp = () => {
  const navigate = useNavigate();
  const [submitError, setsubmitError] = useState("");
  const { setUsername } = useContext(UserContext);
  //user scheam for yup validation
  const userSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup.string().required("email is required"),
    password: yup
      .string()
      .required("password is required")
      .min(6, "password too short minimum 6 letters"),
    repeatedPassword: yup
      .string()
      .required("repeat password is required")
      .oneOf([yup.ref("password"), null], "Passwords must match"),
  });
  //use useForm for form data managment
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  //send data to symfony server
  const submitData = async (userData) => {
    let url = "http://localhost:8000/users";
    let loginUrl = "http://localhost:8000/login";
    console.log(userData);

    try {
      setsubmitError(
        <div class="spinner-grow text-success" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>,
      );
      const response1 = await axios.post(url, userData);
      console.log(response1);
      const userAuthentication = {
        email: userData.email,
        password: userData.password,
      };
      //automaticly login user after creating him
      const response2 = await axios.post(loginUrl, userAuthentication);
      console.log(response2);
      setUsername((prev) => prev + "a"); //change username to re rernder
      navigate("/");
    } catch (err) {
      setsubmitError(`User already exist`);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitData)} className="my-5">
        <div class="form-outline offset-xl-4 offset-lg-4 offset-sm-3 offset-2 mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-8">
          <label class="form-label" for="form2Example1">
            Name
          </label>
          <input {...register("name")} type="text" class="form-control" />
          {errors.name ? (
            <p className="text-danger"> {errors.name.message} </p>
          ) : (
            <br />
          )}

          <label class="form-label" for="form2Example1">
            Email address
          </label>
          <input {...register("email")} type="email" class="form-control" />
          {errors.email ? (
            <p className="text-danger"> {errors.email.message} </p>
          ) : (
            <br />
          )}
        </div>

        <div class="form-outline offset-xl-4 offset-lg-4 offset-sm-3 offset-2 mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-8">
          <label class="form-label" for="form2Example2">
            Password
          </label>
          <input
            {...register("password")}
            type="password"
            class="form-control"
          />
          {/* handel diffrent errors */}
          {errors.password ? (
            <p className="text-danger"> {errors.password.message} </p>
          ) : (
            <br />
          )}
          <label class="form-label" for="form2Example2">
            Reapeat Password
          </label>
          <input
            {...register("repeatedPassword")}
            type="password"
            class="form-control"
          />
          {errors.repeatedPassword ? (
            <p className="text-danger"> {errors.repeatedPassword.message} </p>
          ) : (
            <br />
          )}
          {submitError && (
            <p className="text-center text-danger fw-bold">{submitError}</p>
          )}
        </div>

        <button
          type="submit"
          style={{ backgroundColor: "#5cb377" }}
          class="btn  text-light fw-bold btn-block mb-4 offset-xl-4 offset-lg-4 offset-2 col-xl-3 col-lg-3 col-md-5 col-sm-6 col-8"
        >
          Sign up
        </button>

        <div className="offset-xl-4 offset-2  ">
          <p>
            Already have an account? <Link to={"/login"}>Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};
