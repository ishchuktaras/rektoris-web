import React from "react";
import { columns } from "./columns";

import DataTable from "@/components/dashboard/DataTableComponents/DataTable";

import { getAllParents } from "@/actions/parents";
import TableHeader from "@/components/dashboard/Tables/TableHeader";

 
export default async function page() {
  const parents = (await getAllParents()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Parents"
        linkTitle="Add Parent"
        href="/dashboard/users/parents/new"
        data={parents}
        model="parent"
      />
      <div className="py-8">
        <DataTable data={parents} columns={columns} />
      </div>
    </div>
  );
}

