import axios from "axios";

const API_URL = "http://localhost:8080/api/designation";

export const getDesignations = () => axios.get(API_URL);

export const createDesignation = (designation) =>
  axios.post(API_URL, designation);
s