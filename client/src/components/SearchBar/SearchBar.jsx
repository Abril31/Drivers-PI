import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchDriver } from "../../Redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");
  const handleChange = (event) => {
    setInput(event.target.value);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(searchDriver(input));
    //limpia con value{}
    setInput(""); //
  };
  return (
    <div>
      <form>
        <input value={input} onChange={handleChange} />
        <button onClick={handleSubmit} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
