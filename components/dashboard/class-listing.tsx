"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  ChevronLeft,
  GraduationCap,
  User,
  Users,
  Plus,
  Pencil,
  Trash2,
  FolderPlus,
} from "lucide-react";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@radix-ui/react-scroll-area";
import { cn } from "@/lib/utils";
import ClassForm from "./forms/academics/class-form";
import StreamForm from "./forms/academics/stream-form";
import { Class } from "@/types/types";

interface ClassItem {
  id: string;
  name: string;
  sections: number;
  totalStudents: number;
}

interface SectionItem {
  name: string;
  classTeacher: string;
  students: number;
}

interface SectionsData {
  [key: string]: SectionItem[];
}

const classes: ClassItem[] = [
  { id: "5", name: "Class 5", sections: 3, totalStudents: 120 },
  { id: "6", name: "Class 6", sections: 3, totalStudents: 120 },
  { id: "7", name: "Class 7", sections: 3, totalStudents: 120 },
  { id: "8", name: "Class 8", sections: 3, totalStudents: 120 },
  { id: "9", name: "Class 9", sections: 3, totalStudents: 120 },
  { id: "10", name: "Class 10", sections: 3, totalStudents: 120 },
];

const sections: SectionsData = {
  "5": [
    { name: "5A", classTeacher: "Ms. Sarah", students: 32 },
    { name: "5B", classTeacher: "Mr. John", students: 35 },
    { name: "5C", classTeacher: "Ms. Jane", students: 41 },
  ],
};

export default function ClassListing({ classes }: { classes: Class[] }) {
  const [selectedClass, setSelectedClass] = React.useState<string>("");

  const streams = classes.find((c) => c.id === selectedClass)?.streams || [];

  return (
    <div className="grid lg:grid-cols-[280px_1fr] h-[calc(100vh-2rem)] max-h-[calc(100vh-2rem)] gap-2 p-4 pt-2">
      {/* Left Sidebar */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2 px-4 py-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-6 w-6" />
            <h2 className="text-xl font-semibold">Classes</h2>
          </div>
          <ClassForm />
        </div>
        <div className="px-4 py-2">
          <Input
            placeholder="Search classes..."
            className="h-9"
            type="search"
          />
        </div>
        <ScrollArea className="flex-1">
          <div className="px-2 space-y-3">
            {classes.map((classItem) => (
              <div key={classItem.id} className="group relative">
                <button
                  onClick={() => setSelectedClass(classItem.id)}
                  className={cn(
                    "flex flex-col w-full items-start gap-1 rounded-lg px-3 py-2 text-left text-sm transition-colors",
                    selectedClass === classItem.id
                      ? "bg-accent text-accent-foreground"
                      : "hover:bg-muted text-muted-foreground"
                  )}
                >
                  <div className="flex w-full items-center justify-between">
                    <span className="font-medium">{classItem.title}</span>
                    <span className="text-xs">
                      {classItem.streams.length} streams
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="h-4 w-4" />
                    40 students
                  </div>
                </button>
                <div className="flex items-center gap-1">
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <Pencil className="h-3 w-3" />
                        <span className="sr-only">Edit class</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Edit class</TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-7 w-7 text-destructive"
                      >
                        <Trash2 className="h-3 w-3" />
                        <span className="sr-only">Delete class</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Delete class</TooltipContent>
                  </Tooltip>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Content */}
      {selectedClass ? (
        <div className="flex flex-col gap-2 rounded-lg border bg-card">
          <div className="flex items-center justify-between gap-2 px-4 py-2 border-b">
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <ChevronLeft className="h-4 w-4" />
                <span className="sr-only">Go back</span>
              </Button>
              <div>
                <h2 className="text-lg font-semibold">
                  {classes.find((c) => c.id === selectedClass)?.title}
                </h2>
                <div className="flex items-center gap-1 text-sm text-muted-foreground">
                  <span>Classes</span>
                  <span>/</span>
                  <span>
                    {classes.find((c) => c.id === selectedClass)?.title}
                  </span>
                </div>
              </div>
            </div>
            <StreamForm classId={selectedClass} />
          </div>
          {streams.length > 0 ? (
            <div className="p-4 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {streams.map((section) => (
                <Card key={section.title} className="group relative">
                  <CardHeader className="pb-2">
                    <CardTitle>{section.title}</CardTitle>
                    <CardDescription>
                      Class Teacher: Tarik Webdev
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="h-4 w-4" />
                      40 students
                    </div>
                  </CardContent>
                  <div className="flex items-end gap-1">
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-7 w-7">
                          <Pencil className="h-3 w-3" />
                          <span className="sr-only">Edit section</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Edit section</TooltipContent>
                    </Tooltip>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Button
                          variant="ghost"
                          size="icon"
                          className="h-7 w-7 text-destructive"
                        >
                          <Trash2 className="h-3 w-3" />
                          <span className="sr-only">Delete section</span>
                        </Button>
                      </TooltipTrigger>
                      <TooltipContent>Delete section</TooltipContent>
                    </Tooltip>
                  </div>
                </Card>
              ))}
            </div>
          ) : (
            <div className="flex min-h-96 items-center justify-center">
              <div className="flex flex-col items-center justify-center">
                <Image
                  src={"/empty-folder.png"}
                  alt="No streams available"
                  width={512}
                  height={512}
                  className="w-36"
                />
                <p>No Streams</p>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div className="">
          <p>Select the Class to see the Details</p>
        </div>
      )}
    </div>
  );
}
