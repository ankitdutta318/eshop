import { Affix, Col, Row } from "antd";
import CartList from "./components/CartList";
import CartSummary from "./components/CartSummary";

const Cart = () => {
  return (
    <Row gutter={[12, 12]}>
      <Col xs={24} sm={24} md={24} lg={16} xl={18} xxl={18}>
        <CartList />
      </Col>
      <Col xs={24} sm={24} md={24} lg={8} xl={6} xxl={6}>
        <Affix>
          <CartSummary />
        </Affix>
      </Col>
    </Row>
  );
};

export default Cart;
