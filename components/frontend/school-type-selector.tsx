"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { School, GraduationCap, Building, CheckCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

type SchoolType = "elementary" | "secondary" | "university" | null

interface SchoolOption {
  id: SchoolType
  title: string
  description: string
  icon: React.ElementType
  features: string[]
}

const schoolOptions: SchoolOption[] = [
  {
    id: "elementary",
    title: "Základní školy",
    description: "Řešení pro základní školy a nižší stupně vzdělávání",
    icon: School,
    features: [
      "Evidence žáků a rodičů",
      "Jednoduchý rozvrh hodin",
      "Základní klasifikace",
      "Komunikace s rodiči",
      "Správa školních akcí",
    ],
  },
  {
    id: "secondary",
    title: "Střední školy",
    description: "Komplexní systém pro střední školy a gymnázia",
    icon: GraduationCap,
    features: [
      "Pokročilá evidence studentů",
      "Komplexní rozvrh hodin",
      "Detailní klasifikace a hodnocení",
      "Správa maturitních zkoušek",
      "Komunikační platforma",
      "Ekonomická agenda",
    ],
  },
  {
    id: "university",
    title: "Vysoké školy",
    description: "Robustní řešení pro vysoké školy a univerzity",
    icon: Building,
    features: [
      "Správa fakult a kateder",
      "Kreditní systém a ECTS",
      "Přijímací řízení",
      "Správa výzkumných projektů",
      "Publikační činnost",
      "Komplexní ekonomická agenda",
      "Integrace s externími systémy",
    ],
  },
]

export function SchoolTypeSelector() {
  const [selectedType, setSelectedType] = useState<SchoolType>(null)
  const [showFeatures, setShowFeatures] = useState(false)

  // Show features after selection
  useEffect(() => {
    if (selectedType) {
      const timer = setTimeout(() => {
        setShowFeatures(true)
      }, 300)

      return () => clearTimeout(timer)
    } else {
      setShowFeatures(false)
    }
  }, [selectedType])

  const handleSelect = (type: SchoolType) => {
    if (selectedType === type) {
      setSelectedType(null)
    } else {
      setSelectedType(type)
      setShowFeatures(false)
    }
  }

  const selectedOption = selectedType ? schoolOptions.find((option) => option.id === selectedType) : null

  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-2">Vyberte typ vaší vzdělávací instituce</h2>
      <p className="text-center text-gray-500 mb-8">Zobrazíme vám funkce a možnosti relevantní pro vaše potřeby</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {schoolOptions.map((option) => (
          <motion.div key={option.id} whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }}>
            <Card
              className={cn(
                "cursor-pointer transition-all duration-300 h-full",
                selectedType === option.id
                  ? "border-[#884DEE] shadow-lg shadow-[#884DEE]/10"
                  : "hover:border-gray-300 hover:shadow-md",
              )}
              onClick={() => handleSelect(option.id)}
            >
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div
                  className={cn(
                    "p-3 rounded-full mb-4",
                    selectedType === option.id ? "bg-[#884DEE] text-white" : "bg-gray-100",
                  )}
                >
                  <option.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                <p className="text-gray-500 text-sm">{option.description}</p>

                {selectedType === option.id && (
                  <div className="mt-4 w-full">
                    <Button variant="outline" className="w-full border-[#884DEE] text-[#884DEE]">
                      Zobrazit detaily
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {showFeatures && selectedOption && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-8 max-w-3xl mx-auto overflow-hidden"
          >
            <Card className="border-[#884DEE]/30">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 rounded-full bg-[#884DEE] text-white">
                    <selectedOption.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{selectedOption.title}</h3>
                    <p className="text-gray-500 text-sm">{selectedOption.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  {selectedOption.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-[#884DEE]" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <Button className="bg-[#884DEE] hover:bg-[#7a45d4]">
                    Získat nabídku pro {selectedOption.title.toLowerCase()}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

