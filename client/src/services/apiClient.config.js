import axios from "axios";

export const apiClientConfig = axios.create({
  baseURL: process.env.VITE_API_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json'
  }
});