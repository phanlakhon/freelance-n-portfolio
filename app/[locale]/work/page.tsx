import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import WorkPageClient from "./WorkPageClient";

export async function generateMetadata({
    params,
}: {
    params: Promise<{ locale: string }>;
}): Promise<Metadata> {
    const { locale } = await params;
    const t = await getTranslations({ locale, namespace: "Work" });

    return {
        title:
            locale === "th"
                ? "ผลงานรับทำเว็บ React, Next.js และ Web Application"
                : "React, Next.js and Web Application Case Studies",
        description: t("description"),
        alternates: {
            canonical: `/${locale}/work`,
            languages: {
                en: "/en/work",
                th: "/th/work",
                "x-default": "/en/work",
            },
        },
    };
}

export default function WorkPage() {
    return <WorkPageClient />;
}
