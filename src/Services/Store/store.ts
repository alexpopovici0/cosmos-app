import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./Reducers/cart";
import themeReducer from "./Reducers/theme";

const store = configureStore({
  reducer: {
    cart: cartReducer,
    theme: themeReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
