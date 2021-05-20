import { useState, useEffect, useContext } from "react";
import { Card, Divider, Typography } from "antd";

import { CartContext } from "../models";
import "../styles.css";

const CartSummary = () => {
  const { state } = useContext(CartContext);
  const [price, setPrice] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);

  const discount: number = 20;
  const deliveryCharges: number = 0;

  useEffect(() => {
    const sumPrice = state.data.reduce((sum, item) => {
      return sum + item.price * item.qty;
    }, 0);
    setPrice(sumPrice);
    setTotal(sumPrice - discount + deliveryCharges);
  }, [state.data]);

  return (
    <Card title="Price Details">
      <span className="cart-summary-row" style={{}}>
        <Typography.Text>Price</Typography.Text>
        <Typography.Text>$ {price.toFixed(2)}</Typography.Text>
      </span>
      <span className="cart-summary-row">
        <Typography.Text>Discount</Typography.Text>
        <Typography.Text style={{ color: "green" }}>
          -$ {discount.toFixed(2)}
        </Typography.Text>
      </span>
      <span className="cart-summary-row">
        <Typography.Text>Delivery Charges</Typography.Text>
        <Typography.Text>$ {deliveryCharges.toFixed(2)}</Typography.Text>
      </span>
      <Divider />
      <span className="cart-summary-row">
        <Typography.Text strong>Total</Typography.Text>
        <Typography.Text strong>$ {total.toFixed(2)}</Typography.Text>
      </span>
    </Card>
  );
};

export default CartSummary;
