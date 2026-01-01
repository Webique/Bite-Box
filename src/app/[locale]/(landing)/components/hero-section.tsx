"use client";

import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("IndexPage.hero");

  return (
    <section className="bg-secondary relative flex min-h-[700px] items-center overflow-hidden sm:min-h-[600px] lg:min-h-screen"></section>
  );
}
