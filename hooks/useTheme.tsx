import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("light");

    // Initialize ONCE
    useEffect(() => {
        const saved = localStorage.getItem("theme") as Theme | null;

        if (saved === "light" || saved === "dark") {
            setTheme(saved);
            return;
        }

        // No saved choice -> use system preference as default
        const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
        setTheme(prefersDark ? "dark" : "light");
    }, []);

    // Apply to <html> + persist whenever theme changes
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

    return { theme, isDark: theme === "dark", toggleTheme, setTheme };
}
