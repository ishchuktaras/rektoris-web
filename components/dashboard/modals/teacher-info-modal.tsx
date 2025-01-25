"use client";

import { format } from "date-fns";
import {
  Briefcase,
  Building2,
  Calendar,
  Eye,
  Globe,
  GraduationCap,
  Mail,
  Phone,
  School,
  User,
  Users2,
  MessageSquare,
  BookOpen,
  BadgeDollarSign,
  Clock,
  Building,
  ScrollText,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import type { Teacher } from "@/types/types";
import Image from "next/image";

interface TeacherInfoModalProps {
  teacher?: Teacher;
  onEdit?: (teacher: Teacher) => void;
  onDelete?: (teacher: Teacher) => void;
}
interface InfoCardProps {
  icon: React.ElementType;
  label: string;
  value: string;
}

function InfoCard({ icon: Icon, label, value }: InfoCardProps) {
  return (
    <div className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
      <Icon className="h-5 w-5 text-primary shrink-0 mt-0.5" />
      <div className="space-y-1">
        <p className="text-sm font-medium text-muted-foreground">{label}</p>
        <p className="text-sm break-all">{value || "N/A"}</p>
      </div>
    </div>
  );
}

export function TeacherInfoModal({
  teacher,
  onEdit,
  onDelete,
}: TeacherInfoModalProps) {
  if (!teacher) {
    return (
      <Button variant="outline" size="icon" disabled>
        <Eye className="h-6 w-6" />
      </Button>
    );
  }

  const handleEdit = () => {
    if (onEdit) {
      onEdit(teacher);
    }
  };

  const handleDelete = () => {
    if (onDelete) {
      onDelete(teacher);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-[700px] lg:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-start justify-between">
            <DialogTitle className="flex items-start gap-4">
              <div className="h-20 w-20 relative rounded-full overflow-hidden border-4 border-primary/10">
                {teacher.imageUrl ? (
                  <Image
                    src={teacher.imageUrl}
                    alt={`${teacher.firstName} ${teacher.lastName}`}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-primary flex items-center justify-center text-primary-foreground text-xl">
                    {teacher.firstName[0]}
                    {teacher.lastName[0]}
                  </div>
                )}
                <Badge
                  variant={teacher.isActive ? "default" : "secondary"}
                  className="absolute bottom-0 right-0 transform translate-x-1/4"
                >
                  {teacher.isActive ? "Active" : "Inactive"}
                </Badge>
              </div>
              <div className="space-y-1">
                <h2 className="text-2xl font-semibold">
                  {teacher.title} {teacher.firstName} {teacher.lastName}
                </h2>
                <p className="text-muted-foreground">
                  {teacher.designation} • {teacher.departmentName}
                </p>
                <div className="flex gap-2 mt-2">
                  <Badge variant="outline">{teacher.role || "Teacher"}</Badge>
                  <Badge variant="outline">ID zaměstnance: {teacher.employeeId}</Badge>
                </div>
              </div>
            </DialogTitle>
            <div className="flex gap-6 pt-4">
              <Button variant="outline" size="sm" onClick={handleEdit}>
                Upravit
              </Button>
              <Button variant="destructive" size="sm" onClick={handleDelete}>
                Vymazat
              </Button>
            </div>
          </div>
        </DialogHeader>

        <div className="grid gap-6 mt-6">
          {/* Contact Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Kontaktní informace</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <InfoCard icon={Mail} label="Email" value={teacher.email} />
              <InfoCard icon={Phone} label="Telefon" value={teacher.phone} />
              <InfoCard
                icon={MessageSquare}
                label="WhatsApp"
                value={teacher.whatsappNumber}
              />
              <InfoCard
                icon={Globe}
                label="Státní příslušnost"
                value={teacher.nationality}
              />
              <InfoCard
                icon={Building2}
                label="Adresa"
                value={teacher.address}
              />
              <InfoCard
                icon={Users2}
                label="Preferovaný kontakt"
                value={teacher.contactMethod}
              />
            </CardContent>
          </Card>

          {/* Professional Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Profesionální detaily</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <InfoCard
                icon={School}
                label="Oddělení"
                value={teacher.departmentName}
              />
              <InfoCard
                icon={BookOpen}
                label="Hlavní předmět"
                value={teacher.mainSubject}
              />
              <InfoCard
                icon={GraduationCap}
                label="Kvalifikace"
                value={teacher.qualification}
              />
              <InfoCard
                icon={Clock}
                label="Zkušenosti"
                value={`${teacher.experience} let`}
              />
              <InfoCard
                icon={BadgeDollarSign}
                label="Plat"
                value={
                  teacher.salary ? `$${teacher.salary.toLocaleString()}` : "N/A"
                }
              />
              <InfoCard
                icon={Calendar}
                label="Datum připojení"
                value={format(new Date(teacher.dateOfJoining), "PP")}
              />
            </CardContent>
          </Card>

          {/* Classes and Subjects */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Zadání výuky</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  Předměty
                </h3>
                <div className="flex flex-wrap gap-2">
                  {teacher.subjects.map((subject, index) => (
                    <Badge key={index} variant="secondary">
                      {subject}
                    </Badge>
                  ))}
                </div>
              </div>
              <Separator />
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">
                  Třídy
                </h3>
                <div className="flex flex-wrap gap-2">
                  {teacher.classes.map((className, index) => (
                    <Badge key={index} variant="secondary">
                      {className}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Personal Information */}
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Osobní údaje</CardTitle>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <InfoCard icon={User} label="Pohlaví" value={teacher.gender} />
              <InfoCard
                icon={Calendar}
                label="Datum narození"
                value={format(new Date(teacher.dateOfBirth), "PP")}
              />
              <InfoCard
                icon={ScrollText}
                label="Identifikační číslo"
                value={teacher.nationalId}
              />
            </CardContent>
          </Card>

          {/* System Information */}
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>Vytvořeno: {format(new Date(teacher.createdAt), "PP")}</span>
            <span>
              Poslední aktualizace: {format(new Date(teacher.updatedAt), "PP")}
            </span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

