import "./Form.css";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { validate } from "../helpers/validate";
import { getTeams, postDriver } from "../../Redux/actions";

const Form = () => {
  const dispatch = useDispatch();
  const allTeams = useSelector((state) => state.allTeams);
  useEffect(() => {
    dispatch(getTeams());
  }, []);
  const [state, setState] = useState({
    forename: "",
    surname: "",
    description: "",
    image: "",
    nationality: "",
    dob: "",
    teams: [],
  });
  const [errors, setErrors] = useState({
    forename: "*Required",
    surname: "*Required",
    description: "*Required",
    image: "",
    nationality: "*Required",
    dob: "*Required",
    teams: "*Choose at least 1 team",
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value; //capto lo q escribe el usuario
    // Manejo los cambios en el form
    if (name !== "teams") {
      setState({
        ...state,
        [name]: value,
      });
    } else {
      // Evitar que se pise en teams
      if (!state.teams.includes(value)) {
        //Evito agregar repetidos y creo una nueva copia del array
        let newTeams = [...state.teams, value];
        setState({
          ...state,
          teams: newTeams,
        });
      }
    }
    const newErrors = validate({ ...state, [name]: value }, name);
    setErrors({ ...errors, ...newErrors });
  };
  const disabledButton = () => {
    for (let error in errors) {
      if (errors[error] !== "") return true; // Si hay al menos un error, deshabilitamos el botón
    }
    return false; // No hay errores, habilitamos el botón
  };

  //Elimina el team agregado.
  const remove = (teamToRemove) => {
    let newTeams = state.teams.filter((team) => team !== teamToRemove); //
    setState({
      ...state,
      teams: newTeams,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(postDriver(state))
      .then(() => alert("Driver created successfully 🏁!"))
      .catch((error) => {
        alert("There was a problem 😥, try again, please", error);
      });
  };
  return (
    <div className="main-form-cont">
      {console.log(errors)}
      <form onSubmit={handleSubmit} className="form-container">
        <label>Name</label>
        <input onChange={handleChange} type="text" name="forename" />
        <p>{errors.forename}</p>
        <label>Lastname</label>
        <input onChange={handleChange} type="text" name="surname" />
        <p>{errors.surname}</p>
        <label>
          Description
          <textarea
            onChange={handleChange}
            type="text"
            name="description"
            rows="5"
            cols="50"
          />
        </label>
        <p>{errors.description}</p>
        <label>Image</label>
        <input onChange={handleChange} type="text" name="image" />
        <label>Nationality</label>
        <input onChange={handleChange} type="text" name="nationality" />
        <p>{errors.nationality}</p>

        <label>Birth Date</label>
        <input onChange={handleChange} type="date" name="dob" />
        <p>{errors.dob}</p>

        <select onChange={handleChange} name="teams">
          {allTeams.map((team) => (
            <option value={team} key={team}>
              {team}
            </option>
          ))}
        </select>
        <p>{errors.teams}</p>
        {state.teams.map((team) => (
          <div key={team}>
            <span>{team}</span>

            <button
              onClick={() => {
                remove(team);
              }}
            >
              x
            </button>
          </div>
        ))}

        <button type="submit" disabled={disabledButton()}>
          Create your Driver!
        </button>
      </form>
    </div>
  );
};

export default Form;
