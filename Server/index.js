const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

const sensorRouter = require("./routes/sensor");
app.use("/sensor", sensorRouter);
const db = require("./models");
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
});
