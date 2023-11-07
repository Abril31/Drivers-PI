import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className="nav-container">
      <Link to="/home" className="link-nav">
        <h2>Home</h2>
      </Link>
      <Link to="/form" className="link-nav">
        <h2>Create</h2>
      </Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
