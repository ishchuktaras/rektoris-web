"use client";

import React, { useState } from "react";
import {
  Search,
  Mail,
  Phone,
  MessageSquare,
  Calendar,
  Users,
  FileText,
  Book,
  School,
  LucideProps,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function HelpPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  interface Article {
    id: number;
    title: string;
    category: string;
    icon: React.ComponentType<LucideProps>;
    description: string;
  }

  interface Faq {
    id: string;
    question: string;
    answer: string;
  }

  const toggleFaq = (id: string): void => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const articles: Article[] = [
    {
      id: 1,
      title: "Jak začít s kalendářem výuky",
      category: "základy",
      icon: Calendar,
      description: "Kompletní průvodce plánováním školního roku",
    },
    {
      id: 2,
      title: "Správa studentských profilů",
      category: "studenti",
      icon: Users,
      description: "Návod na správu údajů o studentech",
    },
    {
      id: 3,
      title: "Hodnocení a klasifikace",
      category: "hodnocení",
      icon: FileText,
      description: "Systém hodnocení a známkování",
    },
    {
      id: 4,
      title: "Nastavení rozvrhu hodin",
      category: "rozvrh",
      icon: Book,
      description: "Vytvoření a úprava rozvrhů",
    },
    {
      id: 5,
      title: "Komunikace s rodiči",
      category: "komunikace",
      icon: MessageSquare,
      description: "Nástroje pro komunikaci s rodiči",
    },
  ];

  const faqs: Faq[] = [
    {
      id: "faq-1",
      question: "Co je Rektor|IS?",
      answer:
        "Rektor|IS je online systém pro správu školy, který vám umožní spravovat přijímací řízení, informace o studentech, rozvrhy a klasifikaci kdykoliv a odkudkoliv.",
    },
    {
      id: "faq-2",
      question: "Jak Rektor|IS podporuje náš vzdělávací systém?",
      answer:
        "Rektor|IS podporuje různé typy vzdělávacích systémů. Kritéria hodnocení, úrovně tříd, rozvrhy a vysvědčení lze přizpůsobit během několika minut. Vše si můžete vyzkoušet během 30 denního zkušebního období.",
    },
    {
      id: "faq-3",
      question: "Jaký software potřebuji pro spuštění Rektor|IS?",
      answer:
        "Potřebujete pouze webový prohlížeč podporující HTML5, jako je Google Chrome, Mozilla Firefox nebo Microsoft Edge. Není nutná žádná dodatečná instalace.",
    },
    {
      id: "faq-4",
      question: "Můžu nainstalovat Rektor|IS na vlastní servery?",
      answer:
        "V současné době poskytujeme pouze online verzi našeho softwaru. Tímto způsobem můžeme garantovat dostupnost našich serverů, poskytovat podporu všem uživatelům a zajistit průběžné aktualizace efektivním způsobem.",
    },
    {
      id: "faq-5",
      question: "Jak mohu integrovat data naší školy?",
      answer:
        "Rektor|IS poskytuje průvodce, který vám pomůže s importem vašich současných dat. Vaše soubory musí být ve formátu Microsoft Excel (.xls).",
    },
    {
      id: "faq-6",
      question: "Nabízíte technickou podporu?",
      answer:
        "Naše technická podpora vám pomůže s jakýmkoliv technickým problémem. Podpora je poskytována během týdne prostřednictvím e-mailu (podpora@rektoris.cz), telefonu i živého chatu během pracovních dnů. Tato služba je zcela zdarma.",
    },
    {
      id: "faq-7",
      question: "Poskytujete školení?",
      answer:
        "Naše rozhraní je intuitivní a snadno použitelné. Pokud narazíte na problémy, máte přístup k našemu live chat podpory, kde vám rádi pomohou. Také poskytujeme online videa, která vás provedou složitějšími procesy. Za školení nemusíte nic platit.",
    },
    {
      id: "faq-8",
      question: "Jak je zajištěna bezpečnost dat?",
      answer:
        "Vaše školní data jsou pro nás prioritou. Každý den o půlnoci automaticky zálohujeme všechna důležitá data na oddělené fyzické úložiště. Pro přenos dat používáme stejnou SSL technologii jako internetové bankovnictví.",
    },
  ];

  const filteredArticles: Article[] = articles.filter((article) =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Search Section */}
        <div className="max-w-2xl mx-auto relative">
          <div className="relative">
            <Search className="absolute left-4 top-3 h-5 w-5 text-gray-400" />
            <Input
              type="text"
              placeholder="Vyhledat v nápovědě..."
              className="pl-12 py-6 text-lg rounded-full shadow-lg"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Articles Grid */}
        <section className="py-8">
          <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">
            Užitečné články
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => {
              const IconComponent = article.icon;
              return (
                <Link href="#" key={article.id}>
                  <Card className="cursor-pointer group hover:shadow-xl transition-all duration-300 border-2 hover:border-skolablue-200">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
                          <IconComponent className="h-6 w-6 text-blue-600" />
                        </div>
                        <CardTitle className="text-lg">
                          {article.title}
                        </CardTitle>
                      </div>
                      <CardDescription>{article.description}</CardDescription>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-8 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-center text-2xl font-bold mb-6 text-gray-900">
            Časté dotazy
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <Card key={faq.id} className="border-0 shadow-none">
                <CardHeader
                  className="p-4 cursor-pointer hover:bg-blue-50 rounded-lg"
                  onClick={() => toggleFaq(faq.id)}
                >
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-base">{faq.question}</CardTitle>
                    <div
                      className={`transform transition-transform ${
                        openFaq === faq.id ? "rotate-180" : ""
                      }`}
                    >
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M2 4L6 8L10 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </CardHeader>
                {openFaq === faq.id && (
                  <CardContent className="pt-0 px-4 pb-4">
                    <p className="text-gray-600">{faq.answer}</p>
                  </CardContent>
                )}
              </Card>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-8">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Kontaktujte nás
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-blue-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Mail className="h-5 w-5 text-blue-600" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">podpora@rektoris.cz</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Odpovíme do 24 hodin
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MessageSquare className="h-5 w-5 text-green-600" />
                  Online Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Dostupný v pracovní dny</p>
                <button className="mt-2 text-green-600 hover:underline">
                  Zahájit chat
                </button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-white">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Phone className="h-5 w-5 text-purple-600" />
                  Telefon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+420 123 456 789</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Po-Pá 8:00-16:00
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}
