import BulkStudentForm from "@/components/dashboard/forms/students/bulk-student-form"
import SingleStudentForm from "@/components/dashboard/forms/students/single-student-form"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { UserPlus, Users } from 'lucide-react'
import Link from 'next/link'

interface AdmissionTabsProps {
  searchParams: {
    tab?: string
  }
}

export default function AdmissionTabs({ searchParams }: AdmissionTabsProps) {
  const tab = searchParams.tab || 'single'

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Student Admission</h1>
      <Tabs defaultValue={tab} className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          {/* Using Next.js Link for server-side navigation */}
          <Link href="?tab=single" className="w-full">
            <TabsTrigger 
              value="single" 
              className="w-full data-[state=active]:bg-purple-500 data-[state=active]:text-white flex items-center justify-center gap-2"
            >
              <UserPlus className="h-4 w-4" />
              <span>Single Admission</span>
            </TabsTrigger>
          </Link>
          <Link href="?tab=bulk" className="w-full">
            <TabsTrigger 
              value="bulk" 
              className="w-full data-[state=active]:bg-purple-500 data-[state=active]:text-white flex items-center justify-center gap-2"
            >
              <Users className="h-4 w-4" />
              <span>Bulk Admission</span>
            </TabsTrigger>
          </Link>
        </TabsList>
        <TabsContent value="single" className="mt-6 space-y-4">
          <SingleStudentForm/>
        </TabsContent>
        <TabsContent value="bulk" className="mt-6 space-y-4">
          <BulkStudentForm/>
        </TabsContent>
      </Tabs>
    </div>
  )
}

