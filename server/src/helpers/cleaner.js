const cleanArray = (array) => {
  return array.map((driver) => {
    let defaultImage =
      "https://media.gettyimages.com/id/1126025369/es/foto/piloto-de-carreras-de-monoplazas.jpg?s=612x612&w=0&k=20&c=rVDhWUcXltKqJvtyiCIX79Qs29iMtNfXg-_Ma96G_8I=";
    return {
      id: driver.id,
      forename: driver.name.forename,
      surname: driver.name.surname,
      description: driver.description,
      image: driver.image ? driver.image.url : defaultImage,
      nationality: driver.nationality,
      dob: driver.dob,
      teams: driver.teams,
      created: false,
    };
  });
};
const cleanArrayId = (array) => {
  return array.map((driver) => {
    let teams = driver.Teams ? driver.Teams.map((team) => team.name) : []; // Acceder a Teams y extraer los nombres
    let defaultImage =
      "https://media.gettyimages.com/id/1126025369/es/foto/piloto-de-carreras-de-monoplazas.jpg?s=612x612&w=0&k=20&c=rVDhWUcXltKqJvtyiCIX79Qs29iMtNfXg-_Ma96G_8I=";
    return {
      id: driver.id,
      forename: driver.forename,
      surname: driver.surname,
      description: driver.description,
      image: driver.url ? driver.url : defaultImage,
      nationality: driver.nationality,
      dob: driver.dob,
      teams: teams.join(", "),
      created: true,
    };
  });
};

module.exports = { cleanArray, cleanArrayId };
