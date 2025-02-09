import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/dashboard/DataTableComponents/DataTable";
import { getAllParents } from "@/actions/parents";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
import { getServerSchool } from "@/actions/auth";

export default async function page() {
  const school = await getServerSchool();
  const parents = (await getAllParents(school?.id ?? "")) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Rodiče"
        linkTitle="Přidat rodiče"
        href="/dashboard/users/parents/new"
        data={parents}
        model="Rodič"
      />
      <div className="py-8">
        <DataTable data={parents} columns={columns} />
      </div>
    </div>
  );
}
