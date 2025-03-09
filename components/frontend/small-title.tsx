import React from "react";
import { Badge } from "../ui/badge";

export default function SmallTitle({ title }: { title: string }) {
  return (
    <Badge
      variant="secondary"
      className="h-8 items-center gap-2 pl-4 pr-6 text-base"
    >
      <span className="relative flex h-2 w-2 mr-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[hsl(var(--primary))] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-[hsl(var(--primary))]"></span>
      </span>{" "}
      {title}
    </Badge>
  );
}
