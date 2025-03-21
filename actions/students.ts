"use server";

import axios from "axios";
import { Student } from "@/types/types";
import { StudentProps } from "@/components/dashboard/forms/students/single-student-form";
import { revalidatePath } from "next/cache";
import { api } from "@/lib/api";

export async function createStudent(data: StudentProps) {
  try {
    // Convert date strings to ISO format
    const formattedData = {
      ...data,
      dateOfBirth: new Date(data.dateOfBirth).toISOString(),
      admissionDate: new Date(data.admissionDate).toISOString(),
    };

    const res = await api.post("/students", formattedData);
    revalidatePath("/dashboard/students");
    if (res.data.error) {
      throw new Error(res.data.error);
    }

    return res.data.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      // Handle specific error cases
      if (error.response?.status === 409) {
        throw new Error(error.response.data.error);
      }
      const message =
        error.response?.data?.error || "Nepodařilo se vytvořit studenta";
      throw new Error(message);
    }
    throw error;
  }
}

export async function deleteStudent(id: string) {
  console.log("smazáno", id);
  return {
    ok: true,
  };
}

export async function getAllStudents(schoolId: string) {
  try {
    const response = await api.get(`/students/school/${schoolId}`);
    const students = response.data;
    return students as Student[];
  } catch (error) {
    console.log(error);
  }
}

export async function getStudentNextSequence(schoolId: string) {
  try {
    const response = await api.get(`/students/sequence/${schoolId}`);
    const nextSequence = response.data;
    return nextSequence as number;
  } catch (error) {
    console.log(error);
  }
}
