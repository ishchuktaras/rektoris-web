"use client";

import AboutUs from "@/components/frontend/about-us";
// import GridFeatures from "@/components/frontend/grid-features";
import HeroSection from "@/components/frontend/hero-section";
import LogoCloud from "@/components/frontend/logo-cloud";
import Pricing from "@/components/frontend/pricing";
import TabbedFeatures from "@/components/frontend/tabbed-features";
import React from "react";
import Benefits from "./benefits/page";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <LogoCloud />
      {/* <GridFeatures /> */}
      <TabbedFeatures />
      <Benefits />
      <Pricing />
      <AboutUs />
    </main>
  );
}
