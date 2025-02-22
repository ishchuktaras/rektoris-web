"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Edit, School, Trash2, AlertTriangle, AlertCircle } from "lucide-react";
import DepartmentForm from "./forms/academics/department-form";

interface Teacher {
  id: string;
  name: string;
}

interface Subject {
  id: string;
  name: string;
}

interface Department {
  id: string;
  name: string;
  slug: string;
  createdAt: Date;
  hodName?: string;
  budget?: number;
  hodStartDate?: Date;
  teachers: Teacher[];
  subjects: Subject[];
}

export default function DepartmentListing({
  departments: initialDepartments,
}: {
  departments: Department[];
}) {
  const [selectedDepartment, setSelectedDepartment] =
    useState<Department | null>(null);
  const [departments, setDepartments] =
    useState<Department[]>(initialDepartments);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-2 p-1">
      {/* Department List */}
      <Card className="md:col-span-1">
        <CardHeader>
          <div className="pb-1 border-b flex items-center justify-between gap-1 px-1 py-1">
            <div className="flex items-center gap-2">
              <School className="h-6 w-6" />
              <h2 className="text-xl font-semibold">Oddělení</h2>
            </div>
            <DepartmentForm />
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableBody>
              {departments.length === 0 ? (
                <TableRow>
                  <TableCell className="text-muted-foreground p-4">
                    Žádné oddělení
                  </TableCell>
                </TableRow>
              ) : (
                departments.map((dept) => (
                  <TableRow
                    key={dept.id}
                    onClick={() => setSelectedDepartment(dept)}
                    className="cursor-pointer hover:bg-muted"
                  >
                    <TableCell>{dept.name}</TableCell>
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
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Department Details */}
      <Card className="md:col-span-2">
        <CardHeader>
          <CardTitle>
            {selectedDepartment
              ? `${selectedDepartment.name}`
              : "Vyberte oddělení"}
          </CardTitle>
        </CardHeader>
        <CardContent>
          {selectedDepartment ? (
            <div className="space-y-2">
              <div className="grid md:grid-cols-2 gap-2">
                {/* Department Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Podrobnosti o oddělení</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p>
                        <strong>Název:</strong> {selectedDepartment.name}
                      </p>
                      <p>
                        <strong>Vytvořeno:</strong>{" "}
                        {selectedDepartment.createdAt.toLocaleString()}
                      </p>

                      {/* HOD Details */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Vedoucí oddělení</CardTitle>
                        </CardHeader>
                        <CardContent>
                          {selectedDepartment.hodName ? (
                            <div className="space-y-2">
                              <div>
                                <span className="font-semibold">Jméno: </span>
                                <span>{selectedDepartment.hodName}</span>
                              </div>

                              {selectedDepartment.hodStartDate ? (
                                <div>
                                  <span className="font-semibold">
                                    Datum zahájení:{" "}
                                  </span>
                                  <span>
                                    {new Date(
                                      selectedDepartment.hodStartDate
                                    ).toLocaleDateString()}
                                  </span>
                                </div>
                              ) : (
                                <p className="text-yellow-600 flex items-center gap-2">
                                  <AlertTriangle className="h-5 w-5" />
                                  Datum zahájení není k dispozici
                                </p>
                              )}
                            </div>
                          ) : (
                            <div className="text-red-500 flex items-center gap-2">
                              <AlertCircle className="h-5 w-5" />
                              Není určen žádný vedoucí oddělení
                            </div>
                          )}
                        </CardContent>
                      </Card>

                      {/* Budget Information */}
                      <Card>
                        <CardHeader>
                          <CardTitle>Informace o rozpočtu</CardTitle>
                        </CardHeader>
                        <CardContent>
                          {selectedDepartment.budget ? (
                            <div className="space-y-2">
                              <div>
                                <span className="font-semibold">Množství: </span>
                                <span>
                                  ${selectedDepartment.budget.toLocaleString()}
                                </span>
                              </div>

                              <p className="text-yellow-600 flex items-center gap-2">
                                <AlertTriangle className="h-5 w-5" />
                                Rozpočtový rok není stanoven
                              </p>
                            </div>
                          ) : (
                            <div className="text-red-500 flex items-center gap-2">
                              <AlertCircle className="h-5 w-5" />
                              Nejsou k dispozici žádné informace o rozpočtu
                              oddělení
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    </div>
                  </CardContent>
                </Card>

                {/* Teachers List */}
                <Card>
                  <CardHeader>
                    <CardTitle>Učitelé</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Jméno</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedDepartment.teachers.length > 0 ? (
                          selectedDepartment.teachers.map((teacher) => (
                            <TableRow key={teacher.id}>
                              <TableCell>{teacher.name}</TableCell>
                            </TableRow>
                          ))
                        ) : (
                          <TableRow>
                            <TableCell className="text-red-500 flex items-center gap-2">
                              <AlertCircle className="h-5 w-5" />
                              Nejsou přiděleni žádní učitelé
                            </TableCell>
                          </TableRow>
                        )}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>

              {/* Subjects List */}
              <Card>
                <CardHeader>
                  <CardTitle>Předměty</CardTitle>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Název</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {selectedDepartment.subjects.length > 0 ? (
                        selectedDepartment.subjects.map((subject) => (
                          <TableRow key={subject.id}>
                            <TableCell>{subject.name}</TableCell>
                          </TableRow>
                        ))
                      ) : (
                        <TableRow>
                          <TableCell className="text-red-500 flex items-center gap-2">
                            <AlertCircle className="h-5 w-5" />
                            Žádné přidělené předměty
                          </TableCell>
                        </TableRow>
                      )}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="text-center text-muted-foreground">
              Vyberte oddělení pro zobrazení podrobností
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
