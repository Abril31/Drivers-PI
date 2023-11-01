import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, forename, surname, image, teams, dob }) => {
  return (
    <Link className="link-card" to={`/detail/${id}`}>
      <div className="card-container">
        <h4> {id} </h4>
        <h3>
          {forename} {surname}
        </h3>
        <img src={image} alt={forename} />
        <p>Teams: {teams}</p>
        <span>Date of Birth: {dob}</span>
      </div>
    </Link>
  );
};

export default Card;
