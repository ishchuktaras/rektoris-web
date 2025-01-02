"use client";

import DateColumn from "@/components/dashboard/DataTableColumns/DateColumn";

import SortableColumn from "@/components/dashboard/DataTableColumns/SortableColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/dashboard/DataTableColumns/ActionColumn";
import { Contact } from "@/types/types";
import { ContactInfoCard } from "@/components/dashboard/DataTableColumns/ContactCard";

export const columns: ColumnDef<Contact>[] = [
  {
    accessorKey: "firstName",
    header: ({ column }) => <SortableColumn column={column} title="First Name" />,
  },
  {
    accessorKey: "lastName",
    header: ({ column }) => <SortableColumn column={column} title="Last Name" />,
  },
  {
    accessorKey: "email",
    header: ({ column }) => <SortableColumn column={column} title="Email" />,
  },
  {
    accessorKey: "phone",
    header: ({ column }) => <SortableColumn column={column} title="Phone" />,
  },
  {
    accessorKey: "schoolName",
    header: ({ column }) => <SortableColumn column={column} title="School Name" />,
  },
  {
    accessorKey: "country",
    header: ({ column }) => <SortableColumn column={column} title="Country" />,
  },
  {
    accessorKey: "view",
    header: "View contact Info",
    cell: ({ row }) => <ContactInfoCard contact={row.original}  />,
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
