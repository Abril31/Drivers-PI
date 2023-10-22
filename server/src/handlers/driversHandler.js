const getAllDriversHandler = (req, res) => {
  try {
    res.status(200).send("Aqui llegan los drivers");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
const getDriverByIdHandler = (req, res) => {
  try {
    res.status(200).send("Driver detail");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const postDriverHandler = (req, res) => {
  try {
    res.status(201).send("Creación del driver");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllDriversHandler,
  getDriverByIdHandler,
  postDriverHandler,
};
