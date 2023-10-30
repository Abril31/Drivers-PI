import {
  GET_DRIVERS,
  GET_DRIVER_BY_ID,
  GET_DRIVER_BY_NAME,
} from "./action-types";
import axios from "axios";
export const getDrivers = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/drivers");
      const drivers = response.data;
      dispatch({
        type: GET_DRIVERS,
        payload: drivers,
      });
    } catch (error) {
      console.log("Error al recuperar los drivers");
    }
  };
};
export const getDriver = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`http://localhost:3001/drivers/${id}`);
      const driver = response.data;
      dispatch({
        type: GET_DRIVER_BY_ID,
        payload: driver,
      });
    } catch (error) {
      console.log("Error al recuperar al driver");
    }
  };
};
export const getDriverByName = (name) => {
  return async function (dispatch) {
    try {
      const response = await axios.get(
        `http://localhost:3001/drivers?name=${name}`
      );
      const driverByName = response.data;
      dispatch({
        type: GET_DRIVER_BY_NAME,
        payload: driverByName,
      });
    } catch (error) {
      console.log("Error en la búsqueda por nombre");
    }
  };
};
