"use client";

import { StudentCard } from "@/components/portal/parents/student-card";

export interface BriefStudent {
  id: string;
  name: string;
  regNo: string;
  classTitle: string;
  streamTitle: string;
  dateOfBirth: string;
  parentId: string;
  imageUrl: string;
  avatar: string;
  school: string;
  grade: string;
  attendanceRate: string;
  gpa: string;
  class: string;
  stream: string;
  age: string;
}

export function StudentList({ students }: { students: BriefStudent[] }) {
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-bold">Your Children</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </div>
    </div>
  );
}
