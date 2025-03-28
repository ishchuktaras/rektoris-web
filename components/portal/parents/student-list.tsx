import { StudentCard } from "./student-card"

export interface BriefStudent {
  id: string
  name: string
  regNo: string
  class: string
  stream: string
  dateOfBirth: string
  imageUrl: string
}

interface StudentListProps {
  students: BriefStudent[]
}

export function StudentList({ students }: StudentListProps) {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6">Vaše děti</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {students.map((student) => (
          <StudentCard key={student.id} {...student} />
        ))}
      </div>
    </div>
  )
}

