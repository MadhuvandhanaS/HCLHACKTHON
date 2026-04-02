import React,{useState,useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

function Medicines(){

const navigate=useNavigate();
const [medicines,setMedicines]=useState([]);

useEffect(()=>{
axios.get("http://localhost:8080/api/medicine")
.then(res=>{
setMedicines(res.data)
})
},[])

return(
<div>

<h2>Medicines</h2>

<table>

<tr>
<th>Name</th>
<th>Price</th>
<th>Stock</th>
</tr>

{medicines.map(m=>(
<tr key={m.medicineId}>
<td>{m.name}</td>
<td>{m.price}</td>
<td>{m.stock}</td>
</tr>
))}

</table>

<button onClick={()=>navigate("/prescription")}>
Add Prescription
</button>

</div>
)

}

export default Medicines;