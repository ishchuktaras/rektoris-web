"use server";

import axios from "axios";
import { SubjectCreateProps, Subject, SubjectBrief } from "@/types/types";
import { revalidatePath } from "next/cache";

import { api } from "@/lib/api";

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

export async function getAllSubjects(schoolId: string) {
  try {
    const response = await api.get(`/subjects/school/${schoolId}`);
    const subjects = response.data;
    return subjects as Subject[];
  } catch (error) {
    console.log(error);
  }
}

export async function getBriefSubjects(schoolId: string) {
  try {
    const response = await api.get(`/subjects/brief/${schoolId}`);
    const subjects = response.data;
    return subjects as SubjectBrief[];
  } catch (error) {
    console.error("Failed to fetch brief subjects:", error);
    return [];
  }
}
