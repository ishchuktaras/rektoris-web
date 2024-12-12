import { ArrowRight } from 'lucide-react'
import { Button } from "@/components/ui/button"

export default function LucisHero() {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-[#f8f8f8] px-4 text-center overflow-hidden">
      {/* Background pattern */}
      <div 
        className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.02)_25%,rgba(68,68,68,.02)_75%,transparent_75%,transparent)] bg-[length:500px_500px]"
        style={{
          transform: 'rotate(-45deg) scale(2)',
          opacity: 0.4
        }}
      />
      
      {/* Content */}
      <div className="relative max-w-3xl z-10">
        {/* Welcome badge */}
        <div className="inline-block mb-8">
          <div className="inline-flex items-center rounded-full bg-white/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-gray-900 ring-1 ring-inset ring-gray-200/50 shadow-sm">
            <svg
              viewBox="0 0 24 24"
              className="mr-2 h-4 w-4 text-red-500"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m7 4 10 8-10 8" />
            </svg>
            Welcome to Lucis
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-gray-900">
          Simplify Your Video Production With Lucis
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
          Lucis empowers you to create stunning videos with precision and ease,
          all within a sleek and intuitive interface.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button 
            size="lg" 
            className="bg-gray-900 text-white hover:bg-gray-800 rounded-full px-8 shadow-lg group"
          >
            Try for free 
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="bg-white/80 backdrop-blur-sm hover:bg-white/90 rounded-full px-8 shadow-sm group"
          >
            See features 
            <ArrowRight className="ml-2 h-4 w-4 text-red-500 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  )
}

