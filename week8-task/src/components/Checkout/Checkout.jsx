import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";

function Checkout() {
  const { login } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(email);
    alert("Checkout successful");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Checkout</h3>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        required
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Place Order</button>
    </form>
  );
}

export default Checkout;
