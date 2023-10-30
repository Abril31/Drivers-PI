import React, { useState } from "react";
import { getDriverByName } from "../../Redux/actions";
import { useDispatch } from "react-redux";

const SearchBar = () => {
  const [searchName, setSearchName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (event) => {
    event.preventDefault();
    setSearchName(event.target.value); //capta lo q escribe el usuario
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    //mando la action y verifico i está en un array por el error de CardLst
    try {
      const response = await dispatch(getDriverByName(searchName));
      const driverByName = response.payload;
      //PAra evitar errro de la búsqueda y se rompa el código
      if (Array.isArray(driverByName) && driverByName.length === 0) {
        alert("Nombre no encontrado");
      } else {
        return driverByName;
      }
    } catch (error) {
      console.log("Error");
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" value={searchName} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
