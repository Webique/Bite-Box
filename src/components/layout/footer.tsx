"use client";

import { MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";

import WhatsAppIcon from "@/assets/icons/whatsapp-2.svg";
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
      <div className="from-primary via-accent to-primary bg-linear-to-r absolute inset-x-0 top-0 h-1" />

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(255,107,53,0.05)_0%,transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,184,0,0.05)_0%,transparent_50%)]" />

      <div className="container relative mx-auto px-4 py-16 pb-12 lg:py-20 lg:pb-12">
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
              <Logo imgClassName="w-32 sm:w-32" />
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
              {quickLinks.map((link, index) => (
                <m.li
                  key={link.label}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
                  <Link
                    href={link.href}
                    className="hover:text-primary inline-block text-sm text-white/60 transition-all duration-300 hover:ps-2"
                  >
                    {link.label}
                  </Link>
                </m.li>
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
              <m.a
                href={`tel:${siteConfig.support.phone}`}
                className="flex items-center gap-3 text-white/60"
                whileHover={{ x: 5, color: "rgba(255,255,255,1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
                  <Phone className="text-primary h-5 w-5" />
                </div>
                <span dir="ltr" className="text-sm font-medium">
                  {siteConfig.support.phone}
                </span>
              </m.a>

              {/* WhatsApp */}
              <m.a
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/60"
                whileHover={{ x: 5, color: "rgba(255,255,255,1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
                  <WhatsAppIcon className="text-primary h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{t("whatsapp")}</span>
              </m.a>

              {/* Location */}
              <m.a
                href="#contact"
                className="flex items-center gap-3 text-white/60"
                whileHover={{ x: 5, color: "rgba(255,255,255,1)" }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-xl">
                  <MapPin className="text-primary h-5 w-5" />
                </div>
                <span className="text-sm font-medium">{t("location")}</span>
              </m.a>
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
          className="flex flex-col items-center justify-center gap-4 text-center sm:flex-row"
        >
          <p className="text-xs text-white/40">
            {t("copyright", { year: currentYear })}
          </p>
        </m.div>
      </div>
    </footer>
  );
}
