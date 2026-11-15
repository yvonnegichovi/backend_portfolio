import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import image from "@/assets/image.png";
import { CVButton } from "@/components/CVModal";

const stack = ["Python", "Django", "FastAPI", "React", "Next.js", "TypeScript", "Celery", "PostgreSQL", "Docker", "Azure & AWS"];

const Hero = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }; 

    return (
        <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        <div
            className='absolute inset-0 bg-cover bg-center opacity-20'
            style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="animate-fade-in">
          <span className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-primary/40 bg-primary/10 text-sm text-foreground">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" aria-hidden />
            Open to collaborations &amp; team roles
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-gradient glow-text">
            Full-Stack Software Engineer
          </h1>
          <p className="text-xl md:text-4xl text-muted-foreground mb-6 max-w-2xl mx-auto font-heavy">
            Yvonne Gichovi
          </p>
          <p className="text-lg md:text-2xl text-muted-foreground mb-6 max-w-3xl mx-auto font-light">
            I take products from MVP to production: polished React and Next.js
            frontends on top of reliable Python backends.
          </p>
          <p className="text-sm md:text-base text-muted-foreground/80 mb-10 max-w-3xl mx-auto">
            {stack.join(" · ")}
          </p>

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
            <CVButton
              size="lg"
              variant="outline"
              className="border-primary text-foreground hover:bg-primary/10 font-semibold px-8"
            />
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
              aria-label="LinkedIn"
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