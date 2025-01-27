"use server"

import axios from "axios";
import { Parent } from "@/types/types";
import { api } from "@/lib/api";
import { ParentProps } from "@/components/dashboard/forms/users/parent-form";
import { revalidatePath } from "next/cache";

export async function createParent(data:ParentProps) {
  try {
      const res = await api.post('/parents', data);
      revalidatePath("/dashboard/users/parents");
  return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
       const message = error.response?.data?.message || "Faild to create Parent";
      throw new Error(message);
    }
    throw error;
  }
}

export async function deleteParent(id:string) {
  console.log("deleted",id);
  return {
    ok: true
  }
}

export async function getAllParents (){
  try {
    const response = await api.get('/parents');
    const parents = response.data;
  return parents as Parent[];
  } catch (error) {
    console.log(error)
  }
}

