import React, { useState } from "react";
import { Button, Drawer, Input, Space, Select } from "antd";
import { FilterOutlined } from "@ant-design/icons";

import ProductList from "./components/ProductList";
import Filter from "./components/Filter";

const { Search } = Input;
const { Option } = Select;

const Products: React.FunctionComponent<any> = () => {
  const [filterDrawerVisible, setFilterDrawerVisible] = useState(false);

  // handle search
  const onSearch = (value: string) => console.log(value);

  // handle sort change
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "0px 20px 30px 20px",
        }}
      >
        <Search
          placeholder="input search text"
          style={{ marginRight: 10 }}
          onSearch={onSearch}
          enterButton
          allowClear
        />
        <Space>
          <Select
            defaultValue="newest"
            style={{ width: 180 }}
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
      <ProductList />
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
