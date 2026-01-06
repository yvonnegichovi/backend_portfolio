import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
    const highlights = [
        {
            icon: Code2,
            title: "Production-ready Code",
            description: "I build scalable, maintainable systems using proven patterns—so your product is easy to extend, debug, and grow."
        },
        {
            icon: Rocket,
            title: "Fast Executioner",
            description: "I turn ideas into working features quickly, helping startups and teams ship MVPs without unnecessary delays."
        },
        {
            icon: Users,
            title: "Clear Collaboration",
            description: "I communicate clearly, ask the right questions early, and take ownership—so projects move forward smoothly."
        },
        {
            icon: Rocket,
            title: "From Idea to MVP",
            description:
                "I help founders turn ideas into working products with Django, Flask, FastAPI, and React, and PostgreSQL built to launch and iterate fast."
        },
    ];

    return (
        <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              I’m a full-stack developer specializing in building MVPs and scalable web applications
              using Django, FastAPI, React, and PostgreSQL. I help startups and growing businesses
              turn ideas into reliable products that are ready to launch and iterate.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a co-founder of a tech startup,{" "}
              <a
                href="https://suiviparcel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground font-medium underline underline-offset-4 hover:text-primary transition-colors"
              >
                SuiviParcel
              </a>
              , I’ve worked hands-on with real-world systems—designing APIs, managing databases,
              and shipping features under real business constraints. I focus on clean architecture,
              clear communication, and delivering solutions that last beyond the first release.
            </p>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover-glow card-glow"
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
      </div>
    </section>
    );
};

export default About;