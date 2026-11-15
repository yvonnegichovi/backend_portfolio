import { motion, useReducedMotion } from "framer-motion";


const draw = (delay = 0) => ({
    duration: 2,
    type: "tween" as const,
    ease: "easeInOut" as const,
    delay,
});

type DrawBorderProps = {
    radius?: number;
    delay?: number;
};

export const DrawBorder = ({ radius = 12, delay = 0 }: DrawBorderProps) => {
    const reduceMotion = useReducedMotion();
    return (
        <svg
            aria-hidden
            className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
        >
            <motion.rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx={radius}
                ry={radius}
                fill="none"
                stroke="url(#draw-gradient)"
                strokeWidth={2}
                strokeLinecap="round"
                initial={{ pathLength: reduceMotion ? 1 : 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={draw(delay)}
            />
        </svg>
    );
};

export const DrawLine = ({ className = "", delay = 0 }: { className?: string; delay?: number }) => {
    const reduceMotion = useReducedMotion();
    return (
        <svg aria-hidden className={`pointer-events-none overflow-visible ${className}`}>
            <motion.line
                x1="1"
                y1="0"
                x2="1"
                y2="100%"
                stroke="url(#draw-gradient-vertical)"
                strokeWidth={2}
                initial={{ pathLength: reduceMotion ? 1 : 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={draw(delay)}
            />
        </svg>
    );
};

export const DrawGradients = () => (
    <svg aria-hidden width="0" height="0" className="absolute">
        <defs>
            <linearGradient id="draw-gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
            <linearGradient id="draw-gradient-vertical" x1="0" y1="0" x2="0" y2="100%" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--accent))" />
            </linearGradient>
        </defs>
    </svg>
);
