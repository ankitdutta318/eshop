import { Button, Card, Divider, List } from "antd";
import { ICartItemProps } from "../types";
import CartItem from "./CartItem";

const data = [
  {
    title: "Ant Design Title 1",
  },
  {
    title: "Ant Design Title 2",
  },
  {
    title: "Ant Design Title 3",
  },
  {
    title: "Ant Design Title 4",
  },
];

const CartList = () => {
  return (
    <Card title="My Cart">
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item: ICartItemProps) => <CartItem item={item} />}
      />
      <Divider />
      <Button type="primary" style={{ float: "right" }}>
        CHECKOUT
      </Button>
    </Card>
  );
};

export default CartList;
