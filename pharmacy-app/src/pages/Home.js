import { useNavigate } from "react-router-dom";

function Home() {
  const nav = useNavigate();

  return (
    <div className="container">
      <h1>Online Pharmacy</h1>
      <p>Order medicines safely from home.</p>
      <button onClick={() => nav("/medicines")}>
        Browse Medicines
      </button>
    </div>
  );
}

export default Home;