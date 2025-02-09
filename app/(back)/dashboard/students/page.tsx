import React from "react";
import { columns } from "./columns";

import DataTable from "@/components/dashboard/DataTableComponents/DataTable";

import { getAllStudents } from "@/actions/students";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getServerSchool } from "@/actions/auth";

export default async function page() {
  const school = await getServerSchool();
  const students = (await getAllStudents(school?.id ?? "")) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Students"
        linkTitle="Add Student"
        href="/dashboard/students/new"
        data={students}
        model="student"
      />
      <div className="py-8">
        <DataTable data={students} columns={columns} />
      </div>
    </div>
  );
}
