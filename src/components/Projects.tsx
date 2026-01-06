import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";


const Projects = () => {
    const projects = [
        {
            title: "Content Management System",
            description:
                "A backend-driven CMS that enables teams to create, manage, and organize digital content efficiently, with a focus on clean APIs, role-based access, and scalability.",
            tech: ["Python", "Django", "PostgreSQL"],
            github: "https://github.com/yvonnegichovi/cms_api",
            demo:"#"
        },
        {
            title: "E-commerce Platform",
            description:
                "A scalable e-commerce backend supporting product management, cart workflows, and payment processing, designed to handle growing catalogs and user traffic.",
            tech: ["Node.js", "Express", "MongoDB"],
            github: "https://github.com/yvonnegichovi/e-commerce-project",
            demo:"#"
        },
        {
            title: "Ride-Hailing Backend",
            description:
                "A high-performance backend system for a ride-hailing service, handling ride matching, driver assignment, real-time updates, and payment flows.",
            tech: ["Node.js", "PostgreSQL", "Redis"],
            github: "https://github.com/yvonnegichovi/ride-hailing-project",
            demo:"#"
        },
        {
            title: "Analytics Dashboard",
            description:
                "A data analytics platform that processes background jobs and visualizes key metrics through interactive dashboards for faster, data-driven decisions.",
            tech: ["Django", "PostgreSQL", "Celery", "Redis"],
            github: "https://github.com/yvonnegichovi/analytics-dashboard",
            demo:"#"
        },
        {
            title: "Chat System",
            description:
                "A real-time messaging system supporting private and group chats with persistent message history and low-latency communication.",
            tech: ["Node.js", "Socket.io", "MongoDB"],
            github: "https://github.com/yvonnegichovi/chat-system-project",
            demo:"#"
        },
        {
            title: "Recommendation API",
            description:
                "A RESTful API that delivers personalized recommendations based on user behavior, designed for easy integration into existing products.",
            tech: ["Python", "FastAPI", "PostgreSQL"],
            github: "#",
            demo:"#"
        },
    ];

    return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 bg-card border-border hover-glow card-glow group"
            >
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-primary/50 hover:bg-primary/10"
                  asChild
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90"
                  asChild
                >
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </a>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
