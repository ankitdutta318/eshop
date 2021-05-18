import { Card } from "antd";
import React from "react";
import CartItem from "./CartItem";

const CartList = () => {
  return (
    <Card title={null} style={{ width: "70%", marginRight: 20 }}>
      <CartItem />
    </Card>
  );
};

export default CartList;
