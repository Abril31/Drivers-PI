const axios = require("axios");
const { cleanArray, cleanArrayId } = require("../helpers/cleaner");
const { Driver, Team } = require("../db");
const { Op } = require("sequelize");

const getAllDrivers = async () => {
  //Get de la base de datos
  const dataBaseDrivers = await Driver.findAll({
    include: {
      model: Team,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });

  const response = await axios.get("http://localhost:5000/drivers");
  const apiDrivers = cleanArray(response.data).slice(0, 31); //unifica la info, no tocar!

  return [...cleanArrayId(dataBaseDrivers), ...apiDrivers];
};

const getDriverByName = async (name) => {
  console.log("Entrando en driverByName");

  // Busco en la API
  const response = await axios.get("http://localhost:5000/drivers");
  const apiDrivers = cleanArray(response.data);

  const driverFiltered = apiDrivers.filter(
    (driver) =>
      driver.forename.toLowerCase() === name.toLowerCase() ||
      driver.surname.toLowerCase() === name.toLowerCase()
  );

  // Busco en la DB
  const dataBaseDriverName = await Driver.findAll({
    where: {
      [Op.or]: [
        {
          forename: {
            [Op.iLike]: name, //sin distinción
          },
        },
        {
          surname: {
            [Op.iLike]: name,
          },
        },
      ],
    },
  });

  const result = [...driverFiltered, ...dataBaseDriverName];

  if (result.length === 0) {
    return "Driver not found, try a different name";
  }

  return result;
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

    return cleanArrayId([dataBaseDriver]); //Funciona, no tocar!
  } else if (origin === "api") {
    const response = await axios.get(`http://localhost:5000/drivers/${id}`);
    const apiDriver = cleanArray([response.data]); //Unificado, no tocar!

    return apiDriver;
  } else {
    throw new Error("Enter a valid id");
  }
};
module.exports = { getAllDrivers, driverById, getDriverByName };
