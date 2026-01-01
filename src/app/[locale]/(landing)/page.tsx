import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import AboutSection from "./components/about-section";
import ContactSection from "./components/contact-section";
import CTASection from "./components/cta-section";
import FAQSection from "./components/faq-section";
import FeaturesSection from "./components/features-section";
import GallerySection from "./components/gallery-section";
import HeroSection from "./components/hero-section";
import HowItWorksSection from "./components/how-it-works-section";
import ServicesSection from "./components/services-section";
import StatsSection from "./components/stats-section";
import TestimonialsSection from "./components/testimonials-section";

export default function IndexPage({ params }: PageProps) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <HowItWorksSection />
      <FeaturesSection />
      <GallerySection />
      <StatsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <CTASection />
    </main>
  );
}
