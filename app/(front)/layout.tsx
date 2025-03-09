import SiteFooter from "@/components/frontend/site-footer";
import SiteHeader from "@/components/frontend/site-header";
import React, { ReactNode } from "react";

export const metadata = {
  title: "Systém správy školy",
  description: "Komplexní řešení pro vzdělávací instituce",
};

export default function FrontLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  );
}
