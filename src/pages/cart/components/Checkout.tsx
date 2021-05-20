import { Result, Modal, Button } from "antd";
import { Link } from "react-router-dom";

const Checkout = ({
  visible,
  setVisible,
}: {
  visible: boolean;
  setVisible: (visble: boolean) => void;
}) => {
  return (
    <Modal visible={visible} onCancel={() => setVisible(false)} footer={null}>
      <Result
        status="success"
        title="Order placed successfully!"
        subTitle="Order number: 2017182818828182881"
        extra={[
          <Link to="/">
            <Button key="buy">Continue Shopping</Button>
          </Link>,
        ]}
      />
    </Modal>
  );
};

export default Checkout;
