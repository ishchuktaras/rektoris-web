"use client";

import DateColumn from "@/components/dashboard/DataTableColumns/DateColumn";

import SortableColumn from "@/components/dashboard/DataTableColumns/SortableColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/dashboard/DataTableColumns/ActionColumn";
import { Parent } from "@/types/types";
import Image from "next/image";
import { ParentInfoModal } from "@/components/dashboard/modals/parent-info-modal";

export const columns: ColumnDef<Parent>[] = [
  {
    accessorKey: "user",
    header: "Name / Relationship",
    cell: ({ row }) => {
      const parent = row.original;
      return (
        <div className="flex items-center gap-2">
          <div className="h-14 w-14 relative rounded-full overflow-hidden">
            {parent.imageUrl ? (
              <Image
                src={parent.imageUrl}
                alt={`${parent.firstName} ${parent.lastName}`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-purple-600 flex items-center justify-center text-white text-lg">
                {parent.firstName[0]}
                {parent.lastName[0]}
              </div>
            )}
          </div>
          <div className="">
            <h2 className="font-medium capitalize">
              {parent.firstName.toLowerCase()} {parent.lastName.toLowerCase()}
            </h2>
            <p className="text-xs text-muted-foreground">
              {parent.relationship}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "email-phone",
    header: "Email / Phone Number",
    cell: ({ row }) => {
      const parent = row.original;
      return (
        <div className="">
          <h2 className="font-medium">{parent.email.toLowerCase()}</h2>
          <p className="text-xs text-muted-foreground">{parent.phone}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "nationality",
    header: ({ column }) => (
      <SortableColumn column={column} title="Nationality" />
    ),
  },
  {
    accessorKey: "view",
    header: "View Parent Info",
    cell: ({ row }) => (
      <ParentInfoModal
        parent={row.original}
        onEdit={(parent) => {
          // Handle edit logic
          console.log("Edit parent:", parent);
        }}
        onDelete={(parent) => {
          // Handle delete logic
          console.log("Delete parent:", parent);
        }}
      />
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date Created",
    cell: ({ row }) => <DateColumn row={row} accessorKey="createdAt" />,
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const parent = row.original;
      return (
        <ActionColumn
          row={row}
          model="parent"
          editEndpoint={`#`}
          id={parent.id.toString()}
        />
      );
    },
  },
];
