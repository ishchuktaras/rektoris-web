"use server";

import axios from "axios";
import { SubjectCreateProps, Subject, SubjectBrief } from "@/types/types";
import { revalidatePath } from "next/cache";
import { response } from "express";
import { api } from "@/lib/api";
import { BASE_API_URL } from "@/lib/api";

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

export async function getBriefSubjects(): Promise<SubjectBrief[]> {
  try {
    const response = await api.get(`${BASE_API_URL}/subjects/brief`);
    return response.data || [];
  } catch (error) {
    console.error('Failed to fetch brief subjects:', error);
    return [];
  }
}

// export async function deleteClass(id:string) {
//   console.log("deleted",id);
//   return {
//     ok: true
//   }
// }
