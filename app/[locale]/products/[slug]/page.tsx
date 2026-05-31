import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { getTranslations } from "next-intl/server";
import Navigation from "../../../components/Navigation";
import Footer from "../../../components/Footer";
import {
    getGumroadProducts,
    getProductImageUrl,
    stripHtml,
} from "@/lib/gumroad";
import { getProductSeoContent, getProductSlug } from "@/lib/product-seo";
import { Link } from "@/i18n/routing";
import ProductGallery from "./ProductGallery";

export const revalidate = 3600;

async function getProduct(slug: string) {
    const result = await getGumroadProducts();

    if (result.status !== "ready") {
        return null;
    }

    return (
        result.products.find((product) => getProductSlug(product) === slug) ??
        null
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
    const { locale, slug } = await params;
    const product = await getProduct(slug);

    if (!product) {
        return {};
    }

    const content = getProductSeoContent(product, locale);
    const imageUrl = getProductImageUrl(product);

    return {
        title: content.metaTitle,
        description: content.metaDescription,
        alternates: {
            canonical: `/${locale}/products/${slug}`,
            languages: {
                en: `/en/products/${slug}`,
                th: `/th/products/${slug}`,
                "x-default": `/en/products/${slug}`,
            },
        },
        openGraph: {
            title: content.metaTitle,
            description: content.metaDescription,
            url: `/${locale}/products/${slug}`,
            type: "website",
            images: imageUrl
                ? [
                      {
                          url: imageUrl,
                          alt: product.name,
                      },
                  ]
                : undefined,
        },
    };
}

export default async function ProductDetailPage({
    params,
}: {
    params: Promise<{ locale: string; slug: string }>;
}) {
    const { locale, slug } = await params;
    const t = await getTranslations({ locale, namespace: "ProductDetail" });
    const product = await getProduct(slug);

    if (!product) {
        notFound();
    }

    const content = getProductSeoContent(product, locale);
    const imageUrl = getProductImageUrl(product);
    const description = stripHtml(product.custom_summary ?? product.description);
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        name: product.name,
        description: content.metaDescription,
        image: imageUrl,
        url: `https://phanlakhon-downlospace.space/${locale}/products/${slug}`,
        brand: {
            "@type": "Brand",
            name: "O. Phanlakhon",
        },
        offers: {
            "@type": "Offer",
            price: product.price / 100,
            priceCurrency: product.currency?.toUpperCase(),
            availability: "https://schema.org/InStock",
            url: product.short_url,
        },
    };
    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            {
                "@type": "ListItem",
                position: 1,
                name: "Products",
                item: `https://phanlakhon-downlospace.space/${locale}/products`,
            },
            {
                "@type": "ListItem",
                position: 2,
                name: product.name,
                item: `https://phanlakhon-downlospace.space/${locale}/products/${slug}`,
            },
        ],
    };

    return (
        <main>
            <Navigation />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(breadcrumbJsonLd),
                }}
            />

            <section className="section-container pt-32 pb-16">
                <Link
                    href="/products"
                    className="mb-10 inline-flex items-center gap-2 text-sm font-medium text-neutral-600 hover:text-accent transition-colors dark:text-neutral-300"
                >
                    <ArrowLeft className="w-4 h-4" />
                    {t("back")}
                </Link>

                <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-12 lg:gap-16 items-start">
                    <ProductGallery
                        productName={product.name}
                        imageUrl={imageUrl}
                        covers={product.covers}
                    />

                    <div className="min-w-0">
                        <p className="break-words text-xs md:text-base font-medium tracking-[0.12em] md:tracking-[0.2em] uppercase text-accent mb-5">
                            {content.eyebrow}
                        </p>
                        <h1 className="heading-display text-display-md mb-6 break-words">
                            {product.name}
                        </h1>
                        <p className="text-lg text-neutral-600 leading-relaxed mb-8 dark:text-neutral-300">
                            {content.intro}
                        </p>

                        <div className="mb-8 border-y border-neutral-200 py-6 dark:border-neutral-800">
                            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-2 dark:text-neutral-400">
                                {t("price")}
                            </p>
                            <p className="text-2xl font-semibold text-neutral-900 dark:text-neutral-100">
                                {product.formatted_price}
                            </p>
                        </div>

                        <a
                            href={product.short_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-full sm:w-auto items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-medium hover:bg-primary-light transition-colors"
                        >
                            {t("buy")}
                            <ExternalLink className="w-4 h-4" />
                        </a>

                        <p className="mt-4 text-sm text-neutral-500 leading-relaxed dark:text-neutral-400">
                            {content.note}
                        </p>
                    </div>
                </div>
            </section>

            <section className="section-container py-16 md:py-section bg-neutral-50 dark:bg-neutral-900">
                <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-14">
                    <div>
                        <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                            {t("why_label")}
                        </p>
                        <h2 className="heading-display text-display-md mb-6">
                            {t("why_title")}
                        </h2>
                        <p className="text-neutral-600 leading-relaxed dark:text-neutral-300">
                            {content.originalTake}
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-white border border-neutral-200 p-7 dark:bg-neutral-950 dark:border-neutral-800">
                            <h3 className="text-xl font-semibold mb-5">
                                {content.audienceTitle}
                            </h3>
                            <ul className="space-y-4">
                                {content.audience.map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 text-sm text-neutral-700 leading-relaxed dark:text-neutral-300"
                                    >
                                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-white border border-neutral-200 p-7 dark:bg-neutral-950 dark:border-neutral-800">
                            <h3 className="text-xl font-semibold mb-5">
                                {content.valueTitle}
                            </h3>
                            <ul className="space-y-4">
                                {content.valuePoints.map((item) => (
                                    <li
                                        key={item}
                                        className="flex gap-3 text-sm text-neutral-700 leading-relaxed dark:text-neutral-300"
                                    >
                                        <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section-container section-spacing">
                <div className="grid lg:grid-cols-2 gap-14">
                    <div>
                        <h2 className="heading-display text-display-md mb-8">
                            {content.workflowTitle}
                        </h2>
                        <div className="space-y-5">
                            {content.workflow.map((step, index) => (
                                <div
                                    key={step}
                                    className="flex gap-5 border-b border-neutral-200 pb-5 last:border-b-0 dark:border-neutral-800"
                                >
                                    <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center bg-neutral-900 text-sm font-semibold text-white">
                                        {index + 1}
                                    </span>
                                    <p className="text-neutral-700 leading-relaxed dark:text-neutral-300">
                                        {step}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="bg-neutral-50 border border-neutral-200 p-8 dark:bg-neutral-900 dark:border-neutral-800">
                        <h2 className="text-2xl font-display font-semibold mb-5">
                            {content.gumroadTitle}
                        </h2>
                        <p className="text-neutral-600 leading-relaxed mb-6 dark:text-neutral-300">
                            {description || t("fallback_description")}
                        </p>
                        {product.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {product.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="max-w-full truncate px-3 py-1 text-[10px] font-bold uppercase tracking-tight bg-white text-neutral-600 border border-neutral-200 dark:bg-neutral-950 dark:text-neutral-300 dark:border-neutral-800"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            <Footer />
        </main>
    );
}
