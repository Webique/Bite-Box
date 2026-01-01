"use client";

import { Quote, Star } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    key: "testimonial1" as const,
    rating: 5,
    avatar: "أ"
  },
  {
    key: "testimonial2" as const,
    rating: 5,
    avatar: "س"
  },
  {
    key: "testimonial3" as const,
    rating: 5,
    avatar: "م"
  }
];

export default function TestimonialsSection() {
  const t = useTranslations("IndexPage.testimonials");

  return (
    <section className="bg-linear-to-br from-secondary via-brand-dark-light relative overflow-hidden to-[#0F0F1A] py-20 lg:py-32">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="animate-blob bg-primary/10 absolute -start-40 top-20 h-80 w-80 rounded-full blur-3xl" />
        <div className="animate-blob animation-delay-2000 bg-accent/10 absolute -end-40 bottom-20 h-80 w-80 rounded-full blur-3xl" />
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
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl lg:text-5xl">
            {t("title")}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-white/70">
            {t("description")}
          </p>
        </m.div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <m.div
              key={testimonial.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="hover:border-primary/30 relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10">
                {/* Quote Icon */}
                <div className="bg-primary/10 mb-6 flex h-12 w-12 items-center justify-center rounded-xl">
                  <Quote className="text-primary h-6 w-6" />
                </div>

                {/* Rating */}
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="fill-accent text-accent h-5 w-5" />
                  ))}
                </div>

                {/* Text */}
                <p className="mb-6 leading-relaxed text-white/80">
                  &quot;{t(`${testimonial.key}.text` as "testimonial1.text")}
                  &quot;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="bg-linear-to-br from-primary to-accent flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold text-white">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">
                      {t(`${testimonial.key}.name` as "testimonial1.name")}
                    </p>
                    <p className="text-sm text-white/60">
                      {t(`${testimonial.key}.role` as "testimonial1.role")}
                    </p>
                  </div>
                </div>

                {/* Hover Glow */}
                <div className="bg-primary/20 absolute -bottom-20 -end-20 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
}
