"use client";

import { Quote, Sparkles, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    key: "testimonial1" as const,
    rating: 5
  },
  {
    key: "testimonial2" as const,
    rating: 5
  },
  {
    key: "testimonial3" as const,
    rating: 5
  }
];

export default function TestimonialsSection() {
  const t = useTranslations("IndexPage.testimonials");

  return (
    <section className="bg-linear-to-br from-secondary via-brand-dark-light relative overflow-hidden to-[#0F0F1A] py-24 lg:py-36">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="animate-blob bg-primary/8 absolute -start-40 top-20 h-96 w-96 rounded-full blur-3xl" />
        <div className="animate-blob animation-delay-2000 bg-brand-yellow/8 absolute -end-40 bottom-20 h-96 w-96 rounded-full blur-3xl" />
        <div className="animate-blob animation-delay-4000 bg-primary/5 absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl" />
      </div>

      {/* Subtle grid pattern */}
      <div className="bg-size-[60px_60px] absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)]" />

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
            className="border-primary/30 from-primary/20 to-brand-yellow/20 text-primary bg-linear-to-r mb-8 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-medium"
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
            className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl"
          >
            {t("title")}
          </m.h2>

          <m.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-white/60"
          >
            {t("description")}
          </m.p>
        </m.div>

        {/* Testimonials Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={testimonial.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <div className="hover:border-primary/40 relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-150 hover:bg-white/10">
                {/* Quote Icon */}
                <m.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                  className="from-primary/20 to-brand-yellow/20 group-hover:from-primary/30 group-hover:to-brand-yellow/30 bg-linear-to-br mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-150"
                >
                  <Quote className="text-primary h-7 w-7" />
                </m.div>

                {/* Rating */}
                <div className="mb-5 flex gap-1.5">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <m.div
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.15 + i * 0.05 + 0.3 }}
                      viewport={{ once: true }}
                    >
                      <Star className="fill-brand-yellow text-brand-yellow h-5 w-5" />
                    </m.div>
                  ))}
                </div>

                {/* Text */}
                <p className="mb-8 text-lg leading-relaxed text-white/80">
                  &quot;{t(`${testimonial.key}.text`)}&quot;
                </p>

                {/* Author */}
                <div className="mt-auto border-t border-white/10 pt-6">
                  <p className="text-lg font-semibold text-white">
                    {t(`${testimonial.key}.name`)}
                  </p>
                  <p className="text-primary/80 text-sm font-medium">
                    {t(`${testimonial.key}.role`)}
                  </p>
                </div>

                {/* Hover Glow */}
                <div className="from-primary/30 to-brand-yellow/20 bg-linear-to-br absolute -bottom-24 -end-24 h-48 w-48 rounded-full opacity-0 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
