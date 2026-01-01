import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import AboutSection from "./components/about-section";
import CTASection from "./components/cta-section";
import FeaturesSection from "./components/features-section";
import HeroSection from "./components/hero-section";
import ServicesSection from "./components/services-section";
import StatsSection from "./components/stats-section";

export default function IndexPage({ params }: PageProps) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturesSection />
      <StatsSection />
      <CTASection />
    </main>
  );
}
