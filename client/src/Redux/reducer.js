import { GET_DRIVERS, GET_DRIVER_BY_ID } from "./action-types";

let initialState = {
  drivers: [],
  driver: [],
};
const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_DRIVERS:
      return {
        ...state,
        drivers: action.payload,
      };
    case GET_DRIVER_BY_ID:
      return {
        ...state,
        driver: action.payload,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
