import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

import "./Css/App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { NotFound } from "./pages/notFound";
import { Navbar } from "./pages/navbar";
import { Sensor } from "./pages/Data/sensorList";
import { Login } from "./pages/User/login";
import { SignUp } from "./pages/User/signUp";
import { Price } from "./pages/price";

function App() {
  return (
    <div className="container-fluid">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sensor" element={<Sensor />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/price" element={<Price />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
