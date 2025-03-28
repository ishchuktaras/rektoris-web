import { StudentList } from "@/components/portal/parents/student-list"
import { getStudentsByParentId } from "@/actions/parents"
import { getServerUser } from "@/actions/auth"
import { redirect } from "next/navigation"

export default async function ParentPortalPage() {
  try {
    // Get the current user
    const user = await getServerUser()

    // If no user is found, redirect to login
    if (!user) {
      console.log("No user found, redirecting to login")
      redirect("/login")
    }

    console.log("User found:", user.id, user.role)

    // For parent users, we'll use their user ID directly
    // This assumes the parent's user ID is what we need to fetch their children
    const parentId = user.id

    if (!parentId) {
      console.log("No parent ID available")

      return (
        <div className="p-9">
          <div className="text-center p-6 bg-yellow-50 border border-yellow-200 rounded-md">
            <h2 className="text-xl font-semibold text-yellow-800">Identifikace rodiče nenalezena</h2>
            <p className="mt-2 text-yellow-700">
              Váš rodičovský profil nebyl správně nastaven. Kontaktujte prosím správce systému.
            </p>
          </div>
        </div>
      )
    }

    console.log("Using parent ID:", parentId)

    // Get students by parent id
    const students = await getStudentsByParentId(parentId)

    if (!students) {
      console.log("Error fetching students or no students found")
      return (
        <div className="p-9">
          <div className="text-center">
            <h2 className="text-xl font-semibold">Nebyly nalezeny žádné děti</h2>
          </div>
        </div>
      )
    }

    console.log("Students found:", students.length)

    return (
      <div className="p-9">
        {students.length > 0 ? (
          <StudentList students={students} />
        ) : (
          <div className="text-center">
            <h2 className="text-xl font-semibold">Nebyly nalezeny žádné děti</h2>
          </div>
        )}
      </div>
    )
  } catch (error) {
    console.error("Error in parent portal:", error)

    return (
      <div className="p-9">
        <div className="text-center p-6 bg-red-50 border border-red-200 rounded-md">
          <h2 className="text-xl font-semibold text-red-600">Došlo k chybě při načítání dat</h2>
          <p className="mt-2 text-gray-600">
            {error instanceof Error ? error.message : "Zkuste to prosím později nebo kontaktujte správce systému."}
          </p>
        </div>
      </div>
    )
  }
}

