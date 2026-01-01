"use client";

import { Eye, Target } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("IndexPage.about");

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FFF8F0] py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,184,0,0.05)_0%,transparent_50%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Image Side */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-[#FF6B35]/10">
                <ExportedImage
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=700&q=80"
                  alt="Professional Kitchen"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
                <div className="bg-linear-to-t absolute inset-0 from-[#1A1A2E]/40 to-transparent" />
              </div>

              {/* Floating Card */}
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -end-6 rounded-2xl border border-[#FF6B35]/20 bg-white p-6 shadow-xl lg:-end-12"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-linear-to-br flex h-14 w-14 items-center justify-center rounded-xl from-[#FF6B35] to-[#FFB800]">
                    <span className="text-2xl">🍳</span>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-[#1A1A2E]">+50</p>
                    <p className="text-sm text-[#1A1A2E]/60">Cloud Kitchens</p>
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>

          {/* Content Side */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 px-4 py-2 text-sm font-medium text-[#FF6B35]">
              <span className="h-2 w-2 rounded-full bg-[#FF6B35]" />
              {t("badge")}
            </div>

            {/* Title */}
            <h2 className="mb-6 text-3xl font-bold text-[#1A1A2E] md:text-4xl lg:text-5xl">
              {t("title")}
            </h2>

            {/* Description */}
            <p className="mb-10 text-lg leading-relaxed text-[#1A1A2E]/70">
              {t("description")}
            </p>

            {/* Vision & Mission */}
            <div className="space-y-6">
              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-[#FF6B35]/10 bg-white p-6 shadow-lg transition-all hover:border-[#FF6B35]/30 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="bg-linear-to-br flex h-12 w-12 items-center justify-center rounded-xl from-[#FF6B35]/10 to-[#FFB800]/10 text-[#FF6B35] transition-all group-hover:from-[#FF6B35] group-hover:to-[#FFB800] group-hover:text-white">
                    <Eye className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E]">
                    {t("vision")}
                  </h3>
                </div>
                <p className="text-[#1A1A2E]/70">{t("visionText")}</p>
              </m.div>

              <m.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                className="group rounded-2xl border border-[#2ECC71]/10 bg-white p-6 shadow-lg transition-all hover:border-[#2ECC71]/30 hover:shadow-xl"
              >
                <div className="mb-4 flex items-center gap-4">
                  <div className="bg-linear-to-br flex h-12 w-12 items-center justify-center rounded-xl from-[#2ECC71]/10 to-[#27AE60]/10 text-[#2ECC71] transition-all group-hover:from-[#2ECC71] group-hover:to-[#27AE60] group-hover:text-white">
                    <Target className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1A2E]">
                    {t("mission")}
                  </h3>
                </div>
                <p className="text-[#1A1A2E]/70">{t("missionText")}</p>
              </m.div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
