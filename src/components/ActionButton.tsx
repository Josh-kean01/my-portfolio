import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type ActionButtonProps<T extends ElementType = "button"> = {
    as?: T;
    children: ReactNode;
    className?: string;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

function ActionButton<T extends ElementType = "button">({
    as,
    children,
    className = "",
    ...props
}: ActionButtonProps<T>) {
    const Component = as ?? "button";

    return (
        <div className="relative group inline-block">
            <span
                aria-hidden="true"
                className="absolute top-2 left-2 w-full h-full border border-primary dark:border-white rounded-sm bg-transparent transition-transform duration-300 group-hover:translate-x-1 group-hover:translate-y-1"
            />
            <Component
                {...props}
                className={`relative block bg-primary dark:bg-white text-white dark:text-black px-7 2xl:px-8 py-3.5 2xl:py-4 font-display font-medium text-base 2xl:text-lg tracking-wide rounded-sm shadow-xl transition-transform duration-300 active:translate-x-1 active:translate-y-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${className}`}
            >
                {children}
            </Component>
        </div>
    );
}

export default ActionButton;