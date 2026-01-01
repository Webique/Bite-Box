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
      className="relative overflow-hidden bg-brand-cream py-20 lg:py-32"
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
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary" />
              {t("badge")}
            </div>

            <h2 className="mb-6 text-3xl font-bold text-secondary md:text-4xl lg:text-5xl">
              {t("title")}
            </h2>

            <p className="mb-10 text-lg text-secondary/70">{t("subtitle")}</p>

            {/* Contact Options */}
            <div className="space-y-4">
              <Button
                size="lg"
                className="group h-14 w-full gap-3 rounded-2xl bg-whatsapp px-8 text-lg font-semibold text-white shadow-lg shadow-whatsapp/30 transition-all hover:scale-[1.02] hover:bg-[#20BD5A] hover:shadow-xl sm:w-auto"
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
                  className="flex items-center gap-3 rounded-2xl border border-primary/20 bg-white px-6 py-4 text-secondary shadow-lg transition-all hover:border-primary/40 hover:shadow-xl"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
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
            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-2xl shadow-primary/5 lg:p-10">
              {isSuccess ? (
                <m.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-brand-green/10">
                    <Send className="h-8 w-8 text-brand-green" />
                  </div>
                  <p className="text-lg font-semibold text-secondary">
                    {t("success")}
                  </p>
                </m.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Row */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="mb-2 block text-sm font-medium text-secondary">
                        {t("firstName")} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t("firstNamePlaceholder")}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-secondary outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div>
                      <label className="mb-2 block text-sm font-medium text-secondary">
                        {t("lastName")} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t("lastNamePlaceholder")}
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-secondary outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-secondary">
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
                        className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-secondary outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-secondary">
                      {t("email")} *
                    </label>
                    <input
                      type="email"
                      required
                      dir="ltr"
                      placeholder={t("emailPlaceholder")}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-secondary outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label className="mb-2 block text-sm font-medium text-secondary">
                      {t("company")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("companyPlaceholder")}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-secondary outline-none transition-all placeholder:text-gray-400 focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/20"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="h-14 w-full gap-3 rounded-xl bg-primary text-lg font-semibold text-white shadow-lg shadow-primary/30 transition-all hover:bg-brand-orange-dark hover:shadow-xl disabled:opacity-70"
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
