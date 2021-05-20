import { useContext } from "react";
import { Affix, Col, Row } from "antd";

import { CartContext } from "./models";
import CartList from "./components/CartList";
import CartSummary from "./components/CartSummary";

const Cart = () => {
  const { state } = useContext(CartContext);
  return (
    <>
      <Row gutter={[12, 12]}>
        <Col
          style={{ flex: "auto" }}
          xs={24}
          sm={24}
          md={24}
          lg={state.data.length === 0 ? 24 : 16}
          xl={state.data.length === 0 ? 24 : 18}
          xxl={state.data.length === 0 ? 24 : 18}
        >
          <CartList />
        </Col>
        {state.data.length !== 0 && (
          <Col xs={24} sm={24} md={24} lg={8} xl={6} xxl={6}>
            <Affix>
              <CartSummary />
            </Affix>
          </Col>
        )}
      </Row>
    </>
  );
};

export default Cart;
