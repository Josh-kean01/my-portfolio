import React, { useEffect, useRef, useState } from "react";
import { Github, Mail, Share2, Twitter, X } from "lucide-react";
import { Liquid } from "liquid-gooey";

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

const itemTransition = {
    duration: 550,
    ease: "cubic-bezier(0.34, 1.56, 0.64, 1)",
};

const itemPositions = [
    { x: 0, y: -64 },
    { x: -54, y: -34 },
    { x: 54, y: -34 },
];

const buttonClassName =
    "inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-[#202020] text-white shadow-lg transition-colors hover:bg-[#303030] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent";

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
            <Liquid
                blur={0}
                contrast={20}
                fill="#202020"
                shadow="0 8px 24px rgb(0 0 0 / 18%)"
                filterPadding={200}
                className="relative h-[104px] w-[148px]"
                aria-label="Social links"
            >
                {links.map(({ label, href, Icon }, index) => (
                    <Liquid.Item
                        key={label}
                        x={open ? itemPositions[index].x : 0}
                        y={open ? itemPositions[index].y : 0}
                        transition={itemTransition}
                        delay={open ? index * 40 : 0}
                        className={`absolute bottom-0 left-[54px] ${
                            open
                                ? "pointer-events-auto opacity-100"
                                : "pointer-events-none opacity-0"
                        } transition-opacity duration-200`}
                        style={{ zIndex: 5 + index }}
                        aria-hidden={!open}
                    >
                        <a
                            href={href}
                            target={href.startsWith("mailto:") ? undefined : "_blank"}
                            rel={href.startsWith("mailto:") ? undefined : "noreferrer"}
                            onClick={() => setOpen(false)}
                            aria-label={label}
                            tabIndex={open ? 0 : -1}
                            className={buttonClassName}
                        >
                            <Icon size={18} aria-hidden="true" />
                        </a>
                    </Liquid.Item>
                ))}

                <Liquid.Item
                    x={0}
                    y={0}
                    transition={itemTransition}
                    className="absolute bottom-0 left-[54px]"
                    style={{ zIndex: 10 }}
                >
                    <button
                        type="button"
                        aria-haspopup="true"
                        aria-expanded={open}
                        aria-label={open ? "Close social links" : "Share on social media"}
                        title={open ? "Close social links" : "Share on social media"}
                        onClick={() => setOpen((value) => !value)}
                        className={buttonClassName}
                    >
                        {open ? <X size={18} aria-hidden="true" /> : <Share2 size={18} aria-hidden="true" />}
                    </button>
                </Liquid.Item>
            </Liquid>
        </div>
    );
}
