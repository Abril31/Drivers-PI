const cleanArray = (array) => {
  return array.map((element) => {
    let defaultImage =
      "https://media.gettyimages.com/id/1126025369/es/foto/piloto-de-carreras-de-monoplazas.jpg?s=612x612&w=0&k=20&c=rVDhWUcXltKqJvtyiCIX79Qs29iMtNfXg-_Ma96G_8I=";
    return {
      id: element.id,
      // code: element.code ? element.code : "Not available",
      // number: element.number ? element.number : "Not available",
      forename: element.name.forename,
      surname: element.name.surname,
      description: element.description,
      image: element.image ? element.image.url : defaultImage,
      nationality: element.nationality,
      dob: element.dob,
      // teams: element.teams,
      created: false,
    };
  });
};
module.exports = cleanArray;
