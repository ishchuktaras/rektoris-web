import ContactUs from "@/components/frontend/contact-us";
import SectionHeader from "@/components/frontend/section-header";
import Logo from "@/components/logo";
import React from "react";

export default function page() {
  return (
    <div className="py-14">
      <div className="py-6">
        <div className="flex items-center justify-center pb-8">
          <Logo size="lg"/>
        </div>
      <SectionHeader
        title=""
        heading="Transformujte vaši školu s našim systémem"
        description="Objevte moderní řešení pro efektivní správu vaší vzdělávací instituce. Náš systém je navržen tak, aby vyhověl potřebám škol všech velikostí."
      />
      </div>
      <ContactUs />
    </div>
  );
}
