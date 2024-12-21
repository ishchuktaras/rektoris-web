'use client'

import { ServerCrash } from 'lucide-react'
import { ErrorPageLayout } from "@/components/error-page-layout"

export default function ErrorPage() {
  return (
    <ErrorPageLayout
      statusCode="500"
      title="Chyba serveru"
      description="Promiňte! Něco se na naší straně pokazilo. Náš tým byl informován a pracuje na odstranění problému."
      icon={ServerCrash}
    />
  )
}

