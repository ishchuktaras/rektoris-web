import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/dashboard/DataTableComponents/DataTable";
import { getAllTeachers } from "@/actions/teachers";
import TableHeader from "@/components/dashboard/Tables/TableHeader";

export default async function page() {
  const teachers = (await getAllTeachers()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Učitelé"
        linkTitle="Přidat učitele"
        href="/dashboard/users/teachers/new"
        data={teachers}
        model="Učitel"
      />
      <div className="py-8">
        <DataTable data={teachers} columns={columns} />
      </div>
    </div>
  );
}