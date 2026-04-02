import { useNavigate } from "react-router-dom";

function MedicineCard({ med }) {
  const nav = useNavigate();

  return (
    <div className="card">
      <h3>{med.name}</h3>
      <p>Price: ₹{med.price}</p>
      <button onClick={() => nav("/details", { state: med })}>
        View Details
      </button>
    </div>
  );
}

export default MedicineCard;