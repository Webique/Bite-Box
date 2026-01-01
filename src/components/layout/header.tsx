"use client";

import { MessageCircle } from "lucide-react";
import * as m from "motion/react-m";
import { useTranslations } from "next-intl";
import * as React from "react";

import LocaleSwitcher from "@/components/locale-switcher";
import { Button } from "@/components/ui/button";
import Logo from "@/components/ui/logo";
import { siteConfig } from "@/config/site";
import { Link } from "@/i18n/navigation.public";
import { cn } from "@/lib/utils";

export default function Header() {
  const t = useTranslations("Header");
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navItems = [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "#about" },
    { label: t("nav.services"), href: "#services" },
    { label: t("nav.features"), href: "#features" },
    { label: t("nav.contact"), href: "#contact" }
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/95 shadow-lg shadow-primary/5 backdrop-blur-lg"
          : "bg-transparent"
      )}
    >
      {/* Top accent line */}
      <div
        className={cn(
          "bg-linear-to-r absolute inset-x-0 top-0 h-1 from-primary via-accent to-primary transition-opacity duration-500",
          isScrolled ? "opacity-100" : "opacity-0"
        )}
      />

      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between lg:h-24">
          {/* Logo */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <Logo className="transition-all duration-300 hover:scale-105" />
            <div className="hidden sm:block">
              <p
                className={cn(
                  "text-xl font-bold transition-colors",
                  isScrolled ? "text-secondary" : "text-white"
                )}
              >
                {t("siteName")}
              </p>
              <p
                className={cn(
                  "text-xs font-medium transition-colors",
                  isScrolled ? "text-primary" : "text-accent"
                )}
              >
                {t("siteDescription")}
              </p>
            </div>
          </m.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  className={cn(
                    "group relative px-4 py-2 text-sm font-medium transition-all duration-300",
                    isScrolled
                      ? "text-secondary hover:text-primary"
                      : "text-white/90 hover:text-white",
                    "rounded-full hover:bg-primary/10"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </m.div>
            ))}
          </nav>

          {/* CTA & Language */}
          <m.div
            className="hidden items-center gap-3 lg:flex"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <LocaleSwitcher isTop={isScrolled} />

            <Button
              className="group h-11 gap-2 rounded-full bg-primary px-6 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:scale-105 hover:bg-brand-orange-dark hover:shadow-xl hover:shadow-primary/40"
              asChild
            >
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="h-4 w-4 transition-transform group-hover:scale-110" />
                {t("cta")}
              </Link>
            </Button>
          </m.div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <LocaleSwitcher className="w-auto" isTop={isScrolled} />

            <button
              className={cn(
                "rounded-lg p-2 transition-all duration-300",
                isScrolled
                  ? "text-secondary hover:bg-primary/10"
                  : "text-white hover:bg-white/10"
              )}
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <div className="space-y-1.5">
                <m.div
                  animate={
                    isMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="h-0.5 w-6 bg-current"
                />
                <m.div
                  animate={isMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="h-0.5 w-6 bg-current"
                />
                <m.div
                  animate={
                    isMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }
                  }
                  transition={{ duration: 0.3 }}
                  className="h-0.5 w-6 bg-current"
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <m.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className={cn(
            "overflow-hidden lg:hidden",
            isScrolled ? "bg-white" : "bg-secondary/95 backdrop-blur-lg"
          )}
        >
          <nav className="space-y-1 py-6">
            {navItems.map((item, index) => (
              <m.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : -20
                }}
                transition={{ delay: 0.1 * index, duration: 0.4 }}
              >
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={cn(
                    "block rounded-xl px-4 py-3 text-base font-medium transition-all",
                    isScrolled
                      ? "text-secondary hover:bg-primary/10 hover:text-primary"
                      : "text-white hover:bg-white/10"
                  )}
                >
                  {item.label}
                </Link>
              </m.div>
            ))}

            {/* Mobile CTA */}
            <m.div
              initial={{ opacity: 0, y: -20 }}
              animate={{
                opacity: isMenuOpen ? 1 : 0,
                y: isMenuOpen ? 0 : -20
              }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="mt-4 px-4 pt-4"
            >
              <Button
                className="h-12 w-full gap-3 rounded-xl bg-primary text-base font-semibold text-white shadow-lg transition-all hover:bg-brand-orange-dark"
                asChild
              >
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={siteConfig.links.whatsapp}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <MessageCircle className="h-5 w-5" />
                  {t("cta")}
                </a>
              </Button>
            </m.div>
          </nav>
        </m.div>
      </div>
    </header>
  );
}
