import { AnyAction } from "@reduxjs/toolkit";

const mobileReducer = (state = false, action: AnyAction) => {
  switch (action.type) {
    case "MOBILE_TRUE":
      return true;
    case "MOBILE_FALSE":
      return false;
    default:
      return state;
  }
};

export default mobileReducer;
