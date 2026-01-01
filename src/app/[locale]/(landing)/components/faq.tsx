"use client";

import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import { useState } from "react";

const faqItems = ["q1", "q2", "q3", "q4", "q5"] as const;

export default function FAQSection() {
  const t = useTranslations("IndexPage.faq");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,107,53,0.03)_0%,transparent_50%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side - Header */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32"
          >
            {/* Badge with sparkle animation */}
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
              className="text-secondary/60 mb-8 text-lg leading-relaxed"
            >
              {t("description")}
            </m.p>

            {/* Decorative element */}
            <m.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="hidden lg:block"
            >
              <div className="from-primary/10 to-brand-yellow/10 bg-linear-to-br inline-flex items-center gap-4 rounded-2xl p-6">
                <div className="from-primary to-brand-orange bg-linear-to-br flex h-14 w-14 items-center justify-center rounded-xl shadow-lg">
                  <HelpCircle className="h-7 w-7 text-white" />
                </div>
                <div>
                  <p className="text-secondary font-semibold">
                    {faqItems.length}+
                  </p>
                  <p className="text-secondary/60 text-sm">
                    {t("questionsAnswered")}
                  </p>
                </div>
              </div>
            </m.div>
          </m.div>

          {/* Right Side - FAQ Items */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {faqItems.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <m.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.01 }}
                  className={`group relative overflow-hidden rounded-2xl border bg-white/90 backdrop-blur-sm transition-all duration-150 ${
                    isOpen
                      ? "border-primary/30 shadow-primary/5 shadow-xl"
                      : "hover:border-primary/20 border-gray-100 shadow-lg hover:shadow-xl"
                  }`}
                >
                  {/* Hover gradient overlay */}
                  <div
                    className={`from-primary/5 bg-linear-to-r absolute inset-0 to-transparent transition-opacity duration-150 ${
                      isOpen
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-50"
                    }`}
                  />

                  <button
                    onClick={() =>
                      setOpenIndex(openIndex === index ? null : index)
                    }
                    className="relative z-10 flex w-full items-center justify-between p-6 text-start"
                  >
                    <div className="flex items-center gap-4 pe-4">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-sm font-bold transition-all duration-150 ${
                          isOpen
                            ? "from-primary to-brand-orange bg-linear-to-br text-white"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        {index + 1}
                      </span>
                      <span
                        className={`text-lg font-semibold transition-colors duration-150 ${
                          isOpen
                            ? "text-primary"
                            : "text-secondary group-hover:text-primary"
                        }`}
                      >
                        {t(item as "q1")}
                      </span>
                    </div>
                    <m.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-150 ${
                        isOpen
                          ? "from-primary to-brand-orange shadow-primary/30 bg-linear-to-br text-white shadow-lg"
                          : "bg-primary/10 text-primary group-hover:bg-primary/20"
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </m.div>
                  </button>

                  <m.div
                    initial={false}
                    animate={{
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0
                    }}
                    transition={{ duration: 0.2, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="relative z-10 border-t border-gray-100 px-6 pb-6 pt-4">
                      <div className="flex gap-4">
                        <div className="bg-brand-yellow/20 mt-1 h-2 w-2 shrink-0 rounded-full" />
                        <p className="text-secondary/70 leading-relaxed">
                          {t(item.replace("q", "a") as "a1")}
                        </p>
                      </div>
                    </div>
                  </m.div>
                </m.div>
              );
            })}
          </m.div>
        </div>
      </div>
    </section>
  );
}
