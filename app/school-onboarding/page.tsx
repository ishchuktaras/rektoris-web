import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import { getServerUser } from "@/actions/auth";
import { redirect } from "next/navigation";
import SchoolOnboardinForm from "@/components/dashboard/forms/school/school-onboarding-form copy";

export default async function Page() {
  const user = await getServerUser();
  const role = user?.role;
  if (!user || role !== "SUPER_ADMIN") {
    redirect("/login");
  }

  return (
    <div className="max-w-3xl mx-auto p-16">
      <Card className="border-t-2 border-purple-500">
        <CardContent className="p-6">
          <SchoolOnboardinForm />
        </CardContent>
      </Card>
    </div>
  );
}
