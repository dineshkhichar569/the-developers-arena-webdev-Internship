import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  if (cart.length === 0) return <p>Cart is empty</p>;

  return (
    <div className="cart-item">
      {cart.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
          <p>${item.price}</p>
          <button onClick={() => removeFromCart(item.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

export default Cart;
