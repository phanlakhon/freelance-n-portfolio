"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Link } from "@/i18n/routing";
import { Project } from "@/lib/projects";

interface Props {
    project: Project;
    title: string;
    category: string;
    challenge: string;
    solution: string;
    result: string;
    detailsLabel: string;
    resultLabel: string;
}

export default function ProjectDetailClient({
    project,
    title,
    category,
    challenge,
    solution,
    result,
    detailsLabel,
    resultLabel,
}: Props) {
    return (
        <section className="bg-white">
            {/* Header / Hero Section */}
            <div className="relative pt-32 pb-20 border-b border-neutral-100 overflow-hidden">
                <div className="section-container relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="mb-8"
                    >
                        <Link
                            href="/work"
                            className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-accent transition-colors duration-300"
                        >
                            <svg
                                className="mr-2 w-4 h-4 rotate-180"
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
                            Back to Projects
                        </Link>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-xs font-bold tracking-[0.3em] uppercase text-accent mb-4"
                    >
                        {category}
                    </motion.p>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="heading-display text-display-md lg:text-display-lg max-w-4xl"
                    >
                        {title}
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="flex flex-wrap gap-2 mt-10"
                    >
                        {project.tech.map((tech) => (
                            <span
                                key={tech}
                                className="px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide bg-neutral-900 text-white"
                            >
                                {tech}
                            </span>
                        ))}
                    </motion.div>
                </div>
                
                <div className="absolute top-0 right-0 w-1/3 h-full bg-neutral-50/50 -skew-x-12 transform translate-x-20 hidden lg:block -z-10"></div>
            </div>

            {/* Featured Image Section */}
            <div className="section-container -mt-10 mb-24">
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="relative aspect-[16/9] bg-neutral-100 border border-neutral-200 shadow-2xl overflow-hidden"
                >
                    {project.image ? (
                        <Image
                            src={project.image}
                            alt={title}
                            fill
                            priority
                            className="object-cover"
                            sizes="100vw"
                        />
                    ) : (
                        <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-200">
                            <span className="text-8xl font-display font-bold text-neutral-100 uppercase tracking-tighter">
                                {project.id}
                            </span>
                        </div>
                    )}
                </motion.div>
            </div>

            {/* Content Section */}
            <div className="section-container pb-32">
                <div className="grid lg:grid-cols-12 gap-16">
                    <div className="lg:col-span-8 space-y-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-sm font-bold uppercase tracking-widest text-neutral-400 border-b border-neutral-100 pb-4">
                                {detailsLabel}
                            </h2>
                            <p className="text-xl text-neutral-800 leading-relaxed font-light">
                                {challenge}
                            </p>
                            <p className="text-lg text-neutral-600 leading-relaxed">
                                {solution}
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="p-10 bg-neutral-50 border-l-4 border-accent space-y-6 shadow-sm"
                        >
                            <h2 className="text-sm font-bold uppercase tracking-widest text-accent">
                                {resultLabel}
                            </h2>
                            <p className="text-2xl font-display font-medium text-neutral-900 leading-snug">
                                {result}
                            </p>
                        </motion.div>
                    </div>

                    <aside className="lg:col-span-4 lg:sticky lg:top-32 h-fit space-y-10">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h3 className="text-xs font-bold uppercase tracking-widest text-neutral-900">
                                Project Core
                            </h3>
                            <ul className="space-y-4">
                                {project.tech.map((tech) => (
                                    <li key={tech} className="flex items-center text-sm text-neutral-600">
                                        <div className="w-1.5 h-1.5 bg-accent mr-3"></div>
                                        {tech}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="pt-10 border-t border-neutral-100"
                        >
                            <p className="text-sm text-neutral-400 mb-6 italic">
                                Thinking of building something similar?
                            </p>
                            <Link
                                href="/#contact"
                                className="inline-flex items-center px-8 py-4 bg-neutral-900 text-white text-[11px] font-bold uppercase tracking-widest hover:bg-accent transition-all duration-500 shadow-lg"
                            >
                                Let's Discuss
                            </Link>
                        </motion.div>
                    </aside>
                </div>
            </div>
        </section>
    );
}
