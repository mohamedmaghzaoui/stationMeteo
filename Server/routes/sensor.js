const express = require("express");
const sensorRouter = express.Router();
const { SensorDb } = require("../models");

sensorRouter.get("/", async (req, res) => {
  try {
    const sensorData = await SensorDb.findAll();

    if (sensorData.length > 0) {
      res.json(sensorData);
    } else {
      res.send("No sensor data available.");
    }
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

sensorRouter.post("/", async (req, res) => {
  try {
    const sensorData = req.body;

    if (!sensorData) {
      res.status(400).send("Invalid request. Please provide sensorData.");
      return;
    }

    // Save the sensor data to the database using the SensorDb model
    const createdSensor = await SensorDb.create(sensorData);

    console.log("Received sensor data:", sensorData);
    res.send("Sensor data received and saved to the database!");
  } catch (error) {
    res.status(500).send("Error: " + error.message);
  }
});

module.exports = sensorRouter;
