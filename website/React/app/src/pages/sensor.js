import { useEffect } from "react"; // Import React and useEffect
import { useState } from "react";
import axios from "axios"; // Correct the import statement
export const Sensor = () => {
  const url = "http://10.1.4.5:3000/sensor";
  const [sensorData, setSensorData] = useState(null);

  useEffect(() => {
    // Use useEffect to make the API request when the component mounts
    async function fetchData() {
      try {
        const apiResponse = await axios.get(url);
        setSensorData(apiResponse.data);
        console.log(apiResponse.data); // Log the response data
      } catch (error) {
        console.error("Error:", error);
      }
    }

    fetchData(); // Call the fetchData function
  }, []); // The empty array [] ensures the effect runs once on component mount

  return (
    <div>
      {sensorData === null ? (
        <p>Loading...</p>
      ) : (
        sensorData.map((value) => <p>{value.temperature}</p>)
      )}
    </div>
  );
};
