"use client";   

import SmallTitle from "./small-title"

interface SectionHeaderProps {
  title?: string
  heading: string
  description: string
  headingHighlight?: string
  align?: "left" | "center"
  size?: "default" | "large"
}

export default function SectionHeader({
  title,
  heading,
  description,
  headingHighlight,
  align = "center",
  size = "default",
}: SectionHeaderProps) {
  const alignClass = align === "center" ? "text-center" : "text-left"
  const containerClass = `space-y-6 mb-12 ${alignClass} max-w-[900px] ${align === "center" ? "mx-auto" : ""}`
  const headingSize = size === "large" ? "text-5xl md:text-6xl lg:text-7xl" : "text-4xl md:text-5xl lg:text-6xl"

  return (
    <div className={containerClass}>
      {title && <SmallTitle title={title} />}

      <h2 className={`${headingSize} font-extrabold tracking-tight`}>
        {headingHighlight ? (
          <>
            {heading}{" "}
            <div className="text-transparent bg-clip-text bg-gradient-to-r from-[hsl(var(--chart-3))] to-[hsl(var(--chart-4))]">
              {headingHighlight}
            </div>
          </>
        ) : (
          heading
        )}
      </h2>

      <p
        className={`text-[hsl(var(--muted-foreground))] ${size === "large" ? "text-lg md:text-xl" : "text-base md:text-lg"}`}
      >
        {description}
      </p>
    </div>
  )
}

