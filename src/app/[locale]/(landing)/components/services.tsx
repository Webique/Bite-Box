"use client";

import {
  ChefHat,
  FileCheck,
  Headphones,
  Snowflake,
  Sparkles,
  Truck,
  UtensilsCrossed
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const services = [
  {
    key: "service1" as const,
    icon: ChefHat
  },
  {
    key: "service2" as const,
    icon: Snowflake
  },
  {
    key: "service3" as const,
    icon: Headphones
  },
  {
    key: "service4" as const,
    icon: FileCheck
  },
  {
    key: "service5" as const,
    icon: Truck
  },
  {
    key: "service6" as const,
    icon: UtensilsCrossed
  }
];

export default function ServicesSection() {
  const t = useTranslations("IndexPage.services");

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(255,107,53,0.04)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_80%,rgba(255,184,0,0.04)_0%,transparent_50%)]" />

      <div className="container relative z-10 mx-auto px-4">
        {/* Header */}
        <m.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="mb-16 text-center lg:mb-20"
        >
          <m.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="border-primary/20 from-primary/10 to-brand-yellow/10 text-primary bg-linear-to-r mb-8 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium"
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
            className="text-secondary mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          >
            {t("title")}
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-secondary/60 mx-auto max-w-2xl text-lg leading-relaxed"
          >
            {t("description")}
          </m.p>
        </m.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {services.map((service, index) => (
            <m.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group"
            >
              <div className="hover:border-primary/30 relative h-full overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-150 hover:shadow-xl">
                {/* Hover gradient overlay */}
                <div className="from-primary/5 bg-linear-to-br absolute inset-0 to-transparent opacity-0 transition-opacity duration-150 group-hover:opacity-100" />

                {/* Icon */}
                <m.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="from-primary/10 to-brand-yellow/10 group-hover:from-primary/20 group-hover:to-brand-yellow/20 bg-linear-to-br relative z-10 mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl transition-all duration-150"
                >
                  <service.icon className="text-primary h-8 w-8" />
                </m.div>

                {/* Content */}
                <h3 className="text-secondary group-hover:text-primary relative z-10 mb-3 text-xl font-bold transition-colors duration-150">
                  {t(`${service.key}.title`)}
                </h3>
                <p className="text-secondary/60 relative z-10 leading-relaxed">
                  {t(`${service.key}.description`)}
                </p>

                {/* Hover Glow */}
                <div className="from-primary/20 to-brand-yellow/10 bg-linear-to-br absolute -bottom-20 -end-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
