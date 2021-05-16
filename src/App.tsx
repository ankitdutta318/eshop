// import { Counter } from "./pages/counter/Counter";
import Product from "./pages/products";
import BasicLayout from "./layouts/BasicLayout";

import "./App.css";
import "antd/dist/antd.css";

function App() {
  return (
    <>
      {/* <Counter /> */}
      <BasicLayout>
        <Product />
      </BasicLayout>
    </>
  );
}

export default App;
