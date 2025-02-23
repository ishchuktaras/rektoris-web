import HelpPage from "@/components/frontend/help-page";
import SectionHeader from "@/components/frontend/section-header";
import React from "react";

export default function page() {
  return (
    <div className="py-12">
      <SectionHeader title="Sekce nápovědy" heading="Jak vám můžeme pomoci?" description="Najděte rychle odpovědi pomocí našich obsáhlých průvodců a často kladených otázek. Procházejte naši znalostní databázi nebo vyhledejte konkrétní témata a získejte podporu, kterou potřebujete." />
      <HelpPage />
    </div>
  );
}
