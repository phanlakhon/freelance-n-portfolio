import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "../../i18n/routing";
import { Noto_Sans_Thai } from "next/font/google";
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
        metadataBase: new URL("https://phanlakhon-dev.vercel.app"),
        title: {
            default: t("title"),
            template: `%s | O. Phanlakhon`,
        },
        description: t("description"),
        keywords: [
            "Frontend Developer Thailand",
            "React Developer",
            "UI Design",
            "Web Development",
            "n8n Automation",
            "API Integration",
            "Performance Optimization",
            "Freelance Developer",
        ],
        authors: [{ name: "O. Phanlakhon" }],
        creator: "O. Phanlakhon",
        openGraph: {
            type: "website",
            locale: locale === "th" ? "th_TH" : "en_US",
            url: "https://phanlakhon-dev.vercel.app",
            siteName: "O. Phanlakhon • Frontend Expert",
            title: t("title"),
            description: t("description"),
            images: [
                {
                    url: "/og-image.jpg",
                    width: 1200,
                    height: 630,
                    alt: "O. Phanlakhon • Frontend Expert",
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
        <html lang={locale} className={`${notoSansThai.variable}`}>
            <body className="font-sans" suppressHydrationWarning>
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
