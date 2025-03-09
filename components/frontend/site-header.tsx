"use client"

import dynamic from "next/dynamic"

// Import the client component with SSR disabled
const SiteHeaderClient = dynamic(() => import("./site-header-client").then((mod) => mod.SiteHeaderClient), {
  ssr: false,
})

export default function SiteHeader() {
  // Return a placeholder for SSR that will be replaced on the client
  return (
    <>
      {/* Static placeholder for SSR that matches the height of the header */}
      <div className="h-16 w-full" />

      {/* Client-only header that will be rendered after hydration */}
      <SiteHeaderClient />
    </>
  )
}

