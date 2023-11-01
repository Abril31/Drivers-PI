import {
  CLEAN_DRIVER,
  // CREATE_DRIVER,
  GET_ALL_TEAMS,
  GET_DRIVERS,
  GET_DRIVER_BY_ID,
  GET_DRIVER_BY_NAME,
  ORDER,
  REVERSE,
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
export const getTeams = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/teams");
      const dataTeams = response.data;
      dispatch({
        type: GET_ALL_TEAMS,
        payload: dataTeams,
      });
    } catch (error) {
      console.log("Error al traer los teams");
    }
  };
};
export const cleanDriver = () => {
  return { type: CLEAN_DRIVER };
};
export const postDriver = (state) => {
  return async function () {
    try {
      const response = await axios.post("http://localhost:3001/drivers", state);
      const createDriver = response.data;
      return createDriver;
    } catch (error) {
      alert("Sorry, an error occurred");
    }
  };
};
export const orderDrivers = () => {
  return { type: ORDER };
};
export const orderReverseDrivers = () => {
  return { type: REVERSE };
};
