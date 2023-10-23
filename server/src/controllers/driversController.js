const axios = require("axios");

const apiDrivers = async () => {
  const response = await axios.get("http://localhost:5000/drivers");
  const data = response.data;
  return data;
};

module.exports = { apiDrivers };
