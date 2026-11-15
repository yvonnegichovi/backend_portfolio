import { ArrowDown } from "lucide-react";

type ScrollCueProps = {
    to: string;
    label: string;
    className?: string;
};

const ScrollCue = ({ to, label, className = "" }: ScrollCueProps) => (
    <div className={className}>
        <button
            type="button"
            onClick={() => document.getElementById(to)?.scrollIntoView({ behavior: "smooth" })}
            aria-label={`Scroll to ${label}`}
            className="block text-muted-foreground hover:text-primary transition-colors animate-bounce motion-reduce:animate-none"
        >
            <ArrowDown className="w-8 h-8" />
        </button>
    </div>
);

export const SectionScrollCue = (props: Omit<ScrollCueProps, "className">) => (
    <div className="flex justify-center mt-16">
        <ScrollCue {...props} />
    </div>
);

export default ScrollCue;
