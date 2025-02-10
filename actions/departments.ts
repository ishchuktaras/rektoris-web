"use server";

import axios from "axios";
import {
  Department,
  DepartmentBrief,
  DepartmentCreateProps,
} from "@/types/types";
import { revalidatePath } from "next/cache";
import { api } from "@/lib/api";
import { BASE_API_URL } from "@/lib/api";

export async function createDepartment(data: DepartmentCreateProps) {
  try {
    const response = await api.post("/departments", data);
    revalidatePath("/dashboard/academics/departments");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message || "Oddělení se nepodařilo vytvořit";
      throw new Error(message);
    }
    throw error;
  }
}

export async function getAllDepartments(schoolId: string) {
  try {
    const response = await api.get(`/departments/school/${schoolId}`);
    const departments = response.data;
    return departments as Department[];
  } catch (error) {
    console.log(error);
  }
}

export async function getBriefDepartments(schoolId: string) {
  try {
    const response = await api.get(`/departments/brief/${schoolId}`);
    const departments = response.data;
    return departments as DepartmentBrief[];
  } catch (error) {
    console.error("Nepodařilo se načíst breaf oddělení:", error);
    return [];
  }
}
