import { Badge } from "@/components/ui/badge";
import { SectionScrollCue } from "@/components/ScrollCue";
import { Cloud, Code2, Database, Monitor, Server, ShieldCheck } from "lucide-react";

const skillCategories = [
    {
        category: "Frontend",
        icon: Monitor,
        skills: [
            "React",
            "Next.js",
            "TypeScript",
            "JavaScript",
            "Vite",
            "Tailwind CSS",
            "Bootstrap",
            "HTML/CSS",
            "Responsive UI",
            "Leaflet.js",
        ],
    },
    {
        category: "Backend",
        icon: Server,
        skills: [
            "Python",
            "Django",
            "Django REST Framework",
            "FastAPI",
            "Flask",
            "Celery",
            "Node.js",
            "Express",
            "REST APIs",
            "WebSockets",
        ],
    },
    {
        category: "Data",
        icon: Database,
        skills: ["PostgreSQL", "MySQL", "Redis", "PostGIS", "Supabase", "SQL", "Schema design", "Query optimization"],
    },
    {
        category: "Cloud & DevOps",
        icon: Cloud,
        skills: ["Docker", "GitHub Actions", "Azure", "AWS", "Vercel", "Neon", "Linux", "Git"],
    },
    {
        category: "Quality & Security",
        icon: ShieldCheck,
        skills: ["Pytest", "Unittest", "Vitest", "Mocha/Chai", "JWT", "RBAC", "OWASP", "Code review"],
    },
    {
        category: "Ways of Working",
        icon: Code2,
        skills: ["Claude Code", "Agile/Scrum", "Remote, async", "Technical writing", "Team leadership"],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="py-24 px-6 bg-secondary/30">
            <div className="container mx-auto max-w-6xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gradient">
                    Full-Stack Skills
                </h2>
                <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto mb-16">
                    From the interface users click to the database behind it, and the pipeline that ships it.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillCategories.map((category) => (
                        <div
                            key={category.category}
                            className="p-8 rounded-xl bg-card border border-border card-glow hover-lift"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className="p-2 rounded-lg bg-primary/10">
                                    <category.icon className="w-5 h-5 text-primary" />
                                </div>
                                <h3 className="text-2xl font-semibold text-primary">{category.category}</h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {category.skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="px-4 py-2 text-sm bg-primary/10 hover:bg-primary/20 border-primary/30 text-foreground transition-colors"
                                    >
                                        {skill}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <SectionScrollCue to="experience" label="Experience" />
            </div>
        </section>
    );
};

export default Skills;
