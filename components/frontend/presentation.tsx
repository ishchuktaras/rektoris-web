'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { ChevronLeft, ChevronRight, GraduationCap, Users, BookOpen, Calendar, Shield, Bell, Building2 } from 'lucide-react'
import { cn } from "@/lib/utils"
import type { Slide } from '@/types/presentation'
import React from 'react'

export function Presentation() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides: Slide[] = [
    {
      type: 'hero',
      title: "Škola Pro",
      subtitle: "Moderní systém pro řízení školy",
      content: "Komplexní řešení pro vzdělávací instituce"
    },
    {
      type: 'tabs',
      title: "Přehled systému",
      tabs: [
        {
          title: "Přehled systému",
          content: "Kompletní správa školy v jednom systému"
        },
        {
          title: "Funkce a možnosti",
          content: "Pokročilé nástroje pro efektivní řízení"
        },
        {
          title: "Rychlý přístup",
          content: "Intuitivní rozhraní pro snadné použití"
        }
      ]
    },
    {
      type: 'features',
      title: "Klíčové moduly",
      features: [
        { 
          icon: Building2, 
          title: "Administrativa", 
          desc: "Správa zaměstnanců a dokumentů",
          action: "Zobrazit více" 
        },
        { 
          icon: Users, 
          title: "Správa studentů", 
          desc: "Zápisy studentů a evidence",
          action: "Zobrazit více" 
        },
        { 
          icon: Calendar, 
          title: "Plánování výuky", 
          desc: "Rozvrhy hodin a organizace",
          action: "Zobrazit více" 
        },
        { 
          icon: BookOpen, 
          title: "Správa učebních osnov", 
          desc: "Učební plány a materiály",
          action: "Zobrazit více" 
        },
        { 
          icon: Shield, 
          title: "Zabezpečení", 
          desc: "Zabezpečený přístup k datům",
          action: "Zobrazit více" 
        },
        { 
          icon: Bell, 
          title: "Oznámení", 
          desc: "Push notifikace a komunikace",
          action: "Zobrazit více" 
        }
      ]
    },
    {
      type: 'cta',
      title: "Začněte ještě dnes",
      subtitle: "Transformujte vaši školu s Škola Pro",
      content: "Kontaktujte nás pro nezávaznou demonstraci systému",
      cta: "Kontaktujte nás pro demo"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="flex items-center space-x-2">
            <GraduationCap className="h-6 w-6 text-purple-600" />
            <span className="font-bold text-xl">Škola Pro</span>
          </div>
          <NavigationMenu className="ml-auto">
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Moduly</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                    {slides[2].features?.map((feature, index) => (
                      <li key={index} className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href="#"
                          >
                            {React.createElement(feature.icon as React.ComponentType<{ className: string }>, { className: "h-6 w-6 text-purple-600" })}
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {feature.title}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {feature.desc}
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button variant="ghost">Přihlaste se</Button>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Kontaktujte nás pro demo
                </Button>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>
      </header>

      <main className="container py-10">
        <Card className="w-full max-w-5xl mx-auto min-h-[600px] relative overflow-hidden">
          <div className="relative h-full">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 p-8 transition-all duration-500 ease-in-out",
                  currentSlide === index ? "opacity-100 z-10 translate-x-0" : "opacity-0 z-0 translate-x-full"
                )}
              >
                {slide.type === 'hero' && (
                  <div className="text-center space-y-6">
                    <div className="flex justify-center mb-6">
                      <div className="bg-purple-600 text-white p-4 rounded-full">
                        <GraduationCap className="w-12 h-12" />
                      </div>
                    </div>
                    <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
                      {slide.title}
                    </h1>
                    <p className="text-3xl font-semibold">{slide.subtitle}</p>
                    <p className="text-xl text-muted-foreground">{slide.content}</p>
                    <div className="flex justify-center gap-4 pt-4">
                      <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                        Kontaktujte nás pro demo
                      </Button>
                      <Button size="lg" variant="outline">
                        Zjistit více
                      </Button>
                    </div>
                  </div>
                )}

                {slide.type === 'tabs' && slide.tabs && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-center mb-8">{slide.title}</h2>
                    <Tabs defaultValue={slide.tabs[0].title.toLowerCase().replace(/\s+/g, '-')} className="w-full">
                      <TabsList className="grid w-full grid-cols-3">
                        {slide.tabs.map((tab, idx) => (
                          <TabsTrigger 
                            key={idx} 
                            value={tab.title.toLowerCase().replace(/\s+/g, '-')}
                          >
                            {tab.title}
                          </TabsTrigger>
                        ))}
                      </TabsList>
                      {slide.tabs.map((tab, idx) => (
                        <TabsContent 
                          key={idx} 
                          value={tab.title.toLowerCase().replace(/\s+/g, '-')}
                          className="mt-6 text-center text-lg"
                        >
                          {tab.content}
                        </TabsContent>
                      ))}
                    </Tabs>
                  </div>
                )}

                {slide.type === 'features' && slide.features && (
                  <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-center mb-8">{slide.title}</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {slide.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className={cn(
                            "group p-6 border rounded-lg bg-card",
                            "transform transition-all duration-300",
                            "hover:shadow-lg hover:scale-105"
                          )}
                        >
                          {React.createElement(feature.icon as React.ComponentType<{ className: string }>, { className: "w-10 h-10 text-purple-600 mb-4 transition-transform group-hover:scale-110" })}
                          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                          <p className="text-muted-foreground mb-4">{feature.desc}</p>
                          <Button variant="link" className="text-purple-600 p-0">
                            {feature.action}
                          </Button>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {slide.type === 'cta' && (
                  <div className="text-center space-y-6">
                    <h2 className="text-3xl font-bold">{slide.title}</h2>
                    <p className="text-2xl text-purple-600">{slide.subtitle}</p>
                    <p className="text-muted-foreground">{slide.content}</p>
                    <Button 
                      size="lg" 
                      className="mt-8 bg-purple-600 hover:bg-purple-700"
                    >
                      {slide.cta}
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center gap-4 z-20">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              disabled={currentSlide === 0}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <div className="flex gap-2">
              {slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-purple-600' : 'bg-muted'
                  }`}
                />
              ))}
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </Card>
      </main>
    </div>
  )
}

