import { Button } from '@/components/ui/button';
import { Card } from "@/components/ui/card";
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import image from "@/assets/image.png";

const Hero = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    const highlights = [
        {
            title: "Programming",
        },
        {
            title: "DSA",
        },
        {
            title: "Version Control",
        },
        {
            title: "Testing & Debugging",
        },
        {
            title: "Agile Methodologies",
        },
        {
            title: "Problem Solving",
        },
        {
            title: "Software Security",
        },
        {
            title: "System Design",
        }
    ];  

    return (
        <section
        id="hero"
        className="relative min-h screen flex items-center justify-center overflow-hidden"
      >
        <div
            className='absolute inset-0 bg-cover bg-center opacity-20'
            style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-gradient glow-text">
            Software Engineer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto font-light">
            Every system engineered to perfection, one line of code at a time
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12 max-w-3xl mx-auto">
            {highlights.map((item, index) => (
              <Card
                key={index}
                className="p-6 bg-card border-border hover-glow card-glow"
              >
                <div className="text-center">
                  <h3 className="font-semibold text-[14px]">{item.title}</h3>
                </div>
              </Card>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-12 animate-fade-in-delay">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 hover-glow"
              onClick={() => scrollToSection("projects")}
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-foreground hover:bg-primary/10 font-semibold px-8"
              onClick={() => scrollToSection("contact")}
            >
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 justify-center animate-fade-in-delay">
            <a
              href="https://github.com/yvonnegichovi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/yvonne-gichovi-2b0753223/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:yvonnegichovi@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors animate-bounce"
      >
        <ArrowDown className="w-8 h-8" />
      </button>
    </section>
  );
};

export default Hero;