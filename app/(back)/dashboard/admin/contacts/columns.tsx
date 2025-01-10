"use client";

import DateColumn from "@/components/dashboard/DataTableColumns/DateColumn";

import SortableColumn from "@/components/dashboard/DataTableColumns/SortableColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/dashboard/DataTableColumns/ActionColumn";
import { Contact } from "@/types/types";
import { ContactInfoCard } from "@/components/dashboard/DataTableColumns/ContactCard";

export const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "user",
    header: "Name / School Name",
    cell: ({ row }) => {
      const contact = row.original;
      return (
        <div className="">
          <h2 className="font-medium capitalize">
            {contact.firstName.toLowerCase()} {contact.lastName.toLowerCase()}
          </h2>
          <p className="text-xs text-muted-foreground">{contact.schoolName}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "email-phone",
    header: "Email / Phone Number",
    cell: ({ row }) => {
      const contact = row.original;
      return (
        <div className="">
          <h2 className="font-medium">{contact.email.toLowerCase()}</h2>
          <p className="text-xs text-muted-foreground">{contact.phone}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "country",
    header: ({ column }) => <SortableColumn column={column} title="Country" />,
  },
  {
    accessorKey: "view",
    header: "View contact Info",
    cell: ({ row }) => <ContactInfoCard contact={row.original} />,
  },
  {
    accessorKey: "numberOfStudents",
    header: ({ column }) => <SortableColumn column={column} title="Students" />,
  },
  {
    accessorKey: "role",
    header: ({ column }) => <SortableColumn column={column} title="Role" />,
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const contact = row.original;
      return (
        <ActionColumn
          row={row}
          model="contact"
          editEndpoint={`#`}
          id={contact.id.toString()}
        />
      );
    },
  },
];
