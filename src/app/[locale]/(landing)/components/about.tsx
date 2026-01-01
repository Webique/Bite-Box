"use client";

import { Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("IndexPage.about");

  return (
    <section id="about" className="relative overflow-hidden">
      {/* Part 1: About Us - Text first, Image second */}
      <div className="bg-brand-cream relative py-24 lg:py-32">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,107,53,0.06)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(255,184,0,0.06)_0%,transparent_50%)]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Content */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="border-primary/20 from-primary/10 to-brand-yellow/10 text-primary bg-linear-to-r mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium"
              >
                <m.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-4 w-4" />
                </m.span>
                {t("badge")}
              </m.div>

              <m.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-secondary mb-2 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
              >
                {t("title")}
              </m.h2>

              <m.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                viewport={{ once: true }}
                className="text-primary mb-6 text-lg font-medium"
              >
                {t("subtitle")}
              </m.p>

              <m.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-secondary/70 mb-4 text-lg leading-relaxed"
              >
                {t("description")}
              </m.p>

              <m.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-secondary/70 text-lg leading-relaxed"
              >
                {t("description2")}
              </m.p>
            </m.div>

            {/* Image */}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <m.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="shadow-primary/10 relative overflow-hidden rounded-3xl shadow-2xl"
              >
                <ExportedImage
                  src="/images/about.jpeg"
                  alt="Professional Kitchen"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
              </m.div>
            </m.div>
          </div>
        </div>
      </div>

      {/* Part 2: Our Mission - Image first, Text second */}
      <div className="relative bg-white pt-24 lg:pt-32">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(255,107,53,0.04)_0%,transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_70%,rgba(255,184,0,0.04)_0%,transparent_50%)]" />

        <div className="container relative z-10 mx-auto px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <m.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <m.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="shadow-primary/10 relative max-h-[400px] overflow-hidden rounded-3xl shadow-2xl"
              >
                <ExportedImage
                  src="/images/mission.jpeg"
                  alt="Cloud Kitchen Mission"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover"
                />
              </m.div>
            </m.div>

            {/* Content */}
            <m.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="border-primary/20 from-primary/10 to-brand-yellow/10 text-primary bg-linear-to-r mb-6 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium"
              >
                <m.span
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Sparkles className="h-4 w-4" />
                </m.span>
                {t("missionBadge")}
              </m.div>

              <m.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="text-secondary mb-6 text-3xl font-bold leading-tight md:text-4xl lg:text-5xl"
              >
                {t("missionTitle")}
              </m.h2>

              <m.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-secondary/70 mb-4 text-lg leading-relaxed"
              >
                {t("missionDescription")}
              </m.p>

              <m.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="text-secondary/70 text-lg leading-relaxed"
              >
                {t("missionDescription2")}
              </m.p>
            </m.div>
          </div>
        </div>
      </div>
    </section>
  );
}
