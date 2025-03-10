import { InteractiveDemo } from "@/components/frontend/interactive-demo";
import { SchoolTypeSelector } from "@/components/frontend/school-type-selector";
import { ROICalculator } from "@/components/frontend/roi-calculator";
import { AnimatedFeatures } from "@/components/frontend/animated-features";
import { InteractiveTestimonials } from "@/components/frontend/interactive-testimonials";
import { Chatbot } from "@/components/frontend/chatbot";
import SectionHeader from "@/components/frontend/section-header";

export default function Benefits() {
  return (
    <main className="min-h-screen">
      {/* Hero section with existing content */}
      <section className="py-20 bg-gradient-to-b from-gray-100 to-white">
        <div className="container mx-auto px-4">
          <SectionHeader
            title="Benefity"
            heading="Objevte výhody"
            headingHighlight="Proč si nás školy vybírají"
            description="Zefektivněte administrativu, zlepšete komunikaci a poskytněte kvalitní vzdělávání s naším komplexním
            informačním systémem pro školy všech velikostí."
          />

          {/* Interactive Demo Component */}
          <div className="mb-8">
            <InteractiveDemo />
          </div>
        </div>
      </section>

      {/* Animated Features Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">
            Klíčové funkce <span className="text-[#884DEE]">RektorIS</span>
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Objevte všechny možnosti, které náš systém nabízí
          </p>

          <AnimatedFeatures />
        </div>
      </section>

      {/* School Type Selector */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <SchoolTypeSelector />
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-8 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-2">
            Spočítejte si <span className="text-[#884DEE]">úspory</span>
          </h2>
          <p className="text-center text-gray-500 mb-10">
            Zjistěte, kolik času a peněz můžete ušetřit s RektorIS
          </p>

          <ROICalculator />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <InteractiveTestimonials />
        </div>
      </section>

      {/* Chatbot for the entire site */}
      <Chatbot />
    </main>
  );
}
