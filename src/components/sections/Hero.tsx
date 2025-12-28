import { Github, Linkedin, Mail, Download, ChevronDown } from "lucide-react";
import { AnimatedText } from "../ui/AnimatedText";
import { Button } from "../ui/button";

export const Hero = () => {
  const roles = ["Python Developer", "Backend Engineer", "API Specialist", "Problem Solver"];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 pt-20"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="opacity-0 animate-fade-in-up">
              <span className="inline-block px-4 py-2 glass rounded-full text-sm text-primary font-medium mb-4">
                👋 Open to Opportunities
              </span>
            </div>

            <h1 className="opacity-0 animate-fade-in-up delay-100 text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-tight">
              Hi, I'm{" "}
              <span className="gradient-text">Sarvesh Singh</span>
            </h1>

            <div className="opacity-0 animate-fade-in-up delay-200 text-xl md:text-2xl lg:text-3xl font-display font-medium h-12">
              <AnimatedText texts={roles} />
            </div>

            <p className="opacity-0 animate-fade-in-up delay-300 text-muted-foreground text-base md:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Python Backend Developer with hands-on experience in fintech and business
              workflow systems. Passionate about building scalable APIs and elegant
              solutions.
            </p>

            {/* CTA Buttons */}
            <div className="opacity-0 animate-fade-in-up delay-400 flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary animate-pulse-glow font-semibold px-8"
                onClick={() => scrollToSection("contact")}
              >
                <Mail className="mr-2 h-5 w-5" />
                Get in Touch
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary"
                asChild
              >
                <a href="/Sarvesh_Singh_Resume.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-in-up delay-500 flex gap-4 justify-center lg:justify-start pt-4">
              <a
                href="https://www.linkedin.com/in/sarvesh-singh-964510173/"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-xl hover:scale-110 hover:border-primary/50 transition-all duration-300 group"
              >
                <Linkedin className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/Sarvesh8521"
                target="_blank"
                rel="noopener noreferrer"
                className="glass p-3 rounded-xl hover:scale-110 hover:border-primary/50 transition-all duration-300 group"
              >
                <Github className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="mailto:sarvesh8521@gmail.com"
                className="glass p-3 rounded-xl hover:scale-110 hover:border-primary/50 transition-all duration-300 group"
              >
                <Mail className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Visual Element */}
          <div className="flex-1 flex justify-center opacity-0 animate-scale-in delay-300">
            <div className="relative">
              {/* Outer ring */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full border border-accent/30 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "15s" }} />
              
              {/* Main avatar container */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full glass-strong flex items-center justify-center glow-primary">
                <div className="text-8xl md:text-9xl">👨‍💻</div>
              </div>
              
              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 glass px-4 py-2 rounded-full floating text-sm font-medium">
                <span className="text-primary">●</span> Available
              </div>
              <div className="absolute -bottom-2 -left-6 glass px-4 py-2 rounded-full floating-delayed text-sm font-medium">
                🐍 Python
              </div>
              <div className="absolute top-1/2 -right-8 glass px-4 py-2 rounded-full floating-slow text-sm font-medium">
                ⚡ FastAPI
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up delay-700">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-sm">Scroll Down</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
