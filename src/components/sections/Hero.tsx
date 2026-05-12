import { Github, Linkedin, Mail, FileText, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useSiteSettings } from "@/hooks/useSiteSettings";
import { useToast } from "@/hooks/use-toast";

const EMAIL = "sarvesh8521@gmail.com";

export const Hero = () => {
  const { settings } = useSiteSettings();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    toast({ title: "Email copied", description: EMAIL });
    setTimeout(() => setCopied(false), 1800);
  };

  const profileSrc = settings?.profile_image_url || "/placeholder.svg";
  const resumeHref = settings?.resume_url || "/Sarvesh_Singh_Resume.pdf";

  return (
    <section id="about" className="min-h-screen flex items-center pt-28 pb-16 px-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid md:grid-cols-[1fr_auto] gap-10 md:gap-16 items-center">
          <div className="space-y-6">
            <div className="term-chip animate-fade-in-up">
              <span className="prompt">›_</span>
              <span>~/portfolio</span>
              <span className="text-foreground/70">$</span>
              <span className="text-foreground">whoami</span>
              <span className="cursor" />
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight animate-fade-in-up delay-100">
              Sarvesh <span className="accent-text">Singh</span>
            </h1>

            <p className="mono text-sm md:text-base text-muted-foreground animate-fade-in-up delay-200">
              Python • Backend • FastAPI / Django • AI &amp; LLM Systems
            </p>

            <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed animate-fade-in-up delay-300">
              {settings?.bio ||
                "Hello! I'm Sarvesh — a Python backend developer building scalable APIs, AI-powered systems, and production-grade microservices. Currently a Python Developer Intern at Auburn Digital Solutions, where I work on FastAPI services, CI/CD, and secure backend architecture. I love clean systems, good observability, and shipping things that actually work."}
            </p>

            <div className="flex flex-wrap gap-3 pt-2 animate-fade-in-up delay-400">
              <a className="btn-primary" href="https://github.com/Sarvesh8521" target="_blank" rel="noreferrer">
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a className="btn-icon" href="https://www.linkedin.com/in/sarvesh-singh-964510173/" target="_blank" rel="noreferrer">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <button className="btn-icon" onClick={copyEmail}>
                {copied ? <Check className="h-4 w-4 accent-text" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy Email"}
              </button>
              <a className="btn-icon" href={resumeHref} target="_blank" rel="noreferrer">
                <FileText className="h-4 w-4" /> Resume
              </a>
              <a className="btn-icon" href={`mailto:${EMAIL}`}>
                <Mail className="h-4 w-4" /> Contact
              </a>
            </div>
          </div>

          <div className="justify-self-center md:justify-self-end animate-fade-in delay-300">
            <div className="relative w-56 h-56 md:w-64 md:h-64 rounded-2xl overflow-hidden border border-border floating">
              <img
                src={profileSrc}
                alt="Sarvesh Singh"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 ring-1 ring-primary/20 rounded-2xl pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
