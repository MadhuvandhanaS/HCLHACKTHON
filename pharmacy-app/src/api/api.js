import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/api", // Spring Boot URL
  headers: {
    "Content-Type": "application/json",
  },
});

//////////////////////////
// AUTH APIs
//////////////////////////

export const registerUser = (data) =>
  API.post("/auth/register", data);

export const loginUser = (data) =>
  API.post("/auth/login", data);

//////////////////////////
// MEDICINE APIs
//////////////////////////

export const getAllMedicines = () =>
  API.get("/medicines");

export const getMedicineById = (id) =>
  API.get(`/medicines/${id}`);

//////////////////////////
// CART APIs
//////////////////////////

export const addToCart = (data) =>
  API.post("/cart/add", data);

export const getCartByUser = (userId) =>
  API.get(`/cart/${userId}`);

export const removeCartItem = (id) =>
  API.delete(`/cart/${id}`);

//////////////////////////
// PRESCRIPTION APIs
//////////////////////////

export const savePrescription = (data) =>
  API.post("/prescription", data);

//////////////////////////
// ORDER APIs
//////////////////////////

export const placeOrder = (data) =>
  API.post("/orders");

export const getOrdersByUser = (userId) =>
  API.get(`/orders/user/${userId}`);

//////////////////////////
// PAYMENT APIs
//////////////////////////

export const makePayment = (data) =>
  API.post("/payment");

//////////////////////////
// DELIVERY APIs
//////////////////////////

export const getDeliveryStatus = (orderId) =>
  API.get(`/delivery/${orderId}`);

export default API;