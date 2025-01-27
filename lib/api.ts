import axios from "axios";

export const BASE_API_URL = process.env.API_URL|| "";
export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});