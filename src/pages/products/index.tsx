import React, { useState, useEffect, useContext } from "react";
import { Button, Drawer, Input, Space, Select } from "antd";
import { FilterOutlined } from "@ant-design/icons";

import { ProductsContext } from "./models";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import { fetchProducts } from "./services";

const { Search } = Input;
const { Option } = Select;

const Products: React.FunctionComponent<any> = () => {
  const { state, dispatch } = useContext(ProductsContext);
  const [filterDrawerVisible, setFilterDrawerVisible] = useState(false);

  useEffect(() => {
    (async () => {
      dispatch({ type: "PRODUCTS_LOADING", payload: true });
      try {
        const res = await fetchProducts();
        dispatch({ type: "FETCH_PRODUCTS", payload: res.data });
      } catch (err) {
        dispatch({ type: "PRODUCTS_ERROR", payload: err.message });
      }
      dispatch({ type: "PRODUCTS_LOADING", payload: false });
    })();
  }, [dispatch]);

  // handle search
  const onSearch = (value: string) => console.log(value);

  // handle sort change
  const handleChange = (value: string) => {
    switch (value) {
      case "newest":
        dispatch({ type: "SORT_NEWEST" });
        break;
      case "pricelow":
        dispatch({ type: "SORT_ASC_PRICE" });
        break;
      case "pricehigh":
        dispatch({ type: "SORT_DESC_PRICE" });
        break;
      case "ratinglow":
        dispatch({ type: "SORT_ASC_RATING" });
        break;
      case "ratinghigh":
        dispatch({ type: "SORT_DESC_RATING" });
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          margin: "0px 20px 30px 20px",
        }}
      >
        <Search
          placeholder="input search text"
          style={{ marginRight: 10, flex: "auto", width: "auto" }}
          onSearch={onSearch}
          enterButton
          allowClear
        />
        <Space style={{ float: "right", right: 0 }}>
          <Select
            defaultValue="newest"
            style={{ width: 180, minWidth: 180 }}
            onChange={handleChange}
          >
            <Option value="newest">Newest</Option>
            <Option value="pricelow">Price: Low To High</Option>
            <Option value="pricehigh">Price: High To Low</Option>
            <Option value="ratinglow">Rating: Low To High</Option>
            <Option value="ratinghigh">Rating: High To Low</Option>
          </Select>
          <Button
            icon={<FilterOutlined />}
            onClick={() => setFilterDrawerVisible(true)}
          />
        </Space>
      </div>
      <ProductList
        data={state.data}
        loading={state.loading}
        error={state.error}
      />
      <Drawer
        title="Filter"
        placement="right"
        width={400}
        visible={filterDrawerVisible}
        getContainer={false}
        onClose={() => setFilterDrawerVisible(false)}
      >
        <Filter />
      </Drawer>
    </>
  );
};

export default Products;
