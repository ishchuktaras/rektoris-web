"use server"

import axios from "axios";
import { Class, ClassBrief, ClassCreateProps, Stream, StreamCreateProps } from "@/types/types";
import { api } from "@/lib/api";
import { revalidatePath } from "next/cache";
import { BASE_API_URL } from "@/lib/api";

export async function createClass(data:ClassCreateProps) {
  try {
      const response = await api.post('/classes', data);
      revalidatePath("/dashboard/academics/classes");
  return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
       const message = error.response?.data?.message || "Faild to create Class";
      throw new Error(message);
    }
    throw error;
  }
}

export async function getAllClasses (){
  try {
    const response = await api.get('/classes');
    const classes = response.data;
  return classes as Class[];
  } catch (error) {
    console.log(error)
  }
}

export async function getBriefClasses(): Promise<ClassBrief[]> {
  try {
    const response = await api.get(`${BASE_API_URL}/classes/brief`);
    return response.data || [];
  } catch (error) {
    console.error('Failed to fetch brief classes:', error);
    return [];
  }
}

export async function deleteClass(id:string) {
  console.log("deleted",id);
  return {
    ok: true
  }
}

export async function createStream(data:StreamCreateProps) {
  try {
      const response = await api.post('/streams', data);
      revalidatePath("/dashboard/academics/classes");
  return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
       const message = error.response?.data.message || "Faild to create Stream";
      throw new Error(message);
    }
    throw error;
  }
}

export async function getAllStreams (){
  try {
    const response = await api.get('/streams');
    const streams = response.data;
  return streams as Stream[];
  } catch (error) {
    console.log(error)
  }
}


