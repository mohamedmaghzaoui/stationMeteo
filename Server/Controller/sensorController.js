//Sensor Controller code
const { SensorDb } = require("../models");
const express = require("express");
//read all sensor data
const readAll = async(req,res)=>{
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
}
//add a new sensor data to data base
const addSensor=async(req,res)=>{
  try{
    const sensorData=req.body;
    if (!sensorData) {
      res.status(400).send("Invalid request. Please provide sensorData.");
      return;
    }
    const createdSensor = await SensorDb.create(sensorData);

    console.log("Received sensor data:", sensorData);
    res.send("Sensor data received and saved to the database!");

  }catch(error){
    res.status(500).send("Error: " + error.message);

  }
}
module.exports={readAll,addSensor}