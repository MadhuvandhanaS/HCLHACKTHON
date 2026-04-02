import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Register() {

const navigate = useNavigate();

const [user, setUser] = useState({
name: "",
email: "",
password: "",
phone: "",
address: "",
age: "",
gender: "",
role: "USER"
});

const handleChange = (e) => {
setUser({
...user,
[e.target.name]: e.target.value
});
};

const register = () => {

if(!user.name || !user.email || !user.password){
alert("Please fill required fields");
return;
}

axios.post("http://localhost:8080/api/auth/register", user)

.then(res => {
alert("Registered Successfully");
navigate("/");
})

.catch(err => {
alert(err.response?.data || "Registration Failed");
});

};

return (
<div className="container">

<h2>Register</h2>

<input
type="text"
name="name"
placeholder="Name"
onChange={handleChange}
/>

<input
type="email"
name="email"
placeholder="Email"
onChange={handleChange}
/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
/>

<input
type="text"
name="phone"
placeholder="Phone"
onChange={handleChange}
/>

<input
type="text"
name="address"
placeholder="Address"
onChange={handleChange}
/>

<input
type="number"
name="age"
placeholder="Age"
onChange={handleChange}
/>

<select
name="gender"
onChange={handleChange}
>

<option value="">Select Gender</option>
<option value="Male">Male</option>
<option value="Female">Female</option>

</select>

<br/><br/>

<button onClick={register}>
Register
</button>

<br/><br/>

<button onClick={() => navigate("/")}>
Back to Login
</button>

</div>
);

}

export default Register;