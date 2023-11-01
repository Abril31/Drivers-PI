import {
  CLEAN_DRIVER,
  GET_ALL_TEAMS,
  GET_DRIVERS,
  GET_DRIVER_BY_ID,
  GET_DRIVER_BY_NAME,
  ORDER,
  REVERSE,
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
    case CLEAN_DRIVER:
      return {
        ...state,
        driver: [],
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
    case ORDER:
      const sorted = state.copyDrivers.sort((a, b) => {
        const nameA = a.forename.toLowerCase();
        const nameB = b.forename.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        else return 0;
      });
      return {
        ...state,
        drivers: sorted,
      };
    case REVERSE:
      const sortedZA = state.copyDrivers.sort((a, b) => {
        const nameA = a.forename.toLowerCase();
        const nameB = b.forename.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        else return 0;
      });
      return {
        ...state,
        drivers: sortedZA.reverse(),
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
