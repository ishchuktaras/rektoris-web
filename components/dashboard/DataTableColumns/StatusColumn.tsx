import { getNormalDate } from "@/lib/getNormalDate";
import React from "react";
import { Badge } from "../../ui/badge";

export default function StatusColumn({
  row,
  accessorKey,
}: {
  row: any;
  accessorKey: any;
}) {
  // Get the status from the row using the accessor key
  const status = row.getValue(`${accessorKey}`);

  // Optional: Format the status as a date using getNormalDate if it's a date field
  const formattedDate = status ? getNormalDate(new Date(status)) : null;

  return (
    <Badge variant="outline">
      {formattedDate ? formattedDate : status ? "Active" : "Inactive"}
    </Badge>
  );
}
