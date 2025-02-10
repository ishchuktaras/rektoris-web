"use server";

import axios from "axios";
import {
  Class,
  ClassBrief,
  ClassCreateProps,
  Stream,
  StreamCreateProps,
} from "@/types/types";
import { api } from "@/lib/api";
import { revalidatePath } from "next/cache";
import { BASE_API_URL } from "@/lib/api";

export async function createClass(data: ClassCreateProps) {
  try {
    const response = await api.post("/classes", data);
    revalidatePath("/dashboard/academics/classes");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data?.message || "Vytvoření třídy se nezdařilo";
      throw new Error(message);
    }
    throw error;
  }
}

export async function getAllClasses(schoolId: string) {
  try {
    const response = await api.get(`/classes/school/${schoolId}`);
    if (response.status !== 200) {
      throw new Error("Třidu se nepodařilo načíst");
    }
    const classes = response.data;
    return classes as Class[];
  } catch (error) {
    console.error("Při načítání tříd došlo k chybě:", error);
  }
}

export async function getBriefClasses(schoolId: string) {
  try {
    const response = await api.get(`/classes/brief/${schoolId}`);
    const classes = response.data;
    return classes as ClassBrief[];
  } catch (error) {
    console.error("Failed to fetch brief classes:", error);
    return [];
  }
}

export async function deleteClass(id: string) {
  console.log("smazáno", id);
  return {
    ok: true,
  };
}

export async function createStream(data: StreamCreateProps) {
  try {
    const response = await api.post("/streams", data);
    revalidatePath("/dashboard/academics/classes");
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const message =
        error.response?.data.message || "Vytvoření streamu se nezdařilo";
      throw new Error(message);
    }
    throw error;
  }
}

export async function getAllStreams() {
  try {
    const response = await api.get("/streams");
    const streams = response.data;
    return streams as Stream[];
  } catch (error) {
    console.log(error);
  }
}
