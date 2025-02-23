"use client";

import { cn } from "@/lib/utils";
import { useSchoolStore } from "@/store/school";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Logo({
  variant = "light",
  size = "md",
}: {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}) {
  const { school } = useSchoolStore();
  if (variant === "light") {
    return (
      <Link href={"/"} className="flex items-center space-x-2">
        {/* <div className="bg-[#884DEE] rounded-full p-1 md:hidden">
          <span className="text-white font-bold text-xl">
            <GraduationCap
              className={cn("w-6 h-6", size === "lg" && "w-10 h-10")}
            />
          </span>
        </div> */}
        <Image
          alt={school?.name ?? "Rektor|IS"}
          src={school?.logo ?? "/images/logo.png"}
          width={500}
          height={150}
          className={cn("w-32", size === "lg" && "w-40")}
        />
      </Link>
    );
  } else {
    return (
      <Link href={"/"} className="flex items-center space-x-2">
        {/* <div className="bg-white rounded-full p-1 md:hidden">
          <span className="text-[#884DEE] font-bold text-xl">
            <GraduationCap />
          </span>
        </div> */}
        <Image
          alt={school?.name ?? "Rektor|IS"}
          src={school?.logo ?? "/images/logo.png"}
          width={500}
          height={150}
          className={cn("w-32", size === "lg" && "w-40")}
        />
      </Link>
    );
  }
}
