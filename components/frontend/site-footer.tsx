"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";
import Link from "next/link";
import Logo from "../logo";

export default function SiteFooter() {
  const [open, setOpen] = React.useState(false);
  return (
    <footer className="w-full bg-[#884DEE] text-white">
      <div className="container px-4 py-16 md:px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Logo variant="dark" />
            <p className="text-sm text-white/90">
              Zefektivněte provoz vaší vzdělávací instituce s naším all-in-one
              softwarem pro správu škol. Navrženo pro zvýšení efektivity a
              zlepšení komunikace mezi administrátory, učiteli, studenty a
              rodiči.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="rounded-full bg-white p-2 hover:bg-white/90"
              >
                <Facebook className="h-4 w-4 text-[#884DEE]" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white p-2 hover:bg-white/90"
              >
                <Instagram className="h-4 w-4 text-[#884DEE]" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link
                href="#"
                className="rounded-full bg-white p-2 hover:bg-white/90"
              >
                <Linkedin className="h-4 w-4 text-[#884DEE]" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              {/* <Link
                href="#"
                className="rounded-full bg-white p-2 hover:bg-white/90"
              >
                <Youtube className="h-4 w-4 text-[#884DEE]" />
                <span className="sr-only">YouTube</span>
              </Link> */}
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Kontaktujte nás</h3>
            <div className="space-y-2 text-sm">
              <p>rektoris.cz@gmail.com</p>
              <p>+420 777 596 216</p>
              {/* <p>Masarykovo Nám. 4321, 586 01 Jihlava 1.</p> */}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Odkazy</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                <Link className="hover:underline" href="/">
                  Home
                </Link>
                <Link className="hover:underline" href="/help">
                  Nejčastější dotazy
                </Link>
                <Link
                  className="hover:underline"
                  href="/pricing"
                  onClick={() => setOpen(false)}
                >
                  Ceny
                </Link>
                <Link className="hover:underline" href="/grid-features">
                  Moduly
                </Link>
                <Link className="hover:underline" href="/school-onboarding">
                  Admin
                </Link>
              </nav>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold invisible">Odkazy</h3>
              <nav className="flex flex-col space-y-2 text-sm">
                {/* <Link className="hover:underline" href="#">
                  Kariéra
                </Link> */}
                <Link className="hover:underline" href="#">
                  O nás
                </Link>
                <Link className="hover:underline" href="/contact-us">
                  Kontaktujte nás
                </Link>
                <Link className="hover:underline" href="#">
                  Products
                </Link>
              </nav>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-bold">Newsletter</h3>
            <form className="space-y-2">
              <Input
                className="bg-white/10 border-white/20 placeholder:text-white/50"
                placeholder="Enter email.."
                type="email"
              />
              <Button className="border border-white" type="submit">
                Přihlaste se k odběru
                <svg
                  className="ml-2 h-4 w-4"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container flex flex-col items-center justify-center gap-4 py-6 text-center text-sm md:h-16 md:flex-row md:py-0">
          <div className="text-white/60">
            Copyright@{new Date().getFullYear()} Všechna práva vyhrazena
            Rektor|IS
          </div>
        </div>
      </div>
    </footer>
  );
}
