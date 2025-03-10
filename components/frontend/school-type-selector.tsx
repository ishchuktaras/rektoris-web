"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  School,
  GraduationCap,
  Building,
  CheckCircle,
  Users,
  Calendar,
  BookOpen,
  MessageSquare,
  PieChart,
  Award,
  FileText,
  Zap,
  ChevronRight,
  Globe,
  Lightbulb,
  Headphones,
  BarChart,
  Clock,
} from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

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

const schoolOptions: SchoolOption[] = [
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

export function SchoolTypeSelector() {
  const [selectedType, setSelectedType] = useState<SchoolType>(null)
  const [activeTab, setActiveTab] = useState("features")
  const [isComparing, setIsComparing] = useState(false)

  const handleSelect = (type: SchoolType) => {
    setSelectedType(type)
    setActiveTab("features")
  }

  const toggleCompare = () => {
    setIsComparing(!isComparing)
  }

  return (
    <div className="py-8 px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <Badge className="mb-4 bg-[#884DEE] hover:bg-[#7a45d4]">Řešení pro všechny typy škol</Badge>
        <h2 className="text-3xl font-bold mb-3">Vyberte typ vaší vzdělávací instituce</h2>
        <p className="text-gray-500">
          RektorIS nabízí specializovaná řešení pro různé typy vzdělávacích institucí. Vyberte si kategorii, která
          nejlépe odpovídá vašim potřebám.
        </p>
      </div>

      {/* School Type Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {schoolOptions.map((option) => (
          <motion.div key={option.id} whileHover={{ y: -8 }} whileTap={{ scale: 0.98 }} className="h-full">
            <Card
              className={cn(
                "cursor-pointer transition-all duration-300 h-full overflow-hidden",
                selectedType === option.id
                  ? `border-[${option.color}] shadow-lg shadow-[${option.color}]/20`
                  : "hover:border-gray-300 hover:shadow-md",
              )}
              onClick={() => handleSelect(option.id)}
            >
              <CardContent className="p-0">
                {/* Card Header with Color */}
                <div className="p-6 text-white" style={{ backgroundColor: option.color }}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/20 rounded-lg">
                        <option.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">{option.title}</h3>
                        <p className="text-white/80 text-sm">{option.subtitle}</p>
                      </div>
                    </div>
                    {selectedType === option.id && <CheckCircle className="h-6 w-6" />}
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <p className="text-gray-600 mb-4 text-sm">{option.description}</p>

                  <div className="flex items-center gap-2 mb-2">
                    <Users className="h-4 w-4 text-gray-400" />
                    <span className="text-sm text-gray-600">{option.studentCount}</span>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {option.idealFor.slice(0, 2).map((item, i) => (
                      <Badge key={i} variant="outline" className="bg-gray-50">
                        {item}
                      </Badge>
                    ))}
                    {option.idealFor.length > 2 && (
                      <Badge variant="outline" className="bg-gray-50">
                        +{option.idealFor.length - 2} další
                      </Badge>
                    )}
                  </div>

                  <div className="mt-6">
                    <Button
                      className="w-full group"
                      style={{
                        backgroundColor: selectedType === option.id ? option.color : "#f3f4f6",
                        color: selectedType === option.id ? "white" : "black",
                      }}
                    >
                      {selectedType === option.id ? "Vybráno" : "Vybrat a zobrazit detaily"}
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Compare Toggle */}
      <div className="flex justify-center mt-8">
        <Button
          variant="outline"
          onClick={toggleCompare}
          className={cn("transition-all", isComparing ? "bg-[#884DEE] text-white hover:bg-[#7a45d4]" : "")}
        >
          {isComparing ? "Skrýt srovnání" : "Porovnat všechny typy škol"}
        </Button>
      </div>

      {/* Selected School Details or Comparison */}
      <AnimatePresence>
        {selectedType && !isComparing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="mt-12 max-w-5xl mx-auto"
          >
            {(() => {
              const option = schoolOptions.find((opt) => opt.id === selectedType)!

              return (
                <Card className={`border-[${option.color}]/30`}>
                  <CardContent className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8">
                      <div className="flex items-center gap-4">
                        <div className="p-3 rounded-xl text-white" style={{ backgroundColor: option.color }}>
                          <option.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold">{option.title}</h3>
                          <p className="text-gray-500">{option.description}</p>
                        </div>
                      </div>

                      <Button className="md:self-start" style={{ backgroundColor: option.color }}>
                        Získat nabídku
                      </Button>
                    </div>

                    <Tabs defaultValue="features" value={activeTab} onValueChange={setActiveTab} className="w-full">
                      <TabsList className="grid w-full grid-cols-3 mb-8">
                        <TabsTrigger value="features">Funkce a moduly</TabsTrigger>
                        <TabsTrigger value="benefits">Přínosy a výhody</TabsTrigger>
                        <TabsTrigger value="idealFor">Pro koho je určeno</TabsTrigger>
                      </TabsList>

                      <TabsContent value="features" className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {option.features.map((feature, idx) => (
                            <Card key={idx} className="overflow-hidden">
                              <div className="p-4 text-white" style={{ backgroundColor: option.color }}>
                                <div className="flex items-center gap-2">
                                  <feature.icon className="h-5 w-5" />
                                  <h4 className="font-medium">{feature.title}</h4>
                                </div>
                              </div>
                              <CardContent className="p-4">
                                <ul className="space-y-2">
                                  {feature.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                      <CheckCircle className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                                      <span className="text-sm">{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </CardContent>
                            </Card>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="benefits">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                          {option.benefits.map((benefit, idx) => (
                            <Card key={idx} className="text-center p-6">
                              <div
                                className="mx-auto p-3 rounded-full mb-4"
                                style={{ backgroundColor: `${option.color}20` }}
                              >
                                <benefit.icon className="h-6 w-6" style={{ color: option.color }} />
                              </div>
                              <h4 className="font-medium mb-2">{benefit.title}</h4>
                              <p className="text-2xl font-bold" style={{ color: option.color }}>
                                {benefit.value}
                              </p>
                            </Card>
                          ))}
                        </div>
                      </TabsContent>

                      <TabsContent value="idealFor">
                        <Card>
                          <CardContent className="p-6">
                            <h4 className="font-medium mb-4">Ideální řešení pro:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {option.idealFor.map((item, idx) => (
                                <div key={idx} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                                  <CheckCircle className="h-5 w-5" style={{ color: option.color }} />
                                  <span>{item}</span>
                                </div>
                              ))}
                            </div>

                            <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
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
                  </CardContent>
                </Card>
              )
            })()}
          </motion.div>
        )}

        {isComparing && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.4 }}
            className="mt-12 max-w-6xl mx-auto overflow-x-auto"
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-6">Srovnání řešení pro různé typy škol</h3>

                <div className="min-w-[800px]">
                  {/* Header Row */}
                  <div className="grid grid-cols-5 gap-4 mb-6">
                    <div className="p-3 font-medium">Funkce / Typ školy</div>
                    {schoolOptions.map((option) => (
                      <div
                        key={option.id}
                        className="p-3 text-white font-medium rounded-lg text-center"
                        style={{ backgroundColor: option.color }}
                      >
                        <div className="flex items-center justify-center gap-2">
                          <option.icon className="h-5 w-5" />
                          <span>{option.title}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Feature Categories */}
                  {[
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
                  ].map((group, groupIdx) => (
                    <div key={groupIdx} className="mb-8">
                      <div className="grid grid-cols-5 gap-4 bg-gray-50 p-3 rounded-lg mb-2">
                        <div className="font-medium">{group.category}</div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>

                      {group.features.map((feature, featureIdx) => (
                        <div key={featureIdx} className="grid grid-cols-5 gap-4 border-b py-3">
                          <div className="p-2">{feature}</div>
                          {schoolOptions.map((option) => {
                            // Determine if feature is available based on school type
                            let isAvailable = true
                            let isPartial = false

                            // Elementary schools don't have advanced features
                            if (
                              option.id === "elementary" &&
                              (group.category === "Pokročilé funkce" || group.category === "Specializované moduly")
                            ) {
                              if (feature === "Školní akce a výlety") {
                                isAvailable = true
                              } else if (feature === "Ekonomická agenda" || feature === "Analytické nástroje") {
                                isPartial = true
                              } else {
                                isAvailable = false
                              }
                            }

                            // Secondary schools don't have university features
                            if (option.id === "secondary" && group.category === "Specializované moduly") {
                              if (
                                feature === "Věda a výzkum" ||
                                feature === "Kreditní systém" ||
                                feature === "Správa fakult a kateder"
                              ) {
                                isAvailable = false
                              }
                            }

                            // Language schools have specific features
                            if (option.id === "language") {
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

                            // University doesn't need elementary features
                            if (option.id === "university" && feature === "Školní akce a výlety") {
                              isPartial = true
                            }

                            return (
                              <div key={option.id} className="p-2 text-center">
                                {isAvailable ? (
                                  isPartial ? (
                                    <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                                      Částečně
                                    </Badge>
                                  ) : (
                                    <CheckCircle className="h-5 w-5 mx-auto" style={{ color: option.color }} />
                                  )
                                ) : (
                                  <span className="text-gray-300">—</span>
                                )}
                              </div>
                            )
                          })}
                        </div>
                      ))}
                    </div>
                  ))}

                  {/* Price Indication */}
                  <div className="grid grid-cols-5 gap-4 mt-8 bg-gray-50 p-4 rounded-lg">
                    <div className="font-medium">Cenová kategorie</div>
                    <div className="text-center">
                      <Badge className="bg-green-100 text-green-800 hover:bg-green-100">Základní</Badge>
                    </div>
                    <div className="text-center">
                      <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Střední</Badge>
                    </div>
                    <div className="text-center">
                      <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Prémiová</Badge>
                    </div>
                    <div className="text-center">
                      <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-100">Flexibilní</Badge>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-center">
                  <Button className="bg-[#884DEE] hover:bg-[#7a45d4]">Získat personalizovanou nabídku</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

