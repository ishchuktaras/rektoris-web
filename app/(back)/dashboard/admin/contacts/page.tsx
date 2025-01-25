import React from "react";
import { columns } from "./columns";
import DataTable from "@/components/dashboard/DataTableComponents/DataTable";
import { getAllContacts } from "@/actions/admin";
import TableHeader from "@/components/dashboard/Tables/TableHeader";
 
export default async function page() {
  const contacts = (await getAllContacts()) || [];
  return (
    <div className="p-8">
      <TableHeader
        title="Kontakty"
        linkTitle="Přidat kontakt"
        href="/contact-us"
        data={contacts}
        model="Kontakt"
      />
      <div className="py-8">
        <DataTable data={contacts} columns={columns} />
      </div>
    </div>
  );
}