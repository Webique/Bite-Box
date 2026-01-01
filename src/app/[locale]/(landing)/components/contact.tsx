"use client";

import { MapPin, MessageCircle, Phone, Send, Sparkles } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

// Animated input component
function AnimatedInput({
  label,
  required,
  ...props
}: {
  label: string;
  required?: boolean;
} & Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onAnimationStart" | "onDragStart" | "onDragEnd" | "onDrag"
>) {
  return (
    <m.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <label className="text-secondary mb-2 block text-sm font-medium">
        {label} {required && "*"}
      </label>
      <input
        {...props}
        required={required}
        className="text-secondary focus:border-primary focus:ring-primary/20 hover:border-primary/40 focus:shadow-primary/5 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-gray-400 hover:bg-white focus:bg-white focus:shadow-lg focus:ring-2"
      />
    </m.div>
  );
}

// Contact card component with enhanced hover
function ContactCard({
  href,
  icon: Icon,
  children,
  index
}: {
  href?: string;
  icon: React.ElementType;
  children: React.ReactNode;
  index: number;
}) {
  const content = (
    <m.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="border-primary/10 hover:border-primary/30 group relative flex items-center gap-4 overflow-hidden rounded-2xl border bg-white px-6 py-5 transition-all duration-150"
    >
      {/* Hover linear overlay */}
      <div className="from-primary/5 bg-linear-to-r absolute inset-0 to-transparent opacity-0 transition-opacity duration-150 group-hover:opacity-100" />

      {/* Icon container with animation */}
      <m.div
        className="from-primary/10 to-brand-yellow/10 group-hover:from-primary/20 group-hover:to-brand-yellow/20 bg-linear-to-br relative z-10 flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-150"
        whileHover={{ rotate: [0, -5, 5, 0] }}
        transition={{ duration: 0.25 }}
      >
        <Icon className="text-primary h-5 w-5 transition-transform duration-150 group-hover:scale-110" />
      </m.div>

      <span className="text-secondary group-hover:text-primary relative z-10 font-semibold transition-colors duration-150">
        {children}
      </span>
    </m.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        className="block"
      >
        {content}
      </a>
    );
  }
  return content;
}

export default function Contact() {
  const t = useTranslations("IndexPage.contact");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phone = formData.get("phone") as string;
    const email = formData.get("email") as string;
    const company = formData.get("company") as string;
    const message = formData.get("message") as string;

    const subject = encodeURIComponent(
      `New Contact Request from ${firstName} ${lastName}`
    );
    const body = encodeURIComponent(
      `Name: ${firstName} ${lastName}\nPhone: +966${phone}\nEmail: ${email}\nCompany: ${company || "N/A"}\n\nMessage:\n${message || "N/A"}`
    );

    window.location.href = `mailto:${siteConfig.support.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section
      id="contact"
      className="bg-brand-cream relative overflow-hidden py-24 lg:py-36"
    >
      {/* Background linears */}
      <div className="absolute inset-0 bg-[radial-linear(ellipse_at_30%_20%,rgba(255,107,53,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-linear(ellipse_at_70%_80%,rgba(255,184,0,0.08)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-linear(ellipse_at_50%_50%,rgba(255,255,255,0.5)_0%,transparent_70%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Start Side - Info */}
          <m.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
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
              className="text-secondary/60 mb-12 text-lg leading-relaxed"
            >
              {t("subtitle")}
            </m.p>

            {/* Contact Options */}
            <div className="space-y-4">
              <ContactCard
                href={siteConfig.links.whatsapp}
                icon={MessageCircle}
                index={0}
              >
                {t("whatsapp")}
              </ContactCard>

              <ContactCard
                href={`tel:${siteConfig.support.whatsapp}`}
                icon={Phone}
                index={1}
              >
                <span dir="ltr">{siteConfig.support.phone}</span>
              </ContactCard>

              <ContactCard icon={MapPin} index={2}>
                {t("location")}
              </ContactCard>
            </div>
          </m.div>

          {/* End Side - Form */}
          <m.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative"
          >
            <m.div
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              className="shadow-primary/5 relative rounded-3xl border border-gray-100/80 bg-white/90 p-8 shadow-2xl backdrop-blur-sm lg:p-10"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Row */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <AnimatedInput
                    label={t("firstName")}
                    type="text"
                    name="firstName"
                    required
                    placeholder={t("firstNamePlaceholder")}
                  />
                  <AnimatedInput
                    label={t("lastName")}
                    type="text"
                    name="lastName"
                    required
                    placeholder={t("lastNamePlaceholder")}
                  />
                </div>

                {/* Phone */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="text-secondary mb-2 block text-sm font-medium">
                    {t("phone")} *
                  </label>
                  <div className="flex gap-3" dir="ltr">
                    <div className="hover:border-primary/30 flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 transition-colors duration-300">
                      <span className="text-lg">🇸🇦</span>
                      <span className="text-sm font-medium text-gray-500">
                        +966
                      </span>
                    </div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder={t("phonePlaceholder")}
                      className="text-secondary focus:border-primary focus:ring-primary/20 hover:border-primary/40 focus:shadow-primary/5 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-gray-400 hover:bg-white focus:bg-white focus:shadow-lg focus:ring-2"
                    />
                  </div>
                </m.div>

                {/* Email */}
                <AnimatedInput
                  label={t("email")}
                  type="email"
                  name="email"
                  required
                  dir="ltr"
                  placeholder={t("emailPlaceholder")}
                />

                {/* Company */}
                <AnimatedInput
                  label={t("company")}
                  type="text"
                  name="company"
                  placeholder={t("companyPlaceholder")}
                />

                {/* Message */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <label className="text-secondary mb-2 block text-sm font-medium">
                    {t("message")}
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder={t("messagePlaceholder")}
                    className="text-secondary focus:border-primary focus:ring-primary/20 hover:border-primary/40 focus:shadow-primary/5 w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 outline-none transition-all duration-300 placeholder:text-gray-400 hover:bg-white focus:bg-white focus:shadow-lg focus:ring-2"
                  />
                </m.div>

                {/* Submit Button */}
                <m.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Button type="submit" asChild>
                    <m.button
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="from-primary to-brand-orange-dark shadow-primary/30 bg-linear-to-r relative h-14 w-full gap-3 overflow-hidden rounded-xl text-lg font-semibold text-white shadow-lg transition-all duration-300"
                    >
                      {/* Shimmer effect */}
                      <m.div
                        className="bg-linear-to-r absolute inset-0 from-transparent via-white/20 to-transparent"
                        animate={{ x: ["-100%", "100%"] }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3
                        }}
                      />
                      <Send className="relative z-10 h-5 w-5" />
                      <span className="relative z-10">{t("submit")}</span>
                    </m.button>
                  </Button>
                </m.div>
              </form>
            </m.div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
