import React from "react";
import { columns } from "./columns";

import DataTable from "@/components/dashboard/DataTableComponents/DataTable";

import { getAllParents } from "@/actions/parents";
import TableHeader from "@/components/dashboard/Tables/TableHeader";

 
export default async function page() {
  const teachers= (await getAllParents()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Učitelé"
        linkTitle="Přidat učitele"
        href="/dashboard/users/teachers/new"
        data={teachers}
        model="teacher"
      />
      <div className="py-8">
        <DataTable data={teachers} columns={columns} />
      </div>
    </div>
  );
}

