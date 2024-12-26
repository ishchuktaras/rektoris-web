import React from "react";

export default function BulkStudentForm() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground p-6">
      <h2 className="text-lg font-semibold mb-2">Hromadné přijetí studentů</h2>
      <p className="text-muted-foreground">
        Nahrajte více studentů najednou pomocí souboru CSV.
      </p>
      {/* Bulk upload form will go here */}
    </div>
  );
}
