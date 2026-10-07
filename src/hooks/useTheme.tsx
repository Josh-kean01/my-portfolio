import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
    const [theme, setTheme] = useState<Theme>("light");
    const [initialized, setInitialized] = useState(false);

    useEffect(() => {
        setTheme(document.documentElement.classList.contains("dark") ? "dark" : "light");
        setInitialized(true);
    }, []);

    // Keep <html> and theme-color in sync whenever theme changes
    useEffect(() => {
        if (!initialized) return;

        document.documentElement.classList.toggle("dark", theme === "dark");

        const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
        if (meta) meta.content = theme === "dark" ? "#0c0a09" : "#eeeeee";
    }, [initialized, theme]);

    // Persist ONLY when user explicitly toggles
    const toggleTheme = () => {
        setTheme((prev) => {
            const next: Theme = prev === "dark" ? "light" : "dark";
            localStorage.setItem("theme", next);
            return next;
        });
    };

    return { theme, isDark: theme === "dark", toggleTheme, setTheme };
}
