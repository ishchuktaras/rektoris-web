"use client";

import type React from "react";
import { useState, useEffect } from "react";
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
  Lightbulb,
  BookOpen,
  BarChart,
  Shield,
  Settings,
  Video,
  Download,
  HelpCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  type LightbulbIcon,
  type LucideProps,
  Star,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Tabs } from "@/components/ui/tabs";

export default function HelpCenter() {
  const [searchTerm, setSearchTerm] = useState("");
  const [openFaq, setOpenFaq] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [recentlyViewed, setRecentlyViewed] = useState<Article[]>([]);

  interface Article {
    id: number;
    title: string;
    category: string;
    icon: React.ComponentType<LucideProps>;
    description: string;
    tags: string[];
    readTime: string;
    isNew?: boolean;
    isPopular?: boolean;
  }

  interface Faq {
    id: string;
    question: string;
    answer: string;
    category: string;
  }

  interface Category {
    id: string;
    name: string;
    icon: React.ComponentType<LucideProps>;
    color: string;
  }

  const toggleFaq = (id: string): void => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const categories: Category[] = [
    { id: "all", name: "Vše", icon: Lightbulb, color: "#884DEE" },
    { id: "základy", name: "Základy", icon: School, color: "#4ECDC4" },
    { id: "studenti", name: "Studenti", icon: Users, color: "#FF6B6B" },
    { id: "hodnocení", name: "Hodnocení", icon: BarChart, color: "#FFD166" },
    { id: "rozvrh", name: "Rozvrh", icon: Calendar, color: "#06D6A0" },
    {
      id: "komunikace",
      name: "Komunikace",
      icon: MessageSquare,
      color: "#118AB2",
    },
  ];

  const articles: Article[] = [
    {
      id: 1,
      title: "Jak začít s kalendářem výuky",
      category: "základy",
      icon: Calendar,
      description:
        "Kompletní průvodce plánováním školního roku a nastavením rozvrhu hodin.",
      tags: ["začínáme", "kalendář", "plánování"],
      readTime: "5 min",
      isNew: true,
    },
    {
      id: 2,
      title: "Správa studentských profilů",
      category: "studenti",
      icon: Users,
      description:
        "Návod na správu údajů o studentech, jejich kontaktů a osobních informací.",
      tags: ["studenti", "profily", "údaje"],
      readTime: "7 min",
      isPopular: true,
    },
    {
      id: 3,
      title: "Hodnocení a klasifikace",
      category: "hodnocení",
      icon: FileText,
      description:
        "Systém hodnocení a známkování, nastavení vlastních kritérií a export výsledků.",
      tags: ["známky", "hodnocení", "klasifikace"],
      readTime: "8 min",
    },
    {
      id: 4,
      title: "Nastavení rozvrhu hodin",
      category: "rozvrh",
      icon: Book,
      description:
        "Vytvoření a úprava rozvrhů, správa učeben a automatická optimalizace.",
      tags: ["rozvrh", "učebny", "optimalizace"],
      readTime: "10 min",
    },
    {
      id: 5,
      title: "Komunikace s rodiči",
      category: "komunikace",
      icon: MessageSquare,
      description:
        "Nástroje pro komunikaci s rodiči, hromadné zprávy a oznámení.",
      tags: ["rodiče", "zprávy", "komunikace"],
      readTime: "6 min",
    },
    {
      id: 6,
      title: "Zabezpečení a přístupová práva",
      category: "základy",
      icon: Shield,
      description:
        "Nastavení rolí a oprávnění pro různé typy uživatelů v systému.",
      tags: ["zabezpečení", "role", "oprávnění"],
      readTime: "9 min",
    },
    {
      id: 7,
      title: "Správa učebních materiálů",
      category: "základy",
      icon: BookOpen,
      description:
        "Ukládání a sdílení učebních materiálů se studenty a kolegy.",
      tags: ["materiály", "soubory", "sdílení"],
      readTime: "4 min",
      isNew: true,
    },
    {
      id: 8,
      title: "Analýza výsledků a reporty",
      category: "hodnocení",
      icon: BarChart,
      description:
        "Generování statistik a reportů o prospěchu studentů a třídních kolektivů.",
      tags: ["statistiky", "reporty", "analýza"],
      readTime: "8 min",
      isPopular: true,
    },
    {
      id: 9,
      title: "Nastavení školního roku",
      category: "základy",
      icon: Settings,
      description:
        "Konfigurace školního roku, prázdnin a speciálních událostí.",
      tags: ["školní rok", "prázdniny", "konfigurace"],
      readTime: "5 min",
    },
  ];

  const faqs: Faq[] = [
    {
      id: "faq-1",
      question: "Co je Rektor|IS?",
      answer:
        "Rektor|IS je komplexní online systém pro správu školy, který vám umožní spravovat přijímací řízení, informace o studentech, rozvrhy a klasifikaci kdykoliv a odkudkoliv. Systém je navržen tak, aby usnadnil administrativní procesy a zlepšil komunikaci mezi učiteli, studenty a rodiči.",
      category: "základy",
    },
    {
      id: "faq-2",
      question: "Jak Rektor|IS podporuje náš vzdělávací systém?",
      answer:
        "Rektor|IS podporuje různé typy vzdělávacích systémů. Kritéria hodnocení, úrovně tříd, rozvrhy a vysvědčení lze přizpůsobit během několika minut. Vše si můžete vyzkoušet během 30 denního zkušebního období. Systém je flexibilní a lze jej přizpůsobit potřebám základních, středních i vysokých škol.",
      category: "základy",
    },
    {
      id: "faq-3",
      question: "Jaký software potřebuji pro spuštění Rektor|IS?",
      answer:
        "Potřebujete pouze webový prohlížeč podporující HTML5, jako je Google Chrome, Mozilla Firefox nebo Microsoft Edge. Není nutná žádná dodatečná instalace. Rektor|IS funguje na všech zařízeních včetně počítačů, tabletů a mobilních telefonů.",
      category: "základy",
    },
    {
      id: "faq-4",
      question: "Můžu nainstalovat Rektor|IS na vlastní servery?",
      answer:
        "V současné době poskytujeme pouze online verzi našeho softwaru. Tímto způsobem můžeme garantovat dostupnost našich serverů, poskytovat podporu všem uživatelům a zajistit průběžné aktualizace efektivním způsobem. Vaše data jsou bezpečně uložena a zálohována na našich serverech.",
      category: "základy",
    },
    {
      id: "faq-5",
      question: "Jak mohu integrovat data naší školy?",
      answer:
        "Rektor|IS poskytuje průvodce, který vám pomůže s importem vašich současných dat. Vaše soubory musí být ve formátu Microsoft Excel (.xls). Náš tým vám může pomoci s přípravou dat a jejich importem do systému. Nabízíme také možnost migrace dat z jiných školních systémů.",
      category: "základy",
    },
    {
      id: "faq-6",
      question: "Nabízíte technickou podporu?",
      answer:
        "Naše technická podpora vám pomůže s jakýmkoliv technickým problémem. Podpora je poskytována během týdne prostřednictvím e-mailu (podpora@rektoris.cz), telefonu i živého chatu během pracovních dnů. Tato služba je zcela zdarma a je součástí všech našich plánů.",
      category: "komunikace",
    },
    {
      id: "faq-7",
      question: "Poskytujete školení?",
      answer:
        "Naše rozhraní je intuitivní a snadno použitelné. Pokud narazíte na problémy, máte přístup k našemu live chat podpory, kde vám rádi pomohou. Také poskytujeme online videa, která vás provedou složitějšími procesy. Za školení nemusíte nic platit. Pro větší školy nabízíme možnost osobního školení přímo ve vaší instituci.",
      category: "základy",
    },
    {
      id: "faq-8",
      question: "Jak je zajištěna bezpečnost dat?",
      answer:
        "Vaše školní data jsou pro nás prioritou. Každý den o půlnoci automaticky zálohujeme všechna důležitá data na oddělené fyzické úložiště. Pro přenos dat používáme stejnou SSL technologii jako internetové bankovnictví. Všechna data jsou šifrována a uložena na zabezpečených serverech v EU v souladu s GDPR.",
      category: "základy",
    },
    {
      id: "faq-9",
      question: "Jak mohu nastavit hodnocení studentů?",
      answer:
        "V sekci 'Hodnocení' můžete nastavit různé typy hodnocení včetně známek, bodů nebo slovního hodnocení. Můžete definovat vlastní škály hodnocení, váhy jednotlivých známek a automatické výpočty průměrů. Systém umožňuje také export hodnocení do různých formátů a generování vysvědčení.",
      category: "hodnocení",
    },
    {
      id: "faq-10",
      question: "Jak funguje komunikace se studenty a rodiči?",
      answer:
        "Rektor|IS nabízí integrovaný komunikační systém, který umožňuje zasílání zpráv studentům a rodičům. Můžete posílat individuální zprávy nebo hromadná oznámení celým třídám. Rodiče a studenti mohou na zprávy odpovídat, čímž se vytváří efektivní komunikační kanál mezi školou a rodinami.",
      category: "komunikace",
    },
    {
      id: "faq-11",
      question: "Jak vytvořím rozvrh hodin?",
      answer:
        "V modulu 'Rozvrh' můžete snadno vytvářet a upravovat rozvrhy hodin. Systém nabízí intuitivní drag-and-drop rozhraní pro plánování hodin. Můžete definovat učebny, předměty a učitele, a systém vám pomůže optimalizovat rozvrh tak, aby se minimalizovaly konflikty a maximalizovalo využití zdrojů.",
      category: "rozvrh",
    },
    {
      id: "faq-12",
      question: "Jak spravovat studentské profily?",
      answer:
        "V sekci 'Studenti' můžete spravovat všechny informace o studentech včetně osobních údajů, kontaktů, zdravotních informací a studijních výsledků. Můžete přidávat nové studenty, upravovat existující profily a archivovat záznamy bývalých studentů. Systém umožňuje také hromadný import studentů z Excel souborů.",
      category: "studenti",
    },
  ];

  // Simulate recently viewed articles
  useEffect(() => {
    setRecentlyViewed([articles[1], articles[7], articles[4]]);
  }, []);

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );

    const matchesCategory =
      activeCategory === "all" || article.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;

    return matchesSearch && matchesCategory;
  });

  const handleArticleClick = (article: Article) => {
    // In a real app, this would navigate to the article page
    // For now, we'll just add it to recently viewed if it's not already there
    if (!recentlyViewed.some((item) => item.id === article.id)) {
      setRecentlyViewed((prev) => [article, ...prev].slice(0, 3));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      <div className="max-w-6xl mx-auto p-6 space-y-12">
        {/* Hero Section */}
        <section className="text-center py-12">
          {/* Search Section */}
          <div className="max-w-2xl mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Vyhledat v nápovědě..."
                className="pl-12 py-6 text-lg rounded-full shadow-lg border-2 border-gray-100 focus:border-[#884DEE] transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              {searchTerm && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-3 h-8 text-gray-400 hover:text-gray-600"
                  onClick={() => setSearchTerm("")}
                >
                  Vymazat
                </Button>
              )}
            </div>
          </div>
        </section>

        {/* Category Tabs */}
        <section className="py-4">
          <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="flex justify-center p-1 bg-gray-100/80 rounded-full w-full max-w-3xl mx-auto">
              {categories.map((category) => (
                <TabsTrigger
                  key={category.id}
                  value={category.id}
                  className={`flex items-center gap-2 rounded-full px-4 py-2 ${
                    activeCategory === category.id
                      ? "bg-[#884DEE] text-white"
                      : "text-gray-600 hover:text-[#884DEE]"
                  }`}
                >
                  <category.icon className="h-4 w-4" />
                  <span>{category.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </section>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Quick Links */}
            <Card className="shadow-md border-none overflow-hidden">
              <CardHeader className="bg-[#884DEE] text-white">
                <CardTitle>Rychlé odkazy</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  <Link
                    href="#"
                    className="flex items-center gap-3 p-4 hover:bg-purple-50 transition-colors"
                  >
                    <Video className="h-5 w-5 text-[#884DEE]" />
                    <span>Video tutoriály</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 p-4 hover:bg-purple-50 transition-colors"
                  >
                    <Download className="h-5 w-5 text-[#884DEE]" />
                    <span>Stáhnout příručku</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 p-4 hover:bg-purple-50 transition-colors"
                  >
                    <MessageSquare className="h-5 w-5 text-[#884DEE]" />
                    <span>Kontaktovat podporu</span>
                  </Link>
                  <Link
                    href="#"
                    className="flex items-center gap-3 p-4 hover:bg-purple-50 transition-colors"
                  >
                    <Settings className="h-5 w-5 text-[#884DEE]" />
                    <span>Nastavení systému</span>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Recently Viewed */}
            {recentlyViewed.length > 0 && (
              <Card className="shadow-md border-none">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center gap-2">
                    <Clock className="h-5 w-5 text-[#884DEE]" />
                    Nedávno zobrazené
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <div className="divide-y">
                    {recentlyViewed.map((article) => (
                      <Link
                        href="#"
                        key={`recent-${article.id}`}
                        className="flex items-start gap-3 p-4 hover:bg-purple-50 transition-colors"
                      >
                        <article.icon className="h-5 w-5 text-[#884DEE] mt-0.5" />
                        <div>
                          <p className="font-medium">{article.title}</p>
                          <p className="text-sm text-gray-500 mt-1">
                            {article.readTime} čtení
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Contact Support */}
            <Card className="shadow-md border-none bg-gradient-to-br from-purple-100 to-white">
              <CardHeader>
                <CardTitle className="text-lg">
                  Potřebujete další pomoc?
                </CardTitle>
                <CardDescription>
                  Náš tým podpory je připraven vám pomoci s jakýmkoliv problémem
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-[#884DEE] hover:bg-[#7a45d4]">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Zahájit chat s podporou
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="lg:col-span-2 space-y-8">
            {/* Articles Grid */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Užitečné články
                </h2>
                {filteredArticles.length > 0 && searchTerm && (
                  <p className="text-sm text-gray-500">
                    Nalezeno {filteredArticles.length} výsledků pro "
                    {searchTerm}"
                  </p>
                )}
              </div>

              {filteredArticles.length > 0 ? (
                <div className="grid sm:grid-cols-2 gap-4">
                  {filteredArticles.map((article) => {
                    const IconComponent = article.icon;
                    const categoryColor =
                      categories.find((c) => c.id === article.category)
                        ?.color || "#884DEE";

                    return (
                      <motion.div
                        key={article.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Card
                          className="cursor-pointer group hover:shadow-xl transition-all duration-300 border h-full flex flex-col"
                          onClick={() => handleArticleClick(article)}
                        >
                          <CardHeader className="pb-2">
                            <div className="flex items-start justify-between">
                              <div className="flex items-center gap-3">
                                <div
                                  className="p-2 rounded-lg transition-colors"
                                  style={{
                                    backgroundColor: `${categoryColor}20`,
                                  }}
                                >
                                  <IconComponent
                                    className="h-5 w-5"
                                    style={{ color: categoryColor }}
                                  />
                                </div>
                                <CardTitle className="text-base group-hover:text-[#884DEE] transition-colors">
                                  {article.title}
                                </CardTitle>
                              </div>
                              {(article.isNew || article.isPopular) && (
                                <Badge
                                  className={
                                    article.isNew
                                      ? "bg-green-500"
                                      : "bg-[#884DEE]"
                                  }
                                >
                                  {article.isNew ? "Nové" : "Populární"}
                                </Badge>
                              )}
                            </div>
                            <CardDescription className="mt-2">
                              {article.description}
                            </CardDescription>
                          </CardHeader>
                          <CardContent className="pb-2 flex-grow">
                            <div className="flex flex-wrap gap-2">
                              {article.tags.map((tag, index) => (
                                <Badge
                                  key={index}
                                  variant="outline"
                                  className="bg-gray-50"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </CardContent>
                          <CardFooter className="flex items-center justify-between pt-0">
                            <div className="flex items-center text-sm text-gray-500">
                              <Clock className="h-3 w-3 mr-1" />
                              {article.readTime} čtení
                            </div>
                            <Button
                              variant="ghost"
                              size="sm"
                              className="text-[#884DEE]"
                            >
                              Číst článek
                              <ChevronRight className="h-4 w-4 ml-1" />
                            </Button>
                          </CardFooter>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                <Card className="p-8 text-center bg-gray-50 border-dashed">
                  <div className="flex flex-col items-center gap-4">
                    <HelpCircle className="h-12 w-12 text-gray-300" />
                    <div>
                      <h3 className="text-lg font-medium">Žádné výsledky</h3>
                      <p className="text-gray-500 mt-1">
                        Zkuste upravit vyhledávací dotaz nebo vybrat jinou
                        kategorii
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSearchTerm("");
                        setActiveCategory("all");
                      }}
                    >
                      Resetovat filtry
                    </Button>
                  </div>
                </Card>
              )}

              {filteredArticles.length > 0 && (
                <div className="mt-6 text-center">
                  <Button variant="outline" className="text-[#884DEE]">
                    Zobrazit všechny články
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Button>
                </div>
              )}
            </section>

            {/* FAQ Section */}
            <section className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  Časté dotazy
                </h2>
                {activeCategory !== "all" && (
                  <Badge className="bg-[#884DEE]">
                    {categories.find((c) => c.id === activeCategory)?.name}
                  </Badge>
                )}
              </div>

              {filteredFaqs.length > 0 ? (
                <div className="space-y-3">
                  {filteredFaqs.map((faq) => (
                    <Card
                      key={faq.id}
                      className={`border transition-all duration-300 ${
                        openFaq === faq.id
                          ? "shadow-md border-[#884DEE]/30"
                          : "shadow-sm"
                      }`}
                    >
                      <CardHeader
                        className="p-4 cursor-pointer hover:bg-purple-50 rounded-t-lg"
                        onClick={() => toggleFaq(faq.id)}
                      >
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-base flex items-center">
                            <span className="mr-3 text-[#884DEE]">
                              <HelpCircle className="h-5 w-5" />
                            </span>
                            {faq.question}
                          </CardTitle>
                          <div
                            className={`transform transition-transform ${
                              openFaq === faq.id ? "rotate-180" : ""
                            }`}
                          >
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          </div>
                        </div>
                      </CardHeader>
                      <AnimatePresence>
                        {openFaq === faq.id && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <CardContent className="pt-0 px-4 pb-4 border-t">
                              <p className="text-gray-600 pl-8">{faq.answer}</p>
                            </CardContent>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </Card>
                  ))}
                </div>
              ) : (
                <Card className="p-6 text-center bg-gray-50 border-dashed">
                  <div className="flex flex-col items-center gap-4">
                    <HelpCircle className="h-10 w-10 text-gray-300" />
                    <div>
                      <h3 className="text-lg font-medium">Žádné výsledky</h3>
                      <p className="text-gray-500 mt-1">
                        Zkuste upravit vyhledávací dotaz nebo vybrat jinou
                        kategorii
                      </p>
                    </div>
                  </div>
                </Card>
              )}
            </section>

            {/* Testimonials */}
            <section className="bg-gradient-to-r from-purple-50 to-white rounded-xl p-6">
              <h2 className="text-xl font-bold mb-4">
                Co říkají naši uživatelé
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="bg-white border-none shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>JN</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Jana Nováková</p>
                          <div className="flex text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          "Centrum nápovědy mi pomohlo rychle se zorientovat v
                          systému. Články jsou srozumitelné a vždy najdu to, co
                          potřebuji."
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          Ředitelka ZŠ
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-white border-none shadow-sm">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarImage src="/placeholder.svg?height=40&width=40" />
                        <AvatarFallback>PK</AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-2">
                          <p className="font-medium">Petr Kovář</p>
                          <div className="flex text-yellow-400">
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4 fill-current" />
                            <Star className="h-4 w-4" />
                          </div>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          "Oceňuji rychlou odezvu podpory a kvalitní
                          dokumentaci. Video tutoriály jsou velmi užitečné pro
                          nové uživatele."
                        </p>
                        <p className="text-xs text-gray-400 mt-2">
                          IT správce gymnázia
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </div>

        {/* Contact Section */}
        <section className="py-8 bg-white rounded-xl shadow-md p-8 mt-12">
          <h2 className="text-2xl font-bold mb-6 text-center text-gray-900">
            Kontaktujte nás
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="bg-gradient-to-br from-purple-50 to-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Mail className="h-5 w-5 text-[#884DEE]" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">rektoris.cz@gmail.com</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Odpovíme do 24 hodin
                </p>
                <Button
                  variant="outline"
                  className="mt-4 text-[#884DEE] border-[#884DEE]"
                >
                  Napsat email
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-50 to-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <MessageSquare className="h-5 w-5 text-blue-600" />
                  Online Chat
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Dostupný v pracovní dny</p>
                <p className="text-sm text-muted-foreground mt-2">
                  8:00 - 16:00
                </p>
                <Button className="mt-4 bg-blue-600 hover:bg-blue-700">
                  Zahájit chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-green-50 to-white border-none shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-lg">
                  <Phone className="h-5 w-5 text-green-600" />
                  Telefon
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">+420 777 596 216</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Po-Pá 8:00-16:00
                </p>
                <Button
                  variant="outline"
                  className="mt-4 text-green-600 border-green-600"
                >
                  Zavolat
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-8 bg-[#884DEE] rounded-xl shadow-md p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-2">Zůstaňte informováni</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Přihlaste se k odběru novinek a buďte první, kdo se dozví o nových
            funkcích a vylepšeních
          </p>
          <div className="flex max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Váš email"
              className="rounded-r-none bg-white/20 border-white/30 text-white placeholder:text-white/70"
            />
            <Button className="rounded-l-none bg-white text-[#884DEE] hover:bg-white/90">
              Přihlásit se
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
}
