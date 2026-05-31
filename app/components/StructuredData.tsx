import { useTranslations } from "next-intl";

export default function StructuredData({ locale }: { locale: string }) {
    const t = useTranslations("Metadata");
    const baseUrl = "https://phanlakhon-downlospace.space";
    const localizedUrl = `${baseUrl}/${locale}`;

    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "WebSite",
                "@id": `${baseUrl}/#website`,
                name: "Oorathai Phanlakhon",
                url: baseUrl,
                inLanguage: locale,
                description: t("description"),
            },
            {
                "@type": "Person",
                "@id": `${baseUrl}/#person`,
                name: "Oorathai Phanlakhon",
                alternateName: "O. Phanlakhon",
                url: localizedUrl,
                image: `${baseUrl}/og-image.jpg`,
                jobTitle: "Freelance Web Developer & Frontend Developer",
                sameAs: [
                    "https://github.com/phanlakhon",
                    "https://linkedin.com/in/oorathai-phanlakhon-8a8667227",
                ],
                knowsAbout: [
                    "รับทำเว็บ",
                    "รับเขียนเว็บไซต์",
                    "React",
                    "Next.js",
                    "TypeScript",
                    "Tailwind CSS",
                    "Frontend Architecture",
                    "Website Templates",
                    "Canva Website Templates",
                ],
            },
            {
                "@type": "ProfessionalService",
                "@id": `${baseUrl}/#web-development-service`,
                name:
                    locale === "th"
                        ? "รับทำเว็บ React และ Next.js"
                        : "React and Next.js Web Development",
                url: localizedUrl,
                image: `${baseUrl}/og-image.jpg`,
                description: t("description"),
                provider: {
                    "@id": `${baseUrl}/#person`,
                },
                areaServed: [
                    {
                        "@type": "Country",
                        name: "Thailand",
                    },
                    {
                        "@type": "Place",
                        name: "Worldwide",
                    },
                ],
                serviceType: [
                    "Website Development",
                    "React Development",
                    "Next.js Development",
                    "Frontend Development",
                    "Web Application Development",
                    "SEO-friendly Website Development",
                ],
                offers: [
                    {
                        "@type": "Offer",
                        name:
                            locale === "th"
                                ? "รับทำเว็บไซต์และ Web Application"
                                : "Website and Web Application Development",
                        availability: "https://schema.org/InStock",
                    },
                    {
                        "@type": "Offer",
                        name:
                            locale === "th"
                                ? "Website Template และ Canva Template"
                                : "Website Templates and Canva Templates",
                        url: `${baseUrl}/${locale}/products`,
                    },
                ],
            },
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
    );
}
