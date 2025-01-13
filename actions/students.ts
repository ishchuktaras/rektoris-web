"use server"

import axios from "axios";
import { Student } from "@/types/types";
import { StudentProps } from "@/components/dashboard/forms/students/single-student-form";
import { cookies } from 'next/headers';
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

export async function createStudent(data:StudentProps) {
  try {
      const res = await api.post('/students', data);
  return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
       const message = error.response?.data?.message || "Faild to create Student";
      throw new Error(message);
    }
    throw error;
  }
}

export async function deleteStudent(id:string) {
  console.log("deleted",id);
  return {
    ok: true
  }
}

export async function getAllStudents (){
  try {
    const response = await api.get('/students');
    const students = response.data;
  return students as Student[];
  } catch (error) {
    console.log(error)
  }
}

