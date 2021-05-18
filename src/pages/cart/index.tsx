import CartList from "./components/CartList";
import CartSummary from "./components/CartSummary";

const Cart = () => {
  return (
    <div style={{ display: "flex" }}>
      <CartList />
      <CartSummary />
    </div>
  );
};

export default Cart;
