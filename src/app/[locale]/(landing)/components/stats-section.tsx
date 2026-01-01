"use client";

import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import AnimatedCounter from "@/components/animated-counter";

const stats = [
  { key: "kitchens" as const, value: 50, suffix: "+", emoji: "🍳" },
  { key: "brands" as const, value: 100, suffix: "+", emoji: "🏷️" },
  { key: "orders" as const, value: 10000, suffix: "+", emoji: "📦" },
  { key: "satisfaction" as const, value: 98, suffix: "%", emoji: "⭐" }
];

export default function StatsSection() {
  const t = useTranslations("IndexPage.stats");

  return (
    <section className="relative overflow-hidden bg-[#FFF8F0] py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.05)_0%,transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <m.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group text-center"
            >
              <m.div
                whileHover={{ scale: 1.1 }}
                className="mb-4 inline-block text-4xl transition-transform"
              >
                {stat.emoji}
              </m.div>
              <div className="mb-2 text-4xl font-bold text-[#1A1A2E] md:text-5xl">
                <AnimatedCounter end={stat.value} duration={2} />
                <span className="text-[#FF6B35]">{stat.suffix}</span>
              </div>
              <p className="font-medium text-[#1A1A2E]/60">
                {t(stat.key as "kitchens")}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
