"use client";

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
        image: "/placeholder-project-4.jpg",
    },
    {
        id: "p2",
        tech: ["Laravel", "Nuxt.js", "SCSS", "JavaScript", "API Integration"],
        image: "/placeholder-project-2.jpg",
    },
    {
        id: "p3",
        tech: ["Laravel", "Nuxt.js", "SCSS", "JavaScript", "API Integration"],
        image: "/placeholder-project-3.jpg",
    },
    {
        id: "p4",
        tech: ["PHP", "CSS", "JavaScript"],
        image: "/placeholder-project-1.jpg",
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
                            <div className="relative aspect-[5/4] bg-neutral-100 border border-neutral-200 overflow-hidden group">
                                <div className="absolute inset-0 bg-gradient-to-br from-neutral-900/5 to-neutral-900/20 group-hover:opacity-0 transition-opacity duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center text-neutral-400">
                                    <svg
                                        className="w-20 h-20"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1}
                                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
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
                                        {t(`projects.${project.id}.challenge`)} {t(`projects.${project.id}.solution`)}
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
