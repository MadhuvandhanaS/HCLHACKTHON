import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Medicines from "./pages/Medicines";
import MedicineDetails from "./pages/MedicineDetails";
import Cart from "./pages/Cart";
import Prescription from "./pages/Prescription";
import Payment from "./pages/Payment";
import DeliveryStatus from "./pages/DeliveryStatus";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/medicines" element={<Medicines />} />
        <Route path="/details" element={<MedicineDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/prescription" element={<Prescription />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/delivery" element={<DeliveryStatus />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;