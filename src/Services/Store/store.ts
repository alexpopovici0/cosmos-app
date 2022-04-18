import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducers/cart";
import themeReducer from "./Reducers/theme";
import mobileReducer from "./Reducers/mobile";
import caruselReducer from "./Reducers/carusel";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
    mobile: mobileReducer,
    carusel: caruselReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
