import * as React from "react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import Image from "next/image"

export default function DashboardPreview() {
  return (
    <div className="bg-white py-16">
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
