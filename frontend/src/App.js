import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./Css/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";

import { NotFound } from "./pages/notFound";
import { Navbar } from "./pages/Navbar/navbar";
import { Login } from "./pages/User/login";
import { SignUp } from "./pages/User/signUp";
import { Price } from "./pages/price";
import { Contact } from "./pages/contact";
import { Footer } from "./pages/footer";
import { UserProvider } from "./contexts/userContext";
import { LastSensorDetails } from "./pages/Data/lastSensorDetails";
import { SensorDetails } from "./pages/Data/sensorDetails";
import { PrivateRoute } from "./private/privateRoute";

import axios from "axios";
import { Sensor } from "./pages/Data/sensorList";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="container-fluid">
      <UserProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/sensor"
              element={<PrivateRoute element={<Sensor />} />}
            />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/price" element={<Price />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/sensorDetails/last/:macAddress/:name"
              element={<LastSensorDetails />}
            />
            <Route
              path="/sensorDetails/all/:macAddress/:name"
              element={<SensorDetails />}
            />
          </Routes>
          <Footer />
        </Router>
      </UserProvider>
    </div>
  );
}

export default App;
