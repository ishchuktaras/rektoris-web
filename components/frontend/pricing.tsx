"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Check,
  HelpCircle,
  Plus,
  Minus,
  BarChart,
  Shield,
  Users,
  Calendar,
  BookOpen,
  MessageSquare,
  Server,
  Clock,
  Settings,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import SectionHeader from "./section-header";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [viewMode, setViewMode] = useState<"cards" | "table">("cards");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [customPlan, setCustomPlan] = useState({
    students: 200,
    teachers: 20,
    storage: 10,
  });

  // Feature icons mapping
  const featureIcons = {
    evidence: <Users className="h-5 w-5" />,
    rozvrh: <Calendar className="h-5 w-5" />,
    klasifikace: <BarChart className="h-5 w-5" />,
    komunikace: <MessageSquare className="h-5 w-5" />,
    cloud: <Server className="h-5 w-5" />,
    podpora: <Clock className="h-5 w-5" />,
    zaměstnanci: <Users className="h-5 w-5" />,
    materiály: <BookOpen className="h-5 w-5" />,
    bezpečnost: <Shield className="h-5 w-5" />,
    nastavení: <Settings className="h-5 w-5" />,
  };

  // Feature descriptions for tooltips
  const featureDescriptions = {
    "Evidence žáků":
      "Kompletní správa údajů o studentech včetně osobních informací, docházky a výsledků.",
    "Základní rozvrh hodin":
      "Jednoduchý nástroj pro vytváření a správu rozvrhů hodin.",
    "Pokročilý rozvrh hodin":
      "Pokročilé funkce pro optimalizaci rozvrhů s ohledem na dostupnost učitelů a učeben.",
    "Jednoduchá klasifikace":
      "Základní nástroje pro hodnocení studentů a správu známek.",
    "Komplexní klasifikace":
      "Pokročilé nástroje pro hodnocení s možností vlastních kritérií a statistik.",
    "Základní komunikační nástroje":
      "Jednoduché nástroje pro komunikaci mezi učiteli, studenty a rodiči.",
    "Rozšířená komunikační platforma":
      "Pokročilá platforma s možností skupinových diskusí, sdílení souborů a oznámení.",
    "Cloudové zálohování dat":
      "Automatické zálohování všech dat v cloudu pro maximální bezpečnost.",
    "E-mailová podpora":
      "Podpora prostřednictvím e-mailu s odezvou do 24 hodin.",
    "Prioritní podpora":
      "Přednostní podpora s odezvou do 8 hodin v pracovní dny.",
    "Dedikovaná podpora 24/7":
      "Nepřetržitá podpora s vyhrazeným týmem specialistů.",
  };

  // Add-ons that can be added to any plan
  const addOns = [
    {
      id: "sms",
      name: "SMS notifikace",
      price: 500,
      description: "Automatické SMS notifikace pro rodiče a studenty",
    },
    {
      id: "api",
      name: "API přístup",
      price: 1000,
      description: "Přístup k API pro integraci s dalšími systémy",
    },
    {
      id: "reports",
      name: "Pokročilé reporty",
      price: 800,
      description: "Generování pokročilých statistických reportů",
    },
    {
      id: "mobile",
      name: "Mobilní aplikace",
      price: 1200,
      description: "Přístup k systému přes mobilní aplikaci",
    },
  ];

  // Tiered pricing structure based on Czech market rates for educational software
  const plans = [
    {
      id: "basic",
      name: "Základní",
      description: "Pro malé školy s jednoduchými potřebami",
      monthlyPrice: 2900,
      annualPrice: 29000,
      features: [
        "Evidence žáků (až 200 žáků)",
        "Základní rozvrh hodin",
        "Jednoduchá klasifikace",
        "Základní komunikační nástroje",
        "Cloudové zálohování dat",
        "E-mailová podpora",
      ],
      color: "blue",
    },
    {
      id: "standard",
      name: "Standard",
      description: "Pro střední školy s komplexnějšími požadavky",
      monthlyPrice: 4900,
      annualPrice: 49000,
      popular: true,
      features: [
        "Evidence žáků (až 500 žáků)",
        "Pokročilý rozvrh hodin",
        "Správa zaměstnanců",
        "Komplexní klasifikace a hodnocení",
        "Rozšířená komunikační platforma",
        "Základní ekonomická agenda",
        "Správa učebních materiálů",
        "Bezpečnost a přístupová práva",
        "Prioritní podpora",
      ],
      color: "purple",
    },
    {
      id: "premium",
      name: "Premium",
      description: "Pro velké vzdělávací instituce s vysokými nároky",
      monthlyPrice: 7900,
      annualPrice: 79000,
      features: [
        "Neomezený počet žáků",
        "Pokročilý rozvrh s automatickou optimalizací",
        "Komplexní správa zaměstnanců a HR nástroje",
        "Pokročilá klasifikace s analytickými nástroji",
        "Plná komunikační platforma včetně videokonferencí",
        "Kompletní ekonomická agenda",
        "Pokročilá správa učebních materiálů",
        "Rozšířené bezpečnostní funkce a audit",
        "Integrace s externími systémy",
        "Vlastní přizpůsobení a branding",
        "Dedikovaná podpora 24/7",
      ],
      color: "green",
    },
  ];

  // Calculate custom plan price
  const calculateCustomPrice = () => {
    let basePrice = 2000;
    basePrice += customPlan.students * 10;
    basePrice += customPlan.teachers * 50;
    basePrice += customPlan.storage * 100;

    // Add selected add-ons
    selectedAddOns.forEach((addonId) => {
      const addon = addOns.find((a) => a.id === addonId);
      if (addon) {
        basePrice += addon.price;
      }
    });

    return isAnnual ? basePrice * 10 : basePrice;
  };

  // Get icon for feature
  const getFeatureIcon = (feature: string) => {
    for (const [key, icon] of Object.entries(featureIcons)) {
      if (feature.toLowerCase().includes(key)) {
        return icon;
      }
    }
    return <Check className="h-5 w-5" />;
  };

  // Get tooltip content for feature
  const getFeatureTooltip = (feature: string) => {
    for (const [key, description] of Object.entries(featureDescriptions)) {
      if (feature.includes(key)) {
        return description;
      }
    }
    return "Další informace o této funkci získáte od našeho obchodního týmu.";
  };

  // Toggle add-on selection
  const toggleAddOn = (addonId: string) => {
    if (selectedAddOns.includes(addonId)) {
      setSelectedAddOns(selectedAddOns.filter((id) => id !== addonId));
    } else {
      setSelectedAddOns([...selectedAddOns, addonId]);
    }
  };

  // Adjust custom plan parameters
  const adjustCustomPlan = (field: keyof typeof customPlan, amount: number) => {
    const limits = {
      students: { min: 50, max: 2000 },
      teachers: { min: 5, max: 200 },
      storage: { min: 5, max: 100 },
    };

    const newValue = customPlan[field] + amount;
    if (newValue >= limits[field].min && newValue <= limits[field].max) {
      setCustomPlan({ ...customPlan, [field]: newValue });
    }
  };

  return (
    <section
      id="pricing"
      className="relative w-full min-h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-100 to-white px-4"
    >
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            title={"Ceny"}
            heading={"Ceník"}
            headingHighlight={"Transparentní ceny za výkonné nástroje"}
            description={
              "Vyberte si plán, který vyhovuje vašim obchodním potřebám. Flexibilní ceny bez skrytých poplatků, navržené tak, aby odpovídaly vašemu růstu."
            }
          />

          <div className="mx-auto mt-8 flex flex-col items-center space-y-6">
            {/* Billing toggle */}
            <div className="flex items-center gap-4 bg-gray-50 p-2 rounded-full">
              <Button
                variant={isAnnual ? "outline" : "default"}
                onClick={() => setIsAnnual(false)}
                className="rounded-full"
              >
                Měsíční platba
              </Button>
              <Button
                variant={isAnnual ? "default" : "outline"}
                onClick={() => setIsAnnual(true)}
                className="rounded-full"
              >
                Roční platba
                <Badge
                  variant="outline"
                  className="ml-2 bg-green-100 text-green-800 border-green-200"
                >
                  Ušetřete 15 %
                </Badge>
              </Button>
            </div>

            {/* View toggle */}
            <div className="flex items-center gap-4">
              <Button
                variant={viewMode === "cards" ? "default" : "outline"}
                onClick={() => setViewMode("cards")}
                size="sm"
              >
                Karty
              </Button>
              <Button
                variant={viewMode === "table" ? "default" : "outline"}
                onClick={() => setViewMode("table")}
                size="sm"
              >
                Srovnávací tabulka
              </Button>
            </div>
          </div>

          <Tabs defaultValue="predefined" className="mt-12">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="predefined">Přednastavené plány</TabsTrigger>
              <TabsTrigger value="custom">Vlastní plán</TabsTrigger>
            </TabsList>

            <TabsContent value="predefined" className="mt-6">
              {viewMode === "cards" ? (
                <div className="mx-auto mt-8 grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
                  {plans.map((plan) => (
                    <div
                      key={plan.id}
                      className={`flex flex-col rounded-3xl ${
                        plan.popular
                          ? "ring-2 ring-[#884DEE]"
                          : "ring-1 ring-gray-200"
                      } p-8 shadow-lg transition-all duration-300 hover:shadow-xl relative overflow-hidden`}
                    >
                      {plan.popular && (
                        <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-[#884DEE] px-3 py-1 text-center text-sm font-medium text-white">
                          Nejoblíbenější
                        </div>
                      )}

                      {/* Plan header */}
                      <div className="relative">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                          {plan.name}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-gray-600">
                          {plan.description}
                        </p>
                        <div className="mt-6">
                          <p className="flex items-baseline gap-x-1">
                            <span className="text-4xl font-bold tracking-tight text-gray-900">
                              {isAnnual ? plan.annualPrice : plan.monthlyPrice}
                            </span>
                            <span className="text-sm font-semibold leading-6 text-gray-600">
                              Kč
                            </span>
                            {!isAnnual && (
                              <span className="text-sm font-semibold leading-6 text-gray-600">
                                /měsíc
                              </span>
                            )}
                          </p>
                          <p className="mt-1 text-sm text-gray-500">
                            {isAnnual
                              ? "Fakturováno ročně"
                              : "Fakturováno měsíčně"}
                          </p>
                        </div>
                      </div>

                      {/* Features list */}
                      <div className="mt-8 flex flex-1 flex-col justify-between">
                        <ul role="list" className="space-y-3">
                          {plan.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex gap-x-3 items-center"
                            >
                              <span className="flex-none text-[#884DEE]">
                                {getFeatureIcon(feature)}
                              </span>
                              <span className="text-sm text-gray-600">
                                {feature}
                              </span>
                              <TooltipProvider>
                                <Tooltip>
                                  <TooltipTrigger asChild>
                                    <Button
                                      variant="ghost"
                                      size="icon"
                                      className="h-5 w-5 ml-auto"
                                    >
                                      <HelpCircle className="h-4 w-4 text-gray-400" />
                                      <span className="sr-only">Info</span>
                                    </Button>
                                  </TooltipTrigger>
                                  <TooltipContent>
                                    <p className="max-w-xs">
                                      {getFeatureTooltip(feature)}
                                    </p>
                                  </TooltipContent>
                                </Tooltip>
                              </TooltipProvider>
                            </li>
                          ))}
                        </ul>

                        {/* CTA button */}
                        <div className="mt-8 space-y-4">
                          <Button
                            className={`w-full ${
                              plan.popular
                                ? "bg-[#884DEE] text-white hover:bg-[#7a45d4]"
                                : "bg-white text-[#884DEE] ring-1 ring-inset ring-[#884DEE] hover:bg-gray-50"
                            }`}
                            asChild
                          >
                            <a href="/contact-us">
                              Spusťte bezplatnou zkušební verzi
                            </a>
                          </Button>
                          <Button variant="ghost" className="w-full text-sm">
                            Kontaktujte obchodní oddělení
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-8 overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        <th className="text-left p-4 bg-gray-50">Funkce</th>
                        {plans.map((plan) => (
                          <th
                            key={plan.id}
                            className="p-4 text-center bg-gray-50"
                          >
                            <div className="flex flex-col items-center">
                              <span className="font-bold text-lg">
                                {plan.name}
                              </span>
                              <span className="text-2xl font-bold mt-2">
                                {isAnnual
                                  ? plan.annualPrice
                                  : plan.monthlyPrice}{" "}
                                Kč
                              </span>
                              <span className="text-sm text-gray-500">
                                {!isAnnual && "/měsíc"}
                              </span>
                              {plan.popular && (
                                <Badge className="mt-2 bg-[#884DEE]">
                                  Nejoblíbenější
                                </Badge>
                              )}
                              <Button
                                className="mt-4 w-full"
                                variant={plan.popular ? "default" : "outline"}
                                asChild
                              >
                                <a href="/contact-us">Vybrat</a>
                              </Button>
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {/* Combine all features from all plans */}
                      {Array.from(
                        new Set(plans.flatMap((plan) => plan.features))
                      ).map((feature) => (
                        <tr key={feature} className="border-b border-gray-200">
                          <td className="p-4 flex items-center gap-2">
                            {getFeatureIcon(feature)}
                            <span>{feature}</span>
                          </td>
                          {plans.map((plan) => (
                            <td
                              key={`${plan.id}-${feature}`}
                              className="p-4 text-center"
                            >
                              {plan.features.some(
                                (f) =>
                                  f === feature ||
                                  f.includes(feature.split(" ")[0])
                              ) ? (
                                <Check className="mx-auto h-5 w-5 text-green-500" />
                              ) : (
                                <span className="text-gray-300">—</span>
                              )}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </TabsContent>

            <TabsContent value="custom" className="mt-6">
              <div className="mx-auto max-w-3xl bg-white rounded-3xl shadow-lg p-8 ring-1 ring-gray-200">
                <h3 className="text-2xl font-bold text-center mb-6">
                  Vytvořte si vlastní plán
                </h3>
                <p className="text-center text-gray-600 mb-8">
                  Přizpůsobte si plán podle vašich specifických potřeb a
                  získejte přesně to, co potřebujete.
                </p>

                <div className="grid gap-8 md:grid-cols-2">
                  <div className="space-y-6">
                    <h4 className="font-semibold text-lg">Konfigurace</h4>

                    {/* Students slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="students">
                          Počet studentů: {customPlan.students}
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => adjustCustomPlan("students", -50)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <div className="h-2 flex-1 bg-gray-200 rounded-full relative">
                          <div
                            className="absolute h-2 bg-[#884DEE] rounded-full"
                            style={{
                              width: `${(customPlan.students / 2000) * 100}%`,
                            }}
                          />
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => adjustCustomPlan("students", 50)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Teachers slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="teachers">
                          Počet učitelů: {customPlan.teachers}
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => adjustCustomPlan("teachers", -5)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <div className="h-2 flex-1 bg-gray-200 rounded-full relative">
                          <div
                            className="absolute h-2 bg-[#884DEE] rounded-full"
                            style={{
                              width: `${(customPlan.teachers / 200) * 100}%`,
                            }}
                          />
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => adjustCustomPlan("teachers", 5)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Storage slider */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <Label htmlFor="storage">
                          Úložiště (GB): {customPlan.storage}
                        </Label>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => adjustCustomPlan("storage", -5)}
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <div className="h-2 flex-1 bg-gray-200 rounded-full relative">
                          <div
                            className="absolute h-2 bg-[#884DEE] rounded-full"
                            style={{
                              width: `${(customPlan.storage / 100) * 100}%`,
                            }}
                          />
                        </div>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => adjustCustomPlan("storage", 5)}
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>

                    {/* Add-ons */}
                    <div className="space-y-4 mt-6">
                      <h4 className="font-semibold">Doplňky</h4>
                      {addOns.map((addon) => (
                        <div
                          key={addon.id}
                          className="flex items-center justify-between p-3 border rounded-lg"
                        >
                          <div>
                            <div className="font-medium">{addon.name}</div>
                            <div className="text-sm text-gray-500">
                              {addon.description}
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-sm font-semibold">
                              {addon.price} Kč/měsíc
                            </div>
                            <Button
                              variant={
                                selectedAddOns.includes(addon.id)
                                  ? "default"
                                  : "outline"
                              }
                              size="sm"
                              onClick={() => toggleAddOn(addon.id)}
                            >
                              {selectedAddOns.includes(addon.id)
                                ? "Aktivní"
                                : "Přidat"}
                            </Button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-gray-50 p-6 rounded-xl">
                    <h4 className="font-semibold text-lg mb-4">Souhrn plánu</h4>

                    <div className="space-y-4">
                      <div className="flex justify-between">
                        <span>Základní cena</span>
                        <span>2 000 Kč/měsíc</span>
                      </div>

                      <div className="flex justify-between">
                        <span>{customPlan.students} studentů</span>
                        <span>{customPlan.students * 10} Kč/měsíc</span>
                      </div>

                      <div className="flex justify-between">
                        <span>{customPlan.teachers} učitelů</span>
                        <span>{customPlan.teachers * 50} Kč/měsíc</span>
                      </div>

                      <div className="flex justify-between">
                        <span>{customPlan.storage} GB úložiště</span>
                        <span>{customPlan.storage * 100} Kč/měsíc</span>
                      </div>

                      {selectedAddOns.length > 0 && (
                        <>
                          <div className="pt-2 border-t border-gray-200">
                            <h5 className="font-medium mb-2">
                              Vybrané doplňky:
                            </h5>
                            {selectedAddOns.map((addonId) => {
                              const addon = addOns.find(
                                (a) => a.id === addonId
                              );
                              return addon ? (
                                <div
                                  key={addon.id}
                                  className="flex justify-between text-sm"
                                >
                                  <span>{addon.name}</span>
                                  <span>{addon.price} Kč/měsíc</span>
                                </div>
                              ) : null;
                            })}
                          </div>
                        </>
                      )}

                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between font-bold text-lg">
                          <span>Celková cena</span>
                          <span>
                            {calculateCustomPrice()} Kč
                            {isAnnual ? "/rok" : "/měsíc"}
                          </span>
                        </div>
                        <div className="text-sm text-gray-500 text-right">
                          {isAnnual
                            ? "Fakturováno ročně"
                            : "Fakturováno měsíčně"}
                        </div>
                      </div>

                      <Button className="w-full bg-[#884DEE] hover:bg-[#7a45d4] mt-6">
                        Získat nabídku
                      </Button>

                      <p className="text-sm text-center text-gray-500 mt-4">
                        Náš obchodní tým vás bude kontaktovat do 24 hodin s
                        přesnou nabídkou.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>

          {/* FAQ Section */}
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-center mb-8">
              Často kladené otázky
            </h3>

            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  Jak dlouho trvá implementace systému?
                </AccordionTrigger>
                <AccordionContent>
                  Implementace našeho systému obvykle trvá 2-4 týdny v
                  závislosti na velikosti školy a požadovaných funkcích. Náš
                  implementační tým vám poskytne podrobný harmonogram a bude vás
                  provázet celým procesem.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2">
                <AccordionTrigger>
                  Mohu změnit plán v průběhu školního roku?
                </AccordionTrigger>
                <AccordionContent>
                  Ano, můžete upgradovat svůj plán kdykoli během školního roku.
                  Při upgradu vám bude účtován pouze rozdíl v ceně. Downgrade na
                  nižší plán je možný při obnovení předplatného.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3">
                <AccordionTrigger>
                  Jak je to s ochranou osobních údajů?
                </AccordionTrigger>
                <AccordionContent>
                  Náš systém je plně v souladu s GDPR a dalšími předpisy o
                  ochraně osobních údajů. Data jsou šifrována a ukládána na
                  zabezpečených serverech v EU. Máme implementovány přísné
                  bezpečnostní protokoly a pravidelné audity.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4">
                <AccordionTrigger>
                  Poskytujete školení pro učitele a administrativu?
                </AccordionTrigger>
                <AccordionContent>
                  Ano, součástí implementace je základní školení pro
                  administrátory a učitele. Pro pokročilé plány nabízíme
                  rozšířená školení a workshopy. K dispozici je také rozsáhlá
                  online dokumentace a videonávody.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5">
                <AccordionTrigger>
                  Jaká je dostupnost technické podpory?
                </AccordionTrigger>
                <AccordionContent>
                  Technická podpora je k dispozici podle vašeho plánu. Základní
                  plán zahrnuje e-mailovou podporu s odezvou do 24 hodin.
                  Standard plán nabízí prioritní podporu s odezvou do 8 hodin v
                  pracovní dny. Premium plán poskytuje dedikovanou podporu 24/7
                  včetně víkendů a svátků.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6">
                <AccordionTrigger>
                  Mohu si systém nejprve vyzkoušet?
                </AccordionTrigger>
                <AccordionContent>
                  Ano, nabízíme 14 denní bezplatnou zkušební verzi bez nutnosti
                  zadávat platební údaje. Během zkušební doby máte přístup ke
                  všem funkcím vybraného plánu a můžete si systém důkladně
                  otestovat ve vašem prostředí.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            14 denní bezplatná zkušební verze. Není vyžadována žádná kreditní
            karta. Můžete kdykoli zrušit.
          </p>
        </div>
      </div>
    </section>
  );
}
