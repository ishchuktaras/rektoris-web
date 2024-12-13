import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, GraduationCap } from 'lucide-react'
import SmallTitle from "./small-title"
import Link from "next/link"
import Logo from "../logo"

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[80vh] flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-white px-4">
      <div className="container max-w-6xl mx-auto text-center space-y-8">

        <SmallTitle title=" Vítejte ve Škola Pro" />

        <h1 className="text-4xl md:text-6xl font-medium tracking-tight">
          Kompletní řešení pro správu školy{" "}
        </h1>

        <p className="max-w-[700px] text-lg text-muted-foreground mx-auto sm:text-xl">
          Posílejte svou vzdělávací instituci pomocí platformy all-in-one, která zjednodušuje správu školy, zlepšuje komunikaci a podporuje úspěch studentů.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="rounded-full h-12 px-6">
          Začněte
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline" className="h-12 px-6">
          Zobrazit vše moduly
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

