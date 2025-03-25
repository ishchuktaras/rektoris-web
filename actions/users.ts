"use server"

import axios from "axios";
import { UserCreateProps, UserRoles } from "@/types/types";
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

export async function getProfileId(userId: string, role: UserRoles) {
  try {
    const res = await api.get(`/users/${userId}? role=${role}`);
    const profileData = res.data;
    return  profileData.id as string;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || "Nepodařilo se načíst profil";
      throw new Error(message);
    }
    throw error;
  }
}


