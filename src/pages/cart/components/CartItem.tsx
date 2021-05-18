import { List, Avatar } from "antd";
import { ICartItemProps } from "../types";

const CartItem = ({ item }: { item: ICartItemProps }) => {
  return (
    <List.Item extra={<></>}>
      <List.Item.Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title={<a href="https://ant.design">{item.title}</a>}
        description="Ant Design, a design language for background applications, is refined by Ant UED Team"
      />
    </List.Item>
  );
};

export default CartItem;
