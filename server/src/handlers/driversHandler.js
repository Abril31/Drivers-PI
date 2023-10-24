const { allDrivers, driverById } = require("../controllers/driversController");

const getAllDriversHandler = async (req, res) => {
  try {
    const data = await allDrivers(); //espero a q se ejecute apidrivers.
    res.status(200).json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getDriverByIdHandler = async (req, res) => {
  const { id } = req.params;
  let origin;

  if (isNaN(id)) {
    origin = "dataBase";
  } else {
    origin = "api";
  }
  try {
    const detailDriver = await driverById(id, origin);
    res.status(200).json(detailDriver);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createDriverHandler = (req, res) => {
  try {
    res.status(201).send("Creación del driver");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllDriversHandler,
  getDriverByIdHandler,
  createDriverHandler,
};
