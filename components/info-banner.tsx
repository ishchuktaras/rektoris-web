"use client";

import * as React from "react";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const bannerVariants = cva(
  "relative w-full flex items-center gap-4 rounded-lg py-2 px-4 mb-4 max-w-2xl mx-auto text-sm transition-all",
  {
    variants: {
      variant: {
        info: "bg-blue-100 text-blue-900 dark:bg-blue-950 dark:text-blue-200",
        success:
          "bg-green-100 text-green-900 dark:bg-green-950 dark:text-green-200",
        warning:
          "bg-orange-100 text-orange-900 dark:bg-orange-950 dark:text-orange-200",
        danger: "bg-red-100 text-red-900 dark:bg-red-950 dark:text-red-200",
      },
    },
    defaultVariants: {
      variant: "info",
    },
  }
);

interface BannerProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof bannerVariants> {
  message: string;
  onDismiss?: () => void | "info" | "success" | "warning" | "danger";
}

export function InfoBanner({
  message,
  variant,
  onDismiss,
  className,
  ...props
}: BannerProps) {
  const [isVisible, setIsVisible] = React.useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      role="alert"
      className={cn(
        bannerVariants({ variant }),
        "animate-in fade-in slide-in-from-top-2 duration-200",
        className
      )}
      {...props}
    >
      <div className="flex-1">{message}</div>
      <Button
        variant="ghost"
        size="icon"
        className={cn(
          "h-8 w-8 shrink-0 rounded-full",
          variant === "info"
            ? "hover:bg-blue-100 dark:hover:bg-blue-900"
            : "hover:bg-green-100 dark:hover:bg-green-900"
        )}
        onClick={() => {
          setIsVisible(false);
          onDismiss?.();
        }}
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Zavřít banner</span>
      </Button>
    </div>
  );
}
