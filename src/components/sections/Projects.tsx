import { GlassCard, TechTag } from "../ui/GlassCard";
import { ExternalLink, Github, Server, Bot, Database, FolderGit2 } from "lucide-react";
import { Button } from "../ui/button";

export const Projects = () => {
  const projects = [
    {
      title: "Task Management System",
      description:
        "Scalable Jira-like task tracking with RESTful APIs. Full CRUD, auth, and project management.",
      icon: Server,
      tags: ["Django", "DRF", "PostgreSQL", "REST"],
      gradient: "from-primary/20 to-transparent",
      status: "DEPLOYED",
    },
    {
      title: "Local-GPT",
      description:
        "Privacy-first local chatbot with offline LLM inference. No external API calls required.",
      icon: Bot,
      tags: ["Python", "LLM", "Privacy", "AI"],
      gradient: "from-accent/20 to-transparent",
      status: "ACTIVE",
    },
    {
      title: "Blockchain File Storage",
      description:
        "Decentralized storage using blockchain for secure, tamper-proof file management.",
      icon: Database,
      tags: ["Blockchain", "Python", "Crypto"],
      gradient: "from-[hsl(var(--cyber-blue))]/20 to-transparent",
      status: "COMPLETED",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-primary font-mono text-sm mb-4">
            <FolderGit2 className="h-4 w-4" />
            <span>{"// featured_projects"}</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto font-mono text-sm">
            {"/* Backend projects showcasing API design & system architecture */"}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <GlassCard
              key={project.title}
              className={`group relative overflow-hidden opacity-0 animate-fade-in-up flex flex-col`}
              style={{ animationDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Status badge */}
              <div className="absolute top-4 right-4">
                <span className={`px-2 py-1 text-[10px] font-mono rounded ${
                  project.status === "ACTIVE" 
                    ? "bg-primary/20 text-primary border border-primary/30" 
                    : project.status === "DEPLOYED"
                    ? "bg-accent/20 text-accent border border-accent/30"
                    : "bg-muted text-muted-foreground border border-border"
                }`}>
                  {project.status}
                </span>
              </div>

              {/* Gradient overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              {/* Scanline effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent animate-pulse" />
              </div>

              {/* Content */}
              <div className="relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className="w-12 h-12 rounded border border-primary/30 flex items-center justify-center mb-4 group-hover:border-primary/60 group-hover:shadow-[0_0_20px_hsl(var(--primary)/0.3)] transition-all duration-300">
                  <project.icon className="h-6 w-6 text-primary" />
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold font-mono mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-xs leading-relaxed mb-4 flex-grow font-mono">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <TechTag key={tag}>{tag}</TechTag>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <Button
                    size="sm"
                    variant="outline"
                    className="flex-1 border-primary/30 hover:bg-primary/10 hover:border-primary font-mono text-xs"
                    asChild
                  >
                    <a
                      href="https://github.com/Sarvesh8521"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-3 w-3 mr-2" />
                      SOURCE
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-xs"
                    asChild
                  >
                    <a
                      href="https://github.com/Sarvesh8521"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="h-3 w-3 mr-2" />
                      DEMO
                    </a>
                  </Button>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12 opacity-0 animate-fade-in-up delay-500">
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10 hover:border-primary font-mono"
            asChild
          >
            <a
              href="https://github.com/Sarvesh8521"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5 mr-2" />
              git clone all_projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
