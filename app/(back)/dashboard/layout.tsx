import AppSidebar from "@/components/dashboard/sidebar/app-sidebar";
import SidebarHeader from "@/components/dashboard/sidebar/sidebar-header";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import React, { ReactNode } from "react";
import { getServerUser } from "@/actions/auth";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getServerUser();

  if (!user) {
    redirect("/login");
  }
  if (user.role !== "ADMIN") {
    redirect("/login");
  }

  return (
    <div>
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <SidebarHeader />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </div>
  );
}
