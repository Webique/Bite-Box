"use client";

import { Clock, DollarSign, Headphones, MapPin } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const features = [
  {
    key: "feature1" as const,
    icon: DollarSign,
    emoji: "💰"
  },
  {
    key: "feature2" as const,
    icon: Clock,
    emoji: "⏰"
  },
  {
    key: "feature3" as const,
    icon: MapPin,
    emoji: "📍"
  },
  {
    key: "feature4" as const,
    icon: Headphones,
    emoji: "🎧"
  }
];

export default function FeaturesSection() {
  const t = useTranslations("IndexPage.features");

  return (
    <section
      id="features"
      className="bg-linear-to-br relative overflow-hidden from-[#1A1A2E] via-[#16213E] to-[#0F0F1A] py-20 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="animate-blob absolute -start-40 top-20 h-80 w-80 rounded-full bg-[#FF6B35]/10 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute -end-40 bottom-20 h-80 w-80 rounded-full bg-[#FFB800]/10 blur-3xl" />
        <div className="bg-size-[80px_80px] absolute inset-0 bg-[linear-gradient(rgba(255,107,53,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,53,0.02)_1px,transparent_1px)]" />
      </div>

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#FF6B35]/30 bg-[#FF6B35]/10 px-4 py-2 text-sm font-medium text-[#FF6B35]">
            <span className="h-2 w-2 rounded-full bg-[#FF6B35]" />
            {t("badge")}
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </m.div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <m.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-[#FF6B35]/30 hover:bg-white/10">
                {/* Emoji */}
                <m.div
                  whileHover={{ scale: 1.2, rotate: 10 }}
                  className="mb-6 text-5xl"
                >
                  {feature.emoji}
                </m.div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-white">
                  {t(`${feature.key}.title` as "feature1.title")}
                </h3>
                <p className="leading-relaxed text-white/60">
                  {t(`${feature.key}.description` as "feature1.description")}
                </p>

                {/* Hover Glow */}
                <div className="absolute -bottom-20 -end-20 h-40 w-40 rounded-full bg-[#FF6B35]/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
