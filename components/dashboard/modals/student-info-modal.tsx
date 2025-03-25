"use client";

import { format } from "date-fns";
import {
  Building2,
  Calendar,
  Eye,
  Globe,
  Mail,
  Phone,
  User,
  Users2,
  Book,
  GraduationCap,
  School,
  Church,
  ShieldCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Student } from "@/types/types";
import Image from "next/image";

interface StudentInfoModalProps {
  student?: Student;
  onEdit?: (student: Student) => void;
  onDelete?: (student: Student) => void;
}

export function StudentInfoModal({
  student,
  onEdit,
  onDelete,
}: StudentInfoModalProps) {
  if (!student) {
    return (
      <Button variant="outline" size="icon" disabled>
        <Eye className="h-6 w-6" />
      </Button>
    );
  }

  const handleEdit = () => {
    if (onEdit) {
      onEdit(student);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(student);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px]">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="flex items-center gap-4">
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
              <div>
                <h2 className="text-xl font-semibold">
                  {student.firstName} {student.lastName}
                </h2>
                <p className="text-xs text-gray-500">
                  Registrační číslo: {student.regNo}
                </p>
              </div>
            </DialogTitle>
            <div className="flex gap-6">
              <Button variant="outline" size="sm" onClick={handleEdit}>
                Upravit
              </Button>
              <Button variant="destructive" size="sm" onClick={handleDelete}>
                Vymazat
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-3 gap-1 p-1">
          <InfoCard icon={Mail} label="Email" value={student.email} />

          <InfoCard icon={Phone} label="Phone" value={student.phone} />

          <InfoCard
            icon={Book}
            label="Roll Number"
            value={student.rollNumber}
          />

          <InfoCard
            icon={School}
            label="Sponsorship Type"
            value={student.sponsorshipType}
          />

          <InfoCard
            icon={Globe}
            label="Nationality"
            value={student.nationality}
          />

          <InfoCard icon={User} label="Gender" value={student.gender} />

          <InfoCard
            icon={Calendar}
            label="Date of Birth"
            value={format(new Date(student.dateOfBirth), "PP")}
          />

          <InfoCard
            icon={Users2}
            label="Parent"
            value={student.parentId}
          />
          <InfoCard
            icon={GraduationCap}
            label="Class"
            value={student?.classTitle || student.classId}
          />
          <InfoCard
            icon={School}
            label="Stream"
            value={student?.streamTitle || student.streamId}
          />

          <InfoCard icon={Church} label="Religion" value={student.religion} />

          <InfoCard icon={Building2} label="State" value={student.state} />

          <InfoCard icon={Globe} label="Address" value={student.address} />

          <InfoCard
            icon={ShieldCheck}
            label="Birth Certificate"
            value={student.birthCertificateNumber}
          />

          <InfoCard
            icon={Calendar}
            label="Admission Date"
            value={format(new Date(student.admissionDate), "PP")}
          />

          <InfoCard
            icon={Calendar}
            label="Created At"
            value={format(new Date(student.createdAt), "PP")}
          />

          <InfoCard
            icon={Calendar}
            label="Updated At"
            value={format(new Date(student.updatedAt), "PP")}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}

interface InfoCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

function InfoCard({ icon: Icon, label, value }: InfoCardProps) {
  return (
    <div className="bg-gray-50 rounded-lg p-2">
      <div className="flex flex-col gap-1">
        <Icon className="h-5 w-5 text-purple-600" />
        <h3 className="text-sm font-medium text-gray-500">{label}</h3>
        <div className="flex items-center gap-2">
          <p className="text-sm break-all">{value || "N/A"}</p>
        </div>
      </div>
    </div>
  );
}
