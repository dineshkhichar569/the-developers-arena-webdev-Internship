import Cart from "../components/Cart/Cart";
import { Link } from "react-router-dom";

function CartPage() {
  return (
    <div>
      <h2>Your Cart</h2>
      <Cart />
      <Link to="/checkout">Proceed to Checkout</Link>
    </div>
  );
}

export default CartPage;
