import React, { useState, useEffect, useContext } from "react";
import { Button, Drawer, Input, Space, Select } from "antd";
import { FilterOutlined } from "@ant-design/icons";
import debounce from "lodash/debounce";

import { ProductsContext } from "./models";
import ProductList from "./components/ProductList";
import Filter from "./components/Filter";
import { fetchProducts } from "./services";

const { Search } = Input;
const { Option } = Select;

const Products: React.FunctionComponent<any> = () => {
  const { state, dispatch } = useContext(ProductsContext);
  const [dataSource, setDataSource] = useState([]); // state for data after searching or filtering
  const [filterDrawerVisible, setFilterDrawerVisible] = useState(false); // state for filter drawer visible

  useEffect(() => {
    (async () => {
      if (state.data.length === 0) {
        dispatch({ type: "PRODUCTS_LOADING", payload: true });
        try {
          const res = await fetchProducts();
          dispatch({
            type: "FETCH_PRODUCTS",
            payload: res.data.map((item) => ({
              ...item,
              rating: +(Math.random() * (0 - 5) + 5).toFixed(1),
              createdAt: randomDate(
                new Date(2019, 0, 1),
                new Date()
              ).toISOString(),
            })),
          });
        } catch (err) {
          dispatch({ type: "PRODUCTS_ERROR", payload: err.message });
        }
        dispatch({ type: "PRODUCTS_LOADING", payload: false });
      }
    })();
  }, [dispatch, state.data.length]);

  // set data source on data fetch
  useEffect(() => {
    if (state.data.length) setDataSource(state.data);
  }, [state.data]);

  // handle search
  const onSearch = (value: string): void => {
    if (value)
      setDataSource(
        state.data.filter((a) =>
          a.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    else setDataSource(state.data);
  };

  // handle search change
  const handleSearchChange = (e) => {
    const { value } = e.target;
    if (value)
      setDataSource(
        state.data.filter((a) =>
          a.title.toLowerCase().includes(value.toLowerCase())
        )
      );
    else setDataSource(state.data);
  };

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

  const randomDate = (start: Date, end: Date) => {
    return new Date(
      start.getTime() + Math.random() * (end.getTime() - start.getTime())
    );
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
          placeholder="Search for products, brands and more..."
          style={{ marginRight: 10, flex: "auto", width: "auto" }}
          onChange={debounce(handleSearchChange, 500)}
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
        data={dataSource}
        categories={state.categories}
        loading={state.loading}
        error={state.error}
      />
      <Drawer
        title="Filter"
        placement="right"
        width={400}
        visible={filterDrawerVisible}
        bodyStyle={{ overflow: "auto" }}
        footer={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Button type="link">Clear All</Button>
            <Button
              type="primary"
              onClick={() => setFilterDrawerVisible(false)}
            >
              Apply Filter
            </Button>
          </div>
        }
        getContainer={false}
        onClose={() => setFilterDrawerVisible(false)}
      >
        <Filter />
      </Drawer>
    </>
  );
};

export default Products;
