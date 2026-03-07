import React, { useCallback, useEffect, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { createPortal } from "react-dom";
import Noise from "./Noise";

type ProjectImageSliderProps = {
    images: string[];
    title?: string;
    autoScroll?: boolean;
    autoScrollInterval?: number;
    mode?: "contain" | "cover";
};

export default function ProjectImageSlider({
    images,
    title = "Project gallery",
    autoScroll = false,
    autoScrollInterval = 3500,
    mode = "contain",
}: ProjectImageSliderProps) {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        dragFree: false,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    const scrollPrev = useCallback(() => {
        emblaApi?.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        emblaApi?.scrollNext();
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;
        onSelect();
        emblaApi.on("select", onSelect);
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, onSelect]);

    useEffect(() => {
        if (!emblaApi || !autoScroll) return;

        const id = window.setInterval(() => {
            emblaApi.scrollNext();
        }, autoScrollInterval);

        return () => window.clearInterval(id);
    }, [emblaApi, autoScroll, autoScrollInterval]);

    useEffect(() => {
        if (lightboxIndex === null) return;

        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setLightboxIndex(null);
            if (e.key === "ArrowRight") {
                setLightboxIndex((prev) =>
                    prev === null ? 0 : (prev + 1) % images.length
                );
            }
            if (e.key === "ArrowLeft") {
                setLightboxIndex((prev) =>
                    prev === null ? 0 : (prev - 1 + images.length) % images.length
                );
            }
        };

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [lightboxIndex, images.length]);

    useEffect(() => {
        if (lightboxIndex !== null) {
            document.body.style.overflow = "hidden";
            document.documentElement.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.documentElement.style.overflow = "";
        };
    }, [lightboxIndex]);

    const objectClass =
        mode === "cover" ? "object-cover object-top" : "object-contain object-top";

    const currentImage = useMemo(() => {
        if (lightboxIndex === null) return null;
        return images[lightboxIndex];
    }, [images, lightboxIndex]);

    if (!images?.length) return null;

    return (
        <>
            <div className="relative">
                {/* Canvas / stage */}
                <div className="relative rounded-2xl border border-border-light dark:border-border-dark bg-[#efefef] dark:bg-surface-dark overflow-hidden">
                    {/* subtle stage chrome */}
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-black/[0.03] to-transparent dark:from-white/[0.03]" />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/[0.04] to-transparent dark:from-white/[0.03]" />

                    {/* embla viewport */}
                    <div className="overflow-hidden" ref={emblaRef}>
                        <div className="flex items-stretch h-[420px] sm:h-[520px] lg:h-[600px]">
                            {images.map((image, index) => (
                                <div
                                    key={`${image}-${index}`}
                                    className="min-w-0 flex-[0_0_auto] pl-4 first:pl-5 pr-0 py-5 sm:pl-5 sm:first:pl-6 sm:py-6"
                                >
                                    <button
                                        type="button"
                                        onClick={() => setLightboxIndex(index)}
                                        className="group h-full rounded-xl overflow-hidden border border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/10 shadow-sm hover:shadow-md transition-shadow"
                                        aria-label={`Open ${title} image ${index + 1}`}
                                    >
                                        <img
                                            src={image}
                                            alt={`${title} screen ${index + 1}`}
                                            className={`h-full w-auto max-w-none ${objectClass} transition-transform duration-300 group-hover:scale-[1.01]`}
                                            loading="lazy"
                                        />
                                    </button>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Controls */}
                    <div className="absolute inset-x-0 bottom-4 flex items-center justify-between px-4 sm:px-5">
                        <div className="rounded-full bg-white/80 dark:bg-black/40 backdrop-blur-sm border border-black/5 dark:border-white/10 px-3 py-1.5 text-xs text-gray-600 dark:text-gray-300">
                            {String(selectedIndex + 1).padStart(2, "0")} /{" "}
                            {String(images.length).padStart(2, "0")}
                        </div>

                        <div className="flex items-center gap-2">
                            <button
                                type="button"
                                onClick={scrollPrev}
                                className="h-10 w-10 rounded-full bg-white/85 dark:bg-black/45 backdrop-blur-sm border border-black/5 dark:border-white/10 text-primary dark:text-white inline-flex items-center justify-center hover:scale-105 transition-transform"
                                aria-label="Previous image"
                            >
                                <ChevronLeft size={18} />
                            </button>
                            <button
                                type="button"
                                onClick={scrollNext}
                                className="h-10 w-10 rounded-full bg-white/85 dark:bg-black/45 backdrop-blur-sm border border-black/5 dark:border-white/10 text-primary dark:text-white inline-flex items-center justify-center hover:scale-105 transition-transform"
                                aria-label="Next image"
                            >
                                <ChevronRight size={18} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxIndex !== null &&
                currentImage &&
                createPortal(
                    <div className="fixed inset-0 z-[9999] bg-background-light/85 dark:bg-background-dark/85 backdrop-blur-md">
                        <div className="relative flex h-dvh w-dvw items-center justify-center overflow-hidden p-4 sm:p-6">
                            <Noise />
                            <button
                                type="button"
                                onClick={() => setLightboxIndex(null)}
                                className="absolute top-4 right-4 z-10 h-11 w-11 rounded-full bg-surface-light/85 dark:bg-surface-dark/85 border border-border-light dark:border-border-dark text-primary dark:text-white hover:scale-105 transition-all inline-flex items-center justify-center"
                                aria-label="Close preview"
                            >
                                <X size={20} />
                            </button>

                            <button
                                type="button"
                                onClick={() =>
                                    setLightboxIndex((prev) =>
                                        prev === null ? 0 : (prev - 1 + images.length) % images.length
                                    )
                                }
                                className="absolute left-4 sm:left-6 z-10 h-11 w-11 rounded-full bg-surface-light/85 dark:bg-surface-dark/85 border border-border-light dark:border-border-dark text-primary dark:text-white hover:scale-105 transition-all inline-flex items-center justify-center"
                                aria-label="Previous preview"
                            >
                                <ChevronLeft size={20} />
                            </button>

                            <div className="flex h-full max-h-[92dvh] w-full max-w-6xl items-center justify-center overflow-hidden rounded-2xl border border-border-light dark:border-border-dark bg-surface-light dark:bg-surface-dark shadow-2xl">
                                <img
                                    src={currentImage}
                                    alt={`${title} preview ${lightboxIndex + 1}`}
                                    className="block max-h-full max-w-full object-contain object-top"
                                />
                            </div>

                            <button
                                type="button"
                                onClick={() =>
                                    setLightboxIndex((prev) =>
                                        prev === null ? 0 : (prev + 1) % images.length
                                    )
                                }
                                className="absolute right-4 sm:right-6 z-10 h-11 w-11 rounded-full bg-surface-light/85 dark:bg-surface-dark/85 border border-border-light dark:border-border-dark text-primary dark:text-white hover:scale-105 transition-all inline-flex items-center justify-center"
                                aria-label="Next preview"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>,
                    document.body
                )}
        </>
    );
}