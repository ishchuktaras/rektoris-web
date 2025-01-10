"use server"

import axios from "axios";
import { ContactProps } from "@/components/frontend/contact-us";
import { Contact, Parent } from "@/types/types";
import { ParentProps } from "@/components/dashboard/forms/users/parent-form";


const BASE_API_URL = process.env.API_URL|| "";

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function createParent(data:ParentProps) {
  try {
      const response = await api.post('/parents', data);
  return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
       const message = error.response?.data.message || "Faild to create parent";
      throw new Error(message);
    }
    throw error;
  }
}

export async function deleteParent(id:string) {
  console.log("deleted",id);
  return {
    ok: true
  }
}

export async function getAllParents (){
  try {
    const response = await api.get('/parents');
    const parents = response.data;
  return parents as Parent[];
  } catch (error) {
    console.log(error)
  }
}

