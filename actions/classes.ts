"use server"

import axios from "axios";
import { ClassCreateProps, Contact, Stream, StreamCreateProps } from "@/types/types";


const BASE_API_URL = process.env.API_URL|| "";

export const api = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
});

export async function createClass(data:ClassCreateProps) {
  try {
      const response = await api.post('/classes', data);
  return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
       const message = error.response?.data.message || "Faild to create Class";
      throw new Error(message);
    }
    throw error;
  }
}

export async function createStream(data:StreamCreateProps) {
  try {
      const response = await api.post('/streams', data);
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

export async function deleteClass(id:string) {
  console.log("deleted",id);
  return {
    ok: true
  }
}

export async function getAllClasses (){
  try {
    const response = await api.get('/classes');
    const classes = response.data;
  return classes as Contact[];
  } catch (error) {
    console.log(error)
  }
}

