"use server";

import { api } from "@/lib/api";

export type Analytics = {
  title: string;
  count: number;
  trend?: number;
};

export async function getAllAnalytics(schoolId: string) {
  try {
    const response = await api.get(`/analytics/school/${schoolId}`);
    const analytics = response.data;
    return analytics as Analytics[];
  } catch (error) {
    console.log(error);
  }
}
