const { Driver, Team } = require("../db");
const createDriver = async ({
  id,
  forename,
  surname,
  description,
  image,
  nationality,
  dob,
  teams,
}) => {
  try {
    if (!Array.isArray(teams)) {
      throw new Error("teams debe ser un array");
    }

    // Crear el nuevo conductor
    const createNewDriver = await Driver.create({
      id,
      forename,
      surname,
      description,
      image,
      nationality,
      dob,
    });

    const databaseTeams = await Team.findAll({
      where: { name: teams },
    });

    await createNewDriver.addTeams(databaseTeams);
    return createNewDriver;
  } catch (error) {
    console.log("Error al crear el driver");
  }
};
module.exports = createDriver;
