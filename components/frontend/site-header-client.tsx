"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Book,
  Calendar,
  GraduationCap,
  MessageSquare,
  UserCheck,
  DollarSign,
  BookOpen,
  Shield,
  Menu,
} from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import Image from "next/image";
import Logo from "../logo";

const modules = [
  {
    title: "Evidence žáků",
    href: "/student-records",
    description:
      "Komplexní správa osobních údajů, studijních výsledků a docházky všech studentů.",
    icon: Book,
  },
  {
    title: "Rozvrh hodin",
    href: "/class-schedule",
    description:
      "Intuitivní vytváření a správa rozvrhů, přiřazování učeben a sledování harmonogramů výuky.",
    icon: Calendar,
  },
  {
    title: "Správa zaměstnanců",
    href: "/staff-management",
    description:
      "Centralizovaná evidence pedagogického a nepedagogického personálu, včetně jejich kvalifikace a úvazků.",
    icon: UserCheck,
  },
  {
    title: "Klasifikace a hodnocení",
    href: "/grading-system",
    description:
      "Elektronický systém zadávání známek, generování vysvědčení a sledování prospěchu studentů.",
    icon: GraduationCap,
  },
  {
    title: "Komunikační platforma",
    href: "/communication",
    description:
      "Propojení školy, rodičů a žáků prostřednictvím bezpečného komunikačního rozhraní.",
    icon: MessageSquare,
  },
  {
    title: "Ekonomická agenda",
    href: "/financial-management",
    description:
      "Správa školních poplatků, stipendií, rozpočtu a finančních transakcí školy.",
    icon: DollarSign,
  },
  {
    title: "Správa učebních materiálů",
    href: "/learning-resources",
    description:
      "Centralizovaná evidence učebnic, studijních materiálů a knihovního fondu.",
    icon: BookOpen,
  },
  {
    title: "Bezpečnost a přístupová práva",
    href: "/security-access",
    description:
      "Komplexní bezpečnostní systém s řízením přístupových práv pro různé uživatelské role.",
    icon: Shield,
  },
];

export function SiteHeaderClient() {
  const [isOpen, setIsOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6 md:gap-10">
          <Logo />
          <nav className="hidden md:flex gap-6">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <Link href="/" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Domů
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-50 focus:bg-gray-50">
                    <span className="flex items-center gap-1">Moduly</span>
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[600px] gap-3 p-4 md:w-[600px] md:grid-cols-2 lg:w-[800px] lg:grid-cols-3 relative bg-white rounded-lg shadow-lg">
                      {modules.map((module) => (
                        <ListItem
                          key={module.title}
                          title={module.title}
                          href={module.href}
                          icon={
                            <module.icon className="h-5 w-5 text-[#884DEE]" />
                          }
                        >
                          {module.description}
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/benefits" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Benefity
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/pricing" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Ceník
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      O nás
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <Link href="/contact-us" legacyBehavior passHref>
                    <NavigationMenuLink
                      className={navigationMenuTriggerStyle()}
                    >
                      Kontakt
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-2">
            <Button variant="outline" asChild>
              <Link href="/login">Přihlásit se</Link>
            </Button>
            <Button className="bg-[#884DEE] hover:bg-[#7a45d4]" asChild>
              <Link href="/contact-us">Vyzkoušet zdarma</Link>
            </Button>
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Přepínací Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px] sm:w-[400px] pr-0">
              {/* Add SheetTitle for accessibility */}
              <SheetTitle className="sr-only">Navigační menu</SheetTitle>

              <div className="px-7">
                {/* Mobile menu logo - directly using Image */}
                <Logo />
                <nav className="mt-8 flex flex-col gap-4">
                  <Link
                    href="/"
                    className={cn(
                      "flex items-center gap-2 text-lg font-medium",
                      pathname === "/" ? "text-[#884DEE]" : "text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Domů
                  </Link>
                  <div className="flex flex-col gap-2">
                    <p className="text-lg font-medium">Moduly</p>
                    <div className="grid gap-2 pl-4">
                      {modules.map((module) => (
                        <Link
                          key={module.title}
                          href={module.href}
                          className="flex items-center gap-2 text-sm"
                          onClick={() => setIsOpen(false)}
                        >
                          <module.icon className="h-4 w-4 text-[#884DEE]" />
                          <span>{module.title}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                  <Link
                    href="/benefits"
                    className={cn(
                      "flex items-center gap-2 text-lg font-medium",
                      pathname === "/benefits"
                        ? "text-[#884DEE]"
                        : "text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Benefity
                  </Link>
                  <Link
                    href="/pricing"
                    className={cn(
                      "flex items-center gap-2 text-lg font-medium",
                      pathname === "/pricing"
                        ? "text-[#884DEE]"
                        : "text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Ceník
                  </Link>
                  <Link
                    href="/about"
                    className={cn(
                      "flex items-center gap-2 text-lg font-medium",
                      pathname === "/about"
                        ? "text-[#884DEE]"
                        : "text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    O nás
                  </Link>
                  <Link
                    href="/contact-us"
                    className={cn(
                      "flex items-center gap-2 text-lg font-medium",
                      pathname === "/contact"
                        ? "text-[#884DEE]"
                        : "text-foreground"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    Kontakt
                  </Link>
                </nav>
                <div className="mt-8 flex flex-col gap-2">
                  <Button variant="outline" asChild className="w-full">
                    <Link href="/login" onClick={() => setIsOpen(false)}>
                      Přihlásit se
                    </Link>
                  </Button>
                  <Button
                    className="w-full bg-[#884DEE] hover:bg-[#7a45d4]"
                    asChild
                  >
                    <Link href="/contact-us" onClick={() => setIsOpen(false)}>
                      Vyzkoušet zdarma
                    </Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="flex items-center gap-2">
            {icon}
            <div className="text-sm font-medium leading-none">{title}</div>
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
