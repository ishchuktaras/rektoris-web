import * as React from "react";
import WelcomeBanner from "@/components/dashboard/welcome-message";
import { getServerUser } from "@/actions/auth";
import { redirect } from "next/navigation";
import DashboardDetails from "@/components/dashboard/dashboard-details";


export default async function Dashboard() {
 const user = await getServerUser()
 if (!user){
  redirect("/login")
 }
  return (
    <div className="flex-1 space-y-4 p-4">
      <WelcomeBanner
        userName={user?.name}
        userRole={user?.role}
        userSchool={user?.schoolName ??""}
      />
     <DashboardDetails />
    </div>
  );
}
