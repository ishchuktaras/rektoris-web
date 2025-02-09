"use server"

import axios from "axios";
import { UserCreateProps } from "@/types/types";
import { api } from "@/lib/api";

export async function createUser(data:UserCreateProps) {
  try {
      const res = await api.post('/register', data);
      // revalidatePath("/dashboard/users/teachers");
  return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
       const message = error.response?.data?.message || "Nepodařilo vytvořit Uživatele";
      throw new Error(message);
    }
    throw error;
  }
}
 


