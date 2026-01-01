"use client";

import { BarChart3, DollarSign, TrendingUp, Truck } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

export default function AboutSection() {
  const t = useTranslations("IndexPage.about");

  const stats = [
    {
      value: t("stat1"),
      label: t("stat1Label"),
      icon: TrendingUp,
      color: "text-brand-green",
      bgColor: "bg-brand-green/10"
    },
    {
      value: t("stat2"),
      label: t("stat2Label"),
      icon: DollarSign,
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      value: t("stat3"),
      label: t("stat3Label"),
      icon: Truck,
      color: "text-accent",
      bgColor: "bg-accent/10"
    },
    {
      value: t("stat4"),
      label: t("stat4Label"),
      icon: BarChart3,
      color: "text-brand-blue",
      bgColor: "bg-brand-blue/10"
    }
  ];

  return (
    <section
      id="about"
      className="bg-brand-cream relative overflow-hidden py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,184,0,0.05)_0%,transparent_50%)]" />

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
          <h2 className="text-secondary mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
        </m.div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Content Side */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-secondary/70 mb-6 text-lg leading-relaxed">
              {t("description")}
            </p>
            <p className="text-secondary/70 mb-10 text-lg leading-relaxed">
              {t("description2")}
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <m.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-lg transition-all hover:shadow-xl"
                >
                  <div
                    className={`mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl ${stat.bgColor}`}
                  >
                    <stat.icon className={`h-5 w-5 ${stat.color}`} />
                  </div>
                  <p className="text-secondary text-2xl font-bold">
                    {stat.value}
                  </p>
                  <p className="text-secondary/60 text-sm">{stat.label}</p>
                </m.div>
              ))}
            </div>
          </m.div>

          {/* Image Side */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="shadow-primary/10 relative overflow-hidden rounded-3xl shadow-2xl">
                <ExportedImage
                  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=700&q=80"
                  alt="Professional Kitchen"
                  width={600}
                  height={450}
                  className="h-auto w-full object-cover"
                />
                <div className="bg-linear-to-t from-secondary/40 absolute inset-0 to-transparent" />
              </div>

              {/* Floating Badge */}
              <m.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                viewport={{ once: true }}
                className="border-primary/20 absolute -bottom-6 -start-6 rounded-2xl border bg-white p-5 shadow-xl lg:-start-12"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-linear-to-br from-primary to-accent flex h-14 w-14 items-center justify-center rounded-xl">
                    <TrendingUp className="h-7 w-7 text-white" />
                  </div>
                  <div>
                    <p className="text-secondary text-2xl font-bold">44%</p>
                    <p className="text-secondary/60 text-sm">توفير التكاليف</p>
                  </div>
                </div>
              </m.div>
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
