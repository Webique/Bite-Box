"use client";

import { MapPin, Phone } from "lucide-react";
import * as m from "motion/react-m";
import ExportedImage from "next-image-export-optimizer";
import { useTranslations } from "next-intl";

import InstagramIcon from "@/assets/icons/instagram.svg";
import SnapchatIcon from "@/assets/icons/snapchat.svg";
import TikTokIcon from "@/assets/icons/tiktok.svg";
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
    { label: t("projects"), href: "#projects" }
  ];

  const socialLinks = [
    {
      Icon: InstagramIcon,
      href: siteConfig.links.instagram,
      label: "Instagram"
    },
    { Icon: SnapchatIcon, href: siteConfig.links.snapchat, label: "Snapchat" },
    { Icon: TikTokIcon, href: siteConfig.links.tiktok, label: "TikTok" }
  ];

  return (
    <footer className="relative bg-zinc-950 text-white">
      {/* Top accent line */}
      <div className="via-primary bg-linear-to-r absolute inset-x-0 top-0 h-1 from-transparent to-transparent" />

      <div className="container relative mx-auto px-4 py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-8">
          {/* Company Info */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <Logo className="mb-6" imgClassName="w-28 sm:w-32" />
            <p className="mb-8 max-w-md text-sm leading-relaxed text-white/70">
              {t("companyDescription")}
            </p>

            {/* Vision 2030 Badge */}
            <div className="inline-flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
              <ExportedImage
                src="/images/saudi-2030-vision.png"
                alt="Saudi Vision 2030"
                width={50}
                height={35}
                className="h-8 w-auto"
              />
              <div className="h-6 w-px bg-white/20" />
              <span className="text-xs text-white/60">{t("vision2030")}</span>
            </div>
          </m.div>

          {/* Quick Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-primary mb-6 text-xs font-semibold uppercase tracking-widest">
              {t("quickLinks")}
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
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
            className="lg:col-span-3"
          >
            <h3 className="text-primary mb-6 text-xs font-semibold uppercase tracking-widest">
              {t("contactUs")}
            </h3>
            <div className="space-y-4">
              <a
                href={`tel:${siteConfig.support.phone}`}
                className="flex items-center gap-3 text-white/60 transition-colors hover:text-white"
              >
                <div className="bg-primary/10 flex h-9 w-9 items-center justify-center rounded-lg">
                  <Phone className="text-primary h-4 w-4" />
                </div>
                <span dir="ltr" className="text-sm">
                  {siteConfig.support.phone}
                </span>
              </a>

              <div className="flex items-center gap-3 text-white/60">
                <div className="bg-primary/10 flex h-9 w-9 items-center justify-center rounded-lg">
                  <MapPin className="text-primary h-4 w-4" />
                </div>
                <span className="text-sm">{t("location")}</span>
              </div>
            </div>
          </m.div>

          {/* Social Links */}
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-primary mb-6 text-xs font-semibold uppercase tracking-widest">
              {t("followUs")}
            </h3>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:bg-primary group flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 transition-all hover:scale-105"
                  aria-label={social.label}
                >
                  <social.Icon className="h-4 w-4 fill-white/70 text-white/70 group-hover:fill-black group-hover:text-black" />
                </a>
              ))}
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
          className="flex items-center justify-center"
        >
          <p className="text-xs text-white/50">
            {t("copyright", { year: currentYear })}
          </p>
        </m.div>
      </div>
    </footer>
  );
}
