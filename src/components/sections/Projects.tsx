import { Github, ExternalLink } from "lucide-react";

type Project = {
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  url: string;
};

const projects: Project[] = [
  {
    title: "ADS Finance Platform",
    tagline: "Backend Microservices",
    description:
      "Production-grade financial platform with FastAPI microservices, PostgreSQL, JWT/RBAC, observability and CI/CD pipelines for reliable deployments.",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker", "CI/CD"],
    url: "https://github.com/Sarvesh8521",
  },
  {
    title: "LocalGPT",
    tagline: "Private Generative-AI Assistant",
    description:
      "Offline GenAI assistant using LLMs, RAG pipelines, ChromaDB and HuggingFace embeddings for intelligent document Q&A — fully local, no external APIs.",
    stack: ["Python", "RAG", "ChromaDB", "HuggingFace", "FastAPI"],
    url: "https://github.com/Sarvesh8521/LOCAL_GPT",
  },
  {
    title: "AI Resume Tailor Agent",
    tagline: "LLM Agent",
    description:
      "Agent that analyses a job description and tailors a resume automatically — combining LLM reasoning, prompt engineering and structured output.",
    stack: ["Python", "LLM", "Prompt Engineering"],
    url: "https://github.com/Sarvesh8521/AI-Resume-Tailor-Agent",
  },
  {
    title: "Stock Data Intelligence Dashboard",
    tagline: "Data Engineering · Analytics",
    description:
      "Pipeline + dashboard for ingesting and visualising stock-market data with Python, surfacing actionable signals for analysis.",
    stack: ["Python", "Pandas", "Data Viz"],
    url: "https://github.com/Sarvesh8521/Stock-Data-Intelligence-Dashboard",
  },
  {
    title: "Financial Dashboard",
    tagline: "Web Application",
    description:
      "Interactive financial dashboard with clean UI components for tracking and visualising financial KPIs.",
    stack: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/Sarvesh8521/Financial-Dashboard",
  },
  {
    title: "Task Management System",
    tagline: "Backend · REST APIs",
    description:
      "Jira-style workflow system with Django + DRF, RBAC, optimised SQL schema and full task-lifecycle automation.",
    stack: ["Django", "DRF", "PostgreSQL"],
    url: "https://github.com/Sarvesh8521/Task-management",
  },
  {
    title: "Blockchain File Storage",
    tagline: "Decentralised Storage",
    description:
      "Tamper-proof file storage system using blockchain primitives in Python for secure, verifiable file management.",
    stack: ["Python", "Blockchain", "Crypto"],
    url: "https://github.com/Sarvesh8521/Blockchain-based-File-Storage",
  },
  {
    title: "NeetCode Submissions",
    tagline: "DSA Practice",
    description:
      "Curated NeetCode problem solutions focusing on data structures, algorithms and clean Pythonic patterns.",
    stack: ["Python", "DSA"],
    url: "https://github.com/Sarvesh8521/neetcode-submissions-aongit9n",
  },
  {
    title: "Backend Practice Projects",
    tagline: "Sandbox",
    description:
      "Collection of focused backend practice projects exploring patterns, frameworks and architectures.",
    stack: ["Python", "Backend"],
    url: "https://github.com/Sarvesh8521/Projects",
  },
];

export const Projects = () => (
  <section id="projects" className="py-24 px-6">
    <div className="max-w-6xl mx-auto">
      <div className="mb-12">
        <p className="mono text-sm text-muted-foreground mb-2">// projects in backend, AI &amp; data systems</p>
        <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {projects.map((p, i) => (
          <a
            key={p.title}
            href={p.url}
            target="_blank"
            rel="noreferrer"
            className="card-surface p-6 group flex flex-col animate-fade-in-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-lg group-hover:accent-text transition-colors">{p.title}</h3>
              <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:accent-text transition-colors" />
            </div>
            <p className="mono text-xs accent-text mb-3">{p.tagline}</p>
            <p className="text-sm text-foreground/80 leading-relaxed flex-grow">{p.description}</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {p.stack.map((s) => (
                <span key={s} className="mono text-[11px] px-2 py-0.5 rounded border border-border text-muted-foreground">
                  {s}
                </span>
              ))}
            </div>
          </a>
        ))}
      </div>

      <div className="text-center mt-10">
        <a href="https://github.com/Sarvesh8521" target="_blank" rel="noreferrer" className="btn-icon">
          <Github className="h-4 w-4" /> View all on GitHub
        </a>
      </div>
    </div>
  </section>
);
