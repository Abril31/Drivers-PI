import {
  GET_ALL_TEAMS,
  GET_DRIVERS,
  GET_DRIVER_BY_ID,
  GET_DRIVER_BY_NAME,
} from "./action-types";

let initialState = {
  drivers: [],
  copyDrivers: [],
  driver: [],
  allTeams: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
        copyDrivers: action.payload,
      };
    case GET_DRIVER_BY_ID:
      return {
        ...state,
        driver: action.payload,
      };
    case GET_DRIVER_BY_NAME:
      return {
        ...state,
        drivers: action.payload,
      };
    case GET_ALL_TEAMS:
      return {
        ...state,
        allTeams: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
