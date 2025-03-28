import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GraduationCap } from "lucide-react"
import type { BriefStudent } from "./student-list"

// TypeScript function that calculates age from a date of birth in the specified format
function calculateAge(dateOfBirth: string): number {
  if (!dateOfBirth) return 0

  try {
    // Create a Date object from the input string
    const birthDate = new Date(dateOfBirth)

    // Check if the date is valid
    if (isNaN(birthDate.getTime())) {
      return 0
    }

    // Get current date
    const currentDate = new Date()

    // Calculate age
    let age = currentDate.getFullYear() - birthDate.getFullYear()

    // Check if birthday hasn't occurred this year
    const monthDifference = currentDate.getMonth() - birthDate.getMonth()
    const dayDifference = currentDate.getDate() - birthDate.getDate()

    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
      age--
    }

    return age
  } catch (error) {
    console.error("Error calculating age:", error)
    return 0
  }
}

export function StudentCard({ id, name, regNo, class: studentClass, stream, dateOfBirth, imageUrl }: BriefStudent) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <CardHeader className="p-4 pb-0">
        <div className="flex items-center gap-4">
          <div className="relative h-16 w-16 rounded-full overflow-hidden border">
            <Image
              src={imageUrl || "/placeholder.svg?height=64&width=64"}
              alt={name}
              width={64}
              height={64}
              className="object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-muted-foreground text-sm">{regNo}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-4">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Třída:</span>
            {studentClass}
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm">Stream: {stream}</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Registrační číslo:</span>
            <span className="text-sm">{regNo}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Třída:</span>
            <span className="text-sm">{studentClass}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium">Stream:</span>
            <span className="text-sm">{stream}</span>
          </div>
          {dateOfBirth && (
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">Věk:</span>
              <span className="text-sm">{calculateAge(dateOfBirth)}</span>
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/student/${id}`} className="w-full">
          <Button variant="default" className="w-full">
            Zobrazit podrobnosti
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

