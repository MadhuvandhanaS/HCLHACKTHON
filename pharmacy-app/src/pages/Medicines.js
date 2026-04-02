import { useEffect, useState } from "react";
import { getAllMedicines } from "../api/api";

function Medicines() {
  const [medicines, setMedicines] = useState([]);

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const res = await getAllMedicines();
      setMedicines(res.data);
    } catch (err) {
      console.log(err);
      alert("Backend not connected");
    }
  };

  return (
    <div className="container">
      <h2>Medicines</h2>

      {medicines.length === 0 && <p>No medicines in database</p>}

      <div className="grid">
        {medicines.map((med) => (
          <div className="card" key={med.medicineId}>
            <h3>{med.name}</h3>
            <p>{med.description}</p>
            <p>₹ {med.price}</p>
            <button>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Medicines;