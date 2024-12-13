import * as React from "react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"

export function DashboardPreview() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="max-w-6xl mx-auto">
        <Card className="w-full">
          <CardContent className="mt-4">
            <Image src="/images/dashboard-preview.jpg" alt="Dashboard Preview" width={1600} height={1200} className="w-full rounded-lg" />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
