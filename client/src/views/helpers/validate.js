export const validate = (state, name) => {
  const newErrors = { ...state.errors }; // Hacemos una copia de los errores existentes

  if (name === "forename") {
    if (state.forename === "") {
      newErrors.forename = "*Forename is required";
    } else if (state.forename.length > 25) {
      newErrors.forename = "Forename shouldn't have more than 25 characters";
    } else {
      newErrors.forename = "";
    }
  }

  if (name === "surname") {
    if (state.surname === "") {
      newErrors.surname = "*Surename is required";
    } else if (state.surname.length > 40) {
      newErrors.surname = "Surename shouldn't have more than 40 characters";
    } else {
      newErrors.surname = "";
    }
  }

  if (name === "description") {
    if (state.description === "") {
      newErrors.description = "*Description is required";
    } else if (state.description.length > 150) {
      newErrors.description =
        "Description shouldn't have more than 120 characters";
    } else {
      newErrors.description = "";
    }
  }

  if (name === "dob") {
    if (state.dob === "") {
      newErrors.dob = "*Date of birth is required";
    } else {
      // Verificar si la fecha de nacimiento cumple con la edad de 18 años o más
      const dob = new Date(state.dob); //Fecha ingresada
      const eighteenYearsAgo = new Date(); //Fecha actual
      eighteenYearsAgo.setFullYear(eighteenYearsAgo.getFullYear() - 18); //2005

      if (dob > eighteenYearsAgo) {
        newErrors.dob = "Must be 18 or older";
      } else {
        newErrors.dob = "";
      }
    }
  }
  if (name === "teams") {
    if (state.teams.length === 0) {
      newErrors.teams = "*Choose at least 1 team";
    } else {
      newErrors.teams = "";
    }
  }

  return newErrors;
};
