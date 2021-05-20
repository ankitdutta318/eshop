import axios from "axios";

// service to fetch products
export const fetchProducts = (limit?: number) => {
  let url = "https://fakestoreapi.com/products";
  if (limit) url = `https://fakestoreapi.com/products?limit=${limit}`;
  return axios.get(url);
};

// service to fetch categories
export const fetchCategories = () => {
  return axios.get("https://fakestoreapi.com/products/categories");
};
