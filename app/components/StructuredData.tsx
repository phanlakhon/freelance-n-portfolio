import { useTranslations } from "next-intl";

export default function StructuredData({ locale }: { locale: string }) {
    const t = useTranslations("Metadata");
    
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": ["Person", "ProfessionalService"],
        "name": "Oorathai Phanlakhon",
        "url": `https://phanlakhon-dev.vercel.app/${locale}`,
        "image": "https://phanlakhon-dev.vercel.app/og-image.jpg",
        "jobTitle": "Freelance Web Developer & Frontend Developer",
        "description": t("description"),
        "sameAs": [
            "https://github.com/phanlakhon",
            "https://linkedin.com/in/oorathai-phanlakhon-8a8667227"
        ],
        "knowsAbout": [
            "React",
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "REST API",
            "Frontend Architecture"
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
