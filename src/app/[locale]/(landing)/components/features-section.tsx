"use client";

import {
    BadgeDollarSign,
    Clock,
    LayoutGrid,
    Lock,
    TrendingUp,
    Truck
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const features = [
  {
    key: "feature1" as const,
    icon: BadgeDollarSign,
    color: "text-brand-green",
    bgColor: "bg-brand-green/10"
  },
  {
    key: "feature2" as const,
    icon: LayoutGrid,
    color: "text-primary",
    bgColor: "bg-primary/10"
  },
  {
    key: "feature3" as const,
    icon: Clock,
    color: "text-accent",
    bgColor: "bg-accent/10"
  },
  {
    key: "feature4" as const,
    icon: Truck,
    color: "text-brand-blue",
    bgColor: "bg-brand-blue/10"
  },
  {
    key: "feature5" as const,
    icon: Lock,
    color: "text-brand-purple",
    bgColor: "bg-brand-purple/10"
  },
  {
    key: "feature6" as const,
    icon: TrendingUp,
    color: "text-brand-red",
    bgColor: "bg-brand-red/10"
  }
];

export default function FeaturesSection() {
  const t = useTranslations("IndexPage.features");

  return (
    <section
      id="features"
      className="bg-linear-to-br relative overflow-hidden from-secondary via-brand-dark-light to-[#0F0F1A] py-20 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="animate-blob absolute -start-40 top-20 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute -end-40 bottom-20 h-80 w-80 rounded-full bg-accent/10 blur-3xl" />
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
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary" />
            {t("badge")}
          </div>
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            {t("description")}
          </p>
        </m.div>

        {/* Features Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <m.div
              key={feature.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:border-primary/30 hover:bg-white/10">
                {/* Icon */}
                <m.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${feature.bgColor}`}
                >
                  <feature.icon className={`h-8 w-8 ${feature.color}`} />
                </m.div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-white">
                  {t(`${feature.key}.title` as "feature1.title")}
                </h3>
                <p className="leading-relaxed text-white/60">
                  {t(`${feature.key}.description` as "feature1.description")}
                </p>

                {/* Hover Glow */}
                <div className="absolute -bottom-20 -end-20 h-40 w-40 rounded-full bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
