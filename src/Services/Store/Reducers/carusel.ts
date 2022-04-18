import { AnyAction } from "@reduxjs/toolkit";

const caruselReducer = (state = false, action: AnyAction) => {
  switch (action.type) {
    case "CARUSEL_TRUE":
      return true;
    case "CARUSEL_FALSE":
      return false;
    default:
      return state;
  }
};

export default caruselReducer;
