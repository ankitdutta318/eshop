import { Layout } from "antd";

import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

const { Sider, Content } = Layout;

const Product = () => {
  return (
    <>
      <Sider theme="light" width={270} collapsedWidth={0} trigger={null}>
        <Filter />
      </Sider>
      <Content style={{ padding: "0 0 0 20px", minHeight: 280 }}>
        <ProductList />
      </Content>
    </>
  );
};

export default Product;
