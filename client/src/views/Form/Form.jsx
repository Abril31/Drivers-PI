import "./Form.css";
import React, { useState } from "react";

const Form = () => {
  const [state, setState] = useState({
    forename: "",
    surname: "",
    description: "",
    image: "",
    nationality: "",
    dob: "",
    teams: [],
  });
  const teams = ["Ferrari", "Mercedes", "Lotus", "Martini"];
  const handleChange = (event) => {
    console.log(event.target.name);
    console.log(event.target.value);

    // Manejo los cambios en el form
    if (event.target.name !== "teams") {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    } else {
      // Evitar que se pise en teams
      if (!state.teams.includes(event.target.value)) {
        //Evito agregar repetidos y creo una nueva copia del array
        let newTeams = [...state.teams, event.target.value];
        setState({
          //actualizo el estado
          ...state,
          teams: newTeams,
        });
      }
    }
  };

  return (
    <div className="main-form-cont">
      {console.log(state)}
      <form className="form-container">
        <label>Forename</label>
        <input onChange={handleChange} type="text" name="forename" />
        <label>Surname</label>
        <input onChange={handleChange} type="text" name="surname" />
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
        <label>Image</label>
        <input onChange={handleChange} type="text" name="image" />
        <label>Nationality</label>
        <input onChange={handleChange} type="text" name="nationality" />
        <label>Birth Date</label>
        <input onChange={handleChange} type="date" name="dob" />
        <select onChange={handleChange} name="teams">
          {teams.map((team) => (
            <option value={team} key={team}>
              {team}
            </option>
          ))}
        </select>
        {state.teams.map((team) => (
          <div key={team}>
            <span>{team}</span>
            <button>X</button>
          </div>
        ))}

        <button>Create your Driver!</button>
      </form>
    </div>
  );
};

export default Form;
