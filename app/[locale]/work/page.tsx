"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { projects } from "@/lib/projects";
import Navigation from "@/app/components/Navigation";
import Footer from "@/app/components/Footer";

export default function WorkPage() {
    const t = useTranslations("Work");

    return (
        <main className="min-h-screen bg-white">
            <Navigation />
            
            <section className="section-container pt-32 pb-20">
                <div className="max-w-3xl mb-16">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="heading-display text-display-md mb-6"
                    >
                        {t("title")}
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-neutral-600 leading-relaxed"
                    >
                        {t("description")}
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group"
                        >
                            <Link href={`/work/${project.slug}`}>
                                <div className="relative aspect-[16/10] bg-neutral-50 border border-neutral-200 overflow-hidden mb-6 shadow-sm group-hover:shadow-md transition-all duration-500">
                                    {project.image ? (
                                        <Image
                                            src={project.image}
                                            alt={t(`projects.${project.id}.title`)}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            sizes="(max-width: 768px) 100vw, 50vw"
                                        />
                                    ) : (
                                        <div className="absolute inset-0 flex items-center justify-center opacity-20 bg-gradient-to-br from-accent to-neutral-400">
                                            <span className="text-4xl font-display font-bold text-neutral-200 uppercase tracking-tighter">
                                                {project.id}
                                            </span>
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-neutral-900/0 group-hover:bg-neutral-900/5 transition-colors duration-500"></div>
                                </div>
                            </Link>

                            <div className="space-y-3">
                                <p className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
                                    {t(`projects.${project.id}.category`)}
                                </p>
                                <h3 className="text-xl font-display font-semibold group-hover:text-accent transition-colors duration-300">
                                    <Link href={`/work/${project.slug}`}>
                                        {t(`projects.${project.id}.title`)}
                                    </Link>
                                </h3>
                                <div className="flex flex-wrap gap-2 pt-2">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-tight bg-neutral-100 text-neutral-500 border border-neutral-200"
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

            <Footer />
        </main>
    );
}
