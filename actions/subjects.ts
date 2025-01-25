"use server";

import axios from "axios";
import { SubjectCreateProps, Subject, SubjectBrief } from "@/types/types";
import { revalidatePath } from "next/cache";
import { response } from "express";

const BASE_API_URL = process.env.API_URL || "";
const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export async function createSubject(data: SubjectCreateProps) {
  try {
    const response = await api.post("/subjects", data);
    revalidatePath("/dashboard/academics/subjects");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message || "Předmět se nepodařilo vytvořit";
      throw new Error(message);
    }
    throw error;
  }
  
}

export async function getAllSubjects() {
  try {
    const response = await api.get("/subjects");
    const subjects = response.data;
    return subjects as Subject[];
  } catch (error) {
    console.log(error);
  }
}

export async function getBriefSubjects() {
  try {
    const response = await api.get("/subjects/brief");
    const subjects = response.data;
    return subjects as SubjectBrief[];
  } catch (error) {
    console.log(error);
  }
}

// export async function deleteClass(id:string) {
//   console.log("deleted",id);
//   return {
//     ok: true
//   }
// }
