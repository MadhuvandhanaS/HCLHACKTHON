import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Payment() {

const navigate = useNavigate();

const submitPayment = () => {

const paymentData = {
paymentMethod: "Cash On Delivery",
paymentStatus: "SUCCESS",
paymentDate: new Date().toISOString().split("T")[0]
};

axios.post("http://localhost:8080/api/payment", paymentData)

.then(res => {

localStorage.setItem("payment", JSON.stringify(paymentData));

navigate("/success");

})

.catch(err => {
alert("Payment Failed");
});

};

return (

<div className="container">

<h2>Payment</h2>

<p>Payment Method: Cash On Delivery</p>

<br/>

<button onClick={submitPayment}>
Submit
</button>

</div>

);

}

export default Payment;