// import { Counter } from "./pages/counter/Counter";
import BasicLayout from "./layouts/BasicLayout";
import Product from "./pages/products";
import ProductView from "./pages/productView";
import Cart from "./pages/cart";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <>
      {/* <Counter /> */}
      <BasicLayout>
        <ProductView />
        {/* <Cart />
        <Product /> */}
      </BasicLayout>
    </>
  );
}

export default App;
