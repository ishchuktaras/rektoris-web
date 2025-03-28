"use server";

import axios from "axios";
import { Parent } from "@/types/types";
import { api } from "@/lib/api";
import { ParentProps } from "@/components/dashboard/forms/users/parent-form";
import { revalidatePath } from "next/cache";
import { BriefStudent } from "@/components/portal/parents/student-list";

export async function createParent(data: ParentProps) {
  try {
    const res = await api.post("/parents", data);
    if (!res.data) {
      throw new Error("Ze serveru se nevrátila žádná data");
    }
    revalidatePath("/dashboard/users/parents");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(
        error.response?.data?.error || "Vytvoření rodiče se nezdařilo"
      );
    }
    throw error;
  }
}

export async function deleteParent(id: string) {
  console.log("deleted", id);
  return {
    ok: true,
  };
}

export async function getAllParents(schoolId: string) {
  try {
    const response = await api.get(`/parents/school/${schoolId}`);
    const parents = response.data;
    return parents as Parent[];
  } catch (error) {
    console.log(error);
  }
}

export async function getStudentsByParentId(parentId: string) {
  if (!parentId) {
    console.error("getStudentsByParentId called with empty parentId")
    return []
  }

  try {
    // Try to get students directly using the user ID
    const response = await api.get(`/students/parent/${parentId}`)

    // Check if we got a response
    if (!response.data) {
      console.error("No data returned from students API")
      return []
    }

    // Handle different response structures
    if (Array.isArray(response.data)) {
      return response.data as BriefStudent[]
    } else if (response.data.data && Array.isArray(response.data.data)) {
      return response.data.data as BriefStudent[]
    } else {
      console.error("Unexpected response structure:", response.data)
      return []
    }
  } catch (error) {
    console.error("Error in getStudentsByParentId:", error)

    // If the API call fails, return an empty array instead of throwing an error
    // This allows the UI to show "No students found" instead of an error message
    return []
  }
}
