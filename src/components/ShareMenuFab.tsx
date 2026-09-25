import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, type Variants } from "framer-motion";
import { Share2, Github, Twitter, Mail } from "lucide-react";

const panelVariants: Variants = {
    hidden: { opacity: 0, y: 12, scale: 0.98 },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.22, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.07 },
    },
    exit: { opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.16, ease: "easeInOut" } },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 6 },
    show: { opacity: 1, y: 0, transition: { duration: 0.18, ease: "easeOut" } },
};

function useOnClickOutside(ref: React.RefObject<HTMLElement>, handler: () => void) {
    useEffect(() => {
        const listener = (e: MouseEvent | TouchEvent) => {
            const el = ref.current;
            if (!el || el.contains(e.target as Node)) return;
            handler();
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
            document.removeEventListener("mousedown", listener);
            document.removeEventListener("touchstart", listener);
        };
    }, [ref, handler]);
}

export default function ShareMenuFab() {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef<HTMLDivElement>(null);

    useOnClickOutside(wrapRef, () => setOpen(false));

    useEffect(() => {
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        document.addEventListener("keydown", onKeyDown);
        return () => document.removeEventListener("keydown", onKeyDown);
    }, []);

    const links = [
        { label: "GitHub", href: "https://github.com/Josh-kean01/", Icon: Github },
        { label: "Twitter/X", href: "https://x.com/theJoshUx", Icon: Twitter },
        { label: "Email", href: "mailto:adekunlej960@gmail.com", Icon: Mail },
    ];

    return (
        <div ref={wrapRef} className="fixed bottom-6 right-6 z-50">
            {/* Panel */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        key="share-panel"
                        role="menu"
                        aria-label="Social links"
                        initial="hidden"
                        animate="show"
                        exit="exit"
                        variants={panelVariants}
                        className="mb-3 rounded-xlshadow-xl overflow-hidden"
                    >
                        <div className="grid grid-rows-3 gap-2">
                            {links.map(({ label, href, Icon }) => (
                                <motion.a
                                    key={label}
                                    role="menuitem"
                                    variants={itemVariants}
                                    href={href}
                                    target="_blank"
                                    rel="noreferrer"
                                    onClick={() => setOpen(false)}
                                    aria-label={label}
                                    className="h-12 w-12 rounded-xl border border-border-light dark:border-border-dark
                 bg-white dark:bg-surface-dark shadow-sm
                 inline-flex items-center justify-center
                 hover:bg-gray-100 dark:hover:bg-gray-800
                 focus:outline-none focus:ring-2 focus:ring-accent
                 transition-transform duration-200 ease-out hover:-translate-y-0.5 active:translate-y-0"
                                >
                                    <Icon size={18} aria-hidden="true" />
                                    <span className="sr-only">{label}</span>
                                </motion.a>
                            ))}
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

            {/* Share button */}
            <button
                type="button"
                aria-haspopup="menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                title="Share on social media"
                className="h-12 w-12 rounded-full border border-border-light dark:border-border-dark
                   bg-white dark:bg-surface-dark shadow-lg
                   inline-flex items-center justify-center
                   transition-transform duration-200 ease-out
                   hover:-translate-y-1 active:translate-y-0"
            >
                <Share2 size={18} />
            </button>
        </div>
    );
}
