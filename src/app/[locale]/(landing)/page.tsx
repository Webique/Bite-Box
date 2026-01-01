import type { PageProps } from "@/types";
import type { Locale } from "next-intl";

import { setRequestLocale } from "next-intl/server";
import { use } from "react";

import About from "./components/about";
import Contact from "./components/contact";
import CTA from "./components/cta";
import FAQ from "./components/faq";
import Features from "./components/features";
import Hero from "./components/hero";
import HowItWorks from "./components/how-it-works";
import Services from "./components/services";
import Stats from "./components/stats";
import Testimonials from "./components/testimonials";

export default function IndexPage({ params }: PageProps) {
  const { locale } = use(params);
  setRequestLocale(locale as Locale);

  return (
    <main>
      <Hero />
      <About />
      <Services />
      <HowItWorks />
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <CTA />
    </main>
  );
}
