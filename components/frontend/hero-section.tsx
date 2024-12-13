import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="container max-w-6xl mx-auto text-center space-y-8">
        <Badge variant="secondary" className="bg-white">
          <span className="text-rose-500 mr-1">✨</span> Welcome to Lucis
        </Badge>
        
        <h1 className="text-4xl md:text-6xl font-medium tracking-tight">
          Simplify Your Video Production{" "}
          <span className="whitespace-nowrap">With Lucis</span>
        </h1>
        
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Lucis empowers you to create stunning videos with precision and ease,
          all within a sleek and intuitive interface.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="h-12 px-6">
            Try for free
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-6">
            See features
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

