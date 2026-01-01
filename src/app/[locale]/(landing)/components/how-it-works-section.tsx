"use client";

import { ChefHat, MessageCircle, Rocket, Search } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const steps = [
  {
    key: "step1" as const,
    icon: MessageCircle,
    number: "01",
    color: "from-primary to-brand-orange-light"
  },
  {
    key: "step2" as const,
    icon: Search,
    number: "02",
    color: "from-accent to-brand-yellow-light"
  },
  {
    key: "step3" as const,
    icon: ChefHat,
    number: "03",
    color: "from-brand-green to-brand-green-dark"
  },
  {
    key: "step4" as const,
    icon: Rocket,
    number: "04",
    color: "from-brand-blue to-[#2980B9]"
  }
];

export default function HowItWorksSection() {
  const t = useTranslations("IndexPage.howItWorks");

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,107,53,0.03)_0%,transparent_70%)]" />

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
          <h2 className="mb-4 text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-secondary/70">
            {t("description")}
          </p>
        </m.div>

        {/* Steps */}
        <div className="relative">
          {/* Connection Line */}
          <div className="bg-linear-to-b absolute left-1/2 top-24 hidden h-[calc(100%-6rem)] w-px -translate-x-1/2 from-primary/20 via-accent/20 to-brand-green/20 lg:block" />

          <div className="grid gap-8 lg:grid-cols-4">
            {steps.map((step, index) => (
              <m.div
                key={step.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative text-center"
              >
                {/* Number Badge */}
                <div className="relative mx-auto mb-6">
                  <div
                    className={`bg-linear-to-br mx-auto flex h-20 w-20 items-center justify-center rounded-2xl ${step.color} shadow-lg transition-transform duration-500 group-hover:scale-110`}
                  >
                    <step.icon className="h-10 w-10 text-white" />
                  </div>
                  <div className="absolute -end-2 -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-sm font-bold text-white">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <h3 className="mb-3 text-xl font-bold text-secondary">
                  {t(`${step.key}.title` as "step1.title")}
                </h3>
                <p className="text-secondary/70">
                  {t(`${step.key}.description` as "step1.description")}
                </p>

                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="absolute end-0 top-10 hidden -translate-y-1/2 translate-x-1/2 text-primary/30 lg:block rtl:rotate-180">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </div>
                )}
              </m.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
