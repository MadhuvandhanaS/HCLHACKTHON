import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import Register from "./components/Register";
import Medicines from "./components/Medicines";
import Prescription from "./components/Prescription";
import Payment from "./components/Payment";
import OrderSuccess from "./components/OrderSuccess";

function App() {

return (

<BrowserRouter>

<Routes>

<Route path="/" element={<Login />} />

<Route path="/register" element={<Register />} />

<Route path="/medicines" element={<Medicines />} />

<Route path="/prescription" element={<Prescription />} />

<Route path="/payment" element={<Payment />} />

<Route path="/success" element={<OrderSuccess />} />

</Routes>

</BrowserRouter>

);

}

export default App;