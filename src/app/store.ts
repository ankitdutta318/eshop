import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { CartContext, CartProvider } from "../pages/cart/models";
import counterReducer from "../pages/counter/counterSlice";
import { ProductsContext, ProductsProvider } from "../pages/products/models";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const Context = {
  Products: ProductsContext,
  Cart: CartContext,
};

export const Provider = {
  Products: ProductsProvider,
  Cart: CartProvider,
};
