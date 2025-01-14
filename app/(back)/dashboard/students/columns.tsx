"use client";

import DateColumn from "@/components/dashboard/DataTableColumns/DateColumn";
import { ColumnDef } from "@tanstack/react-table";
import ActionColumn from "@/components/dashboard/DataTableColumns/ActionColumn";
import { Student } from "@/types/types";
import Image from "next/image";
import { StudentInfoModal } from "@/components/dashboard/modals/student-info-modal";

export const columns: ColumnDef<Student>[] = [
  {
    accessorKey: "student",
    header: "Name / Relationship",
    cell: ({ row }) => {
      const student = row.original;
      return (
        <div className="flex items-center gap-2">
          <div className="h-14 w-14 relative rounded-full overflow-hidden">
            {student.imageUrl ? (
              <Image
                src={student.imageUrl}
                alt={`${student.firstName} ${student.lastName}`}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full bg-purple-600 flex items-center justify-center text-white text-lg">
                {student.firstName[0]}
                {student.lastName[0]}
              </div>
            )}
          </div>
          <div className="">
            <h2 className="font-medium capitalize">
              {student.firstName.toLowerCase()} {student.lastName.toLowerCase()}
            </h2>
            <p className="text-xs text-muted-foreground">
              {student.email}
            </p>
          </div>
        </div>
      );
    },
  },
  {
    accessorKey: "class-stream",
    header: "Class / Stream",
    cell: ({ row }) => {
      const student = row.original;
      return (
        <div className="">
          <h2 className="font-medium">{student.classTitle??"N/A"}</h2>
          <p className="text-xs text-muted-foreground">{student.streamTitle??"N/A"}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "email-phone",
    header: "Email / Phone Number",
    cell: ({ row }) => {
      const student = row.original;
      return (
        <div className="">
          <h2 className="font-medium">{student.email.toLowerCase()}</h2>
          <p className="text-xs text-muted-foreground">{student.phone}</p>
        </div>
      );
    },
  },
  {
    accessorKey: "view",
    header: "View Parent Info",
    cell: ({ row }) => (
      <StudentInfoModal
        student={row.original}
        onEdit={(student) => {
          // Handle edit logic
          console.log("Edit student:", student);
        }}
        onDelete={(student) => {
          // Handle delete logic
          console.log("Delete student:", student);
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
