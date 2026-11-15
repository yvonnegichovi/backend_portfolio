import { useState, type ComponentType } from "react";
import { MotionConfig, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type Highlight = {
    icon: ComponentType<{ className?: string }>;
    title: string;
    description: string;
};

const spring = { type: "spring", stiffness: 320, damping: 32 } as const;

const PEEK = 14;
const SHRINK = 0.05;

const HighlightsStack = ({ items }: { items: Highlight[] }) => {
    const [expanded, setExpanded] = useState(false);
    const behind = items.length - 1;

    return (
        <MotionConfig transition={spring} reducedMotion="user">
            <div>
                <motion.div
                    layout
                    className={`relative ${expanded ? "" : "cursor-pointer"}`}
                    style={{ paddingBottom: expanded ? 0 : behind * PEEK }}
                    onClick={() => !expanded && setExpanded(true)}
                >
                    {items.map((item, i) => {
                        const isFront = i === 0;
                        const position = expanded
                            ? "relative mb-4 last:mb-0"
                            : isFront
                                ? "relative"
                                : "absolute inset-x-0 top-0";

                        return (
                            <motion.div
                                key={item.title}
                                layout
                                className={`${position} rounded-lg border border-border bg-card p-6 card-glow overflow-hidden`}
                                style={{
                                    zIndex: items.length - i,
                                    borderRadius: 12,
                                    bottom: !expanded && !isFront ? behind * PEEK : undefined,
                                }}
                                initial={false}
                                animate={
                                    expanded
                                        ? { y: 0, scale: 1, opacity: 1 }
                                        : { y: i * PEEK, scale: 1 - i * SHRINK, opacity: 1 - i * 0.2 }
                                }
                                whileHover={expanded ? { y: -6, scale: 1.03 } : undefined}
                            >
                                <motion.div
                                    layout="position"
                                    className="flex items-start gap-4"
                                    initial={false}
                                    animate={{ opacity: expanded || isFront ? 1 : 0 }}
                                >
                                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <motion.div layout className="flex justify-center mt-4">
                    <button
                        type="button"
                        onClick={() => setExpanded((v) => !v)}
                        aria-expanded={expanded}
                        className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                    >
                        {expanded ? "Show less" : `See all ${items.length}`}
                        <motion.span animate={{ rotate: expanded ? 180 : 0 }} className="inline-flex">
                            <ChevronDown className="w-4 h-4" />
                        </motion.span>
                    </button>
                </motion.div>
            </div>
        </MotionConfig>
    );
};

export default HighlightsStack;
