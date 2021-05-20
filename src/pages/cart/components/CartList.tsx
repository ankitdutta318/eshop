import { useState, useContext } from "react";
import { Button, Card, Divider, List } from "antd";

import CartItem from "./CartItem";
import Checkout from "./Checkout";
import { CartContext } from "../models";
import { ICartItem } from "../types";
import { Link } from "react-router-dom";

const CartList = () => {
  const { state, dispatch } = useContext(CartContext);
  const [checkoutVisible, setCheckoutVisible] = useState<boolean>(false);

  // handle checkout
  const handleCheckout = () => {
    setCheckoutVisible(true);
    dispatch({ type: "RESET" });
  };

  return (
    <Card title={`My Cart (${state.data.length} items)`}>
      <List
        itemLayout="horizontal"
        dataSource={state.data}
        renderItem={(item: ICartItem) => <CartItem item={item} />}
      />
      <Divider />
      {state.data.length === 0 ? (
        <Link to="/">
          <Button type="link" style={{ float: "right" }}>
            Continue Shopping
          </Button>
        </Link>
      ) : (
        <Button
          type="primary"
          style={{ float: "right" }}
          onClick={handleCheckout}
        >
          CHECKOUT
        </Button>
      )}
      <Checkout visible={checkoutVisible} setVisible={setCheckoutVisible} />
    </Card>
  );
};

export default CartList;
