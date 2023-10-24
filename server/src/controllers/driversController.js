const axios = require("axios");
const cleanArray = require("./helpers/cleanArray");
const { Driver, Team } = require("../db");

const allDrivers = async () => {
  //Get de la base de datos
  const driversDB = await Driver.findAll();
  const response = await axios.get("http://localhost:5000/drivers");
  const apiDrivers = response.data;

  return [...driversDB, ...cleanArray(apiDrivers)];
};

const driverById = async (id, origin) => {
  //Base de Datos:
  if (origin === "dataBase") {
    const dataBaseDriver = await Driver.findByPk(id, {
      include: {
        model: Team,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    return cleanArray[dataBaseDriver];
  } else if (origin === "api") {
    const response = await axios.get(`http://localhost:5000/drivers/${id}`);
    const apiDriver = response.data;

    return cleanArray([apiDriver]);
  } else {
    throw new Error("Enter a valid id");
  }
};

module.exports = { allDrivers, driverById };
