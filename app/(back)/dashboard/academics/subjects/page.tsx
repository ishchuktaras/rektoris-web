import React from "react";
import SubjectListing from "@/components/dashboard/subject-listing";
import { getBriefDepartments } from "@/actions/departments";
import { getAllSubjects } from "@/actions/subjects";
import { getServerSchool } from "@/actions/auth";

export default async function page() {
  const school = await getServerSchool();
  const departments = (await getBriefDepartments(school?.id ?? "")) || [];
  const subjects = (await getAllSubjects(school?.id ?? "")) || [];
  return (
    <div>
      <SubjectListing
        subjects={subjects}
        departments={departments.map((item) => {
          return {
            label: item.name,
            value: item.id,
          };
        })}
      />
    </div>
  );
}
