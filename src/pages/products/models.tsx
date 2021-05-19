// UserContext.js
import React, { createContext, useReducer } from "react";
import { IProductAction, IProductsState, IProductsModel } from "./types";

const initialState: IProductsState = {
  data: [],
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
    case "PRODUCTS_LOADING":
      return { ...state, loading: action.payload };
    case "PRODUCTS_ERROR":
      return { ...state, error: action.payload };
    case "SORT_NEWEST":
      return {
        ...state,
        data: state.data.sort((a, b) => b.createdAt - a.createdAt),
      };
    case "SORT_ASC_PRICE":
      return { ...state, data: state.data.sort((a, b) => a.price - b.price) };
    case "SORT_DESC_PRICE":
      return { ...state, data: state.data.sort((a, b) => b.price - a.price) };

    case "SORT_ASC_RATING":
      return { ...state, data: state.data.sort((a, b) => a.rating - b.rating) };
    case "SORT_DESC_RATING":
      return { ...state, data: state.data.sort((a, b) => b.price - a.price) };
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
