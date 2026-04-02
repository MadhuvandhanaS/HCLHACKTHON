import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Prescription(){

const navigate = useNavigate();

const [data, setData] = useState({
doctor: "",
hospital: "",
medicineName: "",
age: ""
});

useEffect(()=>{

const medicine = JSON.parse(localStorage.getItem("selectedMedicine"));

if(medicine){
setData(prev => ({
...prev,
medicineName: medicine.name
}));
}

},[]);

const handleChange = (e) => {
setData({
...data,
[e.target.name]: e.target.value
});
};

const save = () => {

axios.post("http://localhost:8080/api/prescription", data)

.then(res => {

localStorage.setItem("order", JSON.stringify(data));

navigate("/payment");

});

};

return(

<div className="container">

<h2>Prescription</h2>

<input
name="doctor"
placeholder="Doctor Name"
onChange={handleChange}
/>

<input
name="hospital"
placeholder="Hospital Name"
onChange={handleChange}
/>

<input
name="medicine"
placeholder="Medicine Name"
onChange={handleChange}
/>


<input
name="age"
placeholder="Age"
onChange={handleChange}
/>

<button onClick={save}>
Submit
</button>

</div>

)

}

export default Prescription;