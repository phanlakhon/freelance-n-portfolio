import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";
import Image from "next/image";
import ProjectDetailClient from "./ProjectDetailClient";

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectPage(props: { params: Promise<{ slug: string; locale: string }> }) {
    const { slug, locale } = await props.params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    const t = await getTranslations({ locale, namespace: "Work" });

    return (
        <main className="min-h-screen bg-white">
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
