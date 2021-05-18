import { Card, List } from "antd";
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
    <Card title={null}>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item: ICartItemProps) => <CartItem item={item} />}
      />
    </Card>
  );
};

export default CartList;
