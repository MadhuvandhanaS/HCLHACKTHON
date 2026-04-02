import { useLocation, useNavigate } from "react-router-dom";

function Cart() {
  const { state } = useLocation();
  const nav = useNavigate();

  if (!state) return <h2 className="container">Cart Empty</h2>;

  return (
    <div className="container">
      <h2>Cart</h2>
      <p>{state.name}</p>
      <p>₹{state.price}</p>

      <button onClick={() => nav("/prescription")}>
        Proceed
      </button>
    </div>
  );
}

export default Cart;