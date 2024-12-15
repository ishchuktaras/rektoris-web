import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import SectionHeader from "./section-header"
import { Book, BookOpen, Calendar, ChartBar, CreditCard, DollarSign, GraduationCap, MessageSquare, Settings, Shield, UserCheck, Users } from "lucide-react"

const features = [
    {
        icon: Book,
        title: "Evidence žáků",
        description: "Komplexní správa osobních údajů, studijních výsledků a docházky všech studentů.",
        href: "/student-records",
        image: "/images/student_information_system.jpg"
    },
    {
        icon: Calendar,
        title: "Rozvrh hodin",
        description: "Intuitivní vytváření a správa rozvrhů, přiřazování učeben a sledování harmonogramů výuky.",
        href: "/class-schedule",
        image: "/images/timetable_management.jpg"
    },
    {
        icon: UserCheck,
        title: "Správa zaměstnanců",
        description: "Centralizovaná evidence pedagogického a nepedagogického personálu, včetně jejich kvalifikace a úvazků.",
        href: "/staff-management",
        image: "/images/administrative_mamagement.jpg"
    },
    {
        icon: GraduationCap,
        title: "Klasifikace a hodnocení",
        description: "Elektronický systém zadávání známek, generování vysvědčení a sledování prospěchu studentů.",
        href: "/grading-system",
        image: "/images/performance_analytics.jpg"
    },
    {
        icon: MessageSquare,
        title: "Komunikační platforma",
        description: "Propojení školy, rodičů a žáků prostřednictvím bezpečného komunikačního rozhraní.",
        href: "/communication",
        image: "/images/communication_portal.jpg"
    },
    {
        icon: DollarSign,
        title: "Ekonomická agenda",
        description: "Správa školních poplatků, stipendií, rozpočtu a finančních transakcí školy.",
        href: "/financial-management",
        image: "/images/financial_mamagement.jpg"
    },
    {
        icon: BookOpen,
        title: "Správa učebních materiálů",
        description: "Centralizovaná evidence učebnic, studijních materiálů a knihovního fondu.",
        href: "/learning-resources",
        image: "/images/learning_materials_management.jpg"
    },
    {
        icon: Shield,
        title: "Bezpečnost a přístupová práva",
        description: "Komplexní bezpečnostní systém s řízením přístupových práv pro různé uživatelské role.",
        href: "/security-access",
        image: "/images/security_and_access.jpg"
      }
]

export default function GridFeatures() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32">
            <div className="conteiner max-w-6xl mx-auto px-4 md:px-6">
                {/* Header */}
                <SectionHeader
                    title="Základní moduly"
                    heading="Komplexní řešení pro správu škol"
                    description="Zefektivněte provoz vaší vzdělávací instituce s naším all-in-one softwarem pro správu škol. Navrženo pro zvýšení efektivity a zlepšení komunikace mezi administrátory, učiteli, studenty a rodiči."
                />
                {/* Feature Cards */}
                <div className="grid md:grid-cols-2 gap-6">
                    <Card className="border-none shadow-lg">
                        <CardHeader>
                            <CardTitle>
                                {features[0].title}
                            </CardTitle>
                            <p className="text-muted-foreground">
                                {features[0].description}
                            </p>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src={features[0].image}
                                width={600}
                                height={400}
                                alt={features[0].title}
                                className="rounded w-full"
                            />
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-lg">
                        <CardHeader>
                            <CardTitle>
                                {features[1].title}
                            </CardTitle>
                            <p className="text-muted-foreground">
                                {features[1].description}
                            </p>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src={features[1].image}
                                width={600}
                                height={400}
                                alt={features[1].title}
                                className="rounded w-full"
                            />
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-lg">
                        <CardHeader>
                            <CardTitle>
                                {features[2].title}
                            </CardTitle>
                            <p className="text-muted-foreground">
                                {features[2].description}
                            </p>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src={features[2].image}
                                width={600}
                                height={400}
                                alt={features[2].title}
                                className="rounded w-full"
                            />
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-lg">
                        <CardHeader>
                            <CardTitle>
                                {features[3].title}
                            </CardTitle>
                            <p className="text-muted-foreground">
                                {features[3].description}
                            </p>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src={features[3].image}
                                width={600}
                                height={400}
                                alt={features[3].title}
                                className="rounded w-full"
                            />
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-lg">
                        <CardHeader>
                            <CardTitle>
                                {features[4].title}
                            </CardTitle>
                            <p className="text-muted-foreground">
                                {features[4].description}
                            </p>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src={features[4].image}
                                width={600}
                                height={400}
                                alt={features[4].title}
                                className="rounded w-full"
                            />
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-lg">
                        <CardHeader>
                            <CardTitle>
                                {features[5].title}
                            </CardTitle>
                            <p className="text-muted-foreground">
                                {features[5].description}
                            </p>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src={features[5].image}
                                width={600}
                                height={400}
                                alt={features[5].title}
                                className="rounded w-full"
                            />
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-lg">
                        <CardHeader>
                            <CardTitle>
                                {features[6].title}
                            </CardTitle>
                            <p className="text-muted-foreground">
                                {features[6].description}
                            </p>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src={features[6].image}
                                width={600}
                                height={400}
                                alt={features[6].title}
                                className="rounded w-full"
                            />
                        </CardContent>
                    </Card>
                    <Card className="border-none shadow-lg">
                        <CardHeader>
                            <CardTitle>
                                {features[7].title}
                            </CardTitle>
                            <p className="text-muted-foreground">
                                {features[7].description}
                            </p>
                        </CardHeader>
                        <CardContent>
                            <Image
                                src={features[7].image}
                                width={600}
                                height={400}
                                alt={features[7].title}
                                className="rounded w-full"
                            />
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

