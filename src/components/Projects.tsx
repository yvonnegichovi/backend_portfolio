import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, ExternalLink, Github, Globe, Server } from "lucide-react";

type ProjectLink = { label: string; url: string };

type Environment = {
    name: string;
    app: string;
    api: string;
};

type Project = {
    title: string;
    badge?: string;
    description: string;
    tech: string[];
    infra?: string[];
    environments?: Environment[];
    links?: ProjectLink[];
    github?: string;
    featured?: boolean;
};

const projects: Project[] = [
    {
        title: "SuiviParcel",
        badge: "Co-founder",
        description:
            "A smart parcel-delivery SaaS platform I co-founded and took from concept to a production logistics system serving thousands of users. It powers real-time tracking with sub-3-second location updates on an interactive map, and processes 100,000+ notifications and reports a month.",
        tech: [
            "Python",
            "Django",
            "Django REST Framework",
            "Celery",
            "Redis",
            "PostgreSQL",
            "PostGIS",
            "JavaScript",
            "Leaflet.js",
            "OpenStreetMap",
        ],
        infra: ["Azure App Service", "GitHub Actions CI/CD (zero-downtime)"],
        links: [{ label: "Visit SuiviParcel", url: "https://suiviparcel.com" }],
        featured: true,
    },
    {
        title: "PulseControl — Full-Stack Boilerplate",
        badge: "Featured",
        description:
            "A production-grade Django + React foundation with JWT auth (rotation and blacklisting), OpenAPI/Swagger docs, and Celery background workers. Each Git branch ships to its own environment through GitHub Actions, and Neon database branching gives dev, staging, and production their own isolated PostgreSQL copies.",
        tech: [
            "Python",
            "Django",
            "Django REST Framework",
            "Celery",
            "Redis",
            "PostgreSQL",
            "JavaScript",
            "React",
            "Vite",
            "Tailwind CSS",
            "Zustand",
        ],
        infra: ["Neon (DB branching)", "cPanel", "GitHub Actions CI/CD"],
        environments: [
            {
                name: "Dev",
                app: "https://dev-pulsecontrol.yvonnegichovi.com/",
                api: "https://dev-pulsecontrol-api.yvonnegichovi.com/api/docs/#/",
            },
            {
                name: "Staging",
                app: "https://staging-pulsecontrol.yvonnegichovi.com/",
                api: "https://staging-pulsecontrol-api.yvonnegichovi.com/api/docs/#/",
            },
            {
                name: "Production",
                app: "https://pulsecontrol.yvonnegichovi.com/",
                api: "https://pulsecontrol-api.yvonnegichovi.com/api/docs/#/",
            },
        ],
        github: "https://github.com/yvonnegichovi/boilerplate",
        featured: true,
    },
    {
        title: "Rotaract District 9216 Platforms",
        badge: "Featured",
        description:
            "The digital platforms for Rotaract District 9216, which spans ~78 clubs across Kenya and Ethiopia: the public website, an online merchandise shop with payments, the DCA site, and a role-based district management dashboard for club administration, membership, reporting, and dues invoicing.",
        tech: ["TypeScript", "React", "Vite", "Next.js", "Tailwind CSS", "PostgreSQL", "Stripe"],
        infra: ["Vercel", "Azure", "Supabase"],
        links: [
            { label: "Website", url: "https://rotaractdistrict9216.org" },
            { label: "Shop", url: "https://shop.rotaractdistrict9216.org" },
            { label: "DCA", url: "https://dca.rotaractdistrict9216.org" },
            { label: "Dashboard", url: "https://dashboard.rotaractdistrict9216.org" },
        ],
        featured: true,
    },
];

const externalProps = { target: "_blank", rel: "noopener noreferrer" } as const;

const Projects = () => {
    return (
        <section id="projects" className="py-24 px-6">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
                    Featured Projects
                </h2>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <Card
                            key={project.title}
                            className={`p-8 bg-card border-border card-glow hover-lift [--lift-scale:1.02] group flex flex-col ${
                                project.featured ? "md:col-span-2" : ""
                            }`}
                        >
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                {project.badge && (
                                    <span className="px-3 py-1 text-xs font-semibold rounded-full bg-primary text-primary-foreground">
                                        {project.badge}
                                    </span>
                                )}
                            </div>

                            <p className="text-muted-foreground mb-6 leading-relaxed">
                                {project.description}
                            </p>

                            {project.tech.length > 0 && (
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tech.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {project.infra && (
                                <div className="flex flex-wrap items-center gap-2 mb-6">
                                    <Server className="w-4 h-4 text-muted-foreground" aria-hidden />
                                    <span className="text-xs uppercase tracking-wide text-muted-foreground mr-1">
                                        Hosting
                                    </span>
                                    {project.infra.map((item) => (
                                        <span
                                            key={item}
                                            className="px-3 py-1 text-xs rounded-full border border-border text-foreground/80"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            )}

                            {project.environments && (
                                <div className="grid sm:grid-cols-3 gap-3 mb-6">
                                    {project.environments.map((env) => (
                                        <div
                                            key={env.name}
                                            className="rounded-lg border border-border p-4 bg-background/40"
                                        >
                                            <p className="text-sm font-semibold mb-3">{env.name}</p>
                                            <div className="flex flex-col gap-2 text-sm">
                                                <a
                                                    href={env.app}
                                                    {...externalProps}
                                                    className="inline-flex items-center gap-2 text-primary hover:underline"
                                                >
                                                    <Globe className="w-4 h-4" /> Frontend
                                                </a>
                                                <a
                                                    href={env.api}
                                                    {...externalProps}
                                                    className="inline-flex items-center gap-2 text-primary hover:underline"
                                                >
                                                    <BookOpen className="w-4 h-4" /> API docs
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="flex flex-wrap gap-4 mt-auto">
                                {project.github && (
                                    <Button
                                        variant="outline"
                                        size="sm"
                                        className="border-primary/50 hover:bg-primary/10"
                                        asChild
                                    >
                                        <a href={project.github} {...externalProps}>
                                            <Github className="w-4 h-4 mr-2" />
                                            Code
                                        </a>
                                    </Button>
                                )}
                                {project.links?.map((link) => (
                                    <Button
                                        key={link.url}
                                        size="sm"
                                        className="bg-primary hover:bg-primary/90"
                                        asChild
                                    >
                                        <a href={link.url} {...externalProps}>
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            {link.label}
                                        </a>
                                    </Button>
                                ))}
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
