"use client"

import { Book, Calendar, GraduationCap, MessageSquare, CheckCircle } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import SectionHeader from "./section-header"
import { useState, useEffect } from "react"
import { useMediaQuery } from "@/hooks/use-media-query"

const features = [
  {
    tab: "Žáci",
    icon: Book,
    title: "Evidence žáků",
    description: "Komplexní správa osobních údajů, studijních výsledků a docházky všech studentů.",
    href: "/student-records",
    subFeatures: [
      "Osobní profily studentů",
      "Sledování studijních výsledků",
      "Evidence docházky",
      "Zdravotní informace",
      "Kontaktní údaje rodičů",
      "Přehled aktivit a zájmů",
      "Individuální vzdělávací plány",
      "Archivace historických záznamů",
    ],
    image: "/images/student_information_system.jpg",
  },
  {
    tab: "Rozvrh",
    icon: Calendar,
    title: "Rozvrh hodin",
    description: "Intuitivní vytváření a správa rozvrhů, přiřazování učeben a sledování harmonogramů výuky.",
    href: "/class-schedule",
    subFeatures: [
      "Tvorba týdenních rozvrhů",
      "Přiřazování učeben",
      "Plánování mimoškolních aktivit",
      "Správa suplování",
      "Sledování vytížení učeben",
      "Integrace s elektronickým kalendářem",
      "Plánování konzultačních hodin",
      "Náhled rozvrhů pro různé role",
    ],
    image: "/images/curriculum_management.jpg",
  },
  {
    tab: "Známky",
    icon: GraduationCap,
    title: "Klasifikace a hodnocení",
    description: "Elektronický systém zadávání známek, generování vysvědčení a sledování prospěchu studentů.",
    href: "/grading-system",
    subFeatures: [
      "Elektronický systém známkování",
      "Generování vysvědčení",
      "Sledování prospěchu",
      "AnalýzaStudijních výsledků",
      "Hodnocení klíčových kompetencí",
      "Přehled klasifikace za pololetí",
      "Export výsledků",
      "Individuální hodnotící zprávy",
    ],
    image: "/images/timetable_management.jpg",
  },
  {
    tab: "Komunikace",
    icon: MessageSquare,
    title: "Komunikační platforma",
    description: "Propojení školy, rodičů a žáků prostřednictvím bezpečného komunikačního rozhraní.",
    href: "/communication",
    subFeatures: [
      "Zprávy mezi uživateli",
      "Oznámení a upozornění",
      "Sdílení dokumentů",
      "Plánování schůzek",
      "Hromadná komunikace",
      "Evidence komunikace",
      "Nastavení soukromí",
      "Vícejazyčná podpora",
    ],
    image: "/images/communication_portal.jpg",
  },
]

export default function TabbedFeatures() {
  const isMobile = useMediaQuery("(max-width: 768px)")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const tabItems = [
    { value: "dashboard", label: "Dashboard" },
    { value: "students", label: "Studenti" },
    { value: "teachers", label: "Učitelé" },
    { value: "classes", label: "Třídy" },
    { value: "subjects", label: "Předměty" },
    { value: "departments", label: "Oddělení" },
  ]

  return (
    <section
      id="modules"
      className="relative w-full min-h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-300 to-white px-4"
    >
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Moduly systému"
          heading="Podívejte se do RektorIS"
          headingHighlight="Prozkoumejte klíčové moduly našeho systému"
          description="Zefektivněte provoz vaší vzdělávací instituce s naším all-in-one softwarem pro správu škol. Navrženo pro zvýšení efektivity a zlepšení komunikace mezi administrátory, učiteli, studenty a rodiči."
        />
        <div className="mx-auto py-12">
          <Tabs defaultValue="dashboard" className="w-full">
            {mounted && (
              <>
                {isMobile ? (
                  <div className="grid grid-cols-2 gap-1 max-w-md mx-auto mb-4">
                    {tabItems.map((tab) => (
                      <TabsList key={tab.value} className="h-auto p-0 bg-transparent">
                        <TabsTrigger
                          value={tab.value}
                          className="w-full h-8 rounded-lg bg-white shadow-sm border border-gray-100 hover:bg-gray-50 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                        >
                          {tab.label}
                        </TabsTrigger>
                      </TabsList>
                    ))}
                  </div>
                ) : (
                  <TabsList className="w-full max-w-3xl mx-auto flex justify-center mb-6 bg-white rounded-lg p-1 shadow-sm">
                    {tabItems.map((tab) => (
                      <TabsTrigger
                        key={tab.value}
                        value={tab.value}
                        className="flex-1 py-3 rounded-md transition-all data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                      >
                        {tab.label}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                )}
              </>
            )}
            <TabsContent value="dashboard" className="p-6 mt-2 border rounded-lg bg-white shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">Přehledný dashboard</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Začněte každý den s jasným přehledem o tom, co se děje ve vaší škole. Dashboard poskytuje na první
                    pohled nejdůležitější metriky a informace.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Personalizované uvítání pro každého uživatele</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Přehledné statistiky studentů, učitelů, rodičů a tříd</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Rychlý přístup k detailním informacím</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-2">
                  <Image
                    src="/admin_dashboard.jpg"
                    alt="RektorIS Dashboard"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg border"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="students" className="p-6 mt-2 border rounded-lg bg-white shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">Správa studentů</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Kompletní databáze studentů s možností detailní správy osobních údajů, akademických výsledků a
                    docházky.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Detailní profily s fotografiemi a kontaktními údaji</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Unikátní registrační čísla a sledování přijímacího procesu</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Přiřazení do tříd a streamů s možností filtrace</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <Image
                    src="/student_form.jpg"
                    alt="RektorIS Student Management"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg border"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="classes" className="p-6 mt-2 border rounded-lg bg-white shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">Organizace tříd a streamů</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Přehledná hierarchická struktura ročníků, tříd a streamů umožňuje efektivní organizaci vzdělávacího
                    procesu.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Intuitivní správa ročníků a tříd</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Přiřazení třídních učitelů a sledování počtu studentů</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Flexibilní organizace streamů v rámci tříd</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <Image
                    src="/teacher_card.jpg"
                    alt="RektorIS Class Management"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg border"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="departments" className="p-6 mt-2 border rounded-lg bg-white shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">Správa oddělení</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Organizační struktura školy rozdělená do přehledných oddělení s vlastní správou předmětů a učitelů.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Přiřazení předmětů a učitelů k oddělením</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Specializované výukové plány pro každé oddělení</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Přehledná struktura pro efektivní organizaci</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RektorIS%20-%20Komplexn%C3%AD%20%C5%99e%C5%A1en%C3%AD%20pro%20spr%C3%A1vu%20%C5%A1kol%2813%29.jpg-GEs5LaAD55zhrT6bSbl1v4NXbjMR5I.jpeg"
                    alt="RektorIS Department Management"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg border"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="subjects" className="p-6 mt-2 border rounded-lg bg-white shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">Správa předmětů</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Detailní konfigurace předmětů včetně typu, kategorie, bodového systému a požadavků na výuku.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Komplexní nastavení s kódy a kategoriemi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Definice teoretické a praktické části výuky</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Bodový systém pro hodnocení studentů</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RektorIS%20-%20Komplexn%C3%AD%20%C5%99e%C5%A1en%C3%AD%20pro%20spr%C3%A1vu%20%C5%A1kol%2812%29.jpg-3eA2UOELQbFIswj7adUNGH698BOrBD.jpeg"
                    alt="RektorIS Subject Management"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg border"
                  />
                </div>
              </div>
            </TabsContent>
            <TabsContent value="teachers" className="p-6 mt-2 border rounded-lg bg-white shadow-sm">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-1 space-y-4">
                  <h3 className="text-2xl font-bold">Správa učitelů</h3>
                  <p className="text-gray-500 dark:text-gray-400">
                    Komplexní evidence pedagogických pracovníků včetně kvalifikace, kontaktních údajů a přiřazení k
                    předmětům.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Detailní profily s profesními informacemi</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Evidence kvalifikace a délky praxe</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <span>Přiřazení k třídám, předmětům a oddělením</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/RektorIS%20-%20Komplexn%C3%AD%20%C5%99e%C5%A1en%C3%AD%20pro%20spr%C3%A1vu%20%C5%A1kol%2819%29.jpg-TT7PbznWugy2B7ediLkhfe2AjIe6xM.jpeg"
                    alt="RektorIS Teacher Management"
                    width={600}
                    height={400}
                    className="rounded-xl shadow-lg border"
                  />
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}

