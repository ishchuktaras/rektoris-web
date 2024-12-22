import ContactUs from "@/components/frontend/contact-us";
import SectionHeader from "@/components/frontend/section-header";
import Logo from "@/components/logo";
import React from "react";

export default function page() {
  return (
    <div className="py-16">
      <div className="py-6">
        <div className="flex items-center justify-center pb-6">
          <Logo size="lg"/>
        </div>
      <SectionHeader
        title=""
        heading="Komplexní řešení pro správu škol"
        description="Zefektivněte provoz vaší vzdělávací instituce s naším all-in-one softwarem pro správu škol. Navrženo pro zvýšení efektivity a zlepšení komunikace mezi administrátory, učiteli, studenty a rodiči."
      />
      </div>
      <ContactUs />
    </div>
  );
}
