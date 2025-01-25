"use client";

import DateColumn from "@/components/dashboard/DataTableColumns/DateColumn";
import SortableColumn from "@/components/dashboard/DataTableColumns/SortableColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/dashboard/DataTableColumns/ActionColumn";
import { Teacher } from "@/types/types";
import Image from "next/image";
import { TeacherInfoModal } from "@/components/dashboard/modals/teacher-info-modal";

export const columns: ColumnDef<Teacher>[] = [
  {
    accessorKey: "user",
    header: "Jméno / ID zaměstnance",
    cell: ({ row }) => {
      const teacher = row.original;
      return (
        <div className="flex items-center gap-2">
          <div className="h-14 w-14 relative rounded-full overflow-hidden">
            {teacher.imageUrl ? (
              <Image
                src={teacher.imageUrl}
                alt={`${teacher.firstName} ${teacher.lastName}`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-purple-600 flex items-center justify-center text-white text-lg">
                {teacher.firstName[0]}
                {teacher.lastName[0]}
              </div>
            )}
          </div>
          <div className="">
            <h2 className="font-medium capitalize">
              {teacher.firstName.toLowerCase()} {teacher.lastName.toLowerCase()}
            </h2>
            <p className="text-xs text-muted-foreground">
              {teacher.employeeId}{" "}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "email-phone",
    header: "Email / Telefonní číslo",
    cell: ({ row }) => {
      const teacher = row.original;
      return (
        <div className="">
          <h2 className="font-medium">{teacher.email.toLowerCase()}</h2>
          <p className="text-xs text-muted-foreground">{teacher.phone}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "nationality",
    header: ({ column }) => (
      <SortableColumn column={column} title="Státní příslušnost" />
    ),
  },
  {
    accessorKey: "view",
    header: "Zobrazit informace",
    cell: ({ row }) => (
      <TeacherInfoModal
        teacher={row.original}
        onEdit={(teacher) => {
          // Handle edit logic
          console.log("Upravit učitele:", teacher);
        }}
        onDelete={(teacher) => {
          // Handle delete logic
          console.log("Smazat učitele:", teacher);
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
