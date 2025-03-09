"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

interface Testimonial {
  id: string
  name: string
  role: string
  school: string
  avatar: string
  quote: string
  rating: number
  tags: string[]
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Mgr. Jana Nováková",
    role: "Ředitelka",
    school: "Základní škola Komenského, Praha",
    avatar: "/avatars/jana.jpg",
    quote:
      "RektorIS nám pomohl zefektivnit administrativní procesy a ušetřit desítky hodin měsíčně. Komunikace s rodiči je nyní mnohem jednodušší a přehlednější.",
    rating: 5,
    tags: ["Základní škola", "Evidence žáků", "Komunikace"],
  },
  {
    id: "2",
    name: "Ing. Petr Svoboda",
    role: "IT koordinátor",
    school: "Gymnázium J. Keplera, Brno",
    avatar: "/avatars/petr.jpg",
    quote:
      "Implementace systému proběhla hladce a podpora je vždy ochotná pomoci. Oceňuji především intuitivní rozhraní a možnost přizpůsobení našim potřebám.",
    rating: 4,
    tags: ["Gymnázium", "Rozvrh hodin", "Klasifikace"],
  },
  {
    id: "3",
    name: "PhDr. Martina Dvořáková",
    role: "Zástupkyně ředitele",
    school: "Střední průmyslová škola, Ostrava",
    avatar: "/avatars/martina.jpg",
    quote:
      "Díky RektorIS máme konečně všechna data na jednom místě. Systém nám umožňuje efektivně sledovat prospěch studentů a komunikovat s rodiči.",
    rating: 5,
    tags: ["Střední škola", "Správa zaměstnanců", "Ekonomická agenda"],
  },
  {
    id: "4",
    name: "Mgr. Tomáš Horák",
    role: "Učitel matematiky",
    school: "Základní škola Masarykova, Plzeň",
    avatar: "/avatars/tomas.jpg",
    quote:
      "Jako učitel oceňuji především jednoduchost zadávání známek a možnost rychlé komunikace s rodiči. Systém mi šetří čas, který mohu věnovat přípravě na výuku.",
    rating: 4,
    tags: ["Základní škola", "Klasifikace", "Komunikace"],
  },
]

export function InteractiveTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [direction, setDirection] = useState(0)

  // Filter testimonials by tag if selected
  const filteredTestimonials = selectedTag ? testimonials.filter((t) => t.tags.includes(selectedTag)) : testimonials

  const currentTestimonial = filteredTestimonials[activeIndex]

  // Get all unique tags
  const allTags = Array.from(new Set(testimonials.flatMap((t) => t.tags)))

  const handlePrevious = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev === 0 ? filteredTestimonials.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setDirection(1)
    setActiveIndex((prev) => (prev === filteredTestimonials.length - 1 ? 0 : prev + 1))
  }

  const handleTagSelect = (tag: string) => {
    if (selectedTag === tag) {
      setSelectedTag(null)
    } else {
      setSelectedTag(tag)
      setActiveIndex(0)
    }
  }

  return (
    <div className="py-12 max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Co o nás říkají naši klienti</h2>
        <p className="text-gray-500">Přečtěte si zkušenosti škol, které již používají RektorIS</p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          {allTags.map((tag) => (
            <Button
              key={tag}
              variant={selectedTag === tag ? "default" : "outline"}
              size="sm"
              className={selectedTag === tag ? "bg-[#884DEE] hover:bg-[#7a45d4]" : ""}
              onClick={() => handleTagSelect(tag)}
            >
              {tag}
            </Button>
          ))}
        </div>
      </div>

      <div className="relative">
        <AnimatePresence mode="wait" initial={false} custom={direction}>
          <motion.div
            key={currentTestimonial.id}
            custom={direction}
            initial={{ opacity: 0, x: direction * 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -100 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="border-[#884DEE]/20 shadow-lg">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 border-4 border-[#884DEE]/10">
                      <AvatarImage
                        src={currentTestimonial.avatar || "/placeholder.svg?height=96&width=96"}
                        alt={currentTestimonial.name}
                      />
                      <AvatarFallback>
                        {currentTestimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex mt-2">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={cn(
                            "h-4 w-4",
                            i < currentTestimonial.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300",
                          )}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="flex-1">
                    <Quote className="h-8 w-8 text-[#884DEE]/20 mb-2" />
                    <p className="text-lg italic mb-4">{currentTestimonial.quote}</p>
                    <div>
                      <p className="font-bold text-lg">{currentTestimonial.name}</p>
                      <p className="text-gray-500">{currentTestimonial.role}</p>
                      <p className="text-gray-500">{currentTestimonial.school}</p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-4">
                      {currentTestimonial.tags.map((tag) => (
                        <span key={tag} className="px-2 py-1 bg-[#884DEE]/10 text-[#884DEE] text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        <Button
          variant="ghost"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white shadow-md rounded-full h-10 w-10"
          onClick={handlePrevious}
          disabled={filteredTestimonials.length <= 1}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="ghost"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white shadow-md rounded-full h-10 w-10"
          onClick={handleNext}
          disabled={filteredTestimonials.length <= 1}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      <div className="flex justify-center mt-6">
        {filteredTestimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "h-2 w-2 mx-1 rounded-full transition-all",
              index === activeIndex ? "bg-[#884DEE] w-6" : "bg-gray-300",
            )}
            onClick={() => {
              setDirection(index > activeIndex ? 1 : -1)
              setActiveIndex(index)
            }}
          />
        ))}
      </div>
    </div>
  )
}

