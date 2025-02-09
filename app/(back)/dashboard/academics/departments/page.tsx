import { getServerSchool } from "@/actions/auth";
import { getAllDepartments } from "@/actions/departments";
import DepartmentListing from "@/components/dashboard/department-listing";
import React from "react";

export default async function page() {
  const school = await getServerSchool();
  const departments =
    ((await getAllDepartments(school?.id??"")) ?? []).map((department) => ({
      ...department,
      createdAt: new Date(department.createdAt),
      hodStartDate: department.hodStartDate
        ? new Date(department.hodStartDate)
        : undefined,
      teachers: department.teachers.map((teacher) => ({
        ...teacher,
        name:
          "name" in teacher && typeof teacher.name === "string"
            ? teacher.name
            : "Unknown",
      })),
      subjects: department.subjects.map((subject) => ({
        ...subject,
        name:
          "name" in subject && typeof subject.name === "string"
            ? subject.name
            : "Unknown",
      })),
    })) || [];
  return (
    <div>
      <DepartmentListing departments={departments} />
    </div>
  );
}
