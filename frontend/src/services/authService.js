//made a seperate folder for this purpose

import axios from "axios";

const API_URL = "http://localhost:4000/api/auth";

export const registerUser = async (userData) => {
  const response = await axios.post(`${API_URL}/register`, userData);
  return response.data;
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  return response.data;
};

export const getDashboard = async (token) => {
  const response = await axios.get(`${API_URL}/dashboard`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};
