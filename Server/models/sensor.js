//create user table using sequelize
module.exports = (sequelize, datatypes) => {
  const SensorDb = sequelize.define("SensorDb", {
    altitude: {
      type: datatypes.FLOAT,
      allowNull: false,
    },
    name: {
      type: datatypes.STRING,
      allowNull: false,
    },
    temperature: {
      type: datatypes.FLOAT,
      allowNull: false,
    },
    humidity: {
      type: datatypes.FLOAT,
      allowNull: false,
    },
    pressure: {
      type: datatypes.FLOAT,
      allowNull: false,
    },
    macAddress: {
      type: datatypes.STRING,
      allowNull: false,
    },
  });

  return SensorDb;
};
