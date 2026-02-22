"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { projects } from "@/lib/projects";

export default function Work() {
    const t = useTranslations("Work");
    const featuredProjects = projects.filter((p) => p.featured);

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
                {featuredProjects.map((project, index) => (
                    <motion.article
                        key={project.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7, delay: index * 0.1 }}
                        className="grid lg:grid-cols-2 gap-16 items-center"
                    >
                        <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                            <Link href={`/work/${project.slug}`}>
                                <div className="relative aspect-[5/4] bg-neutral-50 border border-neutral-200 overflow-hidden group shadow-sm hover:shadow-md transition-shadow duration-500 cursor-pointer">
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
                            </Link>
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

                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-6 border-t border-neutral-200">
                                <Link
                                    href={`/work/${project.slug}`}
                                    className="group inline-flex items-center text-sm font-bold uppercase tracking-wider text-neutral-900 hover:text-accent transition-colors duration-300"
                                >
                                    {t("view_details")}
                                    <svg
                                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2.5}
                                            d="M17 8l4 4m0 0l-4 4m4-4H3"
                                        />
                                    </svg>
                                </Link>

                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-[10px] font-bold uppercase tracking-tight bg-neutral-100 text-neutral-600 border border-neutral-200"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.article>
                ))}
            </div>

            <div className="mt-32 text-center">
                <Link
                    href="/work"
                    className="inline-flex items-center px-10 py-5 bg-neutral-900 text-white text-sm font-bold uppercase tracking-widest hover:bg-accent transition-colors duration-500 group shadow-lg"
                >
                    {t("see_all")}
                    <svg
                        className="ml-3 w-5 h-5 transition-transform duration-500 group-hover:translate-x-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 7l5 5m0 0l-5 5m5-5H6"
                        />
                    </svg>
                </Link>
            </div>
        </section>
    );
}
