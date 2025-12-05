import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";


const Projects = () => {
    const projects = [
        {
            title: "Content Management System",
            description:
                "A web application for managing digital content, allowing users to create, edit, and organize content efficiently.",
            tech: ["Python", "Django", "PostgreSQL"],
            github: "https://github.com/yvonnegichovi/cms_api",
            demo:"#"
        },
        {
            title: "E-commerce Platform",
            description:
                "A scalable e-commerce platform with features like product listings, shopping cart, and payment integration.",
            tech: ["Node.js", "Express", "MongoDB"],
            github: "https://github.com/yvonnegichovi/e-commerce-project",
            demo:"#"
        },
        {
            title: "Ride-Hailing Backend",
            description:
                "A backend system for a ride-hailing service, handling ride requests, driver assignments, and real-time tracking and payments.",
            tech: ["Node.js", "PostgreSQL", "Redis"],
            github: "https://github.com/yvonnegichovi/ride-hailing-project",
            demo:"#"
        },
        {
            title: "Analytics Dashboard",
            description:
                "A dashboard application that visualizes data analytics and provides insights through interactive charts and graphs.",
            tech: ["Django", "PostgreSQL", "Celery", "Redis"],
            github: "https://github.com/yvonnegichovi/analytics-dashboard",
            demo:"#"
        },
        {
            title: "Chat System",
            description:
                "A real-time chat application with features like private messaging, group chats, and message history.",
            tech: ["Node.js", "Socket.io", "MongoDB"],
            github: "https://github.com/yvonnegichovi/chat-system-project",
            demo:"#"
        },
        {
            title: "Recommendation API",
            description:
                "An API that provides personalized recommendations based on user behavior and preferences.",
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
