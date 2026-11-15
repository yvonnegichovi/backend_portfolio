import { Card } from "@/components/ui/card";
import { CVButton } from "@/components/CVModal";

type Job = {
    role: string;
    org: string;
    orgUrl?: string;
    dates: string;
    context?: string;
    points: string[];
};

const jobs: Job[] = [
    {
        role: "Co-Founder & Backend Software Engineer",
        org: "SuiviParcel",
        orgUrl: "https://suiviparcel.com",
        dates: "Feb 2025 – Present",
        context: "Smart parcel-delivery SaaS platform",
        points: [
            "Took the platform from concept to a production logistics system serving thousands of users, leading end-to-end technical development.",
            "Architected an asynchronous Django backend with Celery and Redis powering real-time tracking (OpenStreetMap, Leaflet.js, PostGIS), with sub-3-second location updates and 100,000+ notifications and reports a month.",
            "Cut API response times by about 40% and improved PostgreSQL performance by about 60% through indexing, geospatial query optimization, caching and rate limiting.",
            "Built GitHub Actions CI/CD with zero-downtime deployments on Azure App Service: 80% faster deployments, 20% lower infrastructure costs, 99.9% uptime.",
            "Led a 12-member cross-functional team across time zones, raising development velocity by 25% and shipping the MVP ahead of schedule.",
        ],
    },
    {
        role: "District Technology & Innovation Chair (Volunteer)",
        org: "Rotaract District 9216",
        orgUrl: "https://rotaractdistrict9216.org",
        dates: "Feb 2026 – Present",
        context: "Kenya & Ethiopia",
        points: [
            "Sole developer of the public website and online shop (built from scratch), and co-developer of the operations dashboard used by clubs in both countries.",
            "Built automated dues invoicing from member data with reconciliation, PDF invoices, unpaid-club notifications and a two-sided dispute workflow.",
            "Implemented multi-level reporting workflows with deadline locks and country approval, plus role-based access control and filterable report views.",
            "Led a full UI redesign (brand theme, light and dark mode, responsive app shell) and delivered new modules end to end: blog, support ticketing, shop management and a recruitment CMS with a form builder.",
            "Connected the dashboard to the website through CORS-secured APIs, so officers, recruitment and live membership counts come from one source.",
        ],
    },
    {
        role: "Full-Stack Software Engineer (Freelance)",
        org: "Upwork",
        dates: "Jul 2024 – Present",
        points: [
            "Design and deliver production web applications for international clients, from requirements through deployment.",
            "Built internationalization and localization in Flask applications with Flask-Babel, and a custom Python caching layer that reduced database load.",
            "Developed secure authentication and multi-organization management systems with Flask and PostgreSQL, deployed on AWS and Koyeb with CI/CD.",
        ],
    },
    {
        role: "Backend Software Engineering Intern",
        org: "HNG",
        dates: "Jul 2024 – Feb 2025",
        points: [
            "Designed and implemented REST APIs with FastAPI and Express.js, improving system performance by 15%.",
            "Optimized PostgreSQL queries and schema design, speeding up data retrieval by 20%.",
            "Wrote unit and integration tests with Pytest and Unittest, reducing production bugs by 30%, and automated CI/CD pipelines, cutting deployment time by 40%.",
        ],
    },
];

const Experience = () => {
    return (
        <section id="experience" className="py-24 px-6">
            <div className="container mx-auto max-w-4xl">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
                    Experience
                </h2>

                <ol className="relative border-l border-primary/30 ml-2 space-y-10">
                    {jobs.map((job) => (
                        <li key={`${job.org}-${job.role}`} className="pl-8 relative">
                            <span
                                aria-hidden
                                className="absolute -left-[7px] top-8 w-3 h-3 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))]"
                            />
                            <Card className="p-6 md:p-8 bg-card border-border card-glow hover-lift [--lift-scale:1.02]">
                                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1 md:gap-4 mb-1">
                                    <h3 className="text-xl font-bold">{job.role}</h3>
                                    <span className="text-sm text-muted-foreground whitespace-nowrap">{job.dates}</span>
                                </div>
                                <p className="text-primary font-semibold mb-4">
                                    {job.orgUrl ? (
                                        <a
                                            href={job.orgUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="hover:underline underline-offset-4"
                                        >
                                            {job.org}
                                        </a>
                                    ) : (
                                        job.org
                                    )}
                                    {job.context && (
                                        <span className="text-muted-foreground font-normal"> · {job.context}</span>
                                    )}
                                </p>
                                <ul className="list-disc pl-5 space-y-2 text-muted-foreground marker:text-primary">
                                    {job.points.map((point) => (
                                        <li key={point} className="leading-relaxed">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </Card>
                        </li>
                    ))}
                </ol>

                <div className="flex justify-center mt-12">
                    <CVButton
                        size="lg"
                        variant="outline"
                        className="border-primary text-foreground hover:bg-primary/10 font-semibold px-8"
                        label="See full CV"
                    />
                </div>
            </div>
        </section>
    );
};

export default Experience;
