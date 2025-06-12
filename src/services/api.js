import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api/transactions",
  baseURL: "https://transaction-managment-backend.vercel.app/",
});

export const getTransactions = () => API.get("/");
export const getTransaction = (id) => API.get(`/${id}`);
export const createTransaction = (data) => API.post("/", data);
export const updateTransaction = (id, data) => API.put(`/${id}`, data);
export const deleteTransaction = (id) => API.delete(`/${id}`);
