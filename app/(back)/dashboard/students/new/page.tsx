import BulkStudentForm from "@/components/dashboard/forms/students/bulk-student-form";
import SingleStudentForm from "@/components/dashboard/forms/students/single-student-form";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { UserPlus, Users } from "lucide-react";

interface AdmissionTabsProps {
  params: { [key: string]: string | string[] } 
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function AdmissionTabs({ searchParams }: AdmissionTabsProps) {
  return (
    <div className="w-full max-w-5xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">Přijetí studenta</h1>
      <Tabs defaultValue="single" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            value="single"
            className="w-full data-[state=active]:bg-purple-500 data-[state=active]:text-white flex items-center justify-center gap-2"
          >
            <UserPlus className="h-4 w-4" />
            <span>Jednotlivé přijetí</span>
          </TabsTrigger>
          <TabsTrigger
            value="bulk"
            className="w-full data-[state=active]:bg-purple-500 data-[state=active]:text-white flex items-center justify-center gap-2"
          >
            <Users className="h-4 w-4" />
            <span>Hromadné přijetí</span>
          </TabsTrigger>
        </TabsList>
        <Card className="border-t-2 border-purple-500">
          <CardContent className="p-6">
            <TabsContent value="single" className="mt-6 space-y-4">
              <SingleStudentForm />
            </TabsContent>
            <TabsContent value="bulk" className="mt-6 space-y-4">
              <BulkStudentForm />
            </TabsContent>
          </CardContent>
        </Card>
      </Tabs>
    </div>
  );
}
