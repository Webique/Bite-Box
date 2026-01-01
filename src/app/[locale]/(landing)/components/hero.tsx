"use client";

import {
  ArrowDown,
  Cloud,
  MessageCircle,
  Sparkles,
  UtensilsCrossed
} from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";

export default function HeroSection() {
  const t = useTranslations("IndexPage.hero");

  return (
    <section className="bg-linear-to-br from-secondary via-brand-dark-light relative flex min-h-screen items-center overflow-hidden to-[#0F0F1A]">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="animate-blob bg-primary/20 absolute -start-20 top-20 h-72 w-72 rounded-full blur-3xl" />
        <div className="animate-blob animation-delay-2000 bg-accent/20 absolute -end-20 top-40 h-72 w-72 rounded-full blur-3xl" />
        <div className="animate-blob animation-delay-4000 bg-brand-green/10 absolute bottom-20 start-1/3 h-72 w-72 rounded-full blur-3xl" />

        {/* Grid Pattern */}
        <div className="bg-size-[60px_60px] absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.03)_1px,transparent_1px)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20 pt-32 lg:py-32 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <m.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-start"
          >
            {/* Badge */}
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="border-primary/30 bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm"
            >
              <Sparkles className="h-4 w-4" />
              <span>{t("badge")}</span>
            </m.div>

            {/* Title */}
            <m.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="mb-2 text-5xl font-bold text-white md:text-6xl lg:text-7xl"
            >
              {t("title")}
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-primary mb-6 text-2xl font-medium md:text-3xl"
            >
              {t("subtitle")}
            </m.p>

            {/* Description */}
            <m.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="mx-auto mb-4 max-w-xl text-lg leading-relaxed text-white/70 lg:mx-0"
            >
              {t("description")}
            </m.p>

            {/* Tagline */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-accent mb-8 flex items-center justify-center gap-2 text-xl font-semibold lg:justify-start"
            >
              <UtensilsCrossed className="h-5 w-5" />
              <span>{t("tagline")}</span>
            </m.div>

            {/* CTA Buttons */}
            <m.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-col items-center justify-center gap-4 sm:flex-row lg:justify-start"
            >
              <Button
                size="lg"
                className="bg-primary shadow-primary/30 hover:bg-brand-orange-dark hover:shadow-primary/40 group h-14 gap-3 rounded-full px-8 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-xl"
                asChild
              >
                <Link href={siteConfig.links.whatsapp} target="_blank">
                  <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
                  {t("cta")}
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-14 gap-2 rounded-full border-white/20 bg-white/5 px-8 text-lg font-medium text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10"
                asChild
              >
                <Link href="#about">
                  {t("learnMore")}
                  <ArrowDown className="h-4 w-4 animate-bounce" />
                </Link>
              </Button>
            </m.div>
          </m.div>

          {/* Hero Image */}
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div className="bg-linear-to-br from-primary/30 to-accent/20 absolute inset-0 rounded-3xl blur-3xl" />

              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-2 backdrop-blur-sm">
                <ExportedImage
                  src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80"
                  alt="Cloud Kitchen"
                  width={600}
                  height={500}
                  className="h-auto w-full rounded-2xl object-cover"
                  priority
                />
              </div>

              {/* Floating Elements */}
              <m.div
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -end-8 top-10 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md"
              >
                <UtensilsCrossed className="text-primary h-8 w-8" />
              </m.div>

              <m.div
                animate={{ y: [10, -10, 10] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -start-8 bottom-20 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/10 backdrop-blur-md"
              >
                <Cloud className="text-accent h-8 w-8" />
              </m.div>
            </div>
          </m.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 start-1/2 -translate-x-1/2 rtl:translate-x-1/2"
      >
        <m.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex h-12 w-7 items-start justify-center rounded-full border-2 border-white/20 p-2"
        >
          <m.div className="h-2 w-1 rounded-full bg-white/60" />
        </m.div>
      </m.div>
    </section>
  );
}
