"use client";

import { motion } from "framer-motion";

const techCategories = [
  {
    category: "Primary Frameworks",
    items: ["Next.js", "Nuxt.js", "React", "Vue.js"],
  },
  {
    category: "Core Languages",
    items: ["TypeScript", "JavaScript (ES6+)", "HTML", "CSS"],
  },
  {
    category: "Automation & Integration",
    items: ["n8n"],
  },
  {
    category: "State Management",
    items: ["Zustand", "Pinia", "Redux Toolkit"],
  },
  {
    category: "Styling & UI",
    items: ["Tailwind CSS", "SCSS/Sass", "Styled-Components"],
  },
  {
    category: "Development Tools",
    items: ["Git", "Docker", "Vitest", "Playwright"],
  },
];

export default function TechStack() {
  return (
    <section className="section-container section-spacing">
      <div className="max-w-3xl mb-16">
        <h2 className="heading-display text-display-md mb-6">
          Tech Stack
        </h2>
        <p className="text-lg text-neutral-600">
          เครื่องมือและเทคโนโลยีที่เราเลือกใช้ เพื่อสร้าง System ที่แข็งแกร่งและมีประสิทธิภาพ
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {techCategories.map((category, idx) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.1 }}
          >
            <h3 className="text-sm font-semibold uppercase tracking-widest text-neutral-500 mb-6">
              {category.category}
            </h3>
            <ul className="space-y-3">
              {category.items.map((item) => (
                <li
                  key={item}
                  className="text-neutral-700 font-medium hover:text-accent transition-colors cursor-default"
                >
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
