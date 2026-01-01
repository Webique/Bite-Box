"use client";

import { Building2, Phone } from "lucide-react";
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
      {/* Background Image */}
      <div className="absolute inset-0">
        <ExportedImage
          src="/images/hero.jpeg"
          alt="Cloud Kitchen"
          fill
          className="object-cover"
          priority
        />
        <div className="bg-linear-to-b absolute inset-0 from-black/30 via-black/20 to-black/10" />
        <div className="bg-linear-to-r absolute inset-0 from-black/20 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto flex items-center px-4 py-32">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text Content */}
          <div className="flex flex-col justify-center">
            <m.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-primary/20 text-primary mb-6 inline-flex items-center gap-2 self-start rounded-full px-4 py-2 text-sm"
            >
              <Building2 className="h-4 w-4" />
              <span>{t("hero.subtitle")}</span>
            </m.div>

            <m.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-4xl font-bold leading-tight text-white md:text-5xl lg:text-6xl"
            >
              {t("hero.title")}
            </m.h1>

            <m.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-8 max-w-lg text-lg leading-relaxed text-white/80"
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
          </div>
        </div>
      </div>
    </section>
  );
}
