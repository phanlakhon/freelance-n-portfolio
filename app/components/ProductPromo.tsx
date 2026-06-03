"use client";

import Image from "next/image";
import { ArrowRight, ExternalLink, ShoppingBag } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function ProductPromo() {
    const t = useTranslations("ProductPromo");

    return (
        <section className="section-container pb-16 md:pb-24">
            <div className="grid gap-8 border-y border-neutral-200 py-10 dark:border-neutral-800 md:py-12">
                <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
                    <div className="max-w-3xl">
                        <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                            <ShoppingBag className="h-4 w-4" />
                            {t("badge")}
                        </p>
                        <h2 className="heading-display text-display-md mb-4">
                            {t("title")}
                        </h2>
                        <p className="text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
                            {t("description")}
                        </p>
                    </div>

                    <div className="grid w-full grid-cols-2 gap-3 sm:w-auto sm:flex sm:items-center md:flex-shrink-0">
                        <Link
                            href="/products"
                            className="inline-flex min-h-14 min-w-0 items-center justify-center gap-2 whitespace-nowrap bg-primary px-4 py-4 text-sm font-semibold text-white transition-colors hover:bg-primary-light sm:px-7 dark:bg-accent dark:text-neutral-950 dark:hover:bg-accent-dark"
                        >
                            <span className="truncate">{t("cta")}</span>
                            <ArrowRight className="h-4 w-4 flex-shrink-0" />
                        </Link>
                        <a
                            href="https://www.etsy.com/shop/DownloSpace"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-14 min-w-0 items-center justify-center gap-2 whitespace-nowrap bg-[#f1641e] px-4 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#d95718] sm:px-7"
                        >
                            <span className="truncate">{t("etsy_cta")}</span>
                            <ExternalLink className="h-4 w-4 flex-shrink-0" />
                        </a>
                    </div>
                </div>

                <Link
                    href="/products"
                    className="group block overflow-hidden border border-neutral-200 bg-neutral-100 dark:border-neutral-800 dark:bg-neutral-900"
                    aria-label={t("image_label")}
                >
                    <Image
                        src="/website-template-banner.png"
                        alt={t("image_alt")}
                        width={2400}
                        height={600}
                        className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.015]"
                        sizes="(max-width: 768px) 100vw, 1200px"
                        priority={false}
                    />
                </Link>
            </div>
        </section>
    );
}
