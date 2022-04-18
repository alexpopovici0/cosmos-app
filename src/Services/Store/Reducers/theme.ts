import { AnyAction } from "@reduxjs/toolkit";
import { getTheme } from "../../../Assets/Themes";

const themeReducer = (state = getTheme(), action: AnyAction) => {
  switch (action.type) {
    case "DARK_THEME":
      return getTheme("dark");
    case "LIGHT_THEME":
      return getTheme("light");
    default:
      return state;
  }
};

export default themeReducer;
