import axios from "axios";

export const fetchProducts = (limit?: number) => {
  let url = "https://fakestoreapi.com/products";
  if (limit) url = `https://fakestoreapi.com/products?limit=${limit}`;
  return axios.get(url);
};
