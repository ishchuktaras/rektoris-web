"use client";

import React from "react";
import Link from "next/link";
import {
  Bell,
  ExternalLink,
  Package2,
  LineChart,
  LayoutGrid,
  Users,
  ShoppingCart,
  Home,
  LucideIcon,
  Book,
  BookOpen,
  User2,
  Building,
  GraduationCapIcon,
  User2Icon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { usePathname, useRouter } from "next/navigation";
import { UserRoles } from "@/types/types";
import { useUserSession } from "@/store/auth";
import Logo from "../logo";

interface NavLink {
  title: string;
  href: string;
  icon: LucideIcon;
  count?: number;
}

type RoleLinks = {
  [key in UserRoles]: NavLink[];
};

export function renderLogedInUserLinks(role: UserRoles): NavLink[] {
  const commonLinks = [
    {
      title: "Dashboard",
      href: "/portal",
      icon: Home,
    },
  ];
  const links = {
    SUPER_ADMIN: [
      {
        title: "Admin Panel",
        href: "/dashboard/admin",
        icon: Home,
      },
    ],
    ADMIN: [
      {
        title: "Orders",
        href: "/dashboard/orders",
        icon: ShoppingCart,
        count: 6,
      },
      {
        title: "Products",
        href: "/dashboard/products",
        icon: Package2,
      },
      {
        title: "Customers",
        href: "/dashboard/customers",
        icon: Users,
      },
      {
        title: "Categories",
        href: "/dashboard/categories",
        icon: LayoutGrid,
      },
      {
        title: "Analytics",
        href: "/dashboard/analytics",
        icon: LineChart,
      },
    ],
    TEACHER: [
      {
        title: "Zkoušky",
        href: "/portal/teacher/exams",
        icon: BookOpen,
      },
      {
        title: "Rozvrh",
        href: "/portal/teacher/schedule",
        icon: Book,
      },
      {
        title: "Známky",
        href: "/portal/teacher/grades",
        icon: GraduationCapIcon,
      },
      {
        title: "Žáci",
        href: "/portal/teacher/students",
        icon: User2
      },
      {
        title: "Třídy",
        href: "/portal/teacher/classes",
        icon: Building
      },

    ],
    PARENT: [
      {
        title: "Moje děti",
        href: "/portal/parent/children",
        icon: Users,
        // count: 6,
      },
    ],
    STUDENT: [
      {
        title: "Courses",
        href: "/dashboard/courses",
        icon: ShoppingCart,
        count: 6,
      },
    ],
    SECRETARY: [
      {
        title: "Appointments",
        href: "/dashboard/appointments",
        icon: ShoppingCart,
        count: 6,
      },
    ],
  };
  return [...commonLinks, ...links[role]];
}

export default function PortalSidebar({ userRole }: { userRole: UserRoles }) {
  const sidebarLinks = renderLogedInUserLinks(userRole);
  const { clearSession } = useUserSession();
  const router = useRouter();
  async function handleLogout() {
    await clearSession();
    router.push("/login");
  }
  const pathname = usePathname();

  return (
    <div className="hidden border-r bg-muted/40 md:block">
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b lg:h-[60px]">
          <Logo />
          <Button variant="outline" size="icon" className="ml-auto h-8 w-8 mr-4">
            <Bell className="h-4 w-4" />
            <span className="sr-only">Přepnout oznámení</span>
          </Button>
        </div>
        <div className="flex-1">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {sidebarLinks.map((item, i) => {
              const Icon = item.icon;
              const isActive = item.href === pathname;
              return (
                <Link
                  key={i}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                    isActive && " bg-muted  text-primary"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {item.title}
                  {item.count && (
                    <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                      {item.count}
                    </Badge>
                  )}
                </Link>
              );
            })}
            {/* <Link
              href="/"
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary"
              )}
            >
              <ExternalLink className="h-4 w-4" />
              Live Website
            </Link> */}
          </nav>
        </div>
        <div className="mt-auto p-4">
          <Button onClick={handleLogout} size="sm" className="w-full">
            Odhlášení
          </Button>
        </div>
      </div>
    </div>
  );
}
