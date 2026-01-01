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
    { label: t("nav.contact"), href: "#contact" }
  ];

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        "shadow-brand-pink/5 bg-white/95 shadow-lg lg:bg-transparent lg:shadow-none",
        isScrolled && "backdrop-blur-lg lg:bg-white/85 lg:shadow-lg"
      )}
    >
      {/* Elegant top accent line */}
      <div
        className={cn(
          "via-brand-pink bg-linear-to-r absolute inset-x-0 top-0 h-px from-transparent to-transparent transition-opacity duration-500",
          "opacity-100 lg:opacity-0",
          isScrolled && "lg:opacity-100"
        )}
      />

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between sm:h-24">
          {/* Logo */}
          <m.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="flex h-full items-center"
          >
            <Logo className="transition-all duration-300 hover:scale-105" />
          </m.div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
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
                    "group relative px-4 py-2 text-base font-medium transition-all duration-300",
                    isScrolled ? "text-foreground" : "text-white",
                    "hover:text-primary",
                    "before:absolute before:bottom-0 before:start-1/2 before:h-0.5 before:w-0",
                    "before:from-primary before:to-primary/60 before:bg-linear-to-r",
                    "before:-translate-x-1/2 before:transition-all before:duration-300 rtl:before:translate-x-1/2",
                    "hover:before:w-3/4",
                    "after:bg-primary/5 after:absolute after:inset-0 after:rounded-lg",
                    "after:opacity-0 after:transition-opacity after:duration-300",
                    "hover:after:opacity-100"
                  )}
                >
                  <span className="relative z-10">{item.label}</span>
                </Link>
              </m.div>
            ))}
          </nav>

          {/* CTA Button & Language Switcher */}
          <m.div
            className="hidden items-center space-x-3 lg:flex rtl:space-x-reverse"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <LocaleSwitcher isTop={isScrolled} />

            <Button
              className="hover:shadow-primary/40 group h-auto gap-2 rounded-full px-8 py-4 text-base font-bold shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg has-[>svg]:px-8 lg:flex"
              asChild
            >
              <Link
                href={siteConfig.links.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="size-5" />
                {t("cta")}
              </Link>
            </Button>
          </m.div>

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-2 lg:hidden rtl:space-x-reverse">
            <m.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex items-center"
            >
              <LocaleSwitcher className="w-auto" isTop />

              <button
                className="text-foreground hover:bg-muted rounded-md p-2 transition-all duration-300 hover:scale-105"
                onClick={toggleMenu}
                aria-label="Toggle menu"
              >
                <div className="space-y-1.5">
                  <m.div
                    animate={
                      isMenuOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }
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
                      isMenuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }
                    }
                    transition={{ duration: 0.3 }}
                    className="h-0.5 w-6 bg-current"
                  />
                </div>
              </button>
            </m.div>
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
          className="overflow-hidden lg:hidden"
        >
          <nav className="border-border/20 space-y-2 border-t py-6">
            <div className="space-y-3">
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
                    className="text-brand-burgundy hover:text-brand-pink hover:bg-brand-pink/5 focus:ring-brand-pink/20 group relative block rounded-xl px-3 py-4 text-base font-medium transition-all duration-300 hover:scale-[1.02] focus:outline-none"
                  >
                    <span className="relative z-10 flex items-center gap-3">
                      {item.label}
                    </span>
                    <div
                      className="absolute inset-0 rounded-xl opacity-0 transition-opacity group-hover:opacity-100"
                      style={{
                        background:
                          "linear-gradient(to right, rgba(254, 133, 161, 0.1), transparent)"
                      }}
                    />
                  </Link>
                </m.div>
              ))}

              {/* CTA in Mobile Menu */}
              <m.div
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: isMenuOpen ? 1 : 0,
                  y: isMenuOpen ? 0 : -20
                }}
                transition={{ delay: 0.5, duration: 0.4 }}
                className="border-border/20 mt-6 border-t pt-6"
              >
                <Button
                  className="h-auto w-full items-center gap-3 rounded-xl px-6 py-4 text-base font-semibold shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  asChild
                >
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={siteConfig.links.whatsapp}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <MessageCircle className="size-5" />
                    {t("cta")}
                  </a>
                </Button>
              </m.div>
            </div>
          </nav>
        </m.div>
      </div>
    </header>
  );
}
