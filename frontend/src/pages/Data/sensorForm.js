import { useState } from "react";
import "../../Css/sensorForm.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const SensorForm = (props) => {
  const moduleSchema = yup.object().shape({
    name: yup.string().required("name is required"),
    //mac address format
    macAddress: yup
      .string()
      .required("MAC address is required")
      .matches(
        /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
        "Invalid MAC address",
      ),
    place: yup.string().required("place is required"),
  });
  //use the useForm hook for sending data
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(moduleSchema),
  });
  //function to exit form and do animation
  const exitForm = () => {
    setFormClass("hidden");
    setTimeout(() => props.setForm("hidden"), 1000);
  };
  //yup schema for cliend validation

  //function to submitting data
  const submitData = (data) => {
    console.log(data);
  };
  const [formClass, setFormClass] = useState("shown");
  return (
    <div className={`overlay ${formClass}`}>
      <form onSubmit={handleSubmit(submitData)} className="input-form  bg-body">
        <div className="row">
          <p className="col fs-3">Add a new module</p>
          <FontAwesomeIcon
            onClick={() => exitForm()}
            id="exit_icon"
            icon={faTimes}
            className="fs-3  col-1 "
          ></FontAwesomeIcon>
        </div>

        <br />
        <br />
        <input
          style={{
            borderColor: errors.name && "red",
          }}
          placeholder="Module name"
          className="form-control"
          type="text"
          {...register("name")}
        />
        {errors.name ? (
          <p className="text-danger"> Name is required</p>
        ) : (
          <br />
        )}
        <input
          style={{
            borderColor: errors.macAddress && "red",
          }}
          placeholder="Module Mac address"
          className="form-control"
          type="text"
          {...register("macAddress")}
        />
        {errors.macAddress ? (
          <p className="text-danger"> mac address is not correcet </p>
        ) : (
          <br />
        )}
        <input
          style={{
            borderColor: errors.place && "red",
          }}
          placeholder="Place"
          className="form-control"
          type="text"
          {...register("place")}
        />

        {errors.place ? (
          <p className="text-danger"> place is required</p>
        ) : (
          <br />
        )}
        <button type="submit" className="btn btn-primary col-2 mx-1">
          Add
        </button>
        <a onClick={() => exitForm()} className="btn btn-danger">
          Exit
        </a>
      </form>
    </div>
  );
};
