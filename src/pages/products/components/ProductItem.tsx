import { Card, Avatar } from "antd";
import { EyeOutlined, ShoppingOutlined } from "@ant-design/icons";

const { Meta } = Card;

const ProductItem = () => {
  return (
    <Card
      size="small"
      bordered
      hoverable
      cover={
        <img
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={[
        <EyeOutlined key="view" title="View" />,
        <ShoppingOutlined key="add" title="Add to cart" />,
      ]}
    >
      <Meta
        avatar={
          <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
        }
        title="Card title"
        description="This is the description"
      />
    </Card>
  );
};

export default ProductItem;
