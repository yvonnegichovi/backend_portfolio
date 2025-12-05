import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3"],
    },
    {
      category: "Backend",
      skills: ["Node.js", "Python", "PostgreSQL", "MySQL", "MongoDB", "REST APIs"],
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Linux"],
    },
    {
      category: "Other",
      skills: ["Agile", "System Design", "Testing", "Performance Optimization"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-8 rounded-xl bg-card border border-border card-glow"
            >
              <h3 className="text-2xl font-semibold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
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
      </div>
    </section>
  );
};

export default Skills;