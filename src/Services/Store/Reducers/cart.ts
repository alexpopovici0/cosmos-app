import { AnyAction } from "@reduxjs/toolkit";

const cartReducer = (state = [], action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default cartReducer;
