import HelpPage from "@/components/frontend/help-page";
import SectionHeader from "@/components/frontend/section-header";
import React from "react";

export default function page() {
  return (
    <div className="py-12">
      <SectionHeader
        title="Potřebujete pomoc?"
        heading="Nápověda"
        headingHighlight="Potřebujete pomoc?"
        description="Najděte odpovědi na vaše otázky v naší nápovědě. Pokud zde nenajdete odpověď na vaši otázku, neváhejte nás kontaktovat."
      />
      <HelpPage />
    </div>
  );
}
