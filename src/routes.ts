import About from "./pages/about";
import Cart from "./pages/cart";
import Contact from "./pages/contact";
import Products from "./pages/products";

export const routes = [
  {
    path: "/",
    exact: true,
    component: Products,
  },
  {
    path: "/products",
    exact: true,
    component: Products,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/cart",
    component: Cart,
  },
];
