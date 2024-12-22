"use client";

import { Book, Calendar, GraduationCap, MessageSquare } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "./section-header";

const features = [
  {
    tab: "Žáci",
    icon: Book,
    title: "Evidence žáků",
    description:
      "Komplexní správa osobních údajů, studijních výsledků a docházky všech studentů.",
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
    description:
      "Intuitivní vytváření a správa rozvrhů, přiřazování učeben a sledování harmonogramů výuky.",
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
    description:
      "Elektronický systém zadávání známek, generování vysvědčení a sledování prospěchu studentů.",
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
    description:
      "Propojení školy, rodičů a žáků prostřednictvím bezpečného komunikačního rozhraní.",
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
];

export default function TabbedFeatures() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header */}
      <div className="py-8">
        <SectionHeader
          title="Základní moduly"
          heading="Komplexní řešení pro správu škol"
          description="Zefektivněte provoz vaší vzdělávací instituce s naším all-in-one softwarem pro správu škol. Navrženo pro zvýšení efektivity a zlepšení komunikace mezi administrátory, učiteli, studenty a rodiči."
        />
      </div>
      <Tabs defaultValue={features[0].tab.toLowerCase()} className="bg-gray-100 rounded-2xl py-4 px-4 space-y-4">
        <TabsList className="inline-flex h-auto w-full justify-start gap-4 rounded-none border-b bg-transparent p-0">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <TabsTrigger
                key={feature.tab}
                value={feature.tab.toLowerCase()}
                className="inline-flex items-center gap-2 border-b-2 border-transparent px-4 pb-4 pt-2 data-[state-active]:border-primary"
              >
                <Icon className="h-5 w-5" />
                {feature.tab}
              </TabsTrigger>
            );
          })}
        </TabsList>
        {features.map((feature) => (
          <TabsContent
            key={feature.tab}
            value={feature.tab.toLowerCase()}
            className="space-y-8"
          >
            <div className="grid gap-8 lg:grid-cols-2">
              <div className="space-y-8 px-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  {feature.title}
                </h2>
                <p className="text-lg text-muted-foreground">
                  {feature.description}
                </p>
                <Card>
                  <CardContent className="grid gap-4 p-6">
                    {feature.subFeatures.map((subFeature, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          {idx + 1}
                        </div>
                        <span>{subFeature}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
                <Button asChild>
                  <Link href={feature.href}>
                    Další informace o {feature.title}
                  </Link>
                </Button>
              </div>
              <div className="relative aspect-square overflow-auto rounded-xl bg-muted lg:aspect-square">
                <Image
                  src={feature.image}
                  alt={`${feature.title} illustration`}
                  className="object-cover py-8"
                  fill
                  priority
                />
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
