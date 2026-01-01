"use client";

import { Loader2, MessageCircle, Phone, Send } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";

export default function ContactSection() {
  const t = useTranslations("IndexPage.contact");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset after 3 seconds
    setTimeout(() => setIsSuccess(false), 3000);
  };

  return (
    <section
      id="contact"
      className="bg-brand-cream relative overflow-hidden py-20 lg:py-32"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,107,53,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,184,0,0.05)_0%,transparent_50%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left Side - Info */}
          <m.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="border-primary/30 bg-primary/10 text-primary mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium">
              <span className="bg-primary h-2 w-2 rounded-full" />
              {t("badge")}
            </div>

            <h2 className="text-secondary mb-6 text-3xl font-bold md:text-4xl lg:text-5xl">
              {t("title")}
            </h2>

            <p className="text-secondary/70 mb-10 text-lg">{t("subtitle")}</p>

            {/* Contact Options */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="bg-whatsapp shadow-whatsapp/30 group h-14 w-full gap-3 rounded-2xl px-8 text-lg font-semibold text-white shadow-lg transition-all hover:scale-[1.02] hover:bg-[#20BD5A] hover:shadow-xl sm:w-auto"
                asChild
              >
                <Link href={siteConfig.links.whatsapp} target="_blank">
                  <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
                  واتساب
                </Link>
              </Button>

              <div className="flex items-center gap-3">
                <a
                  href={`tel:${siteConfig.support.whatsapp}`}
                  className="border-primary/20 text-secondary hover:border-primary/40 flex items-center gap-3 rounded-2xl border bg-white px-6 py-4 shadow-lg transition-all hover:shadow-xl"
                >
                  <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <span dir="ltr" className="font-semibold">
                    {siteConfig.support.phone}
                  </span>
                </a>
              </div>
            </div>
          </m.div>

          {/* Right Side - Form */}
          <m.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="shadow-primary/5 rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl lg:p-10">
              {isSuccess ? (
                <m.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="bg-brand-green/10 mb-4 flex h-16 w-16 items-center justify-center rounded-full">
                    <Send className="text-brand-green h-8 w-8" />
                  </div>
                  <p className="text-secondary text-lg font-semibold">
                    {t("success")}
                  </p>
                </m.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="text-secondary mb-2 block text-sm font-medium">
                        {t("firstName")} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t("firstNamePlaceholder")}
                        className="text-secondary focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-2"
                      />
                    </div>
                    <div>
                      <label className="text-secondary mb-2 block text-sm font-medium">
                        {t("lastName")} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t("lastNamePlaceholder")}
                        className="text-secondary focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-2"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="text-secondary mb-2 block text-sm font-medium">
                      {t("phone")} *
                    </label>
                    <div className="flex gap-3">
                      <div className="flex items-center gap-2 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                        <span className="text-lg">🇸🇦</span>
                        <span className="text-sm text-gray-500">+966</span>
                      </div>
                      <input
                        type="tel"
                        required
                        dir="ltr"
                        placeholder={t("phonePlaceholder")}
                        className="text-secondary focus:border-primary focus:ring-primary/20 flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-2"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="text-secondary mb-2 block text-sm font-medium">
                      {t("email")} *
                    </label>
                    <input
                      type="email"
                      required
                      dir="ltr"
                      placeholder={t("emailPlaceholder")}
                      className="text-secondary focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-2"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="text-secondary mb-2 block text-sm font-medium">
                      {t("company")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("companyPlaceholder")}
                      className="text-secondary focus:border-primary focus:ring-primary/20 w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 outline-none transition-all placeholder:text-gray-400 focus:bg-white focus:ring-2"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-primary shadow-primary/30 hover:bg-brand-orange-dark h-14 w-full gap-3 rounded-xl text-lg font-semibold text-white shadow-lg transition-all hover:shadow-xl disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-5 w-5 animate-spin" />
                        {t("submitting")}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        {t("submit")}
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </m.div>
        </div>
      </div>
    </section>
  );
}
