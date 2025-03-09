"use client"

import type React from "react"

import { useState, useEffect, useRef } from "react"
import { useInView } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Book, Calendar, GraduationCap, MessageSquare, UserCheck, DollarSign, BookOpen, Shield } from "lucide-react"
import { cn } from "@/lib/utils"

interface Feature {
  icon: React.ElementType
  title: string
  description: string
  href: string
}

const features: Feature[] = [
  {
    icon: Book,
    title: "Evidence žáků",
    description: "Komplexní správa osobních údajů, studijních výsledků a docházky všech studentů.",
    href: "/student-records",
  },
  {
    icon: Calendar,
    title: "Rozvrh hodin",
    description: "Intuitivní vytváření a správa rozvrhů, přiřazování učeben a sledování harmonogramů výuky.",
    href: "/class-schedule",
  },
  {
    icon: UserCheck,
    title: "Správa zaměstnanců",
    description:
      "Centralizovaná evidence pedagogického a nepedagogického personálu, včetně jejich kvalifikace a úvazků.",
    href: "/staff-management",
  },
  {
    icon: GraduationCap,
    title: "Klasifikace a hodnocení",
    description: "Elektronický systém zadávání známek, generování vysvědčení a sledování prospěchu studentů.",
    href: "/grading-system",
  },
  {
    icon: MessageSquare,
    title: "Komunikační platforma",
    description: "Propojení školy, rodičů a žáků prostřednictvím bezpečného komunikačního rozhraní.",
    href: "/communication",
  },
  {
    icon: DollarSign,
    title: "Ekonomická agenda",
    description: "Správa školních poplatků, stipendií, rozpočtu a finančních transakcí školy.",
    href: "/financial-management",
  },
  {
    icon: BookOpen,
    title: "Správa učebních materiálů",
    description: "Centralizovaná evidence učebnic, studijních materiálů a knihovního fondu.",
    href: "/learning-resources",
  },
  {
    icon: Shield,
    title: "Bezpečnost a přístupová práva",
    description: "Komplexní bezpečnostní systém s řízením přístupových práv pro různé uživatelské role.",
    href: "/security-access",
  },
]

export function AnimatedFeatures() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null)
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: false, amount: 0.3 })

  // Auto-rotate through features when in view
  useEffect(() => {
    if (!isInView || hoveredFeature !== null) return

    const interval = setInterval(() => {
      setActiveFeature((prev) => {
        if (prev === null) return 0
        return (prev + 1) % features.length
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [isInView, hoveredFeature])

  // Start animation when in view
  useEffect(() => {
    if (isInView && activeFeature === null) {
      setActiveFeature(0)
    }
  }, [isInView, activeFeature])

  const handleMouseEnter = (index: number) => {
    setHoveredFeature(index)
    setActiveFeature(index)
  }

  const handleMouseLeave = () => {
    setHoveredFeature(null)
  }

  return (
    <div ref={containerRef} className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {features.map((feature, index) => {
          const isActive = activeFeature === index

          return (
            <Card
              key={feature.title}
              className={cn(
                "transition-all duration-500 overflow-hidden cursor-pointer border-transparent",
                isActive ? "shadow-lg scale-105 border-[#884DEE]" : "shadow hover:shadow-md hover:border-gray-200",
              )}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
              onClick={() => setActiveFeature(index)}
            >
              <CardContent
                className={cn(
                  "p-6 transition-all duration-500",
                  isActive ? "bg-gradient-to-br from-[#884DEE]/5 to-[#884DEE]/10" : "",
                )}
              >
                <div
                  className={cn(
                    "p-3 rounded-full inline-flex mb-4 transition-all duration-500",
                    isActive ? "bg-[#884DEE] text-white" : "bg-gray-100 text-gray-500",
                  )}
                >
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3
                  className={cn(
                    "text-lg font-bold mb-2 transition-all duration-500",
                    isActive ? "text-[#884DEE]" : "text-gray-900",
                  )}
                >
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm">{feature.description}</p>

                <div
                  className={cn(
                    "h-0.5 bg-[#884DEE] mt-4 transition-all duration-500",
                    isActive ? "w-full opacity-100" : "w-0 opacity-0",
                  )}
                />
              </CardContent>
            </Card>
          )
        })}
      </div>
    </div>
  )
}

