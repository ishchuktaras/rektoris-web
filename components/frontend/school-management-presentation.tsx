'use client'

import Image from "next/image"
import Link from "next/link"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronRight, GraduationCap, Users, Calendar, BookOpen, Shield, Bell, LayoutDashboard, ClipboardList, School, Building2 } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { FeatureCard } from "./feature-card"
import type { Feature, QuickAccessItem } from '@/types/presentation'

export function SchoolManagementPresentation() {
  const features: Feature[] = [
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
  ]

  const quickAccessItems: QuickAccessItem[] = [
    {
      title: "Denní přehled",
      description: "Aktuální docházka, události a úkoly",
      icon: LayoutDashboard,
      link: "#dashboard",
      image: "images/dash_overview.jpg",
    },
    {
      title: "Správa tříd",
      description: "Rozdělení žáků, rozvrhy, známky",
      icon: School,
      link: "#classes",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Učitelský sbor",
      description: "Přehled pedagogů a jejich úvazků",
      icon: GraduationCap,
      link: "#teachers",
      image: "/placeholder.svg?height=300&width=400",
    },
    {
      title: "Správa budov",
      description: "Učebny, tělocvičny, jídelna",
      icon: Building2,
      link: "#facilities",
      image: "/placeholder.svg?height=300&width=400",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-12">
        <Badge variant="secondary" className="mb-4">
          version 2.0
        </Badge>
        <div className="flex justify-center mb-4">
          <div className="bg-purple-600 text-white p-4 rounded-full">
            <GraduationCap className="h-12 w-12" />
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4">
          Škola Pro - Moderní systém pro řízení školy
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Komplexní řešení pro vzdělávací instituce
        </p>
        <div className="flex justify-center gap-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900"
              >
                <Link href="/contact-us">Kontaktujte nás pro demo</Link>
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Vítejte v Škola Pro</DialogTitle>
              </DialogHeader>
              <div className="p-6">
                <p>Děkujeme za váš zájem. Náš tým vás bude kontaktovat.</p>
              </div>
            </DialogContent>
          </Dialog>
          <Button variant="outline" size="lg">
            Zjistit více
          </Button>
        </div>
      </div>

      <Tabs defaultValue="overview" className="w-full space-y-8">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger 
            value="overview" 
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            <LayoutDashboard className="h-4 w-4 mr-2" />
            Přehled systému
          </TabsTrigger>
          <TabsTrigger 
            value="details"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            <ClipboardList className="h-4 w-4 mr-2" />
            Funkce a možnosti
          </TabsTrigger>
          <TabsTrigger 
            value="quickAccess"
            className="data-[state=active]:bg-purple-600 data-[state=active]:text-white"
          >
            <GraduationCap className="h-4 w-4 mr-2" />
            Rychlý přístup
          </TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-8">
          <div className="mb-6">
            <Image
              src="/images/dash_overview.jpg"
              alt="Přehled školního systému"
              className="w-full rounded-lg shadow-lg"
              width={800}
              height={400}
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
                src="/images/dash_overview.jpg"
                alt="Funkce systému"
                className="w-full rounded-lg shadow-lg"
                width={600}
                height={400}
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
                        <feature.icon className="h-5 w-5 mr-2 text-purple-600" />
                        {feature.title}
                      </h3>
                      <ul className="ml-7 list-disc space-y-1 marker:text-purple-600">
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
              <Card key={index} className="hover:shadow-lg transition-shadow group">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <item.icon className="h-5 w-5 text-purple-600 group-hover:scale-110 transition-transform" />
                    {item.title}
                  </CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src="/images/dash_classes.jpg"
                    alt={item.title}
                    className="w-full rounded-lg shadow-md mb-4"
                    width={400}
                    height={300}
                  />
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
                    Otevřít sekci
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

