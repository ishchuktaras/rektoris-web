'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp } from 'lucide-react'
import type { FeatureCardProps } from '../../types/presentation'

export function FeatureCard({ icon: Icon, title, items }: FeatureCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <div className="transition-all duration-200 hover:scale-[1.02]">
      <Card className="h-full">
        <CardHeader>
          <CardTitle className="flex items-center">
            <Icon className="h-6 w-6 mr-2 text-purple-600" />
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {items
              .slice(0, isExpanded ? items.length : 1)
              .map((item, index) => (
                <div key={index} className="flex items-center">
                  <span className="mr-2 text-purple-600">•</span>
                  {item}
                </div>
              ))}
            {items.length > 1 && (
              <Button
                variant="ghost"
                size="sm"
                className="mt-2 w-full flex items-center justify-center text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? (
                  <>
                    <ChevronUp className="h-4 w-4 mr-2" />
                    Zobrazit méně
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4 mr-2" />
                    Zobrazit více
                  </>
                )}
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

