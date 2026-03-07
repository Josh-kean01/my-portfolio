import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
    // Read initial theme from the class that was set in <head>
    const [theme, setTheme] = useState<Theme>(() =>
        document.documentElement.classList.contains("dark") ? "dark" : "light"
    );

    // Keep <html> and theme-color in sync whenever theme changes
    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");

        const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
        if (meta) meta.content = theme === "dark" ? "#0c0a09" : "#eeeeee";
    }, [theme]);

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
