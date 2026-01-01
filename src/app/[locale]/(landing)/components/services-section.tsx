"use client";

import {
  ChefHat,
  FileCheck,
  Headphones,
  Snowflake,
  Truck,
  UtensilsCrossed
} from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const services = [
  {
    key: "service1" as const,
    icon: ChefHat,
    color: "from-primary to-brand-orange-light",
    bgColor: "bg-primary/10",
    iconColor: "text-primary"
  },
  {
    key: "service2" as const,
    icon: Snowflake,
    color: "from-brand-blue to-[#2980B9]",
    bgColor: "bg-brand-blue/10",
    iconColor: "text-brand-blue"
  },
  {
    key: "service3" as const,
    icon: Headphones,
    color: "from-brand-green to-brand-green-dark",
    bgColor: "bg-brand-green/10",
    iconColor: "text-brand-green"
  },
  {
    key: "service4" as const,
    icon: FileCheck,
    color: "from-accent to-brand-yellow-light",
    bgColor: "bg-accent/10",
    iconColor: "text-accent"
  },
  {
    key: "service5" as const,
    icon: Truck,
    color: "from-brand-purple to-[#8E44AD]",
    bgColor: "bg-brand-purple/10",
    iconColor: "text-brand-purple"
  },
  {
    key: "service6" as const,
    icon: UtensilsCrossed,
    color: "from-brand-red to-[#C0392B]",
    bgColor: "bg-brand-red/10",
    iconColor: "text-brand-red"
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
        <div className="bg-primary/5 absolute end-0 top-0 h-96 w-96 rounded-full blur-3xl" />
        <div className="bg-accent/5 absolute bottom-0 start-0 h-96 w-96 rounded-full blur-3xl" />
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
          <div className="border-primary/30 bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
            <span className="bg-primary h-2 w-2 rounded-full" />
            {t("badge")}
          </div>
          <h2 className="text-secondary mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="text-secondary/70 mx-auto max-w-2xl text-lg">
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
                <service.icon className={`h-8 w-8 ${service.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-secondary group-hover:text-primary mb-3 text-xl font-bold transition-colors">
                {t(`${service.key}.title` as "service1.title")}
              </h3>
              <p className="text-secondary/70 leading-relaxed">
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
