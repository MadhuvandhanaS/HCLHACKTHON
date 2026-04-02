import { useLocation, useNavigate } from "react-router-dom";

function MedicineDetails() {
  const { state } = useLocation();
  const nav = useNavigate();

  return (
    <div className="container">
      <h2>{state.name}</h2>
      <p>Price: ₹{state.price}</p>
      <p>Dosage: Adult / Child / Senior</p>
      <button onClick={() => nav("/cart", { state })}>
        Add to Cart
      </button>
    </div>
  );
}

export default MedicineDetails;