import React from "react";
import { Badge } from "../ui/badge";

export default function SmallTitle({ title }: { title: string }) {
  return (
    <Badge
      variant="secondary"
      className="inline-flex items-center px-3 py-1 rounded-full bg-[hsl(var(--primary)/10%)] text-[hsl(var(--primary))] text-sm font-medium tracking-wide animate-fade-in"
    >
      <span className="relative flex h-2 w-2 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--primary))] opacity-70"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--primary))]"></span>
      </span>
      {title}
    </Badge>
  );
}
