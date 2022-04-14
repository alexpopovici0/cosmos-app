import { AnyAction } from "@reduxjs/toolkit";
import { getTheme } from "../../../Assets/Themes";

const themeReducer = (state = getTheme(), action: AnyAction) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default themeReducer;
