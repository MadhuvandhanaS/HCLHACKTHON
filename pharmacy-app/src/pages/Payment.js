import { useLocation, useNavigate } from "react-router-dom";

function Payment() {
  const nav = useNavigate();
  const { state } = useLocation();

  return (
    <div className="container">
      <h2>Payment</h2>

      {state && (
        <div className="card">
          <h3>Prescription Summary</h3>
          <p>Doctor: {state.doctor}</p>
          <p>Hospital: {state.hospital}</p>
          <p>Notes: {state.notes}</p>
        </div>
      )}

      <button onClick={() => nav("/delivery")}>Pay via UPI</button>
      <button onClick={() => nav("/delivery")}>Pay via Card</button>
    </div>
  );
}

export default Payment;