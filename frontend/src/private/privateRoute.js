import React, { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "../contexts/userContext";
import { Sensor } from "../pages/Data/sensorList";
//if user is logged in return sensor element else navigate to login
export const PrivateRoute = ({ element }) => {
  const { username } = useContext(UserContext);

  return username ? element : <Navigate to="/login" />;
};
