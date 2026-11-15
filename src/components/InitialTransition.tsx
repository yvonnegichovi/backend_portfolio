import { useEffect } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const ease = [0.87, 0, 0.13, 1] as const;

const blackBox: Variants = {
    initial: {
        height: "100vh",
        bottom: 0,
    },
    animate: {
        height: 0,
        transition: {
            when: "afterChildren",
            duration: 1.5,
            ease,
        },
    },
};

const text: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: [0, 1, 1, 0],
        y: [20, 0, 0, -20],
        transition: {
            duration: 1.6,
            times: [0, 0.3, 0.75, 1],
            ease: "easeInOut",
        },
    },
};

type InitialTransitionProps = {
    onComplete: () => void;
};

const InitialTransition = ({ onComplete }: InitialTransitionProps) => {
    const reduceMotion = useReducedMotion();

    useEffect(() => {
        if (reduceMotion) {
            onComplete();
            return;
        }
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [reduceMotion, onComplete]);

    if (reduceMotion) return null;

    return (
        <div className="fixed inset-0 z-[100] pointer-events-none" aria-hidden>
            <motion.div
                className="absolute left-0 w-full bg-primary flex items-center justify-center overflow-hidden"
                initial="initial"
                animate="animate"
                variants={blackBox}
                onAnimationComplete={(definition) => {
                    if (definition === "animate") onComplete();
                }}
            >
                <motion.div variants={text} className="text-center px-6">
                    <p className="font-display text-4xl md:text-7xl font-bold text-white tracking-tight">
                        Yvonne Gichovi
                    </p>
                    <p className="mt-3 text-sm md:text-lg text-white/80 tracking-[0.3em] uppercase">
                        Full-Stack Software Engineer
                    </p>
                </motion.div>
            </motion.div>
        </div>
    );
};

export default InitialTransition;
