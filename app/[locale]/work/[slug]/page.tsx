import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import ProjectDetailClient from "./ProjectDetailClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
    const locales = ["en", "th"];

    return locales.flatMap((locale) =>
        projects.map((project) => ({
            locale,
            slug: project.slug,
        }))
    );
}

export async function generateMetadata(props: {
    params: Promise<{ slug: string; locale: string }>;
}): Promise<Metadata> {
    const { slug, locale } = await props.params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return {};
    }

    const t = await getTranslations({ locale, namespace: "Work" });
    const title = t(`projects.${project.id}.title`);
    const description = `${t(`projects.${project.id}.challenge`)} ${t(
        `projects.${project.id}.result`,
    )}`;

    return {
        title,
        description,
        alternates: {
            canonical: `/${locale}/work/${project.slug}`,
            languages: {
                en: `/en/work/${project.slug}`,
                th: `/th/work/${project.slug}`,
                "x-default": `/en/work/${project.slug}`,
            },
        },
        openGraph: {
            title,
            description,
            type: "article",
            images: project.image
                ? [
                      {
                          url: project.image,
                          alt: title,
                      },
                  ]
                : undefined,
        },
    };
}

export default async function ProjectPage(props: { params: Promise<{ slug: string; locale: string }> }) {
    const { slug, locale } = await props.params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const t = await getTranslations({ locale, namespace: "Work" });

    return (
        <main className="min-h-screen bg-white dark:bg-neutral-950">
            <Navigation />
            
            <ProjectDetailClient 
                project={project} 
                title={t(`projects.${project.id}.title`)}
                category={t(`projects.${project.id}.category`)}
                challenge={t(`projects.${project.id}.challenge`)}
                solution={t(`projects.${project.id}.solution`)}
                result={t(`projects.${project.id}.result`)}
                detailsLabel={t("details_label")}
                resultLabel={t("result_label")}
            />

            <Footer />
        </main>
    );
}
