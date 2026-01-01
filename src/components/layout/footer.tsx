"use client";

import { MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import WhatsAppIcon from "@/assets/icons/whatsapp.svg";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";

export default function Footer() {
  const t = useTranslations("Footer");
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: t("home"), href: "/" },
    { label: t("about"), href: "#about" },
    { label: t("services"), href: "#services" },
    { label: t("features"), href: "#features" },
    { label: t("contact"), href: "#contact" }
  ];

  return (
    <footer className="bg-secondary relative text-white">
      {/* Top Gradient Line */}
      <div className="bg-linear-to-r from-primary via-accent to-primary absolute inset-x-0 top-0 h-1" />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,107,53,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,184,0,0.05)_0%,transparent_50%)]" />

      <div className="container relative mx-auto px-4 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Brand Section */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="mb-6 flex items-center gap-3">
              <Logo imgClassName="w-16" />
              <div>
                <p className="text-2xl font-bold text-white">
                  {t("brandName")}
                </p>
                <p className="text-primary text-sm">Cloud Kitchens</p>
              </div>
            </div>

            <p className="mb-6 max-w-md text-sm leading-relaxed text-white/60">
              {t("companyDescription")}
            </p>

            {/* Tagline Badge */}
            <div className="border-primary/20 bg-primary/10 inline-flex items-center gap-3 rounded-xl border px-4 py-3">
              <span className="text-2xl">🥡</span>
              <span className="text-accent text-sm font-medium">
                {t("tagline")}
              </span>
            </div>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <h3 className="text-primary mb-6 text-xs font-semibold uppercase tracking-widest">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-primary text-sm text-white/60 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </m.div>

          {/* Contact Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-4"
          >
            <h3 className="text-primary mb-6 text-xs font-semibold uppercase tracking-widest">
              {t("contactUs")}
            </h3>
            <div className="space-y-4">
              {/* Phone */}
              <a
                href={`tel:${siteConfig.support.whatsapp}`}
                className="flex items-center gap-3 text-white/60 transition-colors hover:text-white"
              >
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <span dir="ltr" className="text-sm font-medium">
                  {siteConfig.support.phone}
                </span>
              </a>

              {/* WhatsApp */}
              <a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60 transition-colors hover:text-white"
              >
                <div className="bg-whatsapp/10 flex h-10 w-10 items-center justify-center rounded-xl">
                  <WhatsAppIcon className="fill-whatsapp text-whatsapp h-5 w-5" />
                </div>
                <span className="text-sm font-medium">WhatsApp</span>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 text-white/60">
                <div className="bg-accent/10 flex h-10 w-10 items-center justify-center rounded-xl">
                  <MapPin className="text-accent h-5 w-5" />
                </div>
                <span className="text-sm">{t("location")}</span>
              </div>
            </div>
          </m.div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-white/10" />

        {/* Bottom Bar */}
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 sm:flex-row"
        >
          <p className="text-xs text-white/40">
            {t("copyright", { year: currentYear })}
          </p>

          {/* Food Emojis */}
          <div className="flex items-center gap-2 text-xl opacity-50">
            <span>🍕</span>
            <span>🍔</span>
            <span>🍱</span>
            <span>🥡</span>
            <span>☁️</span>
          </div>
        </m.div>
      </div>
    </footer>
  );
}
