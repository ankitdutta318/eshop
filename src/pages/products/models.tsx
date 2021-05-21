// UserContext.js
import React, { createContext, useReducer } from "react";
import { IProductAction, IProductsState, IProductsModel } from "./types";

const initialState: IProductsState = {
  data: [],
  categories: [],
  loading: false,
  error: null,
};

const reducer = (
  state: IProductsState,
  action: IProductAction
): IProductsState => {
  switch (action.type) {
    case "FETCH_PRODUCTS":
      return { ...state, data: action.payload };
    case "FETCH_CATEGORIES":
      return { ...state, categories: action.payload };
    case "PRODUCTS_LOADING":
      return { ...state, loading: action.payload };
    case "PRODUCTS_ERROR":
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

export const ProductsContext = createContext({} as IProductsModel);

export const ProductsProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <ProductsContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductsContext.Provider>
  );
};
