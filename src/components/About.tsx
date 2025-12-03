import { Card } from "@/components/ui/card";
import { Code2, Rocket, Users } from "lucide-react";

const About = () => {
    const highlights = [
        {
            icon: Code2,
            title: "Clean Code",
            description: "I write clean, maintainable code following best practices and design patterns."
        },
        {
            icon: Rocket,
            title: "Fast Learner",
            description: "I quickly adapt to new technologies and frameworks to stay ahead in the industry."
        },
        {
            icon: Users,
            title: "Team Player",
            description: "I collaborate effectively with cross-functional teams to deliver high-quality software."
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
              reality through clean, efficient code.
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