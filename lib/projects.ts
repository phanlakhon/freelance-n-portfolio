export interface Project {
    id: string;
    slug: string;
    featured: boolean;
    tech: string[];
    image?: string;
}

export const projects: Project[] = [
    {
        id: "p1",
        slug: "booking-engine",
        featured: true,
        tech: [
            "React",
            "Next.js",
            "Tailwind CSS",
            "Firebase",
            "API Integration",
            "TypeScript"
        ],
        image: "/works/KONticket.png",
    },
    {
        id: "p2",
        slug: "unified-platform",
        featured: true,
        tech: ["Nuxt.js", "Vue.js", "Laravel", "SCSS", "Material UI", "JavaScript", "API Integration"],
        image: "/works/web-platform-frontend.png",
    },
    {
        id: "p3",
        slug: "b2b-ecommerce",
        featured: true,
        tech: ["Nuxt.js", "Laravel", "SCSS", "JavaScript", "API Integration"],
        image: "/works/b2b.png",
    }
];
