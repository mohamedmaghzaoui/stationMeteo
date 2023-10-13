const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Salut cava!");
});
app.post("/", async (req, res) => {
  try {
    const sensorData = req.body;
    console.log("Received sensor data:", sensorData);
    res.send("Sensor data received! " + JSON.stringify(sensorData));
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
