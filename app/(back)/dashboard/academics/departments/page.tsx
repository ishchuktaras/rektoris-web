import { getServerSchool } from "@/actions/auth";
import { getAllDepartments } from "@/actions/departments";
import DepartmentListing from "@/components/dashboard/department-listing";
import React from "react";

export default async function page() {
  const school = await getServerSchool();
  const departments = 
    (await getAllDepartments(school?.id ?? ""))?.map(department => ({
      ...department,
      teachers: department.teachers.map(teacher => ({
        ...teacher,
        name: (teacher as { name?: string }).name || "Neznámý"
      })),
      subjects: department.subjects.map(subject => ({
        ...subject,
        name: (subject as { name?: string }).name || "Neznámý"
      }))
    })) || [];
  return (
    <div>
      <DepartmentListing departments={departments} />
    </div>
  );
}
