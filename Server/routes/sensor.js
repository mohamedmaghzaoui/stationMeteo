const express = require("express");
const sensorRouter = express.Router();
const { SensorDb } = require("../models");
const {readAll,addSensor}=require("../Controller/sensorController")
//get all sensor data
sensorRouter.get("/",readAll);
//add a new sensor to database
sensorRouter.post("/",addSensor);

module.exports = sensorRouter;
