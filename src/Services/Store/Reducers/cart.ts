import { AnyAction } from "@reduxjs/toolkit";
import { PropsState, AddAction, RemoveAction } from "../../../Types/interfaces";

const initialState = () => {
  const localstorage = localStorage.getItem("cart");
  if (localstorage !== null) {
    const save: PropsState[] = JSON.parse(localstorage);
    return save;
  }
  return [];
};

const INITIAL_STATE: PropsState[] = initialState();

const cartReducer = (
  state: PropsState[] = INITIAL_STATE,
  action: AddAction | RemoveAction | AnyAction
): PropsState[] => {
  switch (action.type) {
    case "NEW_CART":
      return [...action.value];
    case "ADD_TO_CART":
      return [...state, action.value];
    case "REMOVE_FROM_CART":
      console.log(action.value);
      return [...state.filter((value) => value.id !== action.value)];
    case "UPDATE_QUANTITY_CART":
      console.log(action.value);
      return [
        ...state.map((value) => {
          if (value.id === action.value.id) {
            return action.value;
          } else {
            return value;
          }
        }),
      ];
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

export default cartReducer;
