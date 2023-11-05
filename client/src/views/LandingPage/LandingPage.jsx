import "./LandingPage.css";
import React from "react";
import { Link } from "react-router-dom";
const LandingPage = () => {
  return (
    <div className="land-container">
      <div className="land-cont2">
        <h1>Landing Page</h1>
        <Link to="/home">
          <button className="btn-land">Click Me!</button>
        </Link>
      </div>
    </div>
  );
};

export default LandingPage;
