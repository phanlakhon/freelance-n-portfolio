import { ArrowRight, ExternalLink, PackageOpen } from "lucide-react";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import Navigation from "../../components/Navigation";
import Footer from "../../components/Footer";
import { Link } from "@/i18n/routing";
import {
    getGumroadProducts,
    getProductImageUrl,
    stripHtml,
} from "@/lib/gumroad";
import { getProductSlug } from "@/lib/product-seo";

export const revalidate = 3600;

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Products" });

    return {
        title: t("metadata_title"),
        description: t("metadata_description"),
        alternates: {
            canonical: `/${locale}/products`,
            languages: {
                en: "/en/products",
                th: "/th/products",
                "x-default": "/en/products",
            },
        },
        keywords: [
            "Canva website templates",
            "website templates",
            "small shop website template",
            "small business website template",
            "Canva templates",
            "flower shop website template",
            "digital templates",
        ],
        openGraph: {
            title: t("metadata_title"),
            description: t("metadata_description"),
            url: `/${locale}/products`,
            type: "website",
        },
    };
}

export default async function ProductsPage({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Products" });
    const result = await getGumroadProducts();
    const products = result.products;

    const jsonLd =
        products.length > 0
            ? {
                  "@context": "https://schema.org",
                  "@type": "ItemList",
                  name: t("title"),
                  itemListElement: products.map((product, index) => ({
                      "@type": "ListItem",
                      position: index + 1,
                      item: {
                          "@type": "Product",
                          name: product.name,
                          description: stripHtml(
                              product.custom_summary ?? product.description,
                          ),
                          image: getProductImageUrl(product),
                          url: product.short_url,
                          offers: {
                              "@type": "Offer",
                              price: product.price / 100,
                              priceCurrency: product.currency?.toUpperCase(),
                              availability: "https://schema.org/InStock",
                              url: product.short_url,
                          },
                      },
                  })),
              }
            : null;
    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [1, 2, 3].map((item) => ({
            "@type": "Question",
            name: t(`faq.item${item}.question`),
            acceptedAnswer: {
                "@type": "Answer",
                text: t(`faq.item${item}.answer`),
            },
        })),
    };

    return (
        <main>
            <Navigation />
            {jsonLd && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
            )}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
            />

            <section className="section-container pt-36 pb-20">
                <div className="max-w-4xl">
                    <p className="text-sm md:text-base font-medium tracking-[0.2em] uppercase text-accent mb-6">
                        {t("badge")}
                    </p>
                    <h1 className="heading-display text-display-lg mb-8">
                        {t("title")}
                    </h1>
                    <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-3xl dark:text-neutral-300">
                        {t("description")}
                    </p>
                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <a
                            href="https://www.etsy.com/shop/DownloSpace"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-14 items-center justify-center gap-2 whitespace-nowrap bg-[#f1641e] px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-[#d95718] sm:w-auto"
                        >
                            {t("etsy_button")}
                            <ExternalLink className="h-4 w-4" />
                        </a>
                    </div>
                </div>

            </section>

            <section className="section-container bg-neutral-50 py-14 md:py-20 dark:bg-neutral-900">
                <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
                    <div>
                        <p className="text-sm font-medium tracking-widest uppercase text-neutral-500 mb-3">
                            {t("collection_label")}
                        </p>
                        <h2 className="heading-display text-display-md">
                            {t("collection_title")}
                        </h2>
                    </div>
                    {result.status === "ready" && (
                        <p className="shrink-0 whitespace-nowrap text-sm text-neutral-500 md:text-right dark:text-neutral-400">
                            {t("product_count", { count: products.length })}
                        </p>
                    )}
                </div>

                {products.length > 0 ? (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {products.map((product) => {
                            const description = stripHtml(
                                product.custom_summary ?? product.description,
                            );
                            const imageUrl = getProductImageUrl(product);
                            const productUrl = `/products/${getProductSlug(product)}`;

                            return (
                                <article
                                    key={product.id}
                                    className="group flex h-full min-w-0 flex-col overflow-hidden bg-white border border-neutral-200 transition-all duration-300 hover:border-accent hover:shadow-lg dark:bg-neutral-950 dark:border-neutral-800"
                                >
                                    <Link
                                        href={productUrl}
                                        className="block relative aspect-[4/3] overflow-hidden bg-neutral-100 dark:bg-neutral-900"
                                    >
                                        {imageUrl ? (
                                            <img
                                                src={imageUrl}
                                                alt={product.name}
                                                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                        ) : (
                                            <div className="flex h-full items-center justify-center">
                                                <PackageOpen className="w-12 h-12 text-neutral-300" />
                                            </div>
                                        )}
                                    </Link>

                                    <div className="flex min-w-0 flex-1 flex-col p-6 md:p-7">
                                        <div className="mb-5 min-w-0">
                                            <Link href={productUrl}>
                                                <h3 className="line-clamp-2 break-words text-xl font-display font-semibold leading-snug group-hover:text-accent transition-colors">
                                                    {product.name}
                                                </h3>
                                            </Link>
                                            <p className="mt-3 inline-flex border border-neutral-200 bg-neutral-50 px-3 py-1 text-sm font-semibold text-neutral-900 dark:bg-neutral-900 dark:border-neutral-800 dark:text-neutral-100">
                                                {product.formatted_price}
                                            </p>
                                        </div>

                                        {description && (
                                            <p className="mb-6 line-clamp-4 min-w-0 break-words text-sm text-neutral-600 leading-relaxed dark:text-neutral-300">
                                                {description}
                                            </p>
                                        )}

                                        {product.tags.length > 0 && (
                                            <div className="flex flex-wrap gap-2 mb-7">
                                                {product.tags.slice(0, 4).map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="max-w-full truncate px-3 py-1 text-[10px] font-bold uppercase tracking-tight bg-neutral-100 text-neutral-600 border border-neutral-200 dark:bg-neutral-900 dark:text-neutral-300 dark:border-neutral-800"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                        )}

                                        <div className="mt-auto flex flex-col gap-4 border-t border-neutral-200 pt-5 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between dark:border-neutral-800">
                                            <Link
                                                href={productUrl}
                                                className="group/link inline-flex min-w-0 items-center gap-2 text-sm font-semibold text-neutral-700 hover:text-accent transition-colors dark:text-neutral-300"
                                            >
                                                <span className="truncate">
                                                    {t("details_button")}
                                                </span>
                                                <ArrowRight className="w-4 h-4 flex-shrink-0 transition-transform group-hover/link:translate-x-1" />
                                            </Link>
                                            <a
                                                href={product.short_url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex w-full flex-shrink-0 items-center justify-center gap-2 px-5 py-3 bg-primary text-white text-sm font-semibold hover:bg-primary-light transition-colors min-[420px]:w-auto"
                                            >
                                                {t("buy_button")}
                                                <ExternalLink className="w-4 h-4" />
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <div className="bg-white border border-neutral-200 p-10 md:p-14 dark:bg-neutral-950 dark:border-neutral-800">
                        <PackageOpen className="w-10 h-10 text-accent mb-6" />
                        <h3 className="text-2xl font-display font-semibold mb-4">
                            {t(`empty.${result.status}.title`)}
                        </h3>
                        <p className="text-neutral-600 leading-relaxed max-w-2xl dark:text-neutral-300">
                            {t(`empty.${result.status}.description`)}
                        </p>
                    </div>
                )}
            </section>

            <section className="section-container section-spacing">
                <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-16">
                    <div>
                        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                            {t("faq_label")}
                        </p>
                        <h2 className="heading-display text-display-md">
                            {t("faq_title")}
                        </h2>
                    </div>
                    <div className="space-y-8">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="pb-8 border-b border-neutral-200 last:border-b-0 dark:border-neutral-800"
                            >
                                <h3 className="text-lg font-semibold mb-3">
                                    {t(`faq.item${item}.question`)}
                                </h3>
                                <p className="text-neutral-600 leading-relaxed dark:text-neutral-300">
                                    {t(`faq.item${item}.answer`)}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
