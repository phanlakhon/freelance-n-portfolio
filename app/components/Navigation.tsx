"use client";

import { motion } from "framer-motion";
import { Link } from "../../i18n/routing";
import { useState, useEffect } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const t = useTranslations("Navigation");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-20">
          <Link
            href="/"
            className="text-xl md:text-2xl font-display font-semibold hover:text-accent transition-colors"
          >
            O. Phanlakhon
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-sm font-medium text-neutral-700 hover:text-accent transition-colors"
            >
              {t("services")}
            </Link>
            <Link
              href="#work"
              className="text-sm font-medium text-neutral-700 hover:text-accent transition-colors"
            >
              {t("work")}
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium text-neutral-700 hover:text-accent transition-colors"
            >
              {t("about")}
            </Link>
            <Link
              href="#contact"
              className="px-6 py-2.5 bg-primary text-white text-sm font-medium hover:bg-primary-light transition-colors"
            >
              {t("contact")}
            </Link>
            <LanguageSwitcher />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.nav>
  );
}
