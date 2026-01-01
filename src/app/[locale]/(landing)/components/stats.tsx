"use client";

import { ChefHat, Package, Star, Tag } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import AnimatedCounter from "@/components/animated-counter";

const stats = [
  {
    key: "kitchens" as const,
    value: 50,
    suffix: "+",
    icon: ChefHat
  },
  {
    key: "brands" as const,
    value: 100,
    suffix: "+",
    icon: Tag
  },
  {
    key: "orders" as const,
    value: 10000,
    suffix: "+",
    icon: Package
  },
  {
    key: "satisfaction" as const,
    value: 98,
    suffix: "%",
    icon: Star
  }
];

export default function StatsSection() {
  const t = useTranslations("IndexPage.stats");

  return (
    <section className="bg-brand-cream relative overflow-hidden py-16">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,107,53,0.12)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(255,184,0,0.12)_0%,transparent_50%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-2 gap-6 lg:grid-cols-4 lg:gap-8">
          {stats.map((stat, index) => (
            <m.div
              key={stat.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <div className="p-6 text-center lg:p-8">
                <m.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="from-primary/10 to-brand-yellow/10 group-hover:from-primary/20 group-hover:to-brand-yellow/20 bg-linear-to-br mx-auto mb-5 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-150"
                >
                  <stat.icon className="text-primary h-8 w-8" />
                </m.div>

                <div className="text-secondary mb-2 text-4xl font-bold md:text-5xl">
                  <AnimatedCounter end={stat.value} duration={2000} />
                  <span className="text-primary">{stat.suffix}</span>
                </div>

                <p className="text-secondary/60 font-medium">{t(stat.key)}</p>
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
