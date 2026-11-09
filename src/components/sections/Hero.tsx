import { useSiteSettings } from "@/hooks/useSiteSettings";
import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, ArrowDownRight } from "lucide-react";

const RESUME_FALLBACK = "/resume-upload.pdf";

export const Hero = () => {
  const { settings } = useSiteSettings();
  const resumeHref = settings?.resume_url || RESUME_FALLBACK;

  return (
    <section id="home" aria-labelledby="hero-title" className="hero-section min-h-[88vh] flex items-center px-5 pb-16 pt-28 sm:px-8">
      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 md:grid-cols-[minmax(0,1fr)_auto]">
        <div className="max-w-4xl">
          <p className="mono mb-5 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <span className="accent-text">~/portfolio</span><span aria-hidden="true">$</span><span>whoami</span>
          </p>
          <h1 id="hero-title" className="terminal-title text-5xl font-bold leading-[1.08] sm:text-6xl md:text-7xl">
            Sarvesh Singh<span aria-hidden="true" className="terminal-caret">_</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Software Engineer building Python backend services, document intelligence, and production RAG systems.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="min-h-12 font-mono">
              <a href="#projects">View My Work <ArrowDownRight aria-hidden="true" /></a>
            </Button>
            <Button asChild variant="outline" size="lg" className="min-h-12 font-mono">
              <a href={resumeHref} download="Sarvesh_Singh_Resume.pdf"><Download aria-hidden="true" /> Download Resume</a>
            </Button>
          </div>
          <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
            <span className="mono inline-flex items-center gap-2 text-xs text-muted-foreground">
              <span aria-hidden="true" className="h-2 w-2 rounded-full bg-primary animate-pulse" /> AVAILABLE FOR HIRE
            </span>
            <a className="mono inline-flex min-h-10 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary" href="https://github.com/Sarvesh8521" target="_blank" rel="noreferrer">
              <Github aria-hidden="true" className="h-4 w-4" /> GitHub
            </a>
            <a className="mono inline-flex min-h-10 items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary" href="https://www.linkedin.com/in/sarvesh-singh-964510173/" target="_blank" rel="noreferrer">
              <Linkedin aria-hidden="true" className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
        <div className="hidden md:block" aria-hidden="true">
          <div className="terminal-window w-64">
            <div className="terminal-window-bar"><span /><span /><span /><span className="mono ml-auto text-xs text-muted-foreground">python</span></div>
            {settings?.profile_image_url && <img src={settings.profile_image_url} alt="Sarvesh Singh" loading="lazy" className="h-52 w-full object-cover" />}
            <pre className="mono overflow-hidden p-5 text-sm leading-7 text-muted-foreground"><code><span className="accent-text">class</span> BackendEngineer:{"\n"}  focus = ["reliability",{"\n"}    "observability", "delivery"]{"\n"}{"\n"}<span className="accent-text">print</span>("ship with care")</code></pre>
          </div>
        </div>
      </div>
    </section>
  );
};
