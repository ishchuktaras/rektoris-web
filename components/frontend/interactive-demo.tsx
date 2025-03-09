"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Users,
  Calendar,
  GraduationCap,
  MessageSquare,
  ChevronRight,
  ChevronLeft,
  Play,
  Pause,
  Maximize2,
  Minimize2,
} from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

const demoScreens = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Přehledný dashboard s klíčovými metrikami a rychlým přístupem k funkcím.",
    image: "/dashboard-demo.jpg",
    icon: Users,
  },
  {
    id: "students",
    title: "Evidence žáků",
    description: "Komplexní správa osobních údajů a studijních výsledků studentů.",
    image: "/students-demo.jpg",
    icon: Users,
  },
  {
    id: "schedule",
    title: "Rozvrh hodin",
    description: "Intuitivní vytváření a správa rozvrhů a harmonogramů výuky.",
    image: "/schedule-demo.jpg",
    icon: Calendar,
  },
  {
    id: "grading",
    title: "Klasifikace",
    description: "Elektronický systém zadávání známek a sledování prospěchu.",
    image: "/grading-demo.jpg",
    icon: GraduationCap,
  },
  {
    id: "communication",
    title: "Komunikace",
    description: "Bezpečná komunikační platforma pro školu, rodiče a žáky.",
    image: "/communication-demo.jpg",
    icon: MessageSquare,
  },
]

export function InteractiveDemo() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying) {
      interval = setInterval(() => {
        setCurrentScreen((prev) => (prev + 1) % demoScreens.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [isPlaying])

  // Reset auto-play after user interaction
  useEffect(() => {
    if (userInteracted) {
      const timer = setTimeout(() => {
        setUserInteracted(false)
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [userInteracted])

  const handleNext = () => {
    setCurrentScreen((prev) => (prev + 1) % demoScreens.length)
    setUserInteracted(true)
    setIsPlaying(false)
  }

  const handlePrev = () => {
    setCurrentScreen((prev) => (prev - 1 + demoScreens.length) % demoScreens.length)
    setUserInteracted(true)
    setIsPlaying(false)
  }

  const handleTabChange = (index: number) => {
    setCurrentScreen(index)
    setUserInteracted(true)
    setIsPlaying(false)
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    setUserInteracted(true)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    setUserInteracted(true)
  }

  return (
    <div
      className={cn(
        "relative rounded-xl overflow-hidden transition-all duration-500 bg-white shadow-lg border border-gray-200",
        isFullscreen ? "fixed inset-0 z-50 m-0 rounded-none" : "max-w-5xl mx-auto",
      )}
    >
      {/* Demo header */}
      <div className="bg-gray-100 p-3 flex items-center justify-between border-b">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
        </div>
        <div className="text-sm font-medium text-gray-700">RektorIS Demo</div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" onClick={togglePlayPause} className="h-8 w-8">
            {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
          </Button>
          <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="h-8 w-8">
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      {/* Demo content */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScreen}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative"
          >
            <Image
              src={demoScreens[currentScreen].image || "/placeholder.svg?height=600&width=800"}
              alt={demoScreens[currentScreen].title}
              width={800}
              height={600}
              className="w-full object-cover aspect-video"
            />

            {/* Screen info overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
              <h3 className="text-xl font-bold">{demoScreens[currentScreen].title}</h3>
              <p className="text-sm opacity-90">{demoScreens[currentScreen].description}</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation arrows */}
        <Button
          variant="ghost"
          size="icon"
          onClick={handlePrev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full h-10 w-10"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={handleNext}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full h-10 w-10"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Demo navigation tabs */}
      <div className="p-4 bg-white">
        <Tabs defaultValue={demoScreens[currentScreen].id}>
          <TabsList className="w-full grid grid-cols-5">
            {demoScreens.map((screen, index) => (
              <TabsTrigger
                key={screen.id}
                value={screen.id}
                onClick={() => handleTabChange(index)}
                className={cn(
                  "flex flex-col items-center gap-1 py-2 px-1",
                  currentScreen === index ? "bg-[#884DEE] text-white" : "",
                )}
              >
                <screen.icon className="h-5 w-5" />
                <span className="text-xs">{screen.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      </div>

      {/* Demo controls */}
      <div className="p-4 bg-gray-50 border-t flex justify-between items-center">
        <div className="text-sm text-gray-500">
          {currentScreen + 1} / {demoScreens.length}
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={() => window.open("/contact-us", "_blank")}>
            Kontaktovat pro plný přístup
          </Button>
          <Button className="bg-[#884DEE] hover:bg-[#7a45d4]" size="sm">
            Vyzkoušet zdarma
          </Button>
        </div>
      </div>
    </div>
  )
}

