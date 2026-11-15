import { useEffect, useRef, useState, type ComponentProps } from "react";
import { Button } from "@/components/ui/button";
import { Download, ExternalLink, FileText, X } from "lucide-react";

export const CV_URL = "/Yvonne_Gichovi_CV.pdf";

type CVButtonProps = Omit<ComponentProps<typeof Button>, "onClick"> & {
    label?: string;
};

/** A button that opens the CV in a popup viewer. */
export const CVButton = ({ label = "View CV", children, ...props }: CVButtonProps) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Button {...props} onClick={() => setOpen(true)}>
                {children ?? (
                    <>
                        <FileText className="w-4 h-4 mr-2" />
                        {label}
                    </>
                )}
            </Button>
            {open && <CVModal onClose={() => setOpen(false)} />}
        </>
    );
};

const CVModal = ({ onClose }: { onClose: () => void }) => {
    const closeRef = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const previouslyFocused = document.activeElement as HTMLElement | null;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        closeRef.current?.focus();

        const onKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("keydown", onKey);
            document.body.style.overflow = previousOverflow;
            previouslyFocused?.focus();
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-background/80 backdrop-blur-sm animate-fade-in"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="cv-modal-title"
                className="flex flex-col w-full max-w-4xl h-[92vh] rounded-xl border border-border bg-card shadow-2xl overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex flex-wrap items-center justify-between gap-3 px-4 py-3 border-b border-border">
                    <h2 id="cv-modal-title" className="text-lg font-bold text-gradient">
                        Curriculum Vitae
                    </h2>
                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" className="border-primary/50" asChild>
                            <a href={CV_URL} target="_blank" rel="noopener noreferrer">
                                <ExternalLink className="w-4 h-4 sm:mr-2" />
                                <span className="hidden sm:inline">Open in new tab</span>
                            </a>
                        </Button>
                        <Button size="sm" className="bg-primary hover:bg-primary/90" asChild>
                            <a href={CV_URL} download="Yvonne_Gichovi_CV.pdf">
                                <Download className="w-4 h-4 sm:mr-2" />
                                <span className="hidden sm:inline">Download</span>
                            </a>
                        </Button>
                        <Button
                            ref={closeRef}
                            variant="ghost"
                            size="icon"
                            onClick={onClose}
                            aria-label="Close CV"
                        >
                            <X className="w-5 h-5" />
                        </Button>
                    </div>
                </div>

                <object
                    data={`${CV_URL}#view=FitH`}
                    type="application/pdf"
                    className="flex-1 w-full bg-white"
                    aria-label="Yvonne Gichovi CV"
                >
                    {/* Fallback for browsers (mostly mobile) that can't render PDFs inline */}
                    <div className="flex h-full flex-col items-center justify-center gap-4 p-8 text-center bg-card">
                        <FileText className="w-12 h-12 text-primary" />
                        <p className="text-muted-foreground">
                            Your browser can't preview PDFs here.
                        </p>
                        <Button className="bg-primary hover:bg-primary/90" asChild>
                            <a href={CV_URL} target="_blank" rel="noopener noreferrer">
                                Open the CV
                            </a>
                        </Button>
                    </div>
                </object>
            </div>
        </div>
    );
};
