import React, { useEffect } from "react"; // Import React and useEffect
import axios from "axios"; // Correct the import statement
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { useState } from "react";

function App() {
  const url = "http://10.1.4.5:3000/sensor";
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    // Use useEffect to make the API request when the component mounts
    async function fetchData() {
      try {
        const apiResponse = await axios.get(url);
        console.log(apiResponse.data); // Log the response data
        setSensorData()
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData(); // Call the fetchData function
  }, []); // The empty array [] ensures the effect runs once on component mount

  return <div> </div>;
}

export default App;
