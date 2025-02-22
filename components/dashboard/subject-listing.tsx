"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Edit, Book, Trash2 } from "lucide-react";
import SubjectForm from "./forms/academics/subject-form";

interface Subject {
  id: string;
  name: string;
  slug: string;
  code: string;
  shortName?: string;
  category: string;
  type: string;
  passingMarks?: number;
  totalMarks?: number;
  departmentName: string;
  isActive: boolean;
  isOptional: boolean;
  hasTheory: boolean;
  hasPractical: boolean;
  labRequired: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export type DepartmentOption = {
  label: string;
  value: string;
};

export default function SubjectListing({
  departments,
  subjects: initialSubjects,
}: {
  departments: DepartmentOption[];
  subjects: Subject[];
}) {
  const [selectedSubject, setSelectedSubject] = useState<Subject | null>(null);
  const [subjects, setSubjects] = useState<Subject[]>(initialSubjects);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-2">
      {/* Subject List */}
      <Card className="md:col-span-1">
        <CardHeader>
          <div className="pb-1 border-b flex items-center justify-between gap-1 px-1 py-1">
            <div className="flex items-center gap-2">
              <Book className="h-6 w-6" />
              <h2 className="text-xl font-semibold">Předměty</h2>
            </div>
            <SubjectForm departments={departments} />
          </div>
        </CardHeader>
        {subjects.length>0 ? (
          <CardContent>
          <Table>
            <TableBody>
              {subjects.map((subject) => (
                <TableRow
                  key={subject.id}
                  onClick={() => setSelectedSubject(subject)}
                  className="cursor-pointer hover:bg-muted"
                >
                  <TableCell>{subject.name}</TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
        ):(
          <div className="p-4">
            <h2>Žádné předměty</h2>
          </div>
        )}
      </Card>

      {/* Subject Details */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>
            {selectedSubject
              ? `${selectedSubject.name}`
              : "Vyberte předmět"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedSubject ? (
            <div className="grid md:grid-cols-2 gap-4">
              {/* Basic Information */}
              <Card>
                <CardHeader>
                  <CardTitle>Základní informace</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">Název:</span>
                    <span>{selectedSubject.name}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Kód:</span>
                    <span>{selectedSubject.code}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Kategorie:</span>
                    <span>{selectedSubject.category}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Typ:</span>
                    <span>{selectedSubject.type}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Oddělení:</span>
                    <span>{selectedSubject.departmentName}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Marks and Status */}
              <Card>
                <CardHeader>
                  <CardTitle>Hodnocení a Stav</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {selectedSubject.passingMarks !== undefined && (
                    <div className="flex justify-between">
                      <span className="font-semibold">
                        Minimální počet bodů:
                      </span>
                      <span>{selectedSubject.passingMarks}</span>
                    </div>
                  )}
                  {selectedSubject.totalMarks !== undefined && (
                    <div className="flex justify-between">
                      <span className="font-semibold">Celkový počet bodů:</span>
                      <span>{selectedSubject.totalMarks}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span className="font-semibold">Volitelný:</span>
                    <span>{selectedSubject.isOptional ? "Ano" : "Ne"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Teoretická část:</span>
                    <span>{selectedSubject.hasTheory ? "Ano" : "Ne"}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Praktická část:</span>
                    <span>{selectedSubject.hasPractical ? "Ano" : "Ne"}</span>
                  </div>
                  {selectedSubject.hasPractical && (
                    <div className="flex justify-between">
                      <span className="font-semibold">Laboratoř:</span>
                      <span>
                        {selectedSubject.labRequired
                          ? "Vyžadována"
                          : "Nevyžadována"}
                      </span>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Dates */}
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle>Datum vytvoření a aktualizace</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-semibold">Vytvořeno:</span>
                    <span>
                      {new Date(selectedSubject.createdAt).toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold">Aktualizováno:</span>
                    <span>
                      {new Date(selectedSubject.updatedAt).toLocaleString()}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              Vyberte předmět pro zobrazení podrobností
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
