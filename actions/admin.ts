"use server"

import axios from "axios";
import { ContactProps } from "@/components/frontend/contact-us";


const BASE_API_URL = process.env.API_URL|| "";

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function createContact(data:ContactProps) {
  try {
      const response = await api.post('/contacts', data);
  return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
       const message = error.response?.data.message || "Faild to create contact";
      throw new Error(message);
    }
    throw error;
  }
}

