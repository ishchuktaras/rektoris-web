"use server"

import axios from "axios";
import { Teacher, TeacherCreateProps } from "@/types/types";
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

export async function createTeacher(data:TeacherCreateProps) {
  try {
      const res = await api.post('/teachers', data);
      revalidatePath("/dashboard/users/teachers");
  return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
       const message = error.response?.data?.message || "Nepodařilo vytvořit Učitele";
      throw new Error(message);
    }
    throw error;
  }
}

export async function deleteTeacher(id:string) {
  console.log("smazáno",id);
  return {
    ok: true
  }
}

export async function getAllTeachers(){
  try {
    const response = await api.get('/teachers');
    const teachers = response.data;
  return teachers as Teacher[];
  } catch (error) {
    console.log(error)
  }
}

