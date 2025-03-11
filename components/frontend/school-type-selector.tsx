"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  School,
  GraduationCap,
  Building,
  Globe,
  Users,
  Calendar,
  BookOpen,
  MessageSquare,
  PieChart,
  Award,
  FileText,
  Zap,
  Lightbulb,
  Headphones,
  BarChart,
  Clock,
  ArrowRight,
  ChevronDown,
  X,
  Check,
} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

type SchoolType = "elementary" | "secondary" | "university" | "language" | null

interface SchoolOption {
  id: SchoolType
  title: string
  subtitle: string
  description: string
  icon: React.ElementType
  color: string
  studentCount: string
  idealFor: string[]
  features: {
    title: string
    icon: React.ElementType
    items: string[]
  }[]
  benefits: {
    title: string
    value: string
    icon: React.ElementType
  }[]
}

const schoolOptions: (Omit<SchoolOption, "id"> & { id: Exclude<SchoolType, null> })[] = [
  {
    id: "elementary",
    title: "Základní školy",
    subtitle: "Pro 1. a 2. stupeň ZŠ",
    description:
      "Komplexní a přehledný systém navržený speciálně pro potřeby základních škol, který usnadňuje každodenní administrativu a komunikaci.",
    icon: School,
    color: "#4ECDC4",
    studentCount: "50-800 žáků",
    idealFor: ["Státní základní školy", "Soukromé základní školy", "Malotřídky", "Alternativní ZŠ"],
    features: [
      {
        title: "Správa žáků a tříd",
        icon: Users,
        items: [
          "Evidence žáků a zákonných zástupců",
          "Správa třídních kolektivů",
          "Docházka a omluvenky",
          "Individuální vzdělávací plány",
        ],
      },
      {
        title: "Výuka a hodnocení",
        icon: BookOpen,
        items: [
          "Elektronická žákovská knížka",
          "Slovní hodnocení",
          "Přehledný rozvrh hodin",
          "Domácí úkoly a materiály",
        ],
      },
      {
        title: "Komunikace",
        icon: MessageSquare,
        items: [
          "Komunikace s rodiči",
          "Hromadné zprávy a oznámení",
          "Plánování třídních schůzek",
          "Školní nástěnka a aktuality",
        ],
      },
    ],
    benefits: [
      {
        title: "Úspora času",
        value: "až 8 hodin týdně",
        icon: Calendar,
      },
      {
        title: "Snížení administrativy",
        value: "o 65%",
        icon: FileText,
      },
      {
        title: "Zlepšení komunikace",
        value: "o 78%",
        icon: MessageSquare,
      },
    ],
  },
  {
    id: "secondary",
    title: "Střední školy",
    subtitle: "Pro gymnázia, SOŠ a SOU",
    description:
      "Robustní řešení pro střední školy, které pokrývá všechny aspekty od přijímacího řízení až po maturitní zkoušky a přípravu na VŠ.",
    icon: GraduationCap,
    color: "#FF6B6B",
    studentCount: "100-1500 studentů",
    idealFor: ["Gymnázia", "Střední odborné školy", "Střední odborná učiliště", "Konzervatoře"],
    features: [
      {
        title: "Akademická agenda",
        icon: Award,
        items: [
          "Přijímací řízení a evidence studentů",
          "Komplexní klasifikace a hodnocení",
          "Správa maturitních zkoušek",
          "Odborné praxe a stáže",
        ],
      },
      {
        title: "Organizace výuky",
        icon: Calendar,
        items: [
          "Pokročilý rozvrh hodin",
          "Suplování a absence učitelů",
          "Správa učeben a vybavení",
          "Plánování školních akcí",
        ],
      },
      {
        title: "Ekonomika a správa",
        icon: PieChart,
        items: [
          "Ekonomická agenda školy",
          "Správa školních poplatků",
          "Inventarizace majetku",
          "Statistiky a reporty pro MŠMT",
        ],
      },
    ],
    benefits: [
      {
        title: "Efektivita procesů",
        value: "zvýšení o 72%",
        icon: Zap,
      },
      {
        title: "Úspěšnost studentů",
        value: "nárůst o 18%",
        icon: Award,
      },
      {
        title: "Finanční úspora",
        value: "až 320 000 Kč ročně",
        icon: PieChart,
      },
    ],
  },
  {
    id: "university",
    title: "Vysoké školy",
    subtitle: "Pro univerzity a VOŠ",
    description:
      "Komplexní ekosystém pro vysoké školy a univerzity, který integruje akademické, výzkumné i administrativní procesy do jednoho systému.",
    icon: Building,
    color: "#884DEE",
    studentCount: "500+ studentů",
    idealFor: ["Univerzity", "Vysoké školy", "Vyšší odborné školy", "Výzkumné instituce"],
    features: [
      {
        title: "Akademický management",
        icon: GraduationCap,
        items: [
          "Správa fakult a kateder",
          "Kreditní systém a ECTS",
          "Přijímací řízení a zápisy",
          "Státní závěrečné zkoušky",
        ],
      },
      {
        title: "Věda a výzkum",
        icon: BookOpen,
        items: ["Správa výzkumných projektů", "Publikační činnost", "Grantová agenda", "Mezinárodní spolupráce"],
      },
      {
        title: "Integrace a systémy",
        icon: Zap,
        items: [
          "Napojení na národní registry",
          "Integrace s knihovními systémy",
          "API pro externí aplikace",
          "Single Sign-On řešení",
        ],
      },
    ],
    benefits: [
      {
        title: "Administrativní zátěž",
        value: "snížení o 58%",
        icon: FileText,
      },
      {
        title: "Úspěšnost projektů",
        value: "zvýšení o 42%",
        icon: Award,
      },
      {
        title: "Mezinárodní rating",
        value: "zlepšení o 15%",
        icon: Building,
      },
    ],
  },
  {
    id: "language",
    title: "Jazykové školy",
    subtitle: "Pro jazykové školy a kurzy",
    description:
      "Specializované řešení pro jazykové školy a vzdělávací centra, které zefektivňuje správu kurzů, studentů a lektorů.",
    icon: Globe,
    color: "#FFD166",
    studentCount: "20-1000 studentů",
    idealFor: ["Jazykové školy", "Vzdělávací centra", "Kurzy pro veřejnost", "Firemní vzdělávání"],
    features: [
      {
        title: "Správa kurzů",
        icon: Calendar,
        items: [
          "Plánování a organizace kurzů",
          "Skupinové i individuální lekce",
          "Správa úrovní a sylabů",
          "Online i prezenční výuka",
        ],
      },
      {
        title: "Studenti a platby",
        icon: Users,
        items: [
          "Evidence studentů a kontaktů",
          "Správa plateb a fakturace",
          "Sledování docházky",
          "Certifikace a testování",
        ],
      },
      {
        title: "Lektoři a materiály",
        icon: Headphones,
        items: [
          "Správa lektorů a jejich kvalifikace",
          "Sdílení výukových materiálů",
          "Hodnocení lektorů",
          "Výukové pomůcky a média",
        ],
      },
    ],
    benefits: [
      {
        title: "Obsazenost kurzů",
        value: "zvýšení o 35%",
        icon: BarChart,
      },
      {
        title: "Administrativní čas",
        value: "úspora 62%",
        icon: Clock,
      },
      {
        title: "Spokojenost studentů",
        value: "nárůst o 28%",
        icon: Lightbulb,
      },
    ],
  },
]

const FeatureCard = ({ feature, color }: { feature: SchoolOption["features"][0]; color: string }) => {
  return (
    <Card className="h-full">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-start gap-2">
          <div className="p-2 rounded-full flex-shrink-0" style={{ backgroundColor: `${color}20` }}>
            <feature.icon className="h-5 w-5" style={{ color }} />
          </div>
          <h4 className="font-medium text-base sm:text-lg break-words">{feature.title}</h4>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-0">
        <ul className="space-y-3">
          {feature.items.map((item, i) => (
            <li key={i} className="flex items-start gap-2">
              <Check className="h-4 w-4 text-green-500 mt-1 flex-shrink-0" />
              <span className="text-sm text-gray-600">{item}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}

const BenefitCard = ({ benefit, color }: { benefit: SchoolOption["benefits"][0]; color: string }) => {
  return (
    <Card className="overflow-hidden h-full">
      <div className="p-1" style={{ backgroundColor: color }}></div>
      <CardContent className="p-6 text-center">
        <div
          className="mx-auto p-3 rounded-full mb-4 w-14 h-14 flex items-center justify-center"
          style={{ backgroundColor: `${color}15` }}
        >
          <benefit.icon className="h-6 w-6" style={{ color }} />
        </div>
        <h4 className="font-medium mb-2 text-gray-700">{benefit.title}</h4>
        <p className="text-2xl font-bold" style={{ color }}>
          {benefit.value}
        </p>
      </CardContent>
    </Card>
  )
}

const ComparisonTable = ({ isMobile = false }: { isMobile?: boolean }) => {
  const features = [
    {
      category: "Základní funkce",
      features: ["Evidence studentů", "Rozvrh hodin", "Klasifikace", "Docházka", "Komunikace"],
    },
    {
      category: "Pokročilé funkce",
      features: [
        "Ekonomická agenda",
        "Přijímací řízení",
        "Maturitní/závěrečné zkoušky",
        "Integrace s externími systémy",
        "Analytické nástroje",
      ],
    },
    {
      category: "Specializované moduly",
      features: [
        "Věda a výzkum",
        "Kreditní systém",
        "Správa fakult a kateder",
        "Školní akce a výlety",
        "Správa kurzů a lekcí",
      ],
    },
  ]

  const getFeatureAvailability = (schoolId: string, category: string, feature: string) => {
    let isAvailable = true
    let isPartial = false

    // Elementary schools
    if (schoolId === "elementary" && (category === "Pokročilé funkce" || category === "Specializované moduly")) {
      if (feature === "Školní akce a výlety") {
        isAvailable = true
      } else if (feature === "Ekonomická agenda" || feature === "Analytické nástroje") {
        isPartial = true
      } else {
        isAvailable = false
      }
    }

    // Secondary schools
    if (schoolId === "secondary" && category === "Specializované moduly") {
      if (feature === "Věda a výzkum" || feature === "Kreditní systém" || feature === "Správa fakult a kateder") {
        isAvailable = false
      }
    }

    // Language schools
    if (schoolId === "language") {
      if (
        feature === "Maturitní/závěrečné zkoušky" ||
        feature === "Věda a výzkum" ||
        feature === "Kreditní systém" ||
        feature === "Správa fakult a kateder"
      ) {
        isAvailable = false
      } else if (feature === "Klasifikace") {
        isPartial = true
      } else if (feature === "Správa kurzů a lekcí") {
        isAvailable = true
      }
    }

    // University
    if (schoolId === "university" && feature === "Školní akce a výlety") {
      isPartial = true
    }

    return { isAvailable, isPartial }
  }

  if (isMobile) {
    return (
      <div className="space-y-6">
        {schoolOptions.map((school) => (
          <Card key={school.id} className="overflow-hidden">
            <div className="p-4 text-white" style={{ backgroundColor: school.color }}>
              <div className="flex items-center gap-2">
                <school.icon className="h-5 w-5" />
                <h3 className="font-medium">{school.title}</h3>
              </div>
            </div>
            <CardContent className="p-0">
              <Accordion type="single" collapsible className="w-full">
                {features.map((group, groupIdx) => (
                  <AccordionItem key={groupIdx} value={`item-${groupIdx}`}>
                    <AccordionTrigger className="px-4 py-3 text-sm font-medium bg-gray-50 hover:bg-gray-100 hover:no-underline">
                      {group.category}
                    </AccordionTrigger>
                    <AccordionContent className="p-0">
                      <div className="divide-y">
                        {group.features.map((feature, featureIdx) => {
                          const { isAvailable, isPartial } = getFeatureAvailability(school.id, group.category, feature)

                          return (
                            <div key={featureIdx} className="flex items-center justify-between p-3">
                              <span className="text-sm">{feature}</span>
                              <div>
                                {isAvailable ? (
                                  isPartial ? (
                                    <Badge
                                      variant="outline"
                                      className="text-xs bg-yellow-50 text-yellow-700 border-yellow-200"
                                    >
                                      Částečně
                                    </Badge>
                                  ) : (
                                    <Check className="h-5 w-5 text-green-500" />
                                  )
                                ) : (
                                  <X className="h-5 w-5 text-gray-300" />
                                )}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              <div className="p-4 flex items-center justify-between bg-gray-50">
                <span className="font-medium text-sm">Cenová kategorie</span>
                <Badge
                  className={`
                  ${school.id === "elementary" ? "bg-green-100 text-green-800" : ""}
                  ${school.id === "secondary" ? "bg-blue-100 text-blue-800" : ""}
                  ${school.id === "university" ? "bg-purple-100 text-purple-800" : ""}
                  ${school.id === "language" ? "bg-amber-100 text-amber-800" : ""}
                `}
                >
                  {school.id === "elementary" ? "Základní" : ""}
                  {school.id === "secondary" ? "Střední" : ""}
                  {school.id === "university" ? "Prémiová" : ""}
                  {school.id === "language" ? "Flexibilní" : ""}
                </Badge>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 border-b bg-gray-50 font-medium">Funkce / Typ školy</th>
            {schoolOptions.map((school) => (
              <th key={school.id} className="p-4 border-b bg-gray-50">
                <div className="flex flex-col items-center gap-2">
                  <div className="p-2 rounded-full text-white" style={{ backgroundColor: school.color }}>
                    <school.icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{school.title}</span>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {features.map((group, groupIdx) => (
            <React.Fragment key={groupIdx}>
              <tr>
                <th colSpan={5} className="text-left p-4 bg-gray-50 font-medium border-t border-b">
                  {group.category}
                </th>
              </tr>
              {group.features.map((feature, featureIdx) => (
                <tr key={featureIdx} className="hover:bg-gray-50">
                  <td className="p-4 border-b">{feature}</td>
                  {schoolOptions.map((school) => {
                    const { isAvailable, isPartial } = getFeatureAvailability(school.id, group.category, feature)

                    return (
                      <td key={school.id} className="p-4 border-b text-center">
                        {isAvailable ? (
                          isPartial ? (
                            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                              Částečně
                            </Badge>
                          ) : (
                            <div className="flex justify-center">
                              <Check className="h-5 w-5 text-green-500" />
                            </div>
                          )
                        ) : (
                          <div className="flex justify-center">
                            <X className="h-5 w-5 text-gray-300" />
                          </div>
                        )}
                      </td>
                    )
                  })}
                </tr>
              ))}
            </React.Fragment>
          ))}
          <tr>
            <th className="text-left p-4 bg-gray-50 font-medium border-t">Cenová kategorie</th>
            <td className="p-4 bg-gray-50 text-center border-t">
              <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Základní</Badge>
            </td>
            <td className="p-4 bg-gray-50 text-center border-t">
              <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Střední</Badge>
            </td>
            <td className="p-4 bg-gray-50 text-center border-t">
              <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Prémiová</Badge>
            </td>
            <td className="p-4 bg-gray-50 text-center border-t">
              <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Flexibilní</Badge>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export function SchoolTypeSelector() {
  const [selectedType, setSelectedType] = useState<SchoolType>(null)
  const [activeTab, setActiveTab] = useState("features")
  const [isComparing, setIsComparing] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  // Handle responsive design with useEffect
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth < 1024)
    }

    // Initial check
    checkScreenSize()

    // Add event listener
    window.addEventListener("resize", checkScreenSize)

    // Cleanup
    return () => window.removeEventListener("resize", checkScreenSize)
  }, [])

  const handleSelect = (type: SchoolType) => {
    setSelectedType(type)
    setActiveTab("features")

    // Scroll to details section on mobile
    if (isMobile && type) {
      setTimeout(() => {
        const detailsSection = document.getElementById("school-details")
        if (detailsSection) {
          detailsSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }

  const toggleCompare = () => {
    setIsComparing(!isComparing)
    setSelectedType(null)

    // Scroll to comparison section
    if (!isComparing) {
      setTimeout(() => {
        const comparisonSection = document.getElementById("comparison-section")
        if (comparisonSection) {
          comparisonSection.scrollIntoView({ behavior: "smooth" })
        }
      }, 100)
    }
  }

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge className="mb-4 bg-[#884DEE] hover:bg-[#7a45d4] px-3 py-1 text-sm">Řešení pro všechny typy škol</Badge>
        <h2 className="text-2xl sm:text-3xl font-bold mb-3">Vyberte typ vaší vzdělávací instituce</h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          RektorIS nabízí specializovaná řešení pro různé typy vzdělávacích institucí. Vyberte si kategorii, která
          nejlépe odpovídá vašim potřebám.
        </p>
      </div>

      {/* School Type Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {schoolOptions.map((option) => (
          <motion.div key={option.id} whileHover={{ y: -5 }} whileTap={{ scale: 0.98 }} className="h-full">
            <Card
              className={cn(
                "cursor-pointer transition-all duration-300 h-full overflow-hidden border-2",
                selectedType === option.id ? `border-[${option.color}]` : "border-transparent hover:border-gray-200",
              )}
              onClick={() => handleSelect(option.id)}
            >
              <div className="h-2" style={{ backgroundColor: option.color }}></div>
              <CardContent className="p-5 pt-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-full" style={{ backgroundColor: `${option.color}15` }}>
                    <option.icon className="h-6 w-6" style={{ color: option.color }} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{option.title}</h3>
                    <p className="text-gray-500 text-sm">{option.subtitle}</p>
                  </div>
                </div>

                <p className="text-gray-600 mb-4 text-sm line-clamp-3">{option.description}</p>

                <div className="flex items-center gap-2 mb-4">
                  <Users className="h-4 w-4 text-gray-400" />
                  <span className="text-sm text-gray-600">{option.studentCount}</span>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {option.idealFor.slice(0, 2).map((item, i) => (
                    <Badge key={i} variant="outline" className="bg-gray-50 text-xs">
                      {item}
                    </Badge>
                  ))}
                  {option.idealFor.length > 2 && (
                    <Badge variant="outline" className="bg-gray-50 text-xs">
                      +{option.idealFor.length - 2}
                    </Badge>
                  )}
                </div>

                <Button
                  className="w-full group"
                  style={{
                    backgroundColor: selectedType === option.id ? option.color : "#884DEE",
                  }}
                >
                  {selectedType === option.id ? (
                    <>
                      <Check className="mr-2 h-4 w-4" />
                      Vybráno
                    </>
                  ) : (
                    <>
                      Zobrazit detaily
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Compare Toggle */}
      <div className="flex justify-center mt-8">
        <Button
          variant={isComparing ? "default" : "outline"}
          onClick={toggleCompare}
          className={cn(
            "transition-all",
            isComparing ? "bg-[#884DEE] text-white hover:bg-[#7a45d4]" : "hover:bg-[#884DEE]/10",
          )}
        >
          {isComparing ? (
            <>
              <X className="mr-2 h-4 w-4" />
              Skrýt srovnání
            </>
          ) : (
            <>
              <ChevronDown className="mr-2 h-4 w-4" />
              Porovnat všechny typy škol
            </>
          )}
        </Button>
      </div>

      {/* Selected School Details or Comparison */}
      <div className="mt-12" id="school-details">
        <AnimatePresence mode="wait">
          {selectedType && !isComparing && (
            <motion.div
              key="details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              {(() => {
                const option = schoolOptions.find((opt) => opt.id === selectedType)!

                return (
                  <Card className="overflow-hidden border-t-4" style={{ borderTopColor: option.color }}>
                    <CardContent className="p-0">
                      <div className="p-6 md:p-8">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                          <div className="flex items-center gap-4">
                            <div className="p-3 rounded-full text-white" style={{ backgroundColor: option.color }}>
                              <option.icon className="h-8 w-8" />
                            </div>
                            <div>
                              <h3 className="text-2xl font-bold">{option.title}</h3>
                              <p className="text-gray-500 mt-1">{option.description}</p>
                            </div>
                          </div>

                          <Button size="lg" className="md:self-start" style={{ backgroundColor: option.color }}>
                            Získat nabídku
                          </Button>
                        </div>

                        <Tabs defaultValue="features" value={activeTab} onValueChange={setActiveTab} className="w-full">
                          <TabsList className="grid w-full grid-cols-3 mb-8">
                            <TabsTrigger
                              value="features"
                              className="text-sm sm:text-base whitespace-normal h-auto py-2"
                            >
                              Funkce a moduly
                            </TabsTrigger>
                            <TabsTrigger
                              value="benefits"
                              className="text-sm sm:text-base whitespace-normal h-auto py-2"
                            >
                              Přínosy a výhody
                            </TabsTrigger>
                            <TabsTrigger
                              value="idealFor"
                              className="text-sm sm:text-base whitespace-normal h-auto py-2"
                            >
                              Pro koho je určeno
                            </TabsTrigger>
                          </TabsList>

                          <TabsContent value="features" className="space-y-8 overflow-hidden">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {option.features.map((feature, idx) => (
                                <FeatureCard key={idx} feature={feature} color={option.color} />
                              ))}
                            </div>
                          </TabsContent>

                          <TabsContent value="benefits">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                              {option.benefits.map((benefit, idx) => (
                                <BenefitCard key={idx} benefit={benefit} color={option.color} />
                              ))}
                            </div>
                          </TabsContent>

                          <TabsContent value="idealFor">
                            <Card>
                              <CardContent className="p-6">
                                <h4 className="font-medium text-lg mb-6">Ideální řešení pro:</h4>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  {option.idealFor.map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                                      <Check className="h-5 w-5" style={{ color: option.color }} />
                                      <span>{item}</span>
                                    </div>
                                  ))}
                                </div>

                                <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
                                  <h5 className="font-medium text-blue-800 mb-2">Nevíte si rady s výběrem?</h5>
                                  <p className="text-sm text-blue-700 mb-4">
                                    Rádi vám pomůžeme s výběrem správného řešení pro vaši instituci. Kontaktujte nás a
                                    domluvíme si nezávaznou konzultaci.
                                  </p>
                                  <Button variant="outline" className="border-blue-300 text-blue-700">
                                    Kontaktovat pro konzultaci
                                  </Button>
                                </div>
                              </CardContent>
                            </Card>
                          </TabsContent>
                        </Tabs>
                      </div>
                    </CardContent>
                  </Card>
                )
              })()}
            </motion.div>
          )}

          {isComparing && (
            <motion.div
              key="comparison"
              id="comparison-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.4 }}
            >
              <Card>
                <CardContent className="p-6 md:p-8">
                  <h3 className="text-xl font-bold mb-6">Srovnání řešení pro různé typy škol</h3>

                  {isMobile ? (
                    <ComparisonTable isMobile={true} />
                  ) : (
                    <ScrollArea className="w-full">
                      <div className="min-w-[800px]">
                        <ComparisonTable />
                      </div>
                    </ScrollArea>
                  )}

                  <div className="mt-8 flex justify-center">
                    <Button className="bg-[#884DEE] hover:bg-[#7a45d4] text-white">
                      Získat personalizovanou nabídku
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

