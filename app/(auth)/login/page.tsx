
import Login from "@/components/frontend/auth/login";
import React from "react";
import { redirect } from "next/navigation";
import { getServerUser } from "@/actions/auth";

export default async function page() {
  // Clear user session
  const user = await getServerUser();
  if (user) {
    redirect("/dashboard");
  }
  return (
    <div>
      <Login />
    </div>
  );
}
