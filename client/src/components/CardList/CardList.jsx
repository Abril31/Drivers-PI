import "./CardList.css";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const CardList = ({ firstDriverIndex, lastDriverIndex }) => {
  const drivers = useSelector((state) => state.drivers);
  const currentDrivers = drivers.slice(firstDriverIndex, lastDriverIndex);
  const defaultImage =
    "https://morguefile.nyc3.cdn.digitaloceanspaces.com/imageData/public/files/a/anthot4/07/p/51ff02ca581c4334ece364de7e102943.jpg";
  //para evitar el error de la búsqueda por nombre

  if (!Array.isArray(currentDrivers)) {
    console.error("currentDrivers no es un array:", currentDrivers);
    return "Driver not found, please try a different name";
  }
  return (
    <div className="cardlist-container">
      {currentDrivers.map((driver) => (
        <Card
          key={driver.id}
          id={driver.id}
          forename={driver.forename}
          surname={driver.surname}
          image={driver.image || defaultImage}
          nationality={driver.nationality}
          dob={driver.dob}
          teams={driver.teams || ["Not Available"]}
          description={driver.description || "Not Available"}
        />
      ))}
    </div>
  );
};

export default CardList;
