import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {

const navigate = useNavigate();

const [login, setLogin] = useState({
email: "",
password: ""
});

const handleChange = (e) => {
setLogin({
...login,
[e.target.name]: e.target.value
});
};

const loginUser = () => {

axios.post("http://localhost:8080/api/auth/login", login)

.then(res => {

alert("Login Success");

// Save user details
localStorage.setItem("user", JSON.stringify(res.data));

navigate("/medicines");

})

.catch(err => {
alert(err.response?.data || "Invalid Credentials");
});

};

return (

<div className="container">

<h2>Login</h2>

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

<button onClick={loginUser}>
Login
</button>

<br/><br/>

<button onClick={() => navigate("/register")}>
Register
</button>

</div>

);

}

export default Login;