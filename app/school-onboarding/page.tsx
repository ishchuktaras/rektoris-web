import SchoolOnboardinForm from "@/components/dashboard/forms/school/school-onboarding-form";
import { Card, CardContent } from "@/components/ui/card";
import React from "react";

export default function Page() {
  return (
    <div>
      <div className="max-w-3xl mx-auto p-16">
        <Card className="border-t-2 border-purple-500">
          <CardContent className="p-6">
            <SchoolOnboardinForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
