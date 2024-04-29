//import libraries
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import "../../Css/User.css";

export const SignUp = () => {
  const [showPasswordError, setShowPasswordError] = useState(false);
  //user scheam for yup validation
  const userSchema = yup.object().shape({
    username: yup.string().required("username is required"),
    email: yup.string().required("email is required"),
    password: yup
      .string()
      .required("password isrequired")
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
  const submitData = (data) => {
    console.log(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submitData)} className="my-5">
        <div class="form-outline offset-xl-4 offset-lg-4 offset-sm-3 offset-2 mb-4 col-xl-3 col-lg-3 col-md-4 col-sm-5 col-8">
          <label class="form-label" for="form2Example1">
            Username
          </label>
          <input {...register("username")} type="text" class="form-control" />
          {errors.username ? (
            <p className="text-danger"> {errors.username.message} </p>
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
        </div>

        <div class="row mb-4">
          <div class="col row d-flex justify-content-center"></div>
        </div>

        <button
          type="button"
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
