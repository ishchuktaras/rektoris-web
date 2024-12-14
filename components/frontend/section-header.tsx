import React from 'react'
import SmallTitle from './small-title'

export default function SectionHeader({title,heading,description}:{title:string, heading:string, description:string}) {
    return (
        <div className="text-center space-y-4 mb-12">
            <SmallTitle title={title} />
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight">
                {heading}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
               {description}
            </p>
        </div>
    )
}
