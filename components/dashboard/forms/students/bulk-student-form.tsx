import React from "react";

export default function BulkStudentForm() {
  return (
    <div className="rounded-lg border bg-card text-card-foreground p-6">
      <h2 className="text-lg font-semibold mb-2">Bulk Student Admission</h2>
      <p className="text-muted-foreground">
        Upload multiple students at once using a CSV file.
      </p>
      {/* Bulk upload form will go here */}
    </div>
  );
}
