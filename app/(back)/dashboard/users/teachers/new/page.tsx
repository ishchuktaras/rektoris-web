import { getServerSchool } from "@/actions/auth";
import { getBriefClasses } from "@/actions/classes";
import { getBriefDepartments } from "@/actions/departments";
import { getBriefSubjects } from "@/actions/subjects";
import TeacherForm from "@/components/dashboard/forms/users/teacher-form";
import { Card, CardContent } from "@/components/ui/card";

export default async function AdmissionTabs() {
  const school = await getServerSchool();

  const classesData = await getBriefClasses(school?.id ?? "") ||[];

  const subjectsData =
    (await getBriefSubjects(school?.id ?? "").catch(() => [])) || [];
 
  const departmentsData =
    (await getBriefDepartments(school?.id ?? "").catch(() => [])) || [];
 

  console.log("Classes before map:", classesData);
  console.log("Subjects before map:", subjectsData);
  console.log("Departments before map:", departmentsData);
  const classes = (classesData || []).filter(Boolean).map((item) => ({
    value: item?.id || "",
    label: item?.title || "Nejmenovaná třída",
  }));

  const subjects = (subjectsData || []).filter(Boolean).map((item) => ({
    value: item?.id || "",
    label: item?.name || "Nejmenovaný předmět",
  }));

  const departments = (departmentsData || []).filter(Boolean).map((item) => ({
    value: item?.id || "",
    label: item?.name || "Nejmenované oddělení",
  }));

  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <Card className="border-t-2 border-purple-500">
        <CardContent className="p-6">
          <TeacherForm
            classes={classes}
            departments={departments}
            subjects={subjects}
          />
        </CardContent>
      </Card>
    </div>
  );
}
