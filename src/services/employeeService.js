import axios from "axios";

const API_URL = "http://localhost:8080/api/employees";

export const getEmployees = () => axios.get(API_URL);

export const getEmployeeById = (id) => axios.get(`API_URL/${id}`);

export const createEmployee = (employee) => axios.post(API_URL, employee);

export const deleteEmployee = (id) => axios.delete(`API_URL/${id}`);
