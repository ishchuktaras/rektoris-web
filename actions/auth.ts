"use server";

import { api } from "@/lib/api";
import { cookies } from "next/headers";
import { User, School } from "@/types/types";
import { getSchoolById } from "./schools";

interface UserData {
  user: {
    id: string;
    email: string;
    role: string;
    name: string;
    phone: string | null;
    image: string | null;
    schoolId: string | null;
    schoolName: string | null;
    createdAt: string;
    updatedAt: string;
  };
  accessToken: string;
  refreshToken: string;
}

interface SessionData {
  user: User;
  accessToken: string;
  refreshToken: string;
}

export async function loginUser(data: { email: string; password: string }) {
  try {
    const response = await api.post("/login", data);
    const { user, token, refreshToken } = response.data.data;
    const userData = response.data.data;
    await createServerSession(userData);
    const school = await getSchoolById(userData?.user.schoolId);
    await saveServerSchool(school as School);
    return response.data.data as SessionData;
  } catch (error) {
    console.log(error)
  }
}

export async function createServerSession(data: SessionData) {
  try {
    const cookieStore = await cookies();
    // Set user data in cookies
    cookieStore.set("user", JSON.stringify(data.user), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60, // 60 minutes
    });

    // Set access token
    cookieStore.set("accessToken", data.accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60, // 60 minutes
    });

    // Set refresh token
    cookieStore.set("refreshToken", data.refreshToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 30, // 30 days
    });

    return { success: true };
  } catch (error) {
    console.error("Session creation error", error);
    return { success: false, error: "Invalid session data" };
  }
}

export async function saveServerSchool(data: School) {
  try {
    const cookieStore = await cookies();
    // Set user data in cookies
    cookieStore.set("school", JSON.stringify(data), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    return { success: true };
  } catch (error) {
    console.error("Chyba uložení školy:", error);
    return {
      success: false,
      error:
        error instanceof Error
          ? error.message
          : "Nepodařilo se uložit školní data",
    };
  }
}

// Server action to logout and clear cookies
export async function logout() {
  try {
    const cookieStore = await cookies();
    // Delete all auth cookies
    cookieStore.delete("user");
    cookieStore.delete("accessToken");
    cookieStore.delete("refreshToken");
    return { success: true };
  } catch (error) {
    console.error("Logout error", error);
    return { success: false, error: "Logout failed" };
  }
}

// Helper function to get current user from cookies (server-side)
export async function getServerUser() {
  const cookieStore = await cookies();
  const userCooke = cookieStore.get("user");
  if (!userCooke) return null;
  try {
    const user = JSON.parse(userCooke.value);
    return user as User;
  } catch {
    return null;
  }
}

export async function getServerSchool() {
  const cookieStore = await cookies();
  const userCooke = cookieStore.get("school");
  if (!userCooke) return null;
  try {
    const school = JSON.parse(userCooke.value);
    return school as School;
  } catch {
    return null;
  }
}
