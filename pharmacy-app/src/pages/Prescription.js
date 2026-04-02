import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Prescription() {
  const nav = useNavigate();

  const [form, setForm] = useState({
    doctor: "",
    hospital: "",
    age: "",
    notes: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.doctor || !form.notes) {
      alert("Please enter prescription details");
      return;
    }

    // pass prescription data to payment page
    nav("/payment", { state: form });
  };

  return (
    <div className="container">
      <h2>Enter Prescription Details</h2>

      <input
        name="doctor"
        placeholder="Doctor Name"
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="hospital"
        placeholder="Hospital / Clinic"
        onChange={handleChange}
      />
      <br /><br />

      <input
        name="age"
        placeholder="Patient Age"
        onChange={handleChange}
      />
      <br /><br />

      <textarea
        name="notes"
        placeholder="Prescription Notes"
        rows="4"
        onChange={handleChange}
      />
      <br /><br />

      <button onClick={handleSubmit}>Submit Prescription</button>
    </div>
  );
}

export default Prescription;