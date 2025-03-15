import Login from "@/components/frontend/auth/login";
import React from "react";
import { redirect } from "next/navigation";
import { getServerUser } from "@/actions/auth";

export default async function page() {
  // Clear user session
  const user = await getServerUser();
  if (user) {
    const role = user.role;
    const path =
      role === "ADMIN" || role === "SUPER_ADMIN" ? "/dashboard" : "/portal";
    redirect(path);
  }
  return (
    <div>
      <Login />
    </div>
  );
}
