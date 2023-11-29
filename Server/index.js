const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

app.use(express.json());
app.use(cors());
const sensorRouter = require("./routes/sensor");
app.use("/sensor", sensorRouter);
const db = require("./models");
db.sequelize.sync().then(() => {
  app.listen(3000, () => {
    console.log("server is running on port 3000");
  });
});
