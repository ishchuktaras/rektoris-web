import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import SectionHeader from "./section-header"
import { BookOpen, Calendar, ChartBar, CreditCard, MessageSquare, Settings, Users } from "lucide-react"


const features = [
    {
        title: "Správa informací o studentech",
        description: "Spravujte údaje o studentech, včetně zápisu, docházky a akademických záznamů, vše v jednom centralizovaném systému.",
        icon: Users,
        image: "/images/student_information_system.jpg"
    },
    {
        title: "Správa rozvrhů",
        description: "Vytvářejte a spravujte rozvrhy hodin, přiřazení učitelů a alokace místností snadno a efektivně.",
        icon: Calendar,
        image: "/images/timetable_management.jpg"
    },
    {
        title: "Správa učebních osnov",
        description: "Organizujte a sledujte obsah učebních osnov, vzdělávací cíle a vzdělávací zdroje napříč všemi ročníky.",
        icon: BookOpen,
        image: "/images/curriculum_management.jpg"
    },
    {
        title: "Analýza výkonnosti",
        description: "Generujte užitečné zprávy a analýzy o výkonnosti studentů, efektivitě učitelů a celkových metrikách školy.",
        icon: ChartBar,
        image: "/images/performance_analytics.jpg"
    },
    {
        title: "Komunikační portál",
        description: "Usnadněte bezproblémovou komunikaci mezi učiteli, studenty a rodiči prostřednictvím integrovaných systémů zasílání zpráv a oznámení.",
        icon: MessageSquare,
        image: "/images/communication_portal.jpg"
    },
    {
        title: "Správa finanční",
        description: "Zefektivněte proces výběru poplatků, generujte faktury a spravujte finanční záznamy s přesností.",
        icon: CreditCard,
        image: "/images/financial_mamagement.jpg"
    },
    {
        title: "Administrativní nástroje",
        description: "Přistupujte k sadě nástrojů pro správu školních zdrojů, personálu a provozních úkolů pro zajištění hladkého každodenního fungování.",
        icon: Settings,
        image: "/images/administrative_mamagement .jpg"
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
                </div>
            </div>
        </section>
    )
}

