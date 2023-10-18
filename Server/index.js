const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());

let sensorDataArray = [];

app.get("/", (req, res) => {
  if (sensorDataArray.length > 0) {
    res.send(`
      <html>
        <head>
          <title>Sensor Data Page</title>
        </head>
        <body>
          <h1>Sensor Data</h1>
          <pre>${JSON.stringify(sensorDataArray, null, 2)}</pre>
        </body>
      </html>
    `);
  } else {
    res.send("No sensor data available.");
  }
});

app.post("/", (req, res) => {
  try {
    const sensorData = req.body;

    if (!sensorData) {
      res.status(400).send("Invalid request. Please provide sensorData.");
      return;
    }

    sensorDataArray.push(sensorData);

    console.log("Received sensor data:", sensorData);
    res.send("Sensor data received!");
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
