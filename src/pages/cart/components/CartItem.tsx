import { useContext } from "react";
import { List, InputNumber, Button } from "antd";
import { Link } from "react-router-dom";

import { CartContext } from "../models";
import { ICartItem } from "../types";

const CartItem = ({ item }: { item: ICartItem }) => {
  const { dispatch } = useContext(CartContext);

  // update cart
  const updateCart = (value: number) => {
    dispatch({ type: "UPDATE", payload: { id: item.id, qty: value } });
  };

  // remove item from cart
  const remove = () => {
    dispatch({ type: "REMOVE", payload: item.id });
  };

  return (
    <>
      <List.Item
        actions={[
          <InputNumber
            style={{ width: 60 }}
            defaultValue={item.qty}
            value={item.qty}
            min={1}
            max={5}
            onChange={updateCart}
            onStep={updateCart}
          />,
        ]}
        extra={
          <Button type="link" onClick={remove}>
            REMOVE
          </Button>
        }
      >
        <List.Item.Meta
          title={<Link to={`/products/${item.id}`}>{item.title}</Link>}
          description={item.category}
        />
      </List.Item>
    </>
  );
};

export default CartItem;
