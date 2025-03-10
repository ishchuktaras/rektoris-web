"use client"
import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
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
  RotateCcw,
  Zap,
  Layers,
} from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion"
import { cn } from "@/lib/utils"
import { useMediaQuery } from "@/hooks/use-media-query"

const demoScreens = [
  {
    id: "dashboard",
    title: "Dashboard",
    description: "Přehledný dashboard s klíčovými metrikami a rychlým přístupem k funkcím.",
    image: "/admin_dashboard.jpg",
    icon: Layers,
    color: "#884DEE",
  },
  {
    id: "students",
    title: "Evidence žáků",
    description: "Komplexní správa osobních údajů a studijních výsledků studentů.",
    image: "/student_form.jpg",
    icon: Users,
    color: "#FF6B6B",
  },
  {
    id: "schedule",
    title: "Rozvrh hodin",
    description: "Intuitivní vytváření a správa rozvrhů a harmonogramů výuky.",
    image: "/schedule.png",
    icon: Calendar,
    color: "#4ECDC4",
  },
  {
    id: "grading",
    title: "Klasifikace",
    description: "Elektronický systém zadávání známek a sledování prospěchu.",
    image: "/grading.png",
    icon: GraduationCap,
    color: "#FFD166",
  },
  {
    id: "communication",
    title: "Komunikace",
    description: "Bezpečná komunikační platforma pro školu, rodiče a žáky.",
    image: "/communication.jpg",
    icon: MessageSquare,
    color: "#06D6A0",
  },
]

export function InteractiveDemo() {
  const [currentScreen, setCurrentScreen] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [showParticles, setShowParticles] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragX = useMotionValue(0)
  const dragProgress = useTransform(dragX, [-200, 200], [1, -1])
  const isMobile = useMediaQuery("(max-width: 640px)")
  const isTablet = useMediaQuery("(min-width: 641px) and (max-width: 1024px)")

  // Auto-play functionality
  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isPlaying && !isDragging) {
      interval = setInterval(() => {
        setCurrentScreen((prev) => (prev + 1) % demoScreens.length)
      }, 5000)
    }

    return () => clearInterval(interval)
  }, [isPlaying, isDragging])

  // Reset auto-play after user interaction
  useEffect(() => {
    if (userInteracted) {
      const timer = setTimeout(() => {
        setUserInteracted(false)
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [userInteracted])

  // Handle drag end
  useEffect(() => {
    const unsubscribe = dragProgress.onChange((v) => {
      if (!isDragging) return

      if (v > 0.3) {
        handlePrev()
      } else if (v < -0.3) {
        handleNext()
      }
    })

    return () => unsubscribe()
  }, [isDragging])

  const handleNext = () => {
    setCurrentScreen((prev) => (prev + 1) % demoScreens.length)
    setUserInteracted(true)
    setIsPlaying(false)
    triggerParticles()
  }

  const handlePrev = () => {
    setCurrentScreen((prev) => (prev - 1 + demoScreens.length) % demoScreens.length)
    setUserInteracted(true)
    setIsPlaying(false)
    triggerParticles()
  }

  const handleTabChange = (index: number) => {
    setCurrentScreen(index)
    setUserInteracted(true)
    setIsPlaying(false)
    triggerParticles()
  }

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying)
    setUserInteracted(true)
  }

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen)
    setUserInteracted(true)
  }

  const triggerParticles = () => {
    setShowParticles(true)
    setTimeout(() => setShowParticles(false), 1000)
  }

  const handleDragStart = () => {
    setIsDragging(true)
    setIsPlaying(false)
  }

  const handleDragEnd = () => {
    setIsDragging(false)
    dragX.set(0)
  }

  // Get current screen color
  const currentColor = demoScreens[currentScreen].color
  const CurrentIcon = demoScreens[currentScreen].icon

  return (
    <div className="w-full max-w-6xl mx-auto">
      {/* Device frame */}
      <div className="relative transition-all duration-500 overflow-hidden bg-white rounded-xl shadow-lg">
        <div
          ref={containerRef}
          className={cn(
            "relative overflow-hidden transition-all duration-500 bg-white",
            isFullscreen ? "fixed inset-0 z-50 m-0 rounded-none" : "",
          )}
          style={{
            boxShadow: `0 0 0 2px ${currentColor}22, 0 0 20px ${currentColor}33`,
          }}
        >
          {/* Demo header */}
          <div
            className="p-2 sm:p-3 flex items-center justify-between border-b"
            style={{
              background: `linear-gradient(135deg, ${currentColor}11, ${currentColor}22)`,
            }}
          >
            <div className="flex items-center gap-1 sm:gap-2">
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-red-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-yellow-500"></div>
              <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="text-xs sm:text-sm font-medium flex items-center gap-2">
              <span className="hidden sm:inline">RektorIS</span>
              <span className="px-2 py-0.5 rounded-full text-white text-xs" style={{ backgroundColor: currentColor }}>
                Demo
              </span>
            </div>
            <div className="flex items-center gap-1 sm:gap-2">
              <Button variant="ghost" size="icon" onClick={togglePlayPause} className="h-6 w-6 sm:h-8 sm:w-8">
                {isPlaying ? <Pause className="h-3 w-3 sm:h-4 sm:w-4" /> : <Play className="h-3 w-3 sm:h-4 sm:w-4" />}
              </Button>
              <Button variant="ghost" size="icon" onClick={toggleFullscreen} className="h-6 w-6 sm:h-8 sm:w-8">
                {isFullscreen ? (
                  <Minimize2 className="h-3 w-3 sm:h-4 sm:w-4" />
                ) : (
                  <Maximize2 className="h-3 w-3 sm:h-4 sm:w-4" />
                )}
              </Button>
            </div>
          </div>

          {/* Demo content */}
          <motion.div
            className="relative"
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.2}
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            style={{ x: dragX }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentScreen}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="relative">
                  <Image
                    src={demoScreens[currentScreen].image || "/placeholder.svg?height=600&width=800"}
                    alt={demoScreens[currentScreen].title}
                    width={800}
                    height={600}
                    className="w-full h-auto object-cover aspect-video"
                  />

                  {/* Overlay gradient with dynamic color */}
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: `linear-gradient(135deg, ${currentColor}00, ${currentColor})`,
                    }}
                  />
                </div>

                {/* Screen info overlay */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-3 sm:p-6 text-white"
                  style={{
                    background: `linear-gradient(to top, ${currentColor}dd, ${currentColor}00)`,
                  }}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <div className="p-1 rounded-full" style={{ backgroundColor: currentColor }}>
                      <CurrentIcon className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">{demoScreens[currentScreen].title}</h3>
                  </div>
                  <p className="text-xs sm:text-sm opacity-90 line-clamp-2 sm:line-clamp-none">
                    {demoScreens[currentScreen].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Swipe indicator */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-between px-4 opacity-0 hover:opacity-100 transition-opacity">
              <motion.div
                className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                animate={{ x: isDragging ? 10 : 0, opacity: isDragging ? 1 : 0 }}
              >
                <ChevronLeft className="h-6 w-6 text-white" />
              </motion.div>
              <motion.div
                className="h-12 w-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center"
                animate={{ x: isDragging ? -10 : 0, opacity: isDragging ? 1 : 0 }}
              >
                <ChevronRight className="h-6 w-6 text-white" />
              </motion.div>
            </div>

            {/* Navigation arrows */}
            <Button
              variant="ghost"
              size="icon"
              onClick={handlePrev}
              className="absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full h-8 w-8 sm:h-10 sm:w-10 z-10"
            >
              <ChevronLeft className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={handleNext}
              className="absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm hover:bg-white/40 text-white rounded-full h-8 w-8 sm:h-10 sm:w-10 z-10"
            >
              <ChevronRight className="h-4 w-4 sm:h-6 sm:w-6" />
            </Button>
          </motion.div>

          {/* Progress bar */}
          <div className="relative h-1 bg-gray-200">
            <motion.div
              className="absolute top-0 left-0 h-full"
              style={{
                backgroundColor: currentColor,
                width: `${(currentScreen / (demoScreens.length - 1)) * 100}%`,
              }}
              initial={{ width: "0%" }}
              animate={{ width: `${(currentScreen / (demoScreens.length - 1)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>

          {/* Demo navigation tabs */}
          <div className="p-2 sm:p-4 bg-white">
            <div className="flex overflow-x-auto sm:overflow-visible sm:grid sm:grid-cols-3 md:grid-cols-5 gap-1 no-scrollbar">
              {demoScreens.map((screen, index) => {
                const Icon = screen.icon
                return (
                  <Button
                    key={screen.id}
                    variant="ghost"
                    size="sm"
                    onClick={() => handleTabChange(index)}
                    className={cn(
                      "flex-shrink-0 flex flex-col items-center gap-1 py-2 px-1 text-xs md:text-sm rounded-lg transition-all",
                      currentScreen === index ? "text-white" : "hover:bg-gray-100",
                    )}
                    style={{
                      backgroundColor: currentScreen === index ? screen.color : "transparent",
                    }}
                  >
                    <Icon className="h-4 w-4 md:h-5 md:w-5" />
                    <span className="text-[10px] md:text-xs line-clamp-1">{screen.title}</span>
                  </Button>
                )
              })}
            </div>
          </div>

          {/* Demo controls */}
          <div className="flex flex-col gap-2">
            {/* Progress and Reset */}
            <div
              className="p-2 md:p-4 border-t flex items-center justify-between"
              style={{
                background: `linear-gradient(135deg, ${currentColor}11, ${currentColor}22)`,
              }}
            >
              <div
                className="text-xs font-medium px-3 py-1.5 rounded-full"
                style={{
                  backgroundColor: currentColor,
                  color: "white",
                }}
              >
                {currentScreen + 1} / {demoScreens.length}
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-xs"
                onClick={() => {
                  setCurrentScreen(0)
                  triggerParticles()
                }}
              >
                <RotateCcw className="h-3 w-3 mr-1" />
                Reset
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="px-2 pb-2 md:px-4 md:pb-4 flex gap-2">
              <Button
                variant="outline"
                size="sm"
                className="flex-1 text-xs h-9 px-3"
                onClick={() => window.open("/contact-us", "_blank")}
              >
                Kontaktovat pro plný přístup
              </Button>
              <Button
                size="sm"
                className="flex-1 text-xs h-9 px-3 text-white flex items-center justify-center gap-1"
                style={{ backgroundColor: currentColor, borderColor: currentColor }}
              >
                <Zap className="h-3 w-3" />
                Vyzkoušet zdarma
              </Button>
            </div>
          </div>

          {/* Particles effect */}
          {showParticles && (
            <div className="absolute inset-0 pointer-events-none z-20">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 rounded-full"
                  style={{
                    backgroundColor: currentColor,
                    top: `${50 + (Math.random() * 20 - 10)}%`,
                    left: `${50 + (Math.random() * 20 - 10)}%`,
                  }}
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{
                    scale: [0, 1.5],
                    opacity: [1, 0],
                    x: Math.random() * 200 - 100,
                    y: Math.random() * 200 - 100,
                    rotate: Math.random() * 360,
                  }}
                  transition={{ duration: 1 }}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

