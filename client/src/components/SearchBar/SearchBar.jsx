import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getDriver, searchDriver } from "../../Redux/actions";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  //varifica si uuid
  const isUUID = (value) => {
    const uuidPattern =
      /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/;
    return uuidPattern.test(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!isNaN(input)) {
      dispatch(getDriver(input));
      navigate(`/home/${input}`);
    } else if (isUUID(input)) {
      dispatch(getDriver(input));
      navigate(`/home/${input}`);
    } else {
      dispatch(searchDriver(input));
      navigate(`/home?name=${input}`);
    }
    setInput(""); //limpia con value{}
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
