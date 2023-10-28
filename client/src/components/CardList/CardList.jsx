import "./CardList.css";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const CardList = () => {
  const drivers = useSelector((state) => state.drivers);

  return (
    <div className="cardlist-container">
      {drivers.map((driver) => (
        <Card
          key={driver.id}
          id={driver.id}
          forename={driver.forename}
          surname={driver.surname}
          image={driver.image}
          teams={driver.teams}
        />
      ))}
    </div>
  );
};

export default CardList;
