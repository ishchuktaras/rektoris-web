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
  if (!userId) {
    console.error("getProfileId called with empty userId")
    return null
  }

  try {
    // Fix the space in the URL query parameter
    const res = await api.get(`/users/${userId}?role=${role}`)

    // Check if we got a response
    if (!res.data) {
      console.error("No data returned from profile ID API")
      return null
    }

    // Handle different response structures
    if (res.data.id) {
      return res.data.id
    } else if (res.data.data && res.data.data.id) {
      return res.data.data.id
    } else {
      console.error("Unexpected response structure:", res.data)
      return null
    }
  } catch (error) {
    console.error("Error in getProfileId:", error)

    if (axios.isAxiosError(error)) {
      const message = error.response?.data?.message || "Nepodařilo se načíst profil"
      throw new Error(message)
    }
    throw error
  }
}


