import { Row, Col, Result, Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import ProductItem from "./ProductItem";
import { IProduct, IProductsState } from "../types";

const styles = {
  "gutter-box": {
    padding: "8px 8px",
  },
};

const ProductList = ({ data, loading, error }: IProductsState) => {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      {error ? (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
        />
      ) : loading ? (
        <Spin
          indicator={
            <LoadingOutlined
              style={{
                fontSize: 100,
              }}
              spin
            />
          }
        />
      ) : (
        <Row>
          {data.map((item: IProduct) => (
            <Col
              key={item.id}
              style={styles["gutter-box"]}
              xs={24}
              sm={12}
              md={12}
              lg={8}
              xl={6}
              xxl={6}
            >
              <ProductItem data={item} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
};

export default ProductList;
