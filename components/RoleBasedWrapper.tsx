import { getServerUser } from "@/actions/auth";
import { UserRoles } from "@/types/types";
import { redirect } from "next/navigation";
import React from "react";
import NotAuthorized from "./not-authorized";

interface Props {
  children: React.ReactNode;
  allowedRoles: UserRoles[];
}

export default async function RoleBasedWrapper({
  children,
  allowedRoles,
}: Props) {
  const user = await getServerUser();
  if (!user) {
    redirect("/login");
  }
  const userRole = user.role as UserRoles;

  // Check if the user role is allowed to access the page
  if (!allowedRoles.includes(userRole)) {
    return <NotAuthorized />;
  }
  return <>{children}</>;
}
