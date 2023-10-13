const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

let sensorData = null;

app.get("/", (req, res) => {
  if (sensorData) {
    res.send(`<html>
                <head>
                  <title>Sensor Data Page</title>
                </head>
                <body>
                  <h1>Sensor Data</h1>
                  <pre>${JSON.stringify(sensorData, null, 2)}</pre>
                </body>
              </html>`);
  } else {
    res.send("No sensor data available.");
  }
});

app.post("/", async (req, res) => {
  try {
    sensorData = req.body;
    console.log("Received sensor data:", sensorData);
    res.send("Sensor data received! " + JSON.stringify(sensorData));
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
