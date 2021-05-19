import { Card, Rate, Typography } from "antd";
import { EyeOutlined, ShoppingOutlined } from "@ant-design/icons";
import { IProduct } from "../types";

const { Meta } = Card;

const ProductItem = ({ data }: { data: IProduct }) => {
  return (
    <Card
      key={data.id}
      size="small"
      bordered
      hoverable
      cover={
        <img
          alt="example"
          style={{
            minWidth: 200,
            minHeight: 200,
            maxWidth: 200,
            maxHeight: 200,
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
          }}
          src={data.image}
        />
      }
      actions={[
        <EyeOutlined key="view" title="View" />,
        <ShoppingOutlined key="add" title="Add to cart" />,
      ]}
    >
      <Meta
        title={data.title}
        description={
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Typography.Text
              strong
              style={{ fontSize: 16 }}
            >{`$${data.price}`}</Typography.Text>
            <Rate allowHalf disabled defaultValue={data.rating} />
          </div>
        }
      />
    </Card>
  );
};

export default ProductItem;
