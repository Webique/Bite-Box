"use client";

import {
  ChefHat,
  FileCheck,
  Headphones,
  Megaphone,
  Truck,
  UtensilsCrossed
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const services = [
  {
    key: "service1" as const,
    icon: ChefHat,
    color: "from-[#FF6B35] to-[#FF8C5A]",
    bgColor: "bg-[#FF6B35]/10"
  },
  {
    key: "service2" as const,
    icon: FileCheck,
    color: "from-[#2ECC71] to-[#27AE60]",
    bgColor: "bg-[#2ECC71]/10"
  },
  {
    key: "service3" as const,
    icon: Headphones,
    color: "from-[#FFB800] to-[#FFCC33]",
    bgColor: "bg-[#FFB800]/10"
  },
  {
    key: "service4" as const,
    icon: Truck,
    color: "from-[#3498DB] to-[#2980B9]",
    bgColor: "bg-[#3498DB]/10"
  },
  {
    key: "service5" as const,
    icon: Megaphone,
    color: "from-[#9B59B6] to-[#8E44AD]",
    bgColor: "bg-[#9B59B6]/10"
  },
  {
    key: "service6" as const,
    icon: UtensilsCrossed,
    color: "from-[#E74C3C] to-[#C0392B]",
    bgColor: "bg-[#E74C3C]/10"
  }
];

export default function ServicesSection() {
  const t = useTranslations("IndexPage.services");

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 lg:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute end-0 top-0 h-96 w-96 rounded-full bg-[#FF6B35]/5 blur-3xl" />
        <div className="absolute bottom-0 start-0 h-96 w-96 rounded-full bg-[#FFB800]/5 blur-3xl" />
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
          <h2 className="mb-4 text-3xl font-bold text-[#1A1A2E] md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-[#1A1A2E]/70">
            {t("description")}
          </p>
        </m.div>

        {/* Services Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <m.div
              key={service.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-3xl border border-gray-100 bg-white p-8 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
            >
              {/* Hover Gradient */}
              <div
                className={`bg-linear-to-br absolute inset-0 ${service.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
              />

              {/* Icon */}
              <div
                className={`mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl ${service.bgColor} transition-all duration-500 group-hover:scale-110`}
              >
                <service.icon className="h-8 w-8 text-[#FF6B35]" />
              </div>

              {/* Content */}
              <h3 className="mb-3 text-xl font-bold text-[#1A1A2E] transition-colors group-hover:text-[#FF6B35]">
                {t(`${service.key}.title` as "service1.title")}
              </h3>
              <p className="leading-relaxed text-[#1A1A2E]/70">
                {t(`${service.key}.description` as "service1.description")}
              </p>

              {/* Decorative Corner */}
              <div
                className={`bg-linear-to-br absolute -bottom-10 -end-10 h-32 w-32 rounded-full ${service.color} opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-20`}
              />
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
