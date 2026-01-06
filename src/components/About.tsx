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
              Passionate software engineer with expertise in building scalable web applications 
              and solving complex technical challenges. I thrive on turning innovative ideas into 
              reality through clean, efficient code. Comes with a strong background in full-stack 
              development, database management, and cloud technologies, skills acquired as a co-founder 
              of a tech startup called SuiviParcel
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in modern development practices and a commitment to 
              continuous learning, I deliver high-quality solutions that make a difference.
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