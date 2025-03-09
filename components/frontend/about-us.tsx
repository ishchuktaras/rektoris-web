"use client";

import Image from "next/image";
import {
  Calendar,
  CheckCircle,
  Code,
  GraduationCapIcon as Graduation,
  Heart,
  Lightbulb,
  Target,
} from "lucide-react";
import SectionHeader from "./section-header";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-blue-50 to-white mt-12 mb-12"
    >
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Header */}
               <SectionHeader
                 title="O nás"
                 heading="Kdo stojí za RektorIS"
                 description="Tým odborníků s vášní pro vzdělávání a technologie."
               />

        <div className="grid gap-8 py-12 md:grid-cols-2">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Naše mise</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Naším posláním je transformovat způsob, jakým vzdělávací instituce
              fungují. Věříme, že když učitelé a administrativní pracovníci
              stráví méně času administrativou, mohou se více věnovat tomu, co
              je skutečně důležité - vzdělávání studentů.
            </p>

            <h3 className="text-2xl font-bold">Naše hodnoty</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Inovace</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Neustále hledáme nové způsoby, jak zlepšit naše řešení a
                    přinést nejmodernější technologie do vzdělávacího sektoru.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Spolehlivost</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Naše systémy jsou navrženy s důrazem na stabilitu a
                    bezpečnost, protože víme, jak kritické jsou pro každodenní
                    provoz škol.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold">Uživatelská přívětivost</h4>
                  <p className="text-gray-500 dark:text-gray-400">
                    Vytváříme intuitivní rozhraní, která nevyžadují rozsáhlá
                    školení a umožňují rychlé osvojení i méně technicky zdatným
                    uživatelům.
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Náš příběh</h3>
            <p className="text-gray-500 dark:text-gray-400">
              RektorIS vznikl v roce 2020, kdy tým zkušených vývojářů a pedagogů
              spojil své síly s cílem vytvořit systém, který by skutečně
              odpovídal potřebám moderních vzdělávacích institucí. Po důkladné
              analýze existujících řešení a konzultacích s řediteli škol,
              učiteli a administrativními pracovníky jsme identifikovali klíčové
              problémy a začali vyvíjet platformu, která je řeší komplexn��m a
              uživatelsky přívětivým způsobem.
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Dnes náš systém používají desítky škol po celé České republice a
              neustále pracujeme na jeho vylepšování na základě zpětné vazby od
              našich uživatelů.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">10+</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Škol používá RektorIS
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">7+</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Členů týmu
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">1500+</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Aktivních uživatelů
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">2</div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Roky na trhu
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-12 border-t">
          <h3 className="text-2xl font-bold text-center mb-8">Náš tým</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                <Image
                  src="/uifaces-popular-image (11).jpg"
                  alt="Jan Novák"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="font-semibold">Jan Novák</h4>
              <p className="text-sm text-primary">CEO & Zakladatel</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                15 let zkušeností v EdTech
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                <Image
                  src="/uifaces-popular-image (15).jpg"
                  alt="Petra Svobodová"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="font-semibold">Petra Svobodová</h4>
              <p className="text-sm text-primary">CTO</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Expertka na cloudové technologie
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                <Image
                  src="/uifaces-popular-image (6).jpg"
                  alt="Martin Dvořák"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="font-semibold">Martin Dvořák</h4>
              <p className="text-sm text-primary">Vedoucí vývoje</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Bývalý učitel informatiky
              </p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-24 h-24 rounded-full overflow-hidden mb-4 border-2 border-primary/20">
                <Image
                  src="/uifaces-popular-image (5).jpg"
                  alt="Lucie Černá"
                  width={96}
                  height={96}
                  className="object-cover w-full h-full"
                />
              </div>
              <h4 className="font-semibold">Lucie Černá</h4>
              <p className="text-sm text-primary">UX/UI designérka</p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                Specialistka na uživatelský výzkum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
