"use server";

import axios from "axios";
import { Parent } from "@/types/types";
import { api } from "@/lib/api";
import { ParentProps } from "@/components/dashboard/forms/users/parent-form";
import { revalidatePath } from "next/cache";

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
      throw new Error(error.response?.data?.error || "Vytvoření rodiče se nezdařilo");
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

export async function getAllParents(schoolId:string) {
  try {
    const response = await api.get(`/parents/school/${schoolId}`);
    const parents = response.data;
    return parents as Parent[];
  } catch (error) {
    console.log(error);
  }
}
