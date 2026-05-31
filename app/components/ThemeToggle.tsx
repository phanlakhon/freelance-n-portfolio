"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { usePathname } from "@/i18n/routing";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
    if (typeof window === "undefined") {
        return "light";
    }

    const storedTheme = window.localStorage.getItem("theme");

    if (storedTheme === "dark" || storedTheme === "light") {
        return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
}

export default function ThemeToggle() {
    const [theme, setTheme] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const initialTheme = getInitialTheme();
        setTheme(initialTheme);
        document.documentElement.classList.toggle(
            "dark",
            initialTheme === "dark",
        );
        setMounted(true);
    }, [pathname]);

    const toggleTheme = () => {
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        window.localStorage.setItem("theme", nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
    };

    return (
        <button
            type="button"
            onClick={toggleTheme}
            className="inline-flex h-10 w-10 items-center justify-center border border-neutral-200 text-neutral-700 transition-colors hover:border-accent hover:text-accent dark:border-neutral-700 dark:text-neutral-200 dark:hover:border-accent dark:hover:text-accent"
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Light mode" : "Dark mode"}
        >
            {mounted && theme === "dark" ? (
                <Sun className="h-4 w-4" />
            ) : (
                <Moon className="h-4 w-4" />
            )}
        </button>
    );
}
