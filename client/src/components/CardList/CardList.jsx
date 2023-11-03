import "./CardList.css";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";

const CardList = ({ firstDriverIndex, lastDriverIndex }) => {
  const drivers = useSelector((state) => state.drivers);
  const currentDrivers = drivers.slice(firstDriverIndex, lastDriverIndex);
  const defaultImage =
    "https://images.pexels.com/photos/18373115/pexels-photo-18373115/free-photo-of-coche-vehiculo-prisa-neumatico.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";

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
