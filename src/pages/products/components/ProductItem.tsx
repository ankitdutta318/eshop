import { useContext } from "react";
import { Button, Card, Rate, Typography } from "antd";
import { IProduct } from "../types";
import { Context } from "../../../app/store";

const { Meta } = Card;

const ProductItem = ({ data }: { data: IProduct }) => {
  const { state, dispatch } = useContext(Context.Cart);

  const handleAddToCart = (item: IProduct) => {
    const { id, title, category, image, price } = item;
    dispatch({
      type: "ADD",
      payload: { id, title, category, price, image, qty: 1 },
    });
  };

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
        <Button type="link">VIEW</Button>,
        state.data.find((item) => item.id === data.id) ? (
          <Button type="link" style={{ color: "green" }}>
            ADDED TO CART
          </Button>
        ) : (
          <Button key="add" type="link" onClick={() => handleAddToCart(data)}>
            ADD TO CART
          </Button>
        ),
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
