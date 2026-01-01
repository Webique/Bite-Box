"use client";

import { Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import WhatsAppIcon from "@/assets/icons/whatsapp-2.svg";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";

export default function CTASection() {
  const t = useTranslations("IndexPage.cta");

  return (
    <section
      id="contact"
      className="bg-linear-to-br from-primary via-brand-orange-light to-accent relative overflow-hidden py-20 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute -start-20 top-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute -end-20 bottom-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(255,255,255,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Floating Food Emojis */}
      <m.div
        animate={{ y: [-20, 20, -20], rotate: [0, 10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute start-[10%] top-[20%] text-5xl opacity-30"
      >
        🍕
      </m.div>
      <m.div
        animate={{ y: [20, -20, 20], rotate: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute end-[15%] top-[30%] text-5xl opacity-30"
      >
        🍔
      </m.div>
      <m.div
        animate={{ y: [-15, 15, -15], rotate: [0, 15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[25%] start-[20%] text-5xl opacity-30"
      >
        🍱
      </m.div>
      <m.div
        animate={{ y: [15, -15, 15], rotate: [0, -15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[20%] end-[10%] text-5xl opacity-30"
      >
        🥡
      </m.div>

      <div className="container relative z-10 mx-auto px-4">
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Title */}
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>

          {/* Description */}
          <p className="mb-10 text-lg text-white/90 md:text-xl">
            {t("description")}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="text-primary group h-14 gap-3 rounded-full bg-white px-8 text-lg font-semibold shadow-xl transition-all hover:scale-105 hover:bg-white hover:shadow-2xl"
              asChild
            >
              <Link href={siteConfig.links.whatsapp} target="_blank">
                <WhatsAppIcon className="size-5 h-auto transition-transform group-hover:scale-110" />
                {t("button")}
              </Link>
            </Button>

            <div className="flex items-center gap-3 text-white">
              <span className="hidden text-white/70 sm:inline">
                {t("phone")}
              </span>
              <a
                href={`tel:${siteConfig.support.whatsapp}`}
                className="flex items-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-6 py-3 font-semibold backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
              >
                <Phone className="h-5 w-5" />
                <span dir="ltr">{siteConfig.support.phone}</span>
              </a>
            </div>
          </div>
        </m.div>
      </div>
    </section>
  );
}
