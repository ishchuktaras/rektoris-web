import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import SectionHeader from "./section-header";
import {
  Book,
  BookOpen,
  Calendar,
  ChartBar,
  CreditCard,
  DollarSign,
  GraduationCap,
  MessageSquare,
  Settings,
  Shield,
  UserCheck,
  Users,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Book,
    title: "Evidence žáků",
    description:
      "Komplexní správa osobních údajů, studijních výsledků a docházky všech studentů.",
    href: "/student-records",
    image: "/images/student_information_system.jpg",
  },
  {
    icon: Calendar,
    title: "Rozvrh hodin",
    description:
      "Intuitivní vytváření a správa rozvrhů, přiřazování učeben a sledování harmonogramů výuky.",
    href: "/class-schedule",
    image: "/images/timetable_management.jpg",
  },
  {
    icon: UserCheck,
    title: "Správa zaměstnanců",
    description:
      "Centralizovaná evidence pedagogického a nepedagogického personálu, včetně jejich kvalifikace a úvazků.",
    href: "/staff-management",
    image: "/images/administrative_mamagement.jpg",
  },
  {
    icon: GraduationCap,
    title: "Klasifikace a hodnocení",
    description:
      "Elektronický systém zadávání známek, generování vysvědčení a sledování prospěchu studentů.",
    href: "/grading-system",
    image: "/images/performance_analytics.jpg",
  },
  {
    icon: MessageSquare,
    title: "Komunikační platforma",
    description:
      "Propojení školy, rodičů a žáků prostřednictvím bezpečného komunikačního rozhraní.",
    href: "/communication",
    image: "/images/communication_portal.jpg",
  },
  {
    icon: DollarSign,
    title: "Ekonomická agenda",
    description:
      "Správa školních poplatků, stipendií, rozpočtu a finančních transakcí školy.",
    href: "/financial-management",
    image: "/images/financial_mamagement.jpg",
  },
  {
    icon: BookOpen,
    title: "Správa učebních materiálů",
    description:
      "Centralizovaná evidence učebnic, studijních materiálů a knihovního fondu.",
    href: "/learning-resources",
    image: "/images/learning_materials_management.jpg",
  },
  {
    icon: Shield,
    title: "Bezpečnost a přístupová práva",
    description:
      "Komplexní bezpečnostní systém s řízením přístupových práv pro různé uživatelské role.",
    href: "/security-access",
    image: "/images/security_and_access.jpg",
  },
];

export default function GridFeatures() {
  return (
    <section
      id="features"
      className="relative w-full min-h-[100vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-300 to-white px-4"
    >
      <div className="container px-4 md:px-6">
        <SectionHeader
          title="Hlavní funkce"
          heading="Naše funkce"
          headingHighlight="Vše, co potřebujete pro správu školy"
          description="Rektor|IS nabízí širokou škálu funkcí pro efektivní správu škol a vzdělávacích institucí. Od evidence studentů až po komunikační nástroje, vše na jednom místě."
        />
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <GraduationCap className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold">Studentský management</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Komplexní evidence studentů s unikátními registračními čísly,
                profily a přiřazením do tříd.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Users className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold">Personální management</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Správa učitelů včetně kvalifikace, zkušeností a přiřazení k
                předmětům a třídám.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Book className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold">Správa předmětů</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Detailní konfigurace předmětů s bodovým systémem, teoretickou a
                praktickou částí.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <Calendar className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold">Třídní správa</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Hierarchická organizace ročníků, tříd a streamů s přiřazením
                třídních učitelů.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <BarChart3 className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold">Přehledný dashboard</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Centrální přehled s klíčovými metrikami a rychlým přístupem k
                nejdůležitějším funkcím.
              </p>
            </CardContent>
          </Card>
          <Card className="border-0 shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <MessageSquare className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold">Komunikační nástroje</h3>
              <p className="text-gray-500 dark:text-gray-400 mt-2">
                Vícekanálová komunikace mezi školou, učiteli, studenty a rodiči.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
