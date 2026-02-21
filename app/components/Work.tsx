"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const projectData = [
    {
        id: "p1",
        tech: [
            "React",
            "Next.js",
            "TailwindCSS",
            "Firebase",
            "API Integration",
        ],
        image: "/works/KONticket.png",
    },
    {
        id: "p2",
        tech: ["Laravel", "Nuxt.js", "SCSS", "JavaScript", "API Integration"],
        image: "/works/web-platform-frontend.png",
    },
    {
        id: "p3",
        tech: ["Laravel", "Nuxt.js", "SCSS", "JavaScript", "API Integration"],
        image: "/works/b2b.png",
    },
    {
        id: "p4",
        tech: ["PHP", "CSS", "JavaScript"],
    },
];

export default function Work() {
    const t = useTranslations("Work");

    return (
        <section id="work" className="section-container section-spacing">
            <div className="mb-20">
                <h2 className="heading-display text-display-md mb-6">
                    {t("title")}
                </h2>
                <p className="text-lg text-neutral-600 leading-relaxed max-w-3xl">
                    {t("description")}
                </p>
            </div>

            <div className="space-y-32">
                {projectData.map((project, index) => (
                    <motion.article
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                            <div className="relative aspect-[5/4] bg-neutral-50 border border-neutral-200 overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-500">
                                {project.image ? (
                                    <>
                                        <Image
                                            src={project.image}
                                            alt={t(
                                                `projects.${project.id}.title`,
                                            )}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                        <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-500"></div>
                                    </>
                                ) : (
                                    <>
                                        {/* Elegant Abstract Placeholder */}
                                        <div
                                            className={`absolute inset-0 opacity-20 bg-gradient-to-br ${
                                                index % 2 === 0
                                                    ? "from-accent to-neutral-400"
                                                    : "from-neutral-400 to-accent"
                                            }`}
                                        ></div>
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center">
                                                <span className="block text-6xl font-display font-bold text-neutral-200 mb-2 uppercase tracking-tighter">
                                                    {project.id}
                                                </span>
                                                <div className="h-px w-12 bg-neutral-200 mx-auto"></div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>

                        <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
                                {t(`projects.${project.id}.category`)}
                            </p>
                            <h3 className="text-2xl md:text-3xl font-display font-semibold mb-6 leading-snug">
                                {t(`projects.${project.id}.title`)}
                            </h3>

                            <div className="space-y-4 mb-8 max-w-prose">
                                <div>
                                    <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                                        {t("details_label")}
                                    </h4>
                                    <p className="text-neutral-600 leading-relaxed text-[15px]">
                                        {t(`projects.${project.id}.challenge`)}{" "}
                                        {t(`projects.${project.id}.solution`)}
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 mb-2">
                                        {t("result_label")}
                                    </h4>
                                    <p className="text-neutral-900 font-medium leading-relaxed text-[15px]">
                                        {t(`projects.${project.id}.result`)}
                                    </p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-200">
                                {project.tech.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-xs font-medium bg-neutral-100 text-neutral-700 border border-neutral-200"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>
        </section>
    );
}
