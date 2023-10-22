const getAllTeamsHandler = (req, res) => {
  try {
    res.status(200).send("Se obtienen todos los TEAMS");
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = getAllTeamsHandler;
