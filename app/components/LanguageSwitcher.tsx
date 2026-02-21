"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "../../i18n/routing";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const t = useTranslations("Common");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const toggleLanguage = () => {
    const nextLocale = locale === "en" ? "th" : "en";
    const hash = window.location.hash;

    startTransition(() => {
      router.replace(`${pathname}${hash}`, { locale: nextLocale });
    });
  };

  return (
    <button
      onClick={toggleLanguage}
      disabled={isPending}
      className={`text-sm font-medium transition-colors p-2 border border-neutral-200 hover:border-accent ${
        isPending ? "opacity-50 cursor-not-allowed" : "hover:text-accent"
      }`}
      aria-label="Switch Language"
    >
      <span className="flex items-center gap-2">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        {t("switch_lang")}
      </span>
    </button>
  );
}
