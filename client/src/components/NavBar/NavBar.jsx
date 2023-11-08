import "./NavBar.css";
import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../SearchBar/SearchBar";

const NavBar = () => {
  return (
    <div className="nav-container">
      <img src="./car.svg" alt="car" />
      <Link to="/home" className="link-nav">
        <h2>HOME</h2>
      </Link>
      <Link to="/form" className="link-nav">
        <h2>CREATE</h2>
      </Link>
      <SearchBar />
    </div>
  );
};

export default NavBar;
