import { StudentList } from "@/components/portal/parents/student-list";
import { getStudentsByParentId } from "@/actions/parents";
import { getServerUser } from "@/actions/auth";
import { getProfileId } from "@/actions/users";

export default async function ParentPortalPage() {
  const user = await getServerUser();

  if (!user) {
    return;
  }
  // Get parent Profile
  const profileId = await getProfileId(user?.id, user?.role);
  // Get students by parent id
  const students = (await getStudentsByParentId(profileId ?? "")) || [];

  return (
    <div className="p-9">
      {students.length > 0 ? (
        <StudentList students={students} />
      ) : (
        <div className="text-center">
          <h2 className="text-xl font-semibold">
            {user?.id} - No Childrens Found
          </h2>
        </div>
      )}
    </div>
  );
}
