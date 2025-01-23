"use server"

import axios from "axios";
import { Department, DepartmentCreateProps } from "@/types/types";
import { revalidatePath } from "next/cache";

const BASE_API_URL = process.env.API_URL|| "";
const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

export async function createDepartment(data:DepartmentCreateProps) {
  try {
      const response = await api.post('/departments', data);
      revalidatePath("/dashboard/academics/departments");
  return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
       const message = error.response?.data?.message || "Oddělení se nepodařilo vytvořit";
      throw new Error(message);
    }
    throw error;
  }
}

export async function getAllDepartments (){
  try {
    const response = await api.get('/departments');
    const departments = response.data;
  return departments as Department[];
  } catch (error) {
    console.log(error)
  }
}

// export async function deleteClass(id:string) {
//   console.log("deleted",id);
//   return {
//     ok: true
//   }
// }