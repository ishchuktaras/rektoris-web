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
      throw new Error("No data returned from server");
    }
    revalidatePath("/dashboard/users/parents");
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.error || "Failed to create parent");
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

export async function getAllParents() {
  try {
    const response = await api.get("/parents");
    const parents = response.data;
    return parents as Parent[];
  } catch (error) {
    console.log(error);
  }
}
