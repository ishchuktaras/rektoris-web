import React, { useState } from "react";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  ChevronRight,
  ChevronDown,
  ChevronUp,
  GraduationCap,
  Users,
  Calendar,
  BookOpen,
  Shield,
  Bell,
  LayoutDashboard,
  ClipboardList,
  School,
  Building2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Logo from "@/components/logo";

interface FeatureCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  items: string[];
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon: Icon,
  title,
  items,
}) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="transition-all duration-200 hover:scale-102">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Icon className="h-6 w-6 mr-2" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {items
              .slice(0, isExpanded ? items.length : 1)
              .map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="mr-2">•</span>
                  {item}
                </div>
              ))}
            {items.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                className="mt-2 w-full flex items-center justify-center"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="h-4 w-4 mr-2" />
                    Zobrazit méně
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4 mr-2" />
                    Zobrazit více
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const SchoolManagementPresentation = () => {
  const features = [
    {
      icon: Users,
      title: "Administrativa",
      items: ["Správa zaměstnanců", "Finanční přehledy", "Dokumentace"],
    },
    {
      icon: GraduationCap,
      title: "Správa studentů",
      items: ["Zápisy studentů", "Hodnocení", "Docházka"],
    },
    {
      icon: Calendar,
      title: "Plánování výuky",
      items: ["Rozvrhy hodin", "Plánování událostí", "Rezervace místností"],
    },
    {
      icon: BookOpen,
      title: "Správa učebních osnov",
      items: ["Učební plány", "Materiály ke stažení", "Online výuka"],
    },
    {
      icon: Shield,
      title: "Zabezpečení",
      items: ["Zabezpečený přístup", "Šifrování dat", "Audit log"],
    },
    {
      icon: Bell,
      title: "Oznámení",
      items: ["Push notifikace", "Emailové zprávy", "SMS upozornění"],
    },
  ];

  const quickAccessItems = [
    {
      title: "Denní přehled",
      description: "Aktuální docházka, události a úkoly",
      icon: LayoutDashboard,
      link: "#dashboard",
      image: "/images/dash_overview.jpg",  
    },
    {
      title: "Správa tříd",
      description: "Rozdělení žáků, rozvrhy, známky",
      icon: School,
      link: "#classes",
      image: "/images/dash_classes.jpg",
    },
    {
      title: "Učitelský sbor",
      description: "Přehled pedagogů a jejich úvazků",
      icon: GraduationCap,
      link: "#teachers",
      image: "/images/dash_student.jpg",
    },
    {
      title: "Správa budov",
      description: "Učebny, tělocvičny, jídelna",
      icon: Building2,
      link: "#facilities",
      image: "/images/dash_student.jpg",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          version 2.0
        </Badge>
        <div className="flex justify-center mb-4">
        <Logo variant="light" size="lg"/>
        </div>
        <h1 className="text-4xl font-bold mb-4">
           - Moderní systém pro řízení školy
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Komplexní řešení pro vzdělávací instituce
        </p>
        <div className="flex justify-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
              >
                Začít
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Vítejte v Skola Pro</DialogTitle>
              </DialogHeader>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="lg">
            Zjistit více
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="mb-12">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview" className="flex items-center gap-2">
            <LayoutDashboard className="h-4 w-4" />
            Přehled systému
          </TabsTrigger>
          <TabsTrigger value="details" className="flex items-center gap-2">
            <ClipboardList className="h-4 w-4" />
            Funkce a možnosti
          </TabsTrigger>
          <TabsTrigger value="quickAccess" className="flex items-center gap-2">
            <GraduationCap className="h-4 w-4" />
            Rychlý přístup
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="mb-6">
            <Image
              src="/images/dash_overview.jpg"
              alt="Přehled školního systému"
              className="w-full rounded-lg mb-6"
              width={600}
              height={600}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="details">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Image
                src="/images/dash_student.jpg"
                alt="Funkce systému"
                className="w-full rounded-lg mb-6"
                width={600}
                height={600}
              />
            </div>
            <Card>
              <CardHeader>
                <CardTitle>Podrobné informace</CardTitle>
                <CardDescription>
                  Kompletní přehled funkcí a možností systému
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="border-b pb-4 last:border-b-0">
                      <h3 className="font-semibold mb-2 flex items-center">
                        <feature.icon className="h-5 w-5 mr-2" />
                        {feature.title}
                      </h3>
                      <ul className="ml-7 list-disc space-y-1">
                        {feature.items.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="quickAccess">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {quickAccessItems.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <item.icon className="h-5 w-5" />
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={item.image}
                    alt={item.title}
                    className="w-full rounded-lg mb-4"
                    width={600}
                    height={600}
                  />
                  <Button className="w-full">Otevřít sekci</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default SchoolManagementPresentation;
