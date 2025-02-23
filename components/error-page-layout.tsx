"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { TypeIcon as type, LucideIcon, RefreshCw } from 'lucide-react'

interface ErrorPageLayoutProps {
  statusCode: string
  title: string
  description: string
  icon: LucideIcon
  showRefresh?: boolean
}

export function ErrorPageLayout({ statusCode, title, description, icon: Icon, showRefresh = true }: ErrorPageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4">
        <div className="rounded-full bg-destructive p-6 w-24 h-24 flex items-center justify-center mb-8">
          <Icon className="w-12 h-12 text-destructive-foreground" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight mb-4">
          {statusCode} - {title}
        </h1>
        <p className="text-muted-foreground text-lg mb-8 max-w-md">
          {description}
        </p>
        <div className="flex gap-4 flex-wrap justify-center">
          <Button asChild>
            <Link href="/">Přejděte na domovskou stránku</Link>
          </Button>
          {showRefresh && (
            <Button 
              variant="outline" 
              onClick={() => window.location.reload()}
              className="gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Obnovit stránku
            </Button>
          )}
        </div>
      </main>
      <footer className="py-6 text-center border-t">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Všechna práva vyhrazena Rektor|IS
        </p>
      </footer>
    </div>
  )
}

