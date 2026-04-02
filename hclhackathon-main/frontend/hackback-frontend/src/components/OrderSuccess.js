import React from "react";

function OrderSuccess(){

const user = JSON.parse(localStorage.getItem("user"));
const order = JSON.parse(localStorage.getItem("order"));
const payment = JSON.parse(localStorage.getItem("payment"));

return(

<div className="container">

<h2>Order Successful 🎉</h2>

<h3>User Details</h3>

<p>Name: {user?.name}</p>
<p>Email: {user?.email}</p>
<p>Phone: {user?.phone}</p>
<p>Address: {user?.address}</p>

<hr/>

<h3>Prescription Details</h3>

<p>Doctor: {order?.doctor}</p>
<p>Hospital: {order?.hospital}</p>
<p>Notes: {order?.notes}</p>
<p>Age: {order?.age}</p>

<hr/>

<h3>Payment Details</h3>

<p>Method: {payment?.paymentMethod}</p>
<p>Status: {payment?.paymentStatus}</p>
<p>Date: {payment?.paymentDate}</p>

<hr/>

<h2>Your Order Has Been Confirmed ✅</h2>

</div>

)

}

export default OrderSuccess;