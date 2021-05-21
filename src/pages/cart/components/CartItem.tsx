import { useContext } from "react";
import { List, InputNumber, Button, Typography, Space } from "antd";
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
          title={
            <Space>
              <img
                src={item.image}
                alt={item.title}
                style={{
                  minWidth: 60,
                  minHeight: 60,
                  maxWidth: 140,
                  maxHeight: 80,
                  objectFit: "fill",
                  marginRight: 10,
                }}
              />
              <Space direction="vertical">
                <Link to={`/products/${item.id}`}>
                  <Typography.Title
                    level={5}
                    style={{ paddingBottom: 0, marginBottom: -10 }}
                  >
                    {item.title}
                  </Typography.Title>
                </Link>
                <Typography.Text type="secondary">
                  {item.category}
                </Typography.Text>
                <Typography.Text strong>$ {item.price}</Typography.Text>
              </Space>
            </Space>
          }
          description={<></>}
        />
      </List.Item>
    </>
  );
};

export default CartItem;
