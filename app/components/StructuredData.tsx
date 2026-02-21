import { useTranslations } from "next-intl";

export default function StructuredData({ locale }: { locale: string }) {
    const t = useTranslations("Metadata");
    
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Person",
        "name": "O. Phanlakhon",
        "url": `https://phanlakhon-dev.vercel.app/${locale}`,
        "image": "https://phanlakhon-dev.vercel.app/og-image.jpg",
        "jobTitle": "Senior Frontend Developer",
        "description": t("description"),
        "sameAs": [
            "https://github.com/phanlakhon",
            // Add other social links here
        ],
        "knowsAbout": [
            "Frontend Architecture",
            "React",
            "Next.js",
            "UI/UX Design",
            "Performance Optimization",
            "API Integration"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
