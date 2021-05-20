// UserContext.js
import React, { createContext, useReducer } from "react";
import { ICartActions, ICartState, ICartModel } from "./types";

const initialState: ICartState = {
  data: [],
};

const reducer = (state: ICartState, action: ICartActions): ICartState => {
  switch (action.type) {
    case "ADD":
      return { ...state, data: [...state.data, action.payload] };
    case "REMOVE":
      return {
        ...state,
        data: [...state.data].filter((item) => item.id !== action.payload),
      };
    case "UPDATE":
      return {
        ...state,
        data: [...state.data].map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: action.payload.qty }
            : item
        ),
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

export const CartContext = createContext({} as ICartModel);

export const CartProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
