import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./Css/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import {} from "./pages/Data/sensorDetails";
import { NotFound } from "./pages/notFound";
import { Navbar } from "./pages/Navbar/navbar";
import { Sensor } from "./pages/Data/sensorList";
import { Login } from "./pages/User/login";
import { SignUp } from "./pages/User/signUp";
import { Price } from "./pages/price";
import { Contact } from "./pages/contact";
import { Footer } from "./pages/footer";
import { UserProvider } from "./contexts/userContext";
import { SensorDetails } from "./pages/Data/sensorDetails";

import axios from "axios";

function App() {
  axios.defaults.withCredentials = true;
  return (
    <div className="container-fluid">
      <UserProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sensor" element={<Sensor />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/price" element={<Price />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/sensorDetails/:macAddress/:name"
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
