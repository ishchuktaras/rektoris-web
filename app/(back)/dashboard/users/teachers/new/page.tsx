import { getBriefClasses } from "@/actions/classes";
import { getBriefDepartments } from "@/actions/departments";
import { getBriefSubjects } from "@/actions/subjects";
import TeacherForm from "@/components/dashboard/forms/users/teacher-form";
import { Card, CardContent } from "@/components/ui/card";

export default async function AdmissionTabs() {
  // Default to empty arrays if API calls fail
  const classesData = (await getBriefClasses().catch(() => [])) || [];
  const subjectsData = (await getBriefSubjects().catch(() => [])) || [];
  const departmentsData = (await getBriefDepartments().catch(() => [])) || [];

  const classes = classesData.map((item) => ({
    value: item?.id || '',
    label: item?.title || 'Nejmenovaná třída'
  }));

  const subjects = subjectsData.map((item) => ({
    value: item?.id || '',
    label: item?.name || 'Nejmenovaný předmět'
  }));

  const departments = departmentsData.map((item) => ({
    value: item?.id || '',
    label: item?.name || 'Nejmenované oddělení'
  }));

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <Card className="border-t-2 border-purple-500">
        <CardContent className="p-6">
          <TeacherForm classes={classes} departments={departments} subjects={subjects}/>
        </CardContent>
      </Card>
    </div>
  );
}
