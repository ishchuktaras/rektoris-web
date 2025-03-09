"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import SectionHeader from "./section-header";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  // Tiered pricing structure based on Czech market rates for educational software
  const plans = [
    {
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
    },
    {
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
    },
    {
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
    },
  ];

  return (
    <section
      id="modules"
      className="relative w-full min-h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-300 to-white px-4"
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
          <div className="mx-auto mt-8 flex justify-center space-x-4">
            <Button
              variant={isAnnual ? "outline" : "default"}
              onClick={() => setIsAnnual(false)}
            >
              Měsíční
            </Button>
            <Button
              variant={isAnnual ? "default" : "outline"}
              onClick={() => setIsAnnual(true)}
            >
              Každoročně
              <span className="ml-2 text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                Ušetřete 15 %
              </span>
            </Button>
          </div>

          <div className="mx-auto mt-16 grid max-w-md grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`flex flex-col rounded-3xl ${
                  plan.popular
                    ? "ring-2 ring-indigo-600"
                    : "ring-1 ring-gray-200"
                } p-8 shadow-sm`}
              >
                {plan.popular && (
                  <div className="absolute -top-5 left-0 right-0 mx-auto w-32 rounded-full bg-indigo-600 px-3 py-1 text-center text-sm font-medium text-white">
                    Nejoblíbenější
                  </div>
                )}
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
                      {isAnnual ? "Fakturováno ročně" : "Fakturováno měsíčně"}
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-1 flex-col justify-between">
                  <ul role="list" className="space-y-3">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <Check className="h-6 w-5 flex-none text-indigo-600" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href={"/contact-us"}
                    className={`mt-8 block w-full rounded-md px-3 py-2 text-center text-sm font-semibold shadow-sm ${
                      plan.popular
                        ? "bg-[#884DEE] text-white hover:bg-[#7a45d4]"
                        : "bg-white text-[#884DEE] ring-1 ring-inset ring-[#884DEE] hover:bg-gray-50"
                    }`}
                  >
                    Spusťte bezplatnou zkušební verzi
                  </a>
                </div>
              </div>
            ))}
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
