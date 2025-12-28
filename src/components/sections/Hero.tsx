import { Github, Linkedin, Mail, Download, ChevronDown, Terminal as TerminalIcon } from "lucide-react";
import { AnimatedText, GlitchText } from "../ui/AnimatedText";
import { Terminal, CodeLine } from "../ui/Terminal";
import { Button } from "../ui/button";

export const Hero = () => {
  const roles = ["Backend Developer", "API Architect", "Python Engineer", "Problem Solver"];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative px-4 pt-20"
    >
      <div className="container max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left space-y-6">
            <div className="opacity-0 animate-fade-in-up">
              <span className="inline-flex items-center gap-2 px-4 py-2 glass rounded text-xs font-mono text-primary border border-primary/30">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span>STATUS: AVAILABLE_FOR_HIRE</span>
              </span>
            </div>

            <h1 className="opacity-0 animate-fade-in-up delay-100 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
              <span className="text-muted-foreground font-mono text-lg block mb-2">
                {"// Hello, World!"}
              </span>
              <GlitchText className="neon-text">SARVESH</GlitchText>{" "}
              <span className="gradient-text">SINGH</span>
            </h1>

            <div className="opacity-0 animate-fade-in-up delay-200 text-lg md:text-xl font-mono h-8">
              <AnimatedText texts={roles} />
            </div>

            <p className="opacity-0 animate-fade-in-up delay-300 text-muted-foreground text-sm md:text-base max-w-xl mx-auto lg:mx-0 leading-relaxed font-mono">
              <span className="text-primary">{"{"}</span> Python backend developer specializing in 
              <span className="text-primary"> Django</span>, 
              <span className="text-accent"> FastAPI</span>, and 
              <span className="text-[hsl(var(--cyber-blue))]"> REST APIs</span>. 
              Building scalable solutions for fintech & enterprise systems.
              <span className="text-primary"> {"}"}</span>
            </p>

            {/* CTA Buttons */}
            <div className="opacity-0 animate-fade-in-up delay-400 flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 animate-pulse-glow font-mono uppercase tracking-wider"
                onClick={() => scrollToSection("contact")}
              >
                <TerminalIcon className="mr-2 h-4 w-4" />
                Initialize Contact
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary font-mono uppercase tracking-wider"
                asChild
              >
                <a href="/Sarvesh_Singh_Resume.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download.cv
                </a>
              </Button>
            </div>

            {/* Social Links */}
            <div className="opacity-0 animate-fade-in-up delay-500 flex gap-3 justify-center lg:justify-start pt-4">
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/sarvesh-singh-964510173/", label: "LinkedIn" },
                { icon: Github, href: "https://github.com/Sarvesh8521", label: "GitHub" },
                { icon: Mail, href: "mailto:sarvesh8521@gmail.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="glass p-3 rounded border border-primary/20 hover:border-primary/60 hover:scale-110 transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Terminal Visual */}
          <div className="flex-1 w-full max-w-lg opacity-0 animate-scale-in delay-300">
            <Terminal title="sarvesh@portfolio:~" className="w-full">
              <CodeLine prompt="$" command="whoami" />
              <div className="text-primary mb-3">Sarvesh Singh</div>
              
              <CodeLine prompt="$" command="cat skills.json" />
              <div className="text-muted-foreground mb-3 pl-4">
                <span className="text-accent">{"{"}</span>
                <br />
                <span className="pl-4">"languages": [<span className="text-[hsl(var(--cyber-blue))]">"Python"</span>],</span>
                <br />
                <span className="pl-4">"frameworks": [<span className="text-primary">"Django"</span>, <span className="text-primary">"FastAPI"</span>],</span>
                <br />
                <span className="pl-4">"databases": [<span className="text-[hsl(var(--cyber-pink))]">"PostgreSQL"</span>, <span className="text-[hsl(var(--cyber-pink))]">"MongoDB"</span>]</span>
                <br />
                <span className="text-accent">{"}"}</span>
              </div>
              
              <CodeLine prompt="$" command="./run_career.sh" />
              <div className="text-primary animate-pulse">
                ▶ Seeking new opportunities...
              </div>
            </Terminal>

            {/* Floating tech badges */}
            <div className="hidden lg:block">
              <div className="absolute -top-4 right-0 glass px-3 py-1.5 rounded text-xs font-mono text-primary border border-primary/30 floating">
                Python 3.x
              </div>
              <div className="absolute top-1/3 -right-8 glass px-3 py-1.5 rounded text-xs font-mono text-accent border border-accent/30 floating-delayed">
                Django/DRF
              </div>
              <div className="absolute bottom-1/4 -right-4 glass px-3 py-1.5 rounded text-xs font-mono text-[hsl(var(--cyber-blue))] border-[hsl(var(--cyber-blue))]/30 border floating-slow">
                FastAPI ⚡
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up delay-700">
          <button
            onClick={() => scrollToSection("about")}
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-mono text-xs"
          >
            <span>scroll_down()</span>
            <ChevronDown className="h-4 w-4 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
