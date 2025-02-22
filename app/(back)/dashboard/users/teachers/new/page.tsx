import { getServerSchool } from "@/actions/auth";
import { getBriefClasses } from "@/actions/classes";
import { getBriefDepartments } from "@/actions/departments";
import { getBriefSubjects } from "@/actions/subjects";
import TeacherForm from "@/components/dashboard/forms/users/teacher-form";
import { Card, CardContent } from "@/components/ui/card";

export default async function AdmissionTabs() {
  const school = await getServerSchool();

  const classesData = (await getBriefClasses(school?.id ?? "")) || [];

  const subjectsData =
    (await getBriefSubjects(school?.id ?? "").catch(() => [])) || [];

  const departmentsData =
    (await getBriefDepartments(school?.id ?? "").catch(() => [])) || [];

  const classes = classesData.map((item) => {
    return {
      label: item.title,
      value: item.id,
    };
  });
  const subjects = subjectsData.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });
  const departments = departmentsData.map((item) => {
    return {
      label: item.name,
      value: item.id,
    };
  });

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
