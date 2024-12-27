"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Plus, Edit, Trash2 } from "lucide-react";
import ClassForm from "./forms/academics/class-form";
import { Stream } from "stream";
import StreamForm from "./forms/academics/stream-form";

const classes = [
  {
    name: "Třída 1",
    sections: [
      { name: "1A", teacher: "Ms. Jane", students: 30 },
      { name: "1B", teacher: "Mr. John", students: 35 },
      { name: "1C", teacher: "Ms. Emily", students: 40 },
    ],
  },
  {
    name: "Třída 2",
    sections: [
      { name: "2A", teacher: "Ms. Sarah", students: 38 },
      { name: "2B", teacher: "Mr. Smith", students: 42 },
    ],
  },
  {
    name: "Třída 3",
    sections: [
      { name: "3A", teacher: "Ms. Jane", students: 35 },
      { name: "3B", teacher: "Mr. John", students: 30 },
    ],
  },
  {
    name: "Třída 4",
    sections: [
      { name: "4A", teacher: "Ms. Emily", students: 40 },
      { name: "4B", teacher: "Mr. Smith", students: 38 },
      { name: "4C", teacher: "Ms. Sarah", students: 42 },
    ],
  },
   {
    name: "Třída 5",
    sections: [
      { name: "5A", teacher: "Ms. Sarah", students: 40 },
      { name: "5B", teacher: "Mr. John", students: 38 },
      { name: "5C", teacher: "Ms. Emily", students: 42 },
    ],
  },
  {
    name: "Třída 6",
    sections: [
      { name: "6A", teacher: "Ms. Jane", students: 35 },
      { name: "6B", teacher: "Mr. Smith", students: 30 },
    ],
  },
  // Add more classes as needed
];

export default function ClassSectionUI() {
  const [selectedClass, setSelectedClass] = useState(classes[0]);

  const handleEditClass = () => alert(`Edit ${selectedClass.name}`);
  const handleDeleteClass = () => alert(`Delete ${selectedClass.name}`);

  const handleEditSection = (section: string) =>
    alert(`Edit Section ${section}`);
  const handleDeleteSection = (section: string) =>
    alert(`Delete Section ${section}`);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Left Sidebar */}
      <div className="w-1/4 bg-white border-r p-4 shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Třídy</h2>
          <ClassForm />
        </div>
        <Input placeholder="Hledat třídy..." className="mb-4" />
        <ul className="space-y-3">
          {classes.map((cls) => (
            <li
              key={cls.name}
              className={`p-3 rounded-lg cursor-pointer flex justify-between items-center ${
                selectedClass.name === cls.name
                  ? "bg-purple-500 text-white"
                  : "hover:bg-gray-200"
              }`}
              onClick={() => setSelectedClass(cls)}
            >
              <div>
                <h3 className="font-medium">{cls.name}</h3>
                <p className="text-sm text-gray-500">
                  {cls.sections.length} streamů
                </p>
              </div>
              {selectedClass.name === cls.name && (
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleEditClass}
                    className="text-gray-300 hover:text-black"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={handleDeleteClass}
                    className="text-gray-300 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-1 bg-white p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">{selectedClass.name}</h2>
          <StreamForm />
        </div>
        <div className="grid grid-cols-3 gap-4">
          {selectedClass.sections.map((section) => (
            <Card key={section.name} className="shadow-md">
              <CardHeader>
                <CardTitle>{section.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500">
                  Třídní učitel: {section.teacher}
                </p>
                <p className="text-sm text-gray-500">
                  {section.students} students
                </p>
                <div className="flex justify-end space-x-2 mt-4">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditSection(section.name)}
                    className="text-gray-500 hover:text-purple-500"
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteSection(section.name)}
                    className="text-gray-500 hover:text-red-500"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
