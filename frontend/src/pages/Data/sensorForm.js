import { useState } from "react";
import "../../Css/sensorForm.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export const SensorForm = (props) => {
  const [company, setCompany] = useState(2); // state for company 2=> no company selected and 1=> hexagone
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
          <p className="text-danger"> {errors.name.message}</p>
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
          <p className="text-danger"> {errors.macAddress.message} </p>
        ) : (
          <br />
        )}

        <select
          onInput={(e) => setCompany(e.target.value)}
          class="form-select"
          aria-label="Default select example"
        >
          <option selected>select company</option>
          <option value="1">Hexagone</option>
          <option value="2">no company</option>
        </select>
        <br />
        {company == 1 ? (
          <select
            className="form-select"
            aria-label="Default select example"
            defaultValue="select company"
          >
            <option disabled>sale1</option>
            <option value="1">sale 2</option>
            <option value="2">sale 3</option>
            <option value="2">sale 4</option>
            <option value="2">sale 5</option>
            <option value="2">labo</option>
            <option value="2">studio</option>
          </select>
        ) : (
          <input
            style={{
              borderColor: errors.place && "red",
            }}
            placeholder="Place"
            className="form-control"
            type="text"
            {...register("place")}
          />
        )}

        {errors.place ? (
          <p className="text-danger"> {errors.place.message}</p>
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
