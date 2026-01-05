import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import { AuthContext } from "../../contexts/AuthContext";

function Navbar() {
  const { cart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <Link to="/">Shop</Link>
      <Link to="/cart">Cart ({cart.length})</Link>

      {user ? (
        <>
          <span>{user.email}</span>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <Link to="/checkout">Login</Link>
      )}
    </nav>
  );
}

export default Navbar;
