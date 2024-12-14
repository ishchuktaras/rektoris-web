import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import SmallTitle from "./small-title"
import SectionHeader from "./section-header"

export default function GridFeatures() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="conteiner max-w-6xl mx-auto px-4 md:px-6">
        {/* Header */}
       <SectionHeader 
       title="Základní moduly"
       heading="Komplexní řešení pro správu škol"
       description="Zefektivněte provoz vaší vzdělávací instituce s naším all-in-one softwarem pro správu škol. Navrženo pro zvýšení efektivity a zlepšení komunikace mezi administrátory, učiteli, studenty a rodiči."
       />

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* AI Video Editing Card */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>AI Video Editing</CardTitle>
              <p className="text-muted-foreground">
                Automate complex editing tasks with AI-driven tools that enhance video quality, trim
                clips, and apply effects effortlessly.
              </p>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-[4/3] bg-zinc-50 rounded-lg overflow-hidden">
                <div className="absolute left-0 top-0 bottom-0 w-16 bg-white border-r flex flex-col gap-4 p-2">
                  {/* Sidebar Icons */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div key={i} className="w-full aspect-square rounded bg-zinc-100" />
                  ))}
                </div>
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  width={600}
                  height={400}
                  alt="Video editing interface"
                  className="absolute right-0 top-0 w-[calc(100%-4rem)] h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>

          {/* AI Video Generation Card */}
          <Card className="border-none shadow-lg">
            <CardHeader>
              <CardTitle>AI Video Generation</CardTitle>
              <p className="text-muted-foreground">
                Instantly create videos from scripts, text, or visual prompts using AI to generate 
                professional-grade content with minimal input.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Image */}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

