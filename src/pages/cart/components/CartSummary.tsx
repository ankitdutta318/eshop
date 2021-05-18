import { Card, Divider, Typography } from "antd";

import "../styles.css";

const CartSummary = () => {
  return (
    <Card title="Price Details">
      <span className="cart-summary-row" style={{}}>
        <Typography.Text strong>Price</Typography.Text>
        <Typography.Text strong>$80.00</Typography.Text>
      </span>
      <span className="cart-summary-row">
        <Typography.Text strong>Discount</Typography.Text>
        <Typography.Text strong>- $20.00</Typography.Text>
      </span>
      <span className="cart-summary-row">
        <Typography.Text strong>Delivery Charges</Typography.Text>
        <Typography.Text strong>$0.00</Typography.Text>
      </span>
      <Divider />
      <span className="cart-summary-row">
        <Typography.Text strong>Total</Typography.Text>
        <Typography.Text strong>$60.00</Typography.Text>
      </span>
    </Card>
  );
};

export default CartSummary;
