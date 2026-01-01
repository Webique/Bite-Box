"use client";

import { ChefHat, MessageCircle, Rocket, Search, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const steps = [
  {
    key: "step1" as const,
    icon: MessageCircle,
    number: "01"
  },
  {
    key: "step2" as const,
    icon: Search,
    number: "02"
  },
  {
    key: "step3" as const,
    icon: ChefHat,
    number: "03"
  },
  {
    key: "step4" as const,
    icon: Rocket,
    number: "04"
  }
];

export default function HowItWorksSection() {
  const t = useTranslations("IndexPage.howItWorks");

  return (
    <section className="relative overflow-hidden bg-white py-24 lg:py-36">
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

        {/* Steps */}
        <div className="grid gap-8 lg:grid-cols-4 lg:gap-6">
          {steps.map((step, index) => (
            <m.div
              key={step.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group relative text-center"
            >
              {/* Step Number */}
              <m.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.15 + 0.2, duration: 0.3 }}
                viewport={{ once: true }}
                className="text-primary/10 mb-4 text-7xl font-bold"
              >
                {step.number}
              </m.div>

              {/* Icon Container */}
              <m.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
                className="from-primary/10 to-brand-yellow/10 group-hover:from-primary/20 group-hover:to-brand-yellow/20 bg-linear-to-br mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl transition-all duration-150"
              >
                <step.icon className="text-primary h-10 w-10" />
              </m.div>

              {/* Content */}
              <h3 className="text-secondary group-hover:text-primary mb-3 text-xl font-bold transition-colors duration-150">
                {t(`${step.key}.title`)}
              </h3>
              <p className="text-secondary/60 leading-relaxed">
                {t(`${step.key}.description`)}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
