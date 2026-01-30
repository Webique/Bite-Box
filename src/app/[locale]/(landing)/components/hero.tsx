"use client";

import { Phone, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";

export default function HeroSection() {
  const t = useTranslations("IndexPage");

  return (
    <section className="bg-secondary relative flex min-h-[700px] items-center overflow-hidden sm:min-h-[600px] lg:min-h-screen">
      {/* Background Image with Enhanced Overlay */}
      <div className="absolute inset-0">
        <ExportedImage
          src="/images/hero.jpeg"
          alt="Cloud Kitchen"
          fill
          className="object-cover"
          priority
        />
        {/* Multi-layered overlay for better contrast */}
        <div className="bg-linear-to-br absolute inset-0 from-black/60 via-black/40 to-black/70" />
        <div className="bg-linear-to-t absolute inset-0 from-black/50 via-transparent to-transparent" />
        <div className="bg-linear-to-r absolute inset-0 from-black/30 via-transparent to-black/20" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <m.div
          animate={{
            rotate: 360
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="bg-linear-to-r absolute -right-20 -top-20 h-40 w-40 rounded-full from-orange-500/10 to-yellow-500/10 blur-xl"
        />
        <m.div
          animate={{
            rotate: -360
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="bg-linear-to-r absolute -bottom-20 -left-20 h-60 w-60 rounded-full from-blue-500/10 to-purple-500/10 blur-xl"
        />
      </div>

      {/* Content */}
      <div className="container relative mx-auto flex items-center px-4 py-32 pt-44">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
          {/* Text Content */}
          <div className="flex flex-col justify-center space-y-5">
            {/* Badge with enhanced styling */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-linear-to-r inline-flex items-center gap-2 self-start rounded-full border border-orange-500/30 from-orange-500/20 to-yellow-500/20 px-6 py-3 text-sm font-medium text-orange-300 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4" />
              <span>{t("hero.subtitle")}</span>
            </m.div>

            {/* Main Title with Gradient */}
            <m.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl"
            >
              <span className="bg-linear-to-r from-white via-white to-orange-200 bg-clip-text text-transparent">
                {t("hero.title")}
              </span>
            </m.h1>

            {/* Tagline */}
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-xl font-semibold text-orange-300 md:text-2xl"
            >
              {t("hero.tagline")}
            </m.div>

            {/* Description */}
            <m.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-xl text-lg leading-relaxed text-gray-200 md:text-xl"
            >
              {t("hero.description")}
            </m.p>

            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-primary text-secondary hover:bg-primary/90 h-auto min-w-[180px] gap-2 rounded-full px-8 py-4 text-base font-bold shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
                asChild
              >
                <Link
                  href={siteConfig.links.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Phone className="h-5 w-5" />
                  {t("hero.cta")}
                </Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="h-auto gap-2 rounded-full border-white/30 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-white/20 hover:text-white"
                asChild
              >
                <Link href="#services">{t("hero.exploreServices")}</Link>
              </Button>
            </m.div>

            {/* Prepare and Book Text */}
            <m.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-base font-medium text-gray-300 md:text-lg"
            >
              {t("hero.prepareAndBook")}
            </m.p>
          </div>
        </div>
      </div>
    </section>
  );
}
