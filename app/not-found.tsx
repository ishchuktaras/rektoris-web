"use client"

import { LinkIcon as LinkBroken } from 'lucide-react'
import { ErrorPageLayout } from "@/components/error-page-layout"

export default function NotFoundPage() {
  return (
    <ErrorPageLayout
      statusCode="404"
      title="Stránka nenalezena"
      description="Jejda! Stránka, kterou hledáte, neexistuje. Možná byla přesunutá nebo smazáná."
      icon={LinkBroken}
    />
  )
}

