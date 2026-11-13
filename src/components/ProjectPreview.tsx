import { useEffect, useRef, useState } from "react";

const PREVIEW_VIEWPORT_WIDTH = 1280;
const PREVIEW_VIEWPORT_HEIGHT = 960;

const ProjectPreview = ({ url, title }: { url: string; title: string }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.25);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateScale = () => {
      setScale(container.clientWidth / PREVIEW_VIEWPORT_WIDTH);
    };

    updateScale();

    const observer = new ResizeObserver(updateScale);
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <iframe
        src={url}
        title={`${title} preview`}
        loading="lazy"
        scrolling="no"
        referrerPolicy="no-referrer-when-downgrade"
        style={{
          width: PREVIEW_VIEWPORT_WIDTH,
          height: PREVIEW_VIEWPORT_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: "top left",
        }}
        className="pointer-events-none absolute left-0 top-0 grayscale transition-[filter,transform] duration-700 group-hover:grayscale-0"
      />
    </div>
  );
};

export default ProjectPreview;
