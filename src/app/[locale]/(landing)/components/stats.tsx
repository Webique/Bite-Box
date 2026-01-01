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
    icon: ChefHat,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    key: "brands" as const,
    value: 100,
    suffix: "+",
    icon: Tag,
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    key: "orders" as const,
    value: 10000,
    suffix: "+",
    icon: Package,
    color: "text-brand-green",
    bgColor: "bg-brand-green/10"
  },
  {
    key: "satisfaction" as const,
    value: 98,
    suffix: "%",
    icon: Star,
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10"
  }
];

export default function StatsSection() {
  const t = useTranslations("IndexPage.stats");

  return (
    <section className="bg-brand-cream relative overflow-hidden py-16 lg:py-24">
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
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${stat.bgColor} transition-transform`}
              >
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </m.div>
              <div className="text-secondary mb-2 text-4xl font-bold md:text-5xl">
                <AnimatedCounter end={stat.value} duration={2} />
                <span className="text-primary">{stat.suffix}</span>
              </div>
              <p className="text-secondary/60 font-medium">
                {t(stat.key as "kitchens")}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
