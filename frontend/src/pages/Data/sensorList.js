import { useEffect } from "react"; // Import React and useEffect
import { useState } from "react";
import { SensorHeader } from "./sensorHeader";
import axios from "axios"; // Correct the import statement
import { SensorForm } from "./sensorForm";
export const Sensor = () => {
  const url = "http://localhost:3000/sensor";
  const [sensorData, setSensorData] = useState(null);
  const[form,setForm]=useState("hidden");

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
      <SensorHeader setForm={setForm}/>
      
      {form=="shown"&&(<SensorForm setForm={setForm}/>)}
      

      {sensorData === null ? (
        <p>Loading...</p>
      ) : (
        sensorData.map((value) => <p>{value.temperature}</p>)
      )}
    </div>
  );
};
