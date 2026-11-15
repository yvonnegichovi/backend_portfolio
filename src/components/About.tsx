import { Card } from "@/components/ui/card";
import { Layers, Rocket, ShieldCheck, Users } from "lucide-react";
import { CVButton } from "@/components/CVModal";

const stats = [
    { value: "100k+", label: "notifications and reports processed a month" },
    { value: "99.9%", label: "uptime with zero-downtime deployments" },
    { value: "~60%", label: "faster PostgreSQL queries after optimization" },
    { value: "3", label: "live production systems across three countries" },
];

const highlights = [
    {
        icon: Layers,
        title: "End-to-End Ownership",
        description:
            "From database schema and APIs to responsive React and Next.js interfaces, I build and ship the whole feature, not just one layer of it.",
    },
    {
        icon: Rocket,
        title: "From Idea to MVP",
        description:
            "I help founders turn ideas into working products with Django, FastAPI, React, Next.js, and PostgreSQL, built to launch and iterate fast.",
    },
    {
        icon: ShieldCheck,
        title: "Reliable & Secure",
        description:
            "Tested, documented code with CI/CD, JWT auth, role-based access control, and OWASP-aligned practices, so production stays boring.",
    },
    {
        icon: Users,
        title: "Clear Collaboration",
        description:
            "I've led a 12-member cross-functional team across time zones. I communicate clearly, ask the right questions early, and take ownership.",
    },
];

const About = () => {
    return (
        <section id="about" className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
                    About Me
                </h2>

                <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                    <div className="space-y-6">
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I’m a full-stack software engineer who builds production web applications end
                            to end: clean, responsive frontends in React and Next.js, backed by Python
                            APIs in Django and FastAPI, PostgreSQL, and Redis, deployed with Docker and
                            GitHub Actions to Azure, AWS, and Vercel.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I co-founded and engineered{" "}
                            <a
                                href="https://suiviparcel.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors"
                            >
                                SuiviParcel
                            </a>
                            , a logistics SaaS platform serving thousands of users, and I build and run the
                            platforms of Rotaract District 9216 across Kenya and Ethiopia: the public
                            website, online shop, and an operations dashboard with automated invoicing,
                            multi-level reporting workflows, and role-based access.
                        </p>
                        <p className="text-lg text-muted-foreground leading-relaxed">
                            I write tested, documented code and care about reliability and getting the
                            details right, on both sides of the stack.
                        </p>
                        <CVButton
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 hover-glow"
                            label="View my CV"
                        />
                    </div>

                    <div className="grid gap-6">
                        {highlights.map((item) => (
                            <Card
                                key={item.title}
                                className="p-6 bg-card border-border card-glow hover-lift"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-primary/10">
                                        <item.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                                        <p className="text-muted-foreground">{item.description}</p>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {stats.map((stat) => (
                        <div
                            key={stat.value}
                            className="p-6 rounded-xl bg-primary/10 border border-primary/20 text-center hover-lift"
                        >
                            <p className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                            <p className="text-sm text-muted-foreground leading-snug">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default About;
