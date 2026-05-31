import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { Noto_Sans_Thai } from "next/font/google";
import StructuredData from "../components/StructuredData";
import GoogleTagManager from "../components/GoogleTagManager";
import "../globals.css";

const notoSansThai = Noto_Sans_Thai({
    subsets: ["latin", "thai"],
    variable: "--font-noto-sans-thai",
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Metadata" });

    return {
        metadataBase: new URL("https://phanlakhon-downlospace.space"),
        alternates: {
            canonical: `/${locale}`,
            languages: {
                en: "/en",
                th: "/th",
                "x-default": "/en",
            },
        },
        title: {
            default: t("title"),
            template: `%s | O. Phanlakhon`,
        },
        description: t("description"),
        keywords: [
            "รับทำเว็บไซต์",
            "รับทำเว็บ",
            "รับเขียนเว็บ",
            "รับเขียนเว็บไซต์",
            "รับทำเว็บ React",
            "รับทำเว็บ Next.js",
            "Frontend Developer",
            "React Developer",
            "Next.js Developer",
            "Freelance Developer",
            "รับพัฒนา Web Application",
            "Web Development",
            "Website Template",
            "Canva Website Template",
            "Small Shop Website Template",
        ],
        authors: [{ name: "Oorathai Phanlakhon" }],
        creator: "Oorathai Phanlakhon",
        openGraph: {
            type: "website",
            locale: locale === "th" ? "th_TH" : "en_US",
            url: "https://phanlakhon-downlospace.space",
            siteName: "Oorathai Phanlakhon • Frontend Expert",
            title: t("title"),
            description: t("description"),
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "Oorathai Phanlakhon • React & Next.js Developer",
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: t("title"),
            description: t("description"),
            images: ["/og-image.jpg"],
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                "max-video-preview": -1,
                "max-image-preview": "large",
                "max-snippet": -1,
            },
        },
    };
}

export default async function RootLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!routing.locales.includes(locale as any)) {
        notFound();
    }

    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();

    return (
        <html
            lang={locale}
            className={`${notoSansThai.variable}`}
            suppressHydrationWarning
        >
            <head>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            (function() {
                                try {
                                    var theme = localStorage.getItem('theme');
                                    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                    if (theme === 'dark' || (!theme && prefersDark)) {
                                        document.documentElement.classList.add('dark');
                                    } else {
                                        document.documentElement.classList.remove('dark');
                                    }
                                } catch (_) {}
                            })();
                        `,
                    }}
                />
            </head>
            <body className="font-sans" suppressHydrationWarning>
                <GoogleTagManager />
                <StructuredData locale={locale} />
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
