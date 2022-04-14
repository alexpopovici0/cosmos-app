import dark from "./dark";
import light from "./light";

const getTheme = (name: string = "") => {
  switch (name) {
    case "light":
      return light;
    case "dark":
      return dark;
    default:
      return dark;
  }
};

export { getTheme };
