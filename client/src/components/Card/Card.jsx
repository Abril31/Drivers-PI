import "./Card.css";
import React from "react";
import { Link } from "react-router-dom";

const Card = ({ id, forename, surname, image, teams }) => {
  return (
    <div className="card-container">
      <h2> {id} </h2>

      <h3>
        <Link to={`/detail/${id}`}>
          {forename} {surname}
        </Link>
      </h3>
      <img src={image} alt={forename} />
      <p>{teams}</p>
    </div>
  );
};

export default Card;
