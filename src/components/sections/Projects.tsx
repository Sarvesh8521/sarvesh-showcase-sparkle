import { ArrowUpRight, Github, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

type FeaturedProject = {
  title: string;
  problem: string;
  stack: string[];
  metric: string;
  metricContext: string;
  url: string;
  visual: string;
};

const projects: FeaturedProject[] = [
  {
    title: "LocalGPT",
    problem: "Document Q&A that keeps prompts and files on the user's own machine.",
    stack: ["Python", "RAG", "ChromaDB", "HuggingFace", "FastAPI"],
    metric: "Metric pending",
    metricContext: "Verified outcome not supplied",
    url: "https://github.com/Sarvesh8521/LOCAL_GPT",
    visual: "LOCAL DOCUMENT Q&A",
  },
  {
    title: "AI Resume Tailor Agent",
    problem: "Turns a job description into a structured, role-specific resume draft.",
    stack: ["Python", "LLM", "Prompt Engineering"],
    metric: "Metric pending",
    metricContext: "Verified outcome not supplied",
    url: "https://github.com/Sarvesh8521/AI-Resume-Tailor-Agent",
    visual: "JOB DESCRIPTION → RESUME",
  },
  {
    title: "Stock Data Intelligence Dashboard",
    problem: "Ingests and visualizes market data for more accessible analysis.",
    stack: ["Python", "Pandas", "Data Visualization"],
    metric: "Metric pending",
    metricContext: "Verified outcome not supplied",
    url: "https://github.com/Sarvesh8521/Stock-Data-Intelligence-Dashboard",
    visual: "MARKET DATA PIPELINE",
  },
];

export const Projects = () => (
  <section id="projects" aria-labelledby="projects-title" className="section-band px-5 py-20 sm:px-8">
    <div className="mx-auto max-w-6xl">
      <div className="section-intro mb-10">
        <p className="section-prefix">&gt; PROJECTS</p>
        <h2 id="projects-title" className="section-title">Featured work</h2>
        <p className="mt-3 max-w-2xl text-muted-foreground">Selected backend and AI projects, with the code behind each one.</p>
      </div>
      <div className="grid gap-4 lg:grid-cols-3">
        {projects.map((project, index) => (
          <article key={project.title} className={`project-card card-surface flex min-w-0 flex-col p-5 animate-fade-in-up project-card-${index + 1}`}>
            <div className="project-visual" aria-label={`${project.visual} placeholder; project image not provided`}>
              <span className="mono project-visual-label"><ImageIcon aria-hidden="true" className="h-4 w-4" /> PROJECT SNAPSHOT</span>
              <span className="project-visual-diagram mono" aria-hidden="true">{project.visual}</span>
              <span className="mono project-visual-note">IMAGE PENDING</span>
            </div>
            <div className="flex flex-1 flex-col pt-5">
              <p className="mono mb-2 text-xs text-muted-foreground">0{index + 1} / FEATURED PROJECT</p>
              <h3 className="text-xl font-semibold leading-snug">{project.title}</h3>
              <p className="mt-2 min-h-[3.25rem] text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
              <div className="mt-5 border-l-2 border-primary pl-3">
                <p className="mono text-xl font-semibold text-primary">{project.metric}</p>
                <p className="mono mt-1 text-[11px] text-muted-foreground">{project.metricContext}</p>
              </div>
              <div className="mt-5 flex flex-wrap gap-2" aria-label="Technology stack">
                {project.stack.map((tag) => <span key={tag} className="tech-chip">{tag}</span>)}
              </div>
              <div className="mt-auto flex flex-wrap items-center gap-2 pt-6">
                <span className="mono inline-flex min-h-10 items-center gap-2 px-3 text-xs text-muted-foreground" aria-disabled="true">Live Demo <span aria-hidden="true">·</span> not provided</span>
                <Button asChild variant="outline" size="sm" className="ml-auto min-h-10 font-mono">
                  <a href={project.url} target="_blank" rel="noreferrer"><Github aria-hidden="true" /> GitHub <ArrowUpRight aria-hidden="true" /></a>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a className="mono inline-flex min-h-11 items-center gap-2 text-sm text-primary underline-offset-4 hover:underline" href="https://github.com/Sarvesh8521" target="_blank" rel="noreferrer">Explore all repositories <ArrowUpRight aria-hidden="true" className="h-4 w-4" /></a>
      </div>
    </div>
  </section>
);
