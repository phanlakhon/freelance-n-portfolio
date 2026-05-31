"use client";

import { motion } from "framer-motion";
import { Link } from "../../i18n/routing";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";
import { Menu, ShoppingBag, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = useTranslations("Navigation");

  const navLinks = [
    { href: "/#services", label: t("services") },
    { href: "/#work", label: t("work") },
    { href: "/#about", label: t("about") },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-white/95 backdrop-blur-sm shadow-sm dark:bg-neutral-950/95 dark:shadow-neutral-950"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-xl md:text-2xl font-display font-semibold text-neutral-900 hover:text-accent transition-colors dark:text-white"
          >
            O. Phanlakhon
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-neutral-700 hover:text-accent transition-colors dark:text-neutral-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              className="px-6 py-2.5 bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors"
            >
              {t("contact")}
            </Link>
            <Link
              href="/products"
              className="group/product inline-flex h-10 items-center gap-2 border border-neutral-200 px-4 text-sm font-semibold text-neutral-800 transition-colors hover:border-accent hover:text-accent dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-accent"
            >
              <ShoppingBag className="h-4 w-4 text-accent transition-transform group-hover/product:-translate-y-0.5" />
              <span>{t("products")}</span>
            </Link>
            <LanguageSwitcher />
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-neutral-900 dark:text-white"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMobileMenuOpen((open) => !open)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <motion.div
          id="mobile-navigation"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.2 }}
          className="md:hidden border-t border-neutral-200 bg-white shadow-lg dark:border-neutral-800 dark:bg-neutral-950"
        >
          <div className="section-container py-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-1 py-4 text-lg font-medium text-neutral-800 hover:text-accent transition-colors dark:text-neutral-100"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-4 inline-flex items-center justify-center bg-primary px-6 py-4 text-sm font-medium text-white hover:bg-primary-light transition-colors"
              >
                {t("contact")}
              </Link>
              <Link
                href="/products"
                onClick={() => setMobileMenuOpen(false)}
                className="group/product mt-3 inline-flex items-center justify-center gap-3 border border-neutral-200 px-6 py-4 text-base font-semibold text-neutral-800 transition-colors hover:border-accent hover:text-accent dark:border-neutral-700 dark:text-neutral-100 dark:hover:border-accent"
              >
                <ShoppingBag className="h-5 w-5 text-accent" />
                <span>{t("products")}</span>
              </Link>
              <div className="mt-5 flex items-center gap-3 border-t border-neutral-200 pt-5 dark:border-neutral-800">
                <LanguageSwitcher />
                <ThemeToggle />
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
